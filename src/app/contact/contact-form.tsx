"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { ok: false };

const inputClass =
  "mt-1 w-full rounded-lg border border-stone-300 bg-background px-3 py-2 text-sm text-foreground outline-none ring-offset-background placeholder:text-stone-400 focus:border-green-700 focus:ring-2 focus:ring-green-700/20 dark:border-stone-700 dark:focus:border-green-400 dark:focus:ring-green-400/20";

const labelClass = "text-sm font-medium text-foreground";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="py-4 text-center" role="status">
        <p className="text-lg font-semibold text-foreground">
          Thanks — we&apos;ll be in touch.
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          We typically reply within one business day with next steps.
        </p>
      </div>
    );
  }

  const err = state.fieldErrors;

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={inputClass}
          aria-invalid={err?.name ? true : undefined}
          aria-describedby={err?.name ? "name-error" : undefined}
        />
        {err?.name ? (
          <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {err.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
          aria-invalid={err?.email ? true : undefined}
          aria-describedby={err?.email ? "email-error" : undefined}
        />
        {err?.email ? (
          <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {err.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company <span className="font-normal text-zinc-500">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="inquiryType" className={labelClass}>
          What can we help with?
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          defaultValue=""
          className={inputClass}
          aria-invalid={err?.inquiryType ? true : undefined}
          aria-describedby={err?.inquiryType ? "inquiry-error" : undefined}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="New website">New website</option>
          <option value="Redesign">Redesign</option>
          <option value="Ongoing support">Ongoing support</option>
        </select>
        {err?.inquiryType ? (
          <p id="inquiry-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {err.inquiryType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Timeline, must-haves, link to your current site…"
          aria-invalid={err?.message ? true : undefined}
          aria-describedby={err?.message ? "message-error" : undefined}
        />
        {err?.message ? (
          <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {err.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-800 text-sm font-medium text-white transition-colors hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-green-500 dark:text-green-950 dark:hover:bg-green-400 sm:w-auto sm:min-w-[160px] sm:px-8"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
