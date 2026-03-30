import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200/80 bg-background/80 backdrop-blur-sm dark:border-stone-800/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground hover:opacity-80"
        >
          Pine Creative
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4" aria-label="Main">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-green-50 hover:text-green-900 dark:text-stone-300 dark:hover:bg-green-950/40 dark:hover:text-green-200 sm:px-3"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
