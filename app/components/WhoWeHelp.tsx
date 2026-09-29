const groups = [
  {
    title: "Adults",
    text: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    text: "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    text: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <h2 className="mb-14">
        Who we <span className="script">help</span>
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