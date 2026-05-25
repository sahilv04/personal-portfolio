#!/usr/bin/env python3
"""ATS Resume Scoring Engine (v2).

Analyzes a .docx resume against the parameters real Applicant Tracking
Systems (Workday, Taleo, iCIMS, Greenhouse, Lever, SuccessFactors) and the
recruiters behind them care about, then prints a weighted score out of 100
with category breakdowns and prioritized, actionable fixes.

Weighting mirrors documented industry norms:
    Keywords    ~35%   |   Formatting ~30%   |   Sections ~22%   |   rest

Design goals informed by leading open-source checkers (sunnypatell/ats-screener,
srbhr/Resume-Matcher, Jobscan's public methodology):
  - keyword coverage AND density (with a stuffing penalty),
  - job-title match (highest-signal keyword),
  - synonym / abbreviation / stemming-aware matching (React == React.js),
  - parse-hazard detection (non-ASCII, tabs, columns, exotic bullets),
  - section presence + order + degree detection,
  - bullet readability and quantified achievements.

Dependency-free (python-docx only) so it runs anywhere.

Usage:
    python3 resume/ats_check.py [resume.docx] [--jd job.txt] [--json]
"""

import json
import os
import re
import sys
from collections import Counter

from docx import Document
from docx.oxml.ns import qn

DEFAULT_RESUME = os.path.join(os.path.dirname(__file__), "Sahil_Verma_Resume.docx")

# ---- Reference vocabularies ---------------------------------------------

STANDARD_SECTIONS = {
    "summary": ["summary", "professional summary", "profile", "objective", "about"],
    "experience": ["experience", "work experience", "employment", "work history",
                   "professional experience", "career history"],
    "education": ["education", "academic", "academics"],
    "skills": ["skills", "technical skills", "core competencies", "competencies",
               "technologies"],
    "certifications": ["certification", "certifications", "licenses", "credentials"],
}
# Recruiters/ATS scan top→bottom; this is the conventional, parser-friendly order.
PREFERRED_ORDER = ["summary", "skills", "experience", "education", "certifications"]

DEGREE_TERMS = [
    "b.tech", "btech", "b.e", "b.sc", "bsc", "bachelor", "b.a", "ba",
    "m.tech", "mtech", "m.sc", "msc", "master", "mba", "m.a", "ph.d", "phd",
    "diploma", "associate degree",
]

ACTION_VERBS = {
    "led", "built", "designed", "developed", "delivered", "owned", "drove",
    "architected", "shipped", "managed", "created", "implemented", "launched",
    "maintained", "improved", "reduced", "increased", "optimized", "scaled",
    "automated", "migrated", "mentored", "conducted", "ran", "set", "established",
    "spearheaded", "engineered", "deployed", "streamlined", "coordinated",
    "directed", "founded", "headed", "oversaw", "produced", "achieved",
}

COMMON_TECH_KEYWORDS = {
    "react", "angular", "vue", "typescript", "javascript", "node", "express",
    "next.js", "python", "java", "go", "rust", "aws", "azure", "gcp", "docker",
    "kubernetes", "ci/cd", "jenkins", "postgresql", "mongodb", "sql", "mysql",
    "redis", "graphql", "rest", "microservices", "redux", "html", "css", "sass",
    "git", "jest", "cypress", "agile", "scrum", "api", "terraform", "linux",
}

# Normalization so "React.js"/"reactjs"/"react" all collapse to one token, and
# common abbreviations match their expansions (mirrors ATS stemming/taxonomy).
SYNONYMS = {
    "reactjs": "react", "react.js": "react",
    "nodejs": "node", "node.js": "node",
    "nextjs": "next.js", "next": "next.js",
    "js": "javascript", "ts": "typescript",
    "k8s": "kubernetes", "postgres": "postgresql", "psql": "postgresql",
    "ci": "ci/cd", "cd": "ci/cd", "cicd": "ci/cd",
    "apis": "api", "restful": "rest", "rest apis": "rest",
    "ml": "machine learning", "ai": "artificial intelligence",
    "pm": "project management", "ui": "user interface", "ux": "user experience",
}

