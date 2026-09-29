const items = [
  {
    title: "Trauma",
    text: "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    text: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    text: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "Special Needs Parenting",
    text: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

export default function Specialties() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
        <div className="aspect-video rounded-sm bg-gradient-to-tr from-secondary to-accent/30 lg:order-2" />
        <h2 className="lg:order-1">
          Our <span className="script">specialties</span> include...
        </h2>
      </div>

      <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <p className="mt-3">{item.text}</p>
            <a href="#" className="btn-link mt-4">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}