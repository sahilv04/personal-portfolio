#!/usr/bin/env python3
"""Generate an ATS-friendly single-page .docx resume for Sahil Verma.

Content sourced from the portfolio repo (content/*.ts). Re-runnable.
ATS rules: single column, no tables/images/text-boxes, standard fonts,
standard section headings, real selectable text, plain bullets.
"""

import os
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

FONT = "Calibri"
BLACK = RGBColor(0x00, 0x00, 0x00)
OUT = os.path.join(os.path.dirname(__file__), "Sahil_Verma_Resume.docx")


def set_run(run, size, bold=False, color=BLACK):
    run.font.name = FONT
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.color.rgb = color


def tight(p, before=0, after=2, line=1.0):
    pf = p.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing = line


def section_heading(doc, text):
    p = doc.add_paragraph()
    tight(p, before=6, after=2)
    r = p.add_run(text.upper())
    set_run(r, 11, bold=True)
    # bottom border under heading (text-based, ATS-safe)
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "000000")
    pbdr.append(bottom)
    pPr.append(pbdr)


def role(doc, title, org, location, dates):
    p = doc.add_paragraph()
    tight(p, before=4, after=0)
    r = p.add_run(f"{title} — {org}")
    set_run(r, 10.5, bold=True)
    p2 = doc.add_paragraph()
    tight(p2, before=0, after=1)
    r2 = p2.add_run(f"{location} · {dates}")
    set_run(r2, 9.5)
    r2.font.italic = True


def bullet(doc, text):
    p = doc.add_paragraph(style="List Bullet")
    tight(p, before=0, after=1)
    p.paragraph_format.left_indent = Inches(0.2)
    p.paragraph_format.first_line_indent = Inches(-0.13)
    r = p.add_run(text)
    set_run(r, 10)


def skill_line(doc, label, items):
    p = doc.add_paragraph()
    tight(p, before=0, after=2)
    r = p.add_run(f"{label}: ")
    set_run(r, 10, bold=True)
    r2 = p.add_run(items)
    set_run(r2, 10)


def build():
    doc = Document()

    # Margins
    for s in doc.sections:
        s.top_margin = Inches(0.5)
        s.bottom_margin = Inches(0.5)
        s.left_margin = Inches(0.6)
        s.right_margin = Inches(0.6)

    # Base style
    style = doc.styles["Normal"]
    style.font.name = FONT
    style.font.size = Pt(10)
    style.font.color.rgb = BLACK

    # --- Header ---
    name = doc.add_paragraph()
    name.alignment = WD_ALIGN_PARAGRAPH.CENTER
    tight(name, before=0, after=0)
    rn = name.add_run("SAHIL VERMA")
    set_run(rn, 18, bold=True)

    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    tight(title, before=0, after=2)
    rt = title.add_run("Senior Full Stack Engineer")
    set_run(rt, 11.5)

    contact = doc.add_paragraph()
    contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
    tight(contact, before=0, after=2)
    rc = contact.add_run(
        "Chandigarh, India · +91-9888007917 · sahilv04@gmail.com · sahilverma.in · "
        "linkedin.com/in/sahil-verma-421133147 · github.com/sahilv04"
    )
    set_run(rc, 9.5)

    # --- Summary ---
    section_heading(doc, "Summary")
    p = doc.add_paragraph()
    tight(p, before=2, after=2)
    rs = p.add_run(
        "Full Stack Engineer with 9+ years building and shipping enterprise-scale web "
        "products end to end — React, Next.js and TypeScript front ends with Node.js and "
        "Express services deployed on AWS. Technical lead for teams of ~5 across finance, "
        "energy and audit domains, including multi-year on-site delivery for UK clients in "
        "London. AWS Certified Solutions Architect Associate, Cloud Practitioner and AI "
        "Practitioner; Microsoft Azure Fundamentals."
    )
    set_run(rs, 10)

    # --- Skills ---
    section_heading(doc, "Skills")
    skill_line(doc, "Frontend", "React, Next.js, Angular, TypeScript, JavaScript, Redux, Micro-Frontend Architecture, SASS, HTML, CSS")
    skill_line(doc, "Backend", "Node.js, Express, REST APIs, GraphQL, Microservices, MongoDB, PostgreSQL, MS SQL Server, SQL")
    skill_line(doc, "Cloud & DevOps", "AWS, Azure, Docker, Jenkins, Azure Pipelines, CI/CD, Linux, Observability")
    skill_line(doc, "Testing & Tooling", "Jest, React Testing Library, Cypress, Git, GitHub/GitLab/Bitbucket, SonarQube, Jira, Webpack, Vite")
    skill_line(doc, "Leadership", "Team leadership, Agile/Scrum, Sprint planning, Code review, Technical interviewing, Estimation & delivery, Mentorship")

    # --- Experience ---
    section_heading(doc, "Experience")

    role(doc, "Technical Lead", "Webmob Software Solutions", "Chandigarh, India", "2024 – Present")
    bullet(doc, "Lead frontend architecture across React, Next.js and TypeScript codebases for enterprise-grade applications.")
    bullet(doc, "Own estimation, sprint planning and delivery for cross-functional product teams.")
    bullet(doc, "Set engineering standards — review patterns, typing, release rituals — and run client-facing technical conversations from scoping through demos.")

    role(doc, "Specialist Programmer", "Infosys", "London, UK / India", "04/2021 – 2024")
    bullet(doc, "Led ~5 engineers building enterprise-grade, highly responsive React + Node.js applications; delivered on-site for UK clients in London over multiple years.")
    bullet(doc, "Built the CIAO trade-confirmation UI from scratch for British Petroleum (React, TypeScript, Kendo UI); maintained 80% unit-test coverage; deployed via Jenkins and ROSA while leading a 3-member team.")
    bullet(doc, "Delivered EY VIA virtual internal-audit platform (React, Node.js, PostgreSQL) and The Economist Group sustainability platform (Next.js, Express, TypeScript).")
    bullet(doc, "Drove code-review culture and ran scrum — planning, estimation, demos and retrospectives.")

    role(doc, "Technical Lead", "Webmob Software Solutions", "Mohali, India", "01/2019 – 04/2021")
    bullet(doc, "Led a ~5-engineer team delivering enterprise applications in the financial domain (React + Node.js, MongoDB, REST APIs).")
    bullet(doc, "Owned scrum delivery end to end, set code-review standards, and conducted technical interviews to shape the engineering hiring bar.")

    role(doc, "Software Developer", "Open Access Technology (OATI)", "Mohali, India", "07/2016 – 12/2018")
    bullet(doc, "Core Deal Entry product team building and maintaining enterprise applications for power-sector clients across a large, long-lived codebase (JavaScript, REST APIs, SQL).")

    # --- Education ---
    section_heading(doc, "Education")
    p = doc.add_paragraph()
    tight(p, before=2, after=2)
    r = p.add_run("B.Tech, Computer Engineering — Punjabi University, Patiala")
    set_run(r, 10, bold=True)
    r2 = p.add_run("   ·   2016 – 2020")
    set_run(r2, 9.5)
    r2.font.italic = True

    # --- Certifications ---
    section_heading(doc, "Certifications")
    p = doc.add_paragraph()
    tight(p, before=2, after=2)
    r = p.add_run(
        "AWS Certified Solutions Architect – Associate (2024); AWS Certified AI Practitioner "
        "(2024); AWS Certified Cloud Practitioner (2023); Microsoft Certified: Azure "
        "Fundamentals and Azure AI Fundamentals (2024)."
    )
    set_run(r, 10)

    doc.save(OUT)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
