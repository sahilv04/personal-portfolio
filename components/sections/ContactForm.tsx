"use client";

import { useState } from "react";
import { personal } from "@/content/personal";
import { track } from "@/lib/analytics";

const inputCls =
  "mt-2 w-full border-0 border-b-2 border-ink/30 bg-transparent px-0 py-2.5 font-serif text-base text-ink placeholder:italic placeholder:text-ink-faint focus:border-vermilion focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Project enquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    track("generate_lead", { method: "contact_form" });
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
            01 — Your name
          </span>
          <input required name="name" type="text" className={inputCls} placeholder="Ada Lovelace" />
        </label>
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
            02 — Email
          </span>
          <input required name="email" type="email" className={inputCls} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
          03 — What are you building?
        </span>
        <textarea
          required
          name="message"
          rows={6}
          className={`${inputCls} ledger-lines resize-y leading-[28px]`}
          placeholder="A short description of the product, team and timeline."
        />
      </label>
      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-paper shadow-offset-red transition-transform duration-150 hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          Post it →
        </button>
        <a
          href={personal.socials.email}
          onClick={() => track("contact_click", { method: "email", location: "contact_form" })}
          className="marginalia text-sm"
        >
          or skip the form — {personal.email}
        </a>
        {status === "sent" && (
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-teal">
            Opening your mail client…
          </span>
        )}
      </div>
    </form>
  );
}
