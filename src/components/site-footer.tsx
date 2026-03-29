export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200/80 py-8 dark:border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-zinc-600 dark:text-zinc-400 sm:px-6">
        <p>
          © {year} Arcline Studio. Built for businesses that need a site
          they&apos;re proud to share.
        </p>
        <p className="mt-2">
          <a
            href="mailto:hello@arcline.studio"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            hello@arcline.studio
          </a>
        </p>
      </div>
    </footer>
  );
}
