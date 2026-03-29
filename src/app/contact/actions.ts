"use server";

type FieldErrors = Partial<
  Record<"name" | "email" | "message" | "inquiryType", string>
>;

export type ContactState =
  | { ok: true }
  | { ok: false; fieldErrors?: FieldErrors };

const inquiryOptions = ["New website", "Redesign", "Ongoing support"] as const;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const inquiryType = String(formData.get("inquiryType") ?? "").trim();

  const fieldErrors: FieldErrors = {};

  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    fieldErrors.email = "Please enter a valid email address.";
  if (!message) fieldErrors.message = "Please tell us a bit about your project.";
  if (!inquiryOptions.includes(inquiryType as (typeof inquiryOptions)[number]))
    fieldErrors.inquiryType = "Please select an inquiry type.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  if (process.env.NODE_ENV === "development") {
    // Stub: replace with Resend / email provider in production.
    console.log("Contact submission", {
      name,
      email,
      company: company || undefined,
      inquiryType,
      message,
    });
  }

  return { ok: true };
}
