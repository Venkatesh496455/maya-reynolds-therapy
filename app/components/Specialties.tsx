const items = [
  {
    title: "Anxiety & Panic",
    text: "Constant worry, racing thoughts, or a body that never fully relaxes can make even ordinary days feel exhausting. We'll work together to understand what's driving your anxiety and build tools that help you feel steadier, not just during our sessions but in daily life.",
  },
  {
    title: "Trauma & EMDR",
    text: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful technique for reworking how painful memories are stored in the brain. Paired with a careful, paced approach, it helps you find relief from single-incident or long-standing trauma and move toward lasting healing.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living and working.",
  },
];

export default function Specialties() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
        <div className="aspect-video rounded-sm bg-gradient-to-tr from-secondary to-accent/30 lg:order-2" />
        <h2 className="lg:order-1">
          Areas of <span className="script">focus</span>
        </h2>
      </div>

      <div className="grid gap-x-12 gap-y-12 sm:grid-cols-3">
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