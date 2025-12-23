import { ButtonLink } from "../components/Button";
import { siteConfig } from "../config/site";

export function Hero() {
  const { practiceName, tagline, description, contact } = siteConfig;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-gradient-to-br from-secondary via-white to-white pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/5" />
      </div>

      <div className="container-width relative mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 id="hero-heading" className="mb-6 text-balance leading-tight">
              <span className="text-primary">{practiceName}</span>
              <br />
              <span className="text-text">{tagline}</span>
            </h1>

            <p className="mb-8 text-balance text-lg leading-relaxed text-text-muted md:text-xl">
              {description}
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#kontakt" size="lg">
                Termin anfragen
              </ButtonLink>
              <ButtonLink href="#angebot" variant="outline" size="lg">
                Unsere Leistungen
              </ButtonLink>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col gap-3 text-text-muted sm:flex-row sm:gap-6">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <svg
                  className="h-5 w-5"
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
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <svg
                  className="h-5 w-5"
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
                <span>{contact.email}</span>
              </a>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-xl">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-24 w-24 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p className="mt-4 text-sm text-text-muted">Praxis-Bild</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-primary/10" />
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
