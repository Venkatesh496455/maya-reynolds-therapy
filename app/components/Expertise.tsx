const areas = [
  "Dissociation",
  "Trauma",
  "Family Conflict",
  "Special Needs Parenting",
  "Depression",
  "Marriage",
  "Anxiety",
  "Relationships",
  "Children",
  "Teens",
  "Intimacy & Connection",
  "...and more",
];

export default function Expertise() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <h3 className="mb-10">
        Our areas of <span className="script">expertise</span>
      </h3>

      <div className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
        {areas.map((area) => (
          <p
            key={area}
            className="border-b border-ink/15 pb-4 text-sm tracking-[0.1em] uppercase"
          >
            {area}
          </p>
        ))}
      </div>
    </section>
  );
}