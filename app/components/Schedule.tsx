import Image from "next/image";

export default function Schedule() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            Schedule a consultation
          </p>
          <h2 className="max-w-md">
            Ready to feel more like <span className="script">you</span>?
          </h2>
          <p className="mt-6 max-w-md">
            Reaching out is often the hardest step. I offer a brief
            consultation so we can talk about what you&apos;re navigating and
            whether we&apos;re a good fit to work together.
          </p>
          <p className="mt-4 max-w-md">
            Click below to schedule your first appointment.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-ink px-8 py-3 text-xs tracking-[0.15em] uppercase"
          >
            Book now
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/images/hero-2.jpg"
            alt="Santa Monica coastline"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}