WEAK_PHRASES = [
    "responsible for", "duties included", "team player", "hard worker",
    "go-getter", "results-driven", "results driven", "detail-oriented",
    "detail oriented", "synergy", "think outside", "self-starter", "go getter",
    "hardworking", "fast learner", "people person",
]

# Tiny common-typo guard (full spellcheck needs a dictionary dep we avoid).
COMMON_TYPOS = {
    "managment": "management", "developement": "development",
    "experiance": "experience", "responsibilites": "responsibilities",
    "acheived": "achieved", "successfull": "successful", "enviroment": "environment",
    "javascrip": "javascript", "recieve": "receive", "seperate": "separate",
}

EMAIL_RE = re.compile(r"[\w.+-]+@[\w-]+\.[\w.-]+")
PHONE_RE = re.compile(r"(\+?\d[\d\s().-]{7,}\d)")
URL_RE = re.compile(r"(https?://|www\.|linkedin\.com|github\.com)", re.I)
NUMBER_RE = re.compile(
    r"(\d+%|\$\s?\d|\b\d{2,}\b|\b\d+\+|\b\d+x\b|\b\d+ ?(years|engineers|members|users|team|people))",
    re.I,
)
DATE_RE = re.compile(
    r"\b(0[1-9]|1[0-2])/(19|20)\d{2}\b|\b(19|20)\d{2}\s*[-–]\s*((19|20)\d{2}|present)",
    re.I,
)
WORD_RE = re.compile(r"[a-zA-Z][a-zA-Z+.#/]{1,}")


class Check:
    def __init__(self, name, weight):
        self.name = name
        self.weight = weight
        self.score = 0.0
        self.notes = []

    @property
    def pct(self):
        return 0 if self.weight == 0 else round(100 * self.score / self.weight)

    def to_dict(self):
        return {"name": self.name, "score": round(self.score, 1),
                "weight": self.weight, "pct": self.pct, "notes": self.notes}


# ---- Document loading ----------------------------------------------------

def load_doc(path):
    doc = Document(path)
    paras = list(doc.paragraphs)
    texts = [p.text for p in paras if p.text.strip()]
    full = "\n".join(texts)
    return doc, paras, texts, full


def count_tables(doc):
    return len(doc.tables)


def count_images(doc):
    return len(doc.element.findall(".//" + qn("a:blip")))


def count_textboxes(doc):
    return len(doc.element.findall(".//" + qn("w:txbxContent")))


def count_columns(doc):
    n = 0
    for sec in doc.sections:
        cols = sec._sectPr.find(qn("w:cols"))
        if cols is not None:
            try:
                n = max(n, int(cols.get(qn("w:num")) or 1))
            except (TypeError, ValueError):
                pass
    return n


def has_header_footer_content(doc):
    found = []
    for s in doc.sections:
        for part, label in ((s.header, "header"), (s.footer, "footer")):
            txt = "\n".join(p.text for p in part.paragraphs).strip()
            if txt:
                found.append((label, txt))
    return found


def fonts_used(doc):
    fonts = set()
    for p in doc.paragraphs:
        for r in p.runs:
            if r.font.name:
                fonts.add(r.font.name)
    return fonts


def extract_bullets(paras):
    out = []
    for p in paras:
        txt = p.text.strip()
        if not txt:
            continue
        style = (p.style.name or "").lower() if p.style else ""
        is_list = "list" in style or "bullet" in style
        glyph = txt[0] in "•-*▪◦‣–"
        if (is_list or glyph) and len(txt.split()) >= 3:
            out.append(txt.lstrip("•-*▪◦‣– ").strip())
    return out


# ---- Keyword normalization ----------------------------------------------

