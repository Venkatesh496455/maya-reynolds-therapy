import Image from "next/image";

export default function Office() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
          Our office
        </p>
        <h2 className="max-w-lg">
          A calm space for <span className="script">healing</span>.
        </h2>
        <p className="mt-6 max-w-xl">
          My Santa Monica office is a quiet, private space designed to feel
          calm and grounding, with natural light and a comfortable,
          uncluttered environment. Clients often share that the space itself
          helps them feel more at ease when they arrive. In-person sessions
          are available here, or connect with me via secure telehealth from
          anywhere in California.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/office-1.jpg"
              alt="Waiting area of Dr. Reynolds' Santa Monica office"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/office-2.jpg"
              alt="Therapy seating area with natural light"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        <p className="mt-8 text-sm text-ink/70">
          123th Street 45 W, Santa Monica, CA 90401 · In-person &amp;
          telehealth appointments available
        </p>
      </div>
    </section>
  );
}