import { siteConfig } from "../config/site";

export function Footer() {
  const { practiceName, contact, navigation, seo } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-surface" role="contentinfo">
      <div className="container-width mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Practice Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">{practiceName}</h3>
            <p className="mb-4 text-sm text-text-muted">
              Professionelle Physiotherapie in Horgen am Zürichsee. Ihre Gesundheit liegt uns am
              Herzen.
            </p>
            {/* Local SEO: Full address in footer */}
            <address className="not-italic text-sm text-text-muted">
              <p>{contact.address.street}</p>
              <p>
                {contact.address.zip} {contact.address.city}
              </p>
              <p>
                {contact.address.region}, {contact.address.country}
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">Navigation</h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-sm text-text-muted transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">Kontakt</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="transition-colors hover:text-primary"
                  aria-label={`Anrufen: ${contact.phoneDisplay}`}
                >
                  Tel: {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-primary"
                  aria-label={`E-Mail senden an ${contact.email}`}
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">Öffnungszeiten</h3>
            <ul className="space-y-1 text-sm text-text-muted">
              {contact.openingHours.map((schedule) => (
                <li key={schedule.days} className="flex justify-between gap-4">
                  <span>{schedule.days}</span>
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-text-muted">
            © {currentYear} {practiceName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#impressum"
              className="text-sm text-text-muted transition-colors hover:text-primary"
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="text-sm text-text-muted transition-colors hover:text-primary"
            >
              Datenschutz
            </a>
          </div>
        </div>

        {/* Hidden SEO text */}
        <p className="sr-only">
          {practiceName} – Physiotherapie Horgen, {contact.address.city}, {contact.address.region}.{" "}
          {seo.defaultDescription}
        </p>
      </div>
    </footer>
  );
}
