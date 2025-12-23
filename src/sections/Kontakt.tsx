import { type FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { FadeInView } from "../components/Motion";
import { Section } from "../components/Section";
import { TextArea } from "../components/TextArea";
import { siteConfig } from "../config/site";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Kontakt() {
  const { practiceName, contact, form } = siteConfig;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [honeypot, setHoneypot] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie eine Nachricht ein.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, silently "succeed"
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(form.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleInputChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  return (
    <Section
      id="kontakt"
      title="Kontakt"
      subtitle="Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns auf Ihre Nachricht."
      background="secondary"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <FadeInView>
          <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-6 text-xl font-semibold text-text">Termin anfragen</h3>

            {status === "success" ? (
              <div
                className="rounded-lg bg-green-50 p-6 text-center"
                role="alert"
                aria-live="polite"
              >
                <svg
                  className="mx-auto mb-4 h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-green-800">{form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field - hidden from users, catches bots */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-4">
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    error={errors.name}
                    required
                    placeholder="Ihr vollständiger Name"
                    autoComplete="name"
                  />

                  <Input
                    label="E-Mail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    error={errors.email}
                    required
                    placeholder="ihre.email@beispiel.ch"
                    autoComplete="email"
                  />

                  <Input
                    label="Telefon (optional)"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    placeholder="079 123 45 67"
                    autoComplete="tel"
                  />

                  <TextArea
                    label="Ihre Nachricht"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    error={errors.message}
                    required
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder gewünschten Termin..."
                    rows={5}
                  />

                  {status === "error" && (
                    <div
                      className="rounded-lg bg-red-50 p-4 text-sm text-red-800"
                      role="alert"
                      aria-live="polite"
                    >
                      {form.errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full"
                    size="lg"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Wird gesendet...
                      </span>
                    ) : (
                      "Nachricht senden"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </FadeInView>

        {/* Contact Information */}
        <FadeInView delay={0.2}>
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-text">Direkter Kontakt</h3>
              <p className="mb-4 text-text-muted">
                Für dringende Anfragen erreichen Sie uns auch telefonisch:
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 rounded-lg bg-primary/5 p-4 transition-colors hover:bg-primary/10"
                >
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-text-muted">Telefon</p>
                    <p className="font-medium text-text">{contact.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 rounded-lg bg-primary/5 p-4 transition-colors hover:bg-primary/10"
                >
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-text-muted">E-Mail</p>
                    <p className="font-medium text-text">{contact.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-text">Besuchen Sie uns</h3>
              <address className="not-italic text-text-muted">
                <p className="font-medium text-text">{practiceName}</p>
                <p>{contact.address.street}</p>
                <p>
                  {contact.address.zip} {contact.address.city}
                </p>
              </address>
              <a
                href={contact.mapLink}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Route anzeigen
              </a>
            </div>

            {/* Opening Hours */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-text">Öffnungszeiten</h3>
              <ul className="space-y-2 text-text-muted">
                {contact.openingHours.map((schedule) => (
                  <li key={schedule.days} className="flex justify-between">
                    <span>{schedule.days}</span>
                    <span className="font-medium text-text">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInView>
      </div>
    </Section>
  );
}
