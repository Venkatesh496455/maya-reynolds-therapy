export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-secondary p-8">
      <h1 className="text-4xl font-heading text-primary">Setup works ✅</h1>
      <p className="text-muted">Tokens, fonts and Tailwind are all working.</p>
      <button className="rounded-full bg-accent px-6 py-3 text-white">
        Test button
      </button>
    </main>
  );
}