import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — Pine Creative",
  description:
    "Tell us about your site. We reply within one business day with next steps.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-background px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Tell us about your site
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
          Share your timeline, must-haves, and link to your current site (if
          any). We reply within one business day with next steps.
        </p>
        <div className="mt-10 rounded-2xl border border-stone-200/80 bg-background p-6 shadow-sm dark:border-stone-800/80 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
