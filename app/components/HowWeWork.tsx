import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:order-2">
          <Image
            src="/images/maya-headshot.jpg"
            alt="Dr. Maya Reynolds, PsyD"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="lg:order-1">
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            About Dr. Reynolds
          </p>
          <h2 className="max-w-md">
            Practical tools, with depth-oriented work.
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <p>
              I take a warm, collaborative, and grounded approach to
              therapy. Sessions are structured enough to feel supportive,
              while still leaving space for reflection and depth. I
              integrate CBT, EMDR, mindfulness-based practices, and
              body-oriented techniques throughout our work together.
            </p>
            <p>
              I believe therapy works best when clients feel respected,
              understood, and actively involved in the process. My goal
              isn&apos;t just symptom relief, but helping you develop
              insight, resilience, and a stronger relationship with
              yourself over time.
            </p>
          </div>

          <a href="#" className="btn-link mt-8">
            Learn more about my approach
          </a>
        </div>
      </div>
    </section>
  );
}