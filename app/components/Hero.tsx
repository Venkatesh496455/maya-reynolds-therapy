export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:px-12 md:pt-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            Online &amp; in-person counseling in [City], [State]
          </p>
          <h1 className="max-w-xl">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="script">thrive</span>.
          </h1>
          <p className="mt-6 max-w-md">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>
          <a href="#" className="btn-link mt-8">
            Book an appointment
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Placeholder images — swapped for real photos in Step 8 */}
          <div className="col-span-2 aspect-[3/4] rounded-sm bg-gradient-to-br from-secondary to-accent/40" />
          <div className="col-span-1 aspect-[3/4] rounded-sm bg-gradient-to-tl from-accent/30 to-cream self-end" />
        </div>
      </div>
    </section>
  );
}