def normalize_tokens(text):
    """Lowercase, expand synonyms/abbreviations, light stemming."""
    toks = WORD_RE.findall(text.lower())
    out = []
    for t in toks:
        t = t.strip(".")          # keep next.js / ci-cd, drop sentence-end dots
        if not t:
            continue
        t = SYNONYMS.get(t, t)
        # light stemming: drop trailing plural 's' (apis->api), keep tech dots
        if len(t) > 4 and t.endswith("s") and "." not in t and "/" not in t:
            t = t[:-1]
        out.append(t)
    return out


# ---- Individual checks ---------------------------------------------------

def check_parseability(doc, full):
    c = Check("File parseability & format", 8)
    if full.strip():
        c.score += 5
        c.notes.append("✓ Text layer is selectable/extractable (not a scanned image).")
    else:
        c.notes.append("✗ No extractable text — ATS will read nothing.")
    wc = len(full.split())
    if 250 <= wc <= 850:
        c.score += 3
        c.notes.append(f"✓ Word count {wc} is in the healthy 250–850 range.")
    elif wc < 250:
        c.score += 1
        c.notes.append(f"△ Word count {wc} is thin; add more substance.")
    else:
        c.score += 1.5
        c.notes.append(f"△ Word count {wc} is long; tighten toward one page.")
    return c


def check_layout_safety(doc):
    c = Check("ATS-safe layout (tables/images/text-boxes/columns)", 12)
    t, i, b, cols = count_tables(doc), count_images(doc), count_textboxes(doc), count_columns(doc)
    if t == 0:
        c.score += 4
        c.notes.append("✓ No tables (column layouts often scramble in ATS).")
    else:
        c.notes.append(f"✗ {t} table(s) found — ATS may reorder or drop cells.")
    if i == 0:
        c.score += 3
        c.notes.append("✓ No images/graphics (ATS cannot read them).")
    else:
        c.notes.append(f"✗ {i} image(s) — text inside images is invisible to ATS.")
    if b == 0:
        c.score += 3
        c.notes.append("✓ No text boxes (frequently skipped by parsers).")
    else:
        c.notes.append(f"✗ {b} text box(es) — content may be ignored.")
    if cols <= 1:
        c.score += 2
        c.notes.append("✓ Single-column section layout (parsed top-to-bottom cleanly).")
    else:
        c.notes.append(f"✗ {cols}-column layout — ATS read order may jumble content.")
    return c


def check_parse_hazards(full, paras):
    c = Check("Parse hazards (special chars / encoding)", 5)
    # Ligatures and exotic glyphs that corrupt text extraction in some parsers.
    bad_glyphs = re.findall(r"[ﬁﬂﬀﬃﬄ  -]", full)
    if not bad_glyphs:
        c.score += 2
        c.notes.append("✓ No ligature/private-use glyphs that corrupt extraction.")
    else:
        c.notes.append(f"✗ {len(bad_glyphs)} risky glyph(s) (ligatures/PUA) — retype them.")
    # Tabs used for layout often collapse and merge fields.
    tabbed = sum(1 for p in paras if "\t" in p.text)
    if tabbed == 0:
        c.score += 1.5
        c.notes.append("✓ No tab-based column alignment.")
    else:
        c.notes.append(f"△ {tabbed} line(s) use tabs for layout — can merge fields in ATS.")
    # Mostly-ASCII body keeps legacy parsers happy (dots/dashes/accents are fine).
    non_ascii = [ch for ch in full if ord(ch) > 0x2122]
    if len(non_ascii) <= 3:
        c.score += 1.5
        c.notes.append("✓ Body is ASCII-safe for legacy parsers.")
    else:
        c.notes.append(f"△ {len(non_ascii)} uncommon non-ASCII char(s) — verify they parse.")
    return c


