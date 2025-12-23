import { siteConfig } from "../config/site";

export function Rechtliches() {
  const { legal, practiceName, contact } = siteConfig;

  // Replace placeholders in legal content with actual values
  const replaceContactPlaceholders = (content: string): string => {
    return content
      .replace("[Praxisname]", practiceName)
      .replace("[Strasse und Hausnummer]", contact.address.street)
      .replace("[PLZ]", contact.address.zip)
      .replace("[Ort]", contact.address.city)
      .replace("[Telefonnummer]", contact.phoneDisplay)
      .replace("[E-Mail-Adresse]", contact.email)
      .replace("[Name der verantwortlichen Person]", "Verantwortliche Person");
  };

  return (
    <>
      {/* Impressum */}
      <section
        id="impressum"
        className="section-padding bg-surface"
        aria-labelledby="impressum-heading"
      >
        <div className="container-width mx-auto">
          <h2 id="impressum-heading" className="mb-8 text-text">
            {legal.impressum.title}
          </h2>
          <article
            className="prose prose-slate max-w-none"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Legal content is from trusted config
            dangerouslySetInnerHTML={{
              __html: replaceContactPlaceholders(legal.impressum.content),
            }}
          />
        </div>
      </section>

      {/* Datenschutz */}
      <section
        id="datenschutz"
        className="section-padding bg-white"
        aria-labelledby="datenschutz-heading"
      >
        <div className="container-width mx-auto">
          <h2 id="datenschutz-heading" className="mb-8 text-text">
            {legal.datenschutz.title}
          </h2>
          <article
            className="prose prose-slate max-w-none [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-text-muted"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Legal content is from trusted config
            dangerouslySetInnerHTML={{
              __html: replaceContactPlaceholders(legal.datenschutz.content),
            }}
          />
        </div>
      </section>
    </>
  );
}
