export default function Schedule() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-xs tracking-[0.15em] uppercase text-ink/70">
            Schedule an appointment
          </p>
          <h2 className="max-w-md">
            Find a therapist who is the right fit for{" "}
            <span className="script">you</span>.
          </h2>
          <p className="mt-6 max-w-md">
            Coming to therapy is a courageous decision, and connecting with
            the right kind of therapist makes all the difference. We
            understand that your journey is personal, and we&apos;re here to
            support you with care and understanding every step of the way.
          </p>
          <p className="mt-4 max-w-md">
            Click the button below to schedule an appointment.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-ink px-8 py-3 text-xs tracking-[0.15em] uppercase"
          >
            Book now
          </a>
        </div>

        <div className="aspect-[4/3] rounded-sm bg-gradient-to-bl from-secondary to-accent/20" />
      </div>
    </section>
  );
}