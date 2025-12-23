import { ButtonLink } from "../components/Button";
import { FadeInView, motion, staggerContainer, staggerItem } from "../components/Motion";
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
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Address Card */}
          <motion.div
            variants={staggerItem}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
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
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            variants={staggerItem}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
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
          </motion.div>

          {/* Contact Quick Info */}
          <motion.div
            variants={staggerItem}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
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
          </motion.div>
        </motion.div>

        {/* Google Maps Embed */}
        <FadeInView className="relative" delay={0.2}>
          <div className="sticky top-24">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 shadow-sm lg:aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.8!2d8.5975!3d47.2559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa94e9d11c7a1%3A0x0!2sEisenhofstrasse%202%2C%208810%20Horgen!5e0!3m2!1sde!2sch!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rumpfwerk Standort - Eisenhofstrasse 2, 8810 Horgen"
                className="h-full w-full"
              />
            </div>

            {/* Quick action below map */}
            <div className="mt-4 flex flex-col items-center gap-2 text-center">
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                In Google Maps öffnen
              </ButtonLink>
              <p className="text-sm text-text-muted">
                Barrierefrei zugänglich · Parkplätze in der Nähe
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </Section>
  );
}