def check_contact(full, doc):
    c = Check("Contact information", 10)
    if EMAIL_RE.search(full):
        c.score += 4
        c.notes.append("✓ Email present.")
    else:
        c.notes.append("✗ No email detected.")
    phone_scan = EMAIL_RE.sub(" ", full)
    phone_scan = re.sub(r"\S*(?:linkedin\.com|github\.com|https?://|www\.)\S*", " ",
                        phone_scan, flags=re.I)
    if PHONE_RE.search(phone_scan):
        c.score += 2
        c.notes.append("✓ Phone number present.")
    else:
        c.notes.append("△ No phone number detected — many ATS expect one.")
    if URL_RE.search(full):
        c.score += 2
        c.notes.append("✓ LinkedIn/GitHub/portfolio link present.")
    else:
        c.notes.append("△ No LinkedIn/portfolio link found.")
    hf = has_header_footer_content(doc)
    if not hf:
        c.score += 2
        c.notes.append("✓ Contact in document body (not header/footer).")
    else:
        if any(EMAIL_RE.search(t) or PHONE_RE.search(t) for _, t in hf):
            c.notes.append("✗ Contact info sits in header/footer — some ATS skip these.")
        else:
            c.score += 2
            c.notes.append("△ Header/footer holds non-contact text; contact is in body (ok).")
    return c


def check_sections(full, texts):
    c = Check("Standard sections (presence, degree, order)", 14)
    low = full.lower()
    found = {}
    positions = {}
    for key, variants in STANDARD_SECTIONS.items():
        pos = None
        for v in variants:
            m = re.search(r"\b" + re.escape(v) + r"\b", low)
            if m:
                pos = m.start() if pos is None else min(pos, m.start())
        found[key] = pos is not None
        if pos is not None:
            positions[key] = pos

    per = 9 / len(STANDARD_SECTIONS)  # 9 of 14 pts for presence
    for key, ok in found.items():
        if ok:
            c.score += per
            c.notes.append(f"✓ '{key.title()}' section recognized.")
        else:
            c.notes.append(f"✗ Missing standard '{key.title()}' heading.")

    # Degree detection within Education (2 pts).
    if any(t in low for t in DEGREE_TERMS):
        c.score += 2
        c.notes.append("✓ A recognizable degree is listed.")
    else:
        c.notes.append("△ No standard degree term detected (e.g. B.Tech, Bachelor, MBA).")

    # Section order (3 pts) — experience should precede education for experienced hires.
    present_order = [k for k in sorted(positions, key=positions.get)]
    ideal = [k for k in PREFERRED_ORDER if k in positions]
    if present_order == ideal:
        c.score += 3
        c.notes.append("✓ Sections appear in a conventional, parser-friendly order.")
    else:
        c.score += 1.5
        c.notes.append(f"△ Section order is {present_order}; conventional is {ideal}.")
    return c


def check_dates(texts):
    c = Check("Date formatting & recency", 6)
    hits = [t for t in texts if DATE_RE.search(t)]
    if len(hits) >= 3:
        c.score += 4
        c.notes.append(f"✓ {len(hits)} entries use clear date ranges (MM/YYYY or YYYY–YYYY).")
    elif hits:
        c.score += 2
        c.notes.append(f"△ Only {len(hits)} clearly-dated entries — date every role.")
    else:
        c.notes.append("✗ No recognizable employment date ranges found.")
    if re.search(r"present|current", " ".join(texts), re.I):
        c.score += 2
        c.notes.append("✓ A current/'Present' role signals recency.")
    else:
        c.notes.append("△ No 'Present' role — confirm most recent dates are shown.")
    return c


def check_action_verbs(bullets):
    c = Check("Strong action verbs in bullets", 8)
    if not bullets:
        c.notes.append("✗ No bullet lines detected.")
        return c
    strong = sum(
        1 for b in bullets
        if re.sub(r"[^a-zA-Z]", "", b.split()[0]).lower() in ACTION_VERBS
    )
    ratio = strong / len(bullets)
    c.score += round(8 * min(ratio / 0.6, 1.0), 1)
    c.notes.append(f"{'✓' if ratio>=0.5 else '△'} {strong}/{len(bullets)} bullets open with a strong action verb ({round(ratio*100)}%).")
    if ratio < 0.5:
        c.notes.append("  Tip: start bullets with Led, Built, Reduced, Scaled, Drove.")
    return c


