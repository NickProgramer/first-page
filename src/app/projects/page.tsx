import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected work — Arcline Studio",
  description:
    "Example engagements — from local service brands to B2B teams modernizing their first impression.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 px-4 py-12 dark:bg-zinc-950 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Selected work
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A few example engagements — from local service brands to B2B teams
          modernizing their first impression.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col rounded-2xl border border-zinc-200/80 bg-background p-6 shadow-sm dark:border-zinc-800/80"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {project.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
