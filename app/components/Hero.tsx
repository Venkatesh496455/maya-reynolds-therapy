import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:px-12 md:pt-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            Anxiety &amp; trauma therapy in Santa Monica, CA
          </p>
          <h1 className="max-w-xl">
            Quiet the overthinking and finally begin to{" "}
            <span className="script">breathe</span>.
          </h1>
          <p className="mt-6 max-w-md">
            Therapy for high-achieving adults navigating anxiety, panic,
            burnout, and the lasting effects of past experiences — in-person
            in Santa Monica or via telehealth anywhere in California.
          </p>
          <a href="#" className="btn-link mt-8">
            Book a consultation
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="relative col-span-2 aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/images/hero-2.jpg"
              alt="Santa Monica coastline at golden hour"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 40vw, 60vw"
            />
          </div>
          <div className="relative col-span-1 aspect-[3/4] self-end overflow-hidden rounded-sm">
            <Image
              src="/images/hero-1.jpg"
              alt="Quiet reading nook with natural light"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, 30vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}