def check_quantification(texts):
    c = Check("Quantified achievements", 8)
    n = len([t for t in texts if NUMBER_RE.search(t)])
    c.score += 8 if n >= 4 else 5 if n >= 2 else 2.5 if n == 1 else 0
    c.notes.append(f"{'✓' if n>=4 else '△' if n>=1 else '✗'} {n} line(s) contain metrics (%, $, counts, scale).")
    if n < 4:
        c.notes.append("  Tip: add numbers (users, latency, %, team size, revenue) to more bullets.")
    return c


def check_bullet_readability(bullets):
    c = Check("Bullet readability", 6)
    if not bullets:
        c.notes.append("△ No bullets to assess.")
        return c
    lengths = [len(b.split()) for b in bullets]
    avg = sum(lengths) / len(lengths)
    too_long = sum(1 for n in lengths if n > 35)
    too_short = sum(1 for n in lengths if n < 4)
    if 8 <= avg <= 28:
        c.score += 4
        c.notes.append(f"✓ Average bullet length {round(avg)} words (ideal 8–28).")
    else:
        c.score += 2
        c.notes.append(f"△ Average bullet length {round(avg)} words — aim for 8–28.")
    if too_long == 0:
        c.score += 2
        c.notes.append("✓ No overly long bullets (>35 words).")
    else:
        c.notes.append(f"△ {too_long} bullet(s) exceed 35 words — split or trim.")
    if too_short:
        c.notes.append(f"  Note: {too_short} very short bullet(s) (<4 words).")
    return c


def check_keywords(full, jd_text):
    """Keyword coverage + job-title match. JD-aware when supplied."""
    c = Check("Keyword coverage & title match", 15)
    resume_tokens = set(normalize_tokens(full))
    low = full.lower()

    if jd_text:
        jd_norm = normalize_tokens(jd_text)
        stop = {"and", "the", "for", "with", "you", "our", "are", "will", "have",
                "this", "that", "your", "team", "work", "role", "must", "should",
                "from", "they", "their", "who", "all", "can", "has", "but", "not",
                # JD boilerplate that isn't a skill
                "job", "title", "position", "looking", "strong", "experience",
                "requirement", "responsibility", "responsibilities", "years",
                "we", "us", "candidate", "ideal", "preferred", "plus", "etc",
                "ability", "skills", "knowledge", "including", "across", "deploy",
                "lead", "build", "design", "scalable", "review", "reviews"}
        freq = Counter(t for t in jd_norm if t not in stop and len(t) > 2)
        keys = [w for w, _ in freq.most_common(30)]
        present = [k for k in keys if k in resume_tokens]
        ratio = len(present) / max(len(keys), 1)
        c.score += round(11 * ratio, 1)  # 11 of 15 for coverage
        c.notes.append(f"{'✓' if ratio>=0.6 else '△'} Matched {len(present)}/{len(keys)} top JD keywords ({round(ratio*100)}%; target ≥75%).")
        missing = [k for k in keys if k not in resume_tokens][:10]
        if missing:
            c.notes.append("  Missing JD terms: " + ", ".join(missing))
        # Job-title match (4 pts) — highest-signal keyword in any ATS.
        title = guess_job_title(jd_text)
        if title and all(w in low for w in title.lower().split() if len(w) > 2):
            c.score += 4
            c.notes.append(f"✓ Resume contains the target job title ('{title}').")
        else:
            c.notes.append(f"△ Target job title{f' (\"{title}\")' if title else ''} not found verbatim — mirror it in your summary/headline.")
    else:
        present = sorted({k for k in COMMON_TECH_KEYWORDS
                          if SYNONYMS.get(k, k) in resume_tokens or k in low})
        n = len(present)
        c.score += round(15 * min(n / 14, 1.0), 1)
        c.notes.append(f"{'✓' if n>=14 else '△'} {n} distinct common tech keywords detected (no JD supplied).")
        c.notes.append("  Tip: pass --jd <file> to score coverage + title match against a real posting.")
    return c


