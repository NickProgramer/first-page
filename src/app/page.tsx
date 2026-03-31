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
    <div className="flex flex-1 flex-col bg-background">
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
          <div className="mt-10 flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[6.72rem] w-full min-w-0 max-w-full items-center justify-center rounded-full bg-green-800 px-5 text-xl font-semibold leading-tight text-white transition-colors hover:bg-green-900 sm:min-w-[19.2rem] sm:px-[4.48rem] sm:text-3xl dark:bg-green-500 dark:text-green-950 dark:hover:bg-green-400"
            >
              Start a project
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-[6.72rem] w-full min-w-0 max-w-full items-center justify-center rounded-full border-2 border-stone-300 bg-background px-5 text-xl font-semibold leading-tight text-foreground transition-colors hover:bg-green-50 sm:min-w-[19.2rem] sm:px-[4.48rem] sm:text-3xl dark:border-stone-700 dark:hover:bg-green-950/40"
            >
              Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-background px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
            What we do
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-2xl font-semibold tracking-tight text-foreground">
            End-to-end websites for teams that need clarity and speed.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.title}
                className="group rounded-2xl border border-green-200/70 bg-[#e3f2e6] p-[1.8rem] shadow-sm transition-colors duration-200 dark:border-green-800/50 dark:bg-[#1a2e22] hover:bg-green-800 hover:border-green-800 dark:hover:bg-green-500 dark:hover:border-green-400"
              >
                <h3 className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-white sm:text-xl dark:group-hover:text-green-950">
                  {s.title}
                </h3>
                <p className="mt-[0.6rem] text-base leading-relaxed text-stone-700 transition-colors duration-200 dark:text-stone-300 group-hover:text-green-100 dark:group-hover:text-green-900 sm:leading-[1.725]">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-stone-200/80 bg-background px-4 py-16 dark:border-stone-800/80 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            How we work
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-2xl font-semibold tracking-tight text-foreground">
            A straightforward process from first call to launch.
          </p>
          <ol className="mt-[4.5rem] grid gap-12 sm:grid-cols-3 sm:gap-14">
            {steps.map((step, i) => (
              <li key={step.title} className="relative text-center sm:text-left">
                <span className="text-lg font-bold text-stone-400 dark:text-stone-500 sm:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-green-800 sm:text-3xl dark:text-green-400">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-stone-600 sm:text-xl dark:text-stone-400">
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
          className="mt-6 inline-flex min-h-[4.2rem] min-w-[12rem] items-center justify-center rounded-full bg-green-800 px-[2.8rem] text-base font-medium text-white transition-colors hover:bg-green-900 dark:bg-green-500 dark:text-green-950 dark:hover:bg-green-400"
        >
          Start a project
        </Link>
      </section>
    </div>
  );
}
