import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { motion, staggerContainer, staggerItem } from "../components/Motion";
import { Section } from "../components/Section";
import { siteConfig } from "../config/site";

export function Team() {
  const { team, practiceName } = siteConfig;

  return (
    <Section
      id="team"
      title="Unser Team"
      subtitle={`Lernen Sie das Team von ${practiceName} kennen – erfahrene Therapeuten mit Leidenschaft für Ihre Gesundheit.`}
      background="white"
    >
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {team.map((member) => (
          <motion.div key={member.id} variants={staggerItem}>
            <Card className="h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Profile Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-primary/10">
                <div className="flex h-full items-center justify-center">
                  <svg
                    className="h-20 w-20 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <CardHeader>
                <CardTitle as="h3" className="text-xl">
                  {member.name}
                </CardTitle>
                <p className="text-sm font-medium text-primary">{member.role}</p>
              </CardHeader>

              <CardContent>
                <p className="mb-4 text-sm leading-relaxed">{member.bio}</p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-2">
                  {member.qualifications.map((qual) => (
                    <span
                      key={qual}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary"
                    >
                      {qual}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