def check_keyword_density(full):
    """Stuffing is signalled by ONE term repeated abnormally — not by aggregate
    tech share (a dedicated Skills list legitimately pushes that to 10–20%).
    So weight the judgment on per-term repetition; treat density as a floor
    check only (Jobscan/cvowl note ~1–3% *per keyword* as the real sweet spot)."""
    c = Check("Keyword density (no stuffing)", 4)
    tokens = normalize_tokens(full)
    if not tokens:
        c.notes.append("✗ No tokens to analyze.")
        return c
    tech_set = {SYNONYMS.get(k, k) for k in COMMON_TECH_KEYWORDS} | COMMON_TECH_KEYWORDS
    density = 100 * sum(1 for t in tokens if t in tech_set) / len(tokens)
    # Per-term repetition is the genuine stuffing signal (ignore stopwords).
    stop = {"and", "the", "for", "with", "across", "from"}
    counts = Counter(t for t in tokens if len(t) > 2 and t not in stop)
    top_tok, top_n = counts.most_common(1)[0]
    rep = 100 * top_n / len(tokens)

    if density >= 1.0:
        c.score += 2
        c.notes.append(f"✓ Adequate role-specific keyword presence (tech share {density:.1f}%).")
    else:
        c.notes.append(f"△ Low keyword presence {density:.1f}% — weave in more role skills.")
    # A single content word over ~5% of all tokens looks like keyword stuffing.
    if rep <= 5.0:
        c.score += 2
        c.notes.append(f"✓ No keyword stuffing (most-used term '{top_tok}' at {rep:.1f}%).")
    elif rep <= 7.0:
        c.score += 1
        c.notes.append(f"△ '{top_tok}' used {top_n}× ({rep:.1f}%) — slightly high, vary wording.")
    else:
        c.notes.append(f"✗ '{top_tok}' repeated {top_n}× ({rep:.1f}%) — reads as stuffing.")
    return c


def check_filler_and_spelling(full):
    c = Check("Clean language (no filler / typos)", 4)
    low = full.lower()
    filler = [p for p in WEAK_PHRASES if p in low]
    if not filler:
        c.score += 2.5
        c.notes.append("✓ No clichés/filler phrases detected.")
    else:
        c.score += max(0, 2.5 - len(filler))
        c.notes.append("△ Weak phrases: " + ", ".join(f"'{p}'" for p in filler[:6]))
    typos = {w: COMMON_TYPOS[w] for w in COMMON_TYPOS if re.search(r"\b"+w+r"\b", low)}
    if not typos:
        c.score += 1.5
        c.notes.append("✓ No common misspellings found.")
    else:
        c.notes.append("✗ Likely typos: " + ", ".join(f"'{k}'→'{v}'" for k, v in typos.items()))
    return c


def check_fonts(doc):
    c = Check("Standard, parseable fonts", 4)
    safe = {"Calibri", "Arial", "Helvetica", "Times New Roman", "Garamond",
            "Georgia", "Cambria", "Verdana", "Tahoma", "Lato", "Roboto"}
    used = fonts_used(doc)
    if not used:
        c.score += 2.5
        c.notes.append("△ No explicit fonts set (inherits a safe default).")
    elif used.issubset(safe):
        c.score += 4
        c.notes.append(f"✓ Standard fonts only: {', '.join(sorted(used))}.")
    else:
        c.score += 1.5
        c.notes.append(f"△ Non-standard fonts: {', '.join(sorted(used - safe))} — prefer common fonts.")
    return c


