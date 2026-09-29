"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Our Team", "Specialties", "Methods", "FAQs"];

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="font-heading text-xl leading-tight">
          Maya Reynolds
          <span className="block text-[11px] tracking-[0.15em] uppercase font-body">
            Therapy &amp; Counseling
          </span>
        </a>

        <nav className="hidden gap-8 text-sm lg:flex">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-accent transition-colors">
              {link}
            </a>
          ))}
        </nav>

        <a href="#" className="btn-link hidden lg:inline-block">
          Contact
        </a>

        <button
          className="text-2xl lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-6 pb-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="border-b border-ink/10 py-3 text-sm"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="btn-link mt-3 self-start"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}