export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-stone-200/80 py-8 dark:border-stone-800/80">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-stone-600 dark:text-stone-400 sm:px-6">
        <p>
          © {year} Pine Creative. Built for businesses that need a site
          they&apos;re proud to share.
        </p>
        <p className="mt-2">
          <a
            href="mailto:hello@pinecreative.co"
            className="font-medium text-green-800 underline-offset-4 hover:underline dark:text-green-300"
          >
            hello@pinecreative.co
          </a>
        </p>
      </div>
    </footer>
  );
}
