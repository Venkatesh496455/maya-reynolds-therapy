const faqs = [
  {
    q: "Do you offer in-person and online sessions?",
    a: "Both. I see clients in person at my Santa Monica office, and I offer secure telehealth sessions for anyone located in California.",
  },
  {
    q: "What therapy methods do you use?",
    a: "I integrate evidence-based approaches including CBT, EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you're working through.",
  },
  {
    q: "Do you only work with high-achieving professionals?",
    a: "Not exclusively, though many of my clients are entrepreneurs, creatives, and professionals dealing with anxiety, burnout, or perfectionism. My approach is grounded in your specific experience, whatever your background.",
  },
  {
    q: "How long does therapy typically take?",
    a: "It depends on what brings you in. Some clients come for a few months to work through a specific challenge; others stay longer for deeper trauma work. We'll build a pace that fits you.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <h2 className="mb-14">
        Frequently asked <span className="script">questions</span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-2">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-ink/15 pb-8">
            <h4 className="text-lg">{item.q}</h4>
            <p className="mt-3">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}