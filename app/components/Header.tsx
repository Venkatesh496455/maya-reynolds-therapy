export default function Header() {
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
          className="lg:hidden text-2xl"
          aria-label="Open menu"
          type="button"
        >
          ☰
        </button>
      </div>
    </header>
  );
}