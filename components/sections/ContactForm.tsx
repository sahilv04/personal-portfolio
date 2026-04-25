"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/content/personal";

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
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted">Name</span>
          <input
            required
            name="name"
            type="text"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted">Email</span>
          <input
            required
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted">What are you building?</span>
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
          placeholder="A short description of the product, team and timeline."
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="rounded-full bg-white px-5 py-3 text-sm font-medium text-bg hover:bg-white/90"
        >
          Send via email →
        </motion.button>
        <a
          href={personal.socials.email}
          className="rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm text-ink hover:bg-white/5"
        >
          Or just write to {personal.email}
        </a>
        {status === "sent" && (
          <span className="text-xs text-accent-ice">Opening your email client…</span>
        )}
      </div>
    </form>
  );
}
