export default function HowWeWork() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:items-center">
        <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-accent/30 to-secondary lg:order-2" />

        <div className="lg:order-1">
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            How we work
          </p>
          <h2 className="max-w-md">We&apos;re here to make a difference.</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <p>
              The clients we work with are balancing so many things at once.
              It&apos;s often hard for them to put themselves first. Here,
              your needs are always top priority. Our team takes the time to
              deeply listen to our clients in order to truly understand their
              story and their struggles.
            </p>
            <p>
              We recognize that no two people are the same and that
              personalized therapy means an intentional, tailored approach.
              (You won&apos;t find anything &quot;one-size-fits-all&quot;
              here.) If you&apos;re ready to do the work, we&apos;re ready to
              help.
            </p>
          </div>

          <a href="#" className="btn-link mt-8">
            Learn more about us
          </a>
        </div>
      </div>
    </section>
  );
}