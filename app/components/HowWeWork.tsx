export default function HowWeWork() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-accent/30 to-secondary lg:order-2" />

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