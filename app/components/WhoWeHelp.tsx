const groups = [
  {
    title: "High-Achievers & Professionals",
    text: "For entrepreneurs, creatives, and professionals who feel exhausted, stuck in overthinking, or emotionally on edge despite looking put-together from the outside. We'll work on the anxiety and internal pressure underneath the high-functioning surface.",
  },
  {
    title: "Anxiety & Panic",
    text: "If constant worry, tension in your body, or a racing mind have become familiar, we'll work together to help you feel more regulated day to day — not just calmer during sessions, but steadier in your daily life.",
  },
  {
    title: "Trauma & Burnout",
    text: "Whether from a single event or long-standing patterns rooted in childhood, relationships, or chronic stress, trauma work here is paced carefully, with an emphasis on safety and stabilization, so you can slow down and reconnect with yourself.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <h2 className="mb-14">
        Who I work <span className="script">with</span>
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="mb-6 aspect-[4/5] rounded-sm bg-gradient-to-br from-secondary to-accent/30" />
            <h4>{g.title}</h4>
            <p className="mt-3">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}