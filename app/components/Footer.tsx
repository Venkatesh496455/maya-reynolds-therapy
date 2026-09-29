export default function Footer() {
  const navigate = ["Home", "About", "FAQs", "Contact"];
  const team = ["Dr. Maya Reynolds, PsyD"];

  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-12">
        <div>
          <p className="font-heading text-xl">Maya Reynolds</p>
          <p className="text-[11px] tracking-[0.15em] uppercase">
            Therapy &amp; Counseling
          </p>
          <p className="mt-4 text-sm">
            A quiet, private space in Santa Monica designed to feel calm and
            grounding. In-person sessions welcome, or connect via secure
            telehealth from anywhere in California.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            Navigate
          </p>
          <ul className="space-y-2 text-sm">
            {navigate.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-accent">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            Clinician
          </p>
          <ul className="space-y-2 text-sm">
            {team.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            Contact
          </p>
          <p className="text-sm">123th Street 45 W</p>
          <p className="text-sm">Santa Monica, CA 90401</p>
          <p className="mt-2 text-sm">hello@mayareynoldstherapy.com</p>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-6 text-center text-xs text-ink/60 md:px-12">
        © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights
        reserved.
      </div>
    </footer>
  );
}