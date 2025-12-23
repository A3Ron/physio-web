import { ButtonLink } from "../components/Button";
import { Section } from "../components/Section";
import { siteConfig } from "../config/site";

export function Praxis() {
  const { practiceName, contact } = siteConfig;

  return (
    <Section
      id="praxis"
      title="Praxis & Lage"
      subtitle={`Besuchen Sie uns in unserer modernen Praxis in ${contact.address.city} am Zürichsee.`}
      background="surface"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Praxis Information */}
        <div className="space-y-6">
          {/* Address Card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-text">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Adresse
            </h3>
            <address className="not-italic leading-relaxed text-text-muted">
              <p className="font-medium text-text">{practiceName}</p>
              <p>{contact.address.street}</p>
              <p>
                {contact.address.zip} {contact.address.city}
              </p>
              <p>
                {contact.address.region}, {contact.address.country}
              </p>
            </address>
            <div className="mt-4">
              <ButtonLink href={contact.mapLink} variant="outline" size="sm">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Route planen
              </ButtonLink>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-text">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Öffnungszeiten
            </h3>
            <ul className="space-y-2 text-text-muted">
              {contact.openingHours.map((schedule) => (
                <li key={schedule.days} className="flex justify-between">
                  <span>{schedule.days}</span>
                  <span className="font-medium text-text">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick Info */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-text">
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
              Kontakt
            </h3>
            <div className="space-y-2 text-text-muted">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <span>Telefon:</span>
                <span className="font-medium text-text">{contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <span>E-Mail:</span>
                <span className="font-medium text-text">{contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-secondary to-primary/5 shadow-sm lg:aspect-square">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <svg
                  className="mb-4 h-16 w-16 text-primary/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="mb-4 text-text-muted">Finden Sie uns ganz einfach mit Google Maps</p>
                <ButtonLink href={contact.mapLink} variant="primary" size="sm">
                  In Google Maps öffnen
                </ButtonLink>
              </div>
            </div>

            {/* Accessibility Notice */}
            <p className="mt-4 text-center text-sm text-text-muted">
              Unsere Praxis ist barrierefrei zugänglich. Parkplätze sind in der Nähe vorhanden.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