# ---- Helpers -------------------------------------------------------------

def guess_job_title(jd_text):
    """Best-effort job title from the first non-empty JD line or a 'title:' field."""
    m = re.search(r"(?:job\s*title|position|role)\s*[:\-]\s*(.+)", jd_text, re.I)
    if m:
        return m.group(1).strip().splitlines()[0][:60]
    for line in jd_text.splitlines():
        line = line.strip(" #-*")
        if 2 <= len(line.split()) <= 8 and re.search(r"[A-Za-z]", line):
            return line[:60]
    return None


def grade(pct):
    if pct >= 90:
        return "A — Excellent. ATS-ready."
    if pct >= 80:
        return "B — Strong. Minor polish."
    if pct >= 70:
        return "C — Decent. Several fixes recommended."
    if pct >= 60:
        return "D — Weak. Significant gaps."
    return "F — High risk of ATS rejection."


def bar(pct, width=20):
    filled = round(width * pct / 100)
    return "█" * filled + "░" * (width - filled)


# ---- Orchestration -------------------------------------------------------

def run(path, jd_text=None, as_json=False):
    doc, paras, texts, full = load_doc(path)
    bullets = extract_bullets(paras)
    checks = [
        check_parseability(doc, full),
        check_layout_safety(doc),
        check_parse_hazards(full, paras),
        check_contact(full, doc),
        check_sections(full, texts),
        check_dates(texts),
        check_action_verbs(bullets),
        check_quantification(texts),
        check_bullet_readability(bullets),
        check_keywords(full, jd_text),
        check_keyword_density(full),
        check_filler_and_spelling(full),
        check_fonts(doc),
    ]
    total = round(sum(c.score for c in checks), 1)
    maxtotal = sum(c.weight for c in checks)
    pct = round(100 * total / maxtotal)

    if as_json:
        print(json.dumps({
            "file": os.path.basename(path), "score": total, "max": maxtotal,
            "pct": pct, "grade": grade(pct),
            "checks": [c.to_dict() for c in checks],
        }, indent=2))
        return pct

    W = 66
    print("=" * W)
    print("  ATS RESUME SCORE ENGINE  (v2)")
    print(f"  File: {os.path.basename(path)}")
    print("  Scored against supplied job description." if jd_text
          else "  General mode — pass --jd <file> for role-specific scoring.")
    print("=" * W)
    print(f"\n  OVERALL: {total}/{maxtotal}  ({pct}%)   {bar(pct)}")
    print(f"  GRADE:   {grade(pct)}\n")
    print("-" * W)
    print("  CATEGORY BREAKDOWN")
    print("-" * W)
    for c in checks:
        print(f"\n  {c.name}   [{c.score:g}/{c.weight}]  {bar(c.pct)}")
        for n in c.notes:
            print(f"     {n}")

    losses = sorted(checks, key=lambda c: (c.weight - c.score), reverse=True)
    todo = [c for c in losses if c.score < c.weight - 0.05][:5]
    if todo:
        print("\n" + "=" * W)
        print("  TOP FIXES (by points to gain)")
        print("=" * W)
        for c in todo:
            print(f"  • {c.name}: +{round(c.weight - c.score, 1)} pts available")
    print()
    return pct


def main(argv):
    jd_path = None
    if "--jd" in argv:
        i = argv.index("--jd")
        if i + 1 < len(argv):
            jd_path = argv[i + 1]
    # Positional args exclude flags AND the value consumed by --jd.
    args = [a for a in argv[1:] if not a.startswith("--") and a != jd_path]
    path = args[0] if args else DEFAULT_RESUME
    jd_text = None
    if jd_path:
        with open(jd_path, encoding="utf-8") as f:
            jd_text = f.read()
    if not os.path.exists(path):
        print(f"Resume not found: {path}")
        return 2
    run(path, jd_text, as_json="--json" in argv)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
