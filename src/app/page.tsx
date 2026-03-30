import Link from "next/link";

const services = [
  {
    title: "Discovery & positioning",
    body: "We clarify your offer, audience, and goals so the site tells one coherent story.",
  },
  {
    title: "Design & UX",
    body: "Modern layouts, strong typography, and mobile-first flows that feel effortless.",
  },
  {
    title: "Build & launch",
    body: "Performance-minded Next.js sites you can grow with — not a fragile template stack.",
  },
  {
    title: "Care & iteration",
    body: "Ongoing updates, analytics, and improvements after you go live.",
  },
];

const steps = [
  {
    title: "Align",
    body: "Short workshop + sitemap so scope and messaging are locked early.",
  },
  {
    title: "Design & build",
    body: "Review milestones, not surprises — you approve before we ship.",
  },
  {
    title: "Launch & measure",
    body: "Hosting guidance, SEO basics, and a clean handoff.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-stone-50 dark:bg-stone-950">
      <section className="border-b border-stone-200/80 bg-background px-4 py-16 dark:border-stone-800/80 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            Websites that make your business look as capable as you are.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Pine Creative partners with owners and marketing teams to launch
            clear, conversion-focused sites — without the enterprise price tag
            or endless timelines.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-green-800 px-8 text-sm font-medium text-white transition-colors hover:bg-green-900 dark:bg-green-500 dark:text-green-950 dark:hover:bg-green-400"
            >
              Start a project
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-green-50 dark:border-stone-700 dark:hover:bg-green-950/40"
            >
              See selected work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          What we do
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-2xl font-semibold tracking-tight text-foreground">
          End-to-end websites for teams that need clarity and speed.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-stone-200/80 bg-background p-6 shadow-sm dark:border-stone-800/80"
            >
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-stone-200/80 bg-background px-4 py-16 dark:border-stone-800/80 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            How we work
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-2xl font-semibold tracking-tight text-foreground">
            A straightforward process from first call to launch.
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="relative text-center sm:text-left">
                <span className="text-xs font-bold text-stone-400 dark:text-stone-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
          Trusted by local service brands, professional firms, and B2B teams
          modernizing their first impression.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-green-800 px-8 text-sm font-medium text-white transition-colors hover:bg-green-900 dark:bg-green-500 dark:text-green-950 dark:hover:bg-green-400"
        >
          Start a project
        </Link>
      </section>
    </div>
  );
}
