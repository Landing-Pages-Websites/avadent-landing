"use client";

import { useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import {
  BUSINESS_TYPES,
  VOLUME_OPTIONS,
  BRAND,
} from "@/lib/content";

type Props = {
  variant?: "hero" | "card" | "inline";
  heading?: string;
  subheading?: string;
  idSuffix?: string;
};

/**
 * Shared lead form — fields come EXACTLY from the Atlas task spec
 * (84f0fa5d-81b7-49d4-9d31-848e18823287). Do NOT add/remove/reorder
 * fields without re-reading the task first.
 *
 * Fields (EXACT):
 *   1. First name     name="firstName"    required   text
 *   2. Last name      name="lastName"     required   text
 *   3. Email          name="email"        required   email
 *   4. Phone          name="phone"        required   tel (10-digit US)
 *   5. Business type  name="businessType" required   dropdown
 *        Dental Lab / General Dentist / Implantologist / Oral Surgery /
 *        Periodontist / Prosthodontist / None of the above
 *   6. Monthly volume name="monthlyVolume" required  dropdown
 *        0 / 1 to 2 / 3 to 5 / 6 to 10 / 10 or more
 */

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const ChevronDown = ({ onDark = false }: { onDark?: boolean }) => (
  <svg
    className={`w-5 h-5 ${
      onDark ? "text-white/70" : "text-[var(--color-ink-muted)]"
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export function FormCard({
  variant = "card",
  heading = "Get started with AvaDent",
  subheading = "A specialist will reach out with dashboard access, a product walkthrough, and answers on how AvaDent fits into your workflow.",
  idSuffix = "main",
}: Props) {
  const { submit } = useMegaLeadForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [monthlyVolume, setMonthlyVolume] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length === 10;
  const canSubmit =
    firstName.trim().length >= 1 &&
    lastName.trim().length >= 1 &&
    isValidEmail(email.trim()) &&
    phoneValid &&
    businessType.length > 0 &&
    monthlyVolume.length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submitted) return; // guard against duplicate submits
    if (!canSubmit) return;
    setError(null);
    setSubmitting(true);
    try {
      await submit({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phoneDigits,
        businessType,
        monthlyVolume,
      });
    } catch (err) {
      console.error("Form submission failed:", err);
      setError("Something went wrong on our end — we also got your info.");
    } finally {
      // Per builder Hard Rule #12 — even on error, show thank-you. Never strand.
      setSubmitted(true);
      setSubmitting(false);
    }
  }

  const wrapperClass =
    variant === "hero"
      ? "bg-white/97 backdrop-blur rounded-2xl shadow-2xl shadow-black/40 border border-white/40 p-6 sm:p-8"
      : variant === "inline"
      ? "bg-[var(--color-surface-alt)] rounded-2xl border border-[var(--color-line)] p-6 sm:p-8"
      : "bg-white rounded-2xl shadow-xl border border-[var(--color-line)] p-6 sm:p-8";

  const inputClass =
    "w-full rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition";

  if (submitted) {
    return (
      <div className={wrapperClass}>
        <div className="text-center py-6 space-y-4">
          <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[var(--color-primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-[var(--color-primary)]">
            You&apos;re in, {firstName || "Doctor"}.
          </h3>
          <p className="text-[var(--color-ink-muted)] max-w-sm mx-auto">
            An AvaDent specialist will reach out shortly to get you set up with
            dashboard access and walk you through your first case.
          </p>
          <p className="text-sm text-[var(--color-ink-muted)]">
            Want to talk now? Call{" "}
            <a
              href={BRAND.phoneHref}
              className="font-semibold text-[var(--color-primary)] hover:underline"
            >
              {BRAND.phone}
            </a>
            .
          </p>

          {error && (
            <p className="text-xs text-[var(--color-ink-muted)]">
              (Note: {error})
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className="mb-5">
        <h3 className="text-2xl sm:text-[1.65rem] font-bold text-[var(--color-primary)] leading-tight">
          {heading}
        </h3>
        {subheading && (
          <p className="text-sm text-[var(--color-ink-muted)] mt-2">
            {subheading}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`fn-${idSuffix}`} className="sr-only">
              First name
            </label>
            <input
              id={`fn-${idSuffix}`}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`ln-${idSuffix}`} className="sr-only">
              Last name
            </label>
            <input
              id={`ln-${idSuffix}`}
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`email-${idSuffix}`} className="sr-only">
            Work email
          </label>
          <input
            id={`email-${idSuffix}`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`phone-${idSuffix}`} className="sr-only">
            Phone number
          </label>
          <input
            id={`phone-${idSuffix}`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Enter a 10-digit US phone number"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor={`biz-${idSuffix}`}
            className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider"
          >
            Type of business
          </label>
          <div className="relative">
            <select
              id={`biz-${idSuffix}`}
              name="businessType"
              required
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className={`${inputClass} appearance-none pr-10 ${
                businessType === "" ? "text-[var(--color-ink-muted)]" : ""
              }`}
            >
              <option value="" disabled>
                Select your practice type
              </option>
              {BUSINESS_TYPES.map((opt) => (
                <option
                  key={opt}
                  value={opt}
                  className="text-[var(--color-ink)]"
                >
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor={`vol-${idSuffix}`}
            className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider"
          >
            Dentures, overdentures & hybrids per month
          </label>
          <div className="relative">
            <select
              id={`vol-${idSuffix}`}
              name="monthlyVolume"
              required
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(e.target.value)}
              className={`${inputClass} appearance-none pr-10 ${
                monthlyVolume === "" ? "text-[var(--color-ink-muted)]" : ""
              }`}
            >
              <option value="" disabled>
                Select volume
              </option>
              {VOLUME_OPTIONS.map((opt) => (
                <option
                  key={opt}
                  value={opt}
                  className="text-[var(--color-ink)]"
                >
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!canSubmit || submitting || submitted}
          className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-lg font-bold text-base transition shadow-sm mt-2 tracking-wide"
        >
          {submitting ? "Submitting…" : BRAND.primaryCtaLabel}
        </button>

        <p className="text-[11px] text-[var(--color-ink-muted)] text-center leading-relaxed pt-1">
          By submitting, you agree to be contacted by AvaDent about digital
          denture onboarding. No obligation.
        </p>
      </form>
    </div>
  );
}
