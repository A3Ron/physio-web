import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Section } from "../components/Section";
import { siteConfig } from "../config/site";

// Icon component that renders different icons based on the icon name
function ServiceIcon({ icon }: { icon: string }) {
  const iconClasses = "h-8 w-8 text-primary";

  const icons: Record<string, JSX.Element> = {
    hands: (
      <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
    activity: (
      <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    heart: (
      <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    shield: (
      <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    move: (
      <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    check: (
      <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return icons[icon] || icons.check;
}

export function Angebot() {
  const { services, practiceName } = siteConfig;

  return (
    <Section
      id="angebot"
      title="Unser Angebot"
      subtitle={`Bei ${practiceName} bieten wir Ihnen ein breites Spektrum an physiotherapeutischen Behandlungen – individuell auf Ihre Bedürfnisse abgestimmt.`}
      background="surface"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col">
            <CardHeader className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <ServiceIcon icon={service.icon} />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-text-muted">
          Haben Sie Fragen zu unseren Leistungen?{" "}
          <a href="#kontakt" className="font-medium text-primary hover:underline">
            Kontaktieren Sie uns
          </a>{" "}
          – wir beraten Sie gerne.
        </p>
      </div>
    </Section>
  );
}
