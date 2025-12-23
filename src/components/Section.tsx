import type { ReactNode } from "react";
import { FadeInView } from "./Motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "surface" | "secondary";
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-background",
    surface: "bg-surface",
    secondary: "bg-secondary",
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[background]} ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="container-width mx-auto">
        {(title || subtitle) && (
          <FadeInView className="mb-12 text-center md:mb-16">
            {title && (
              <h2 id={`${id}-heading`} className="mb-4 text-balance text-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-balance text-lg text-text-muted">{subtitle}</p>
            )}
          </FadeInView>
        )}
        {children}
      </div>
    </section>
  );
}
