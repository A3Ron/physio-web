import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-gray-100 bg-white p-6 shadow-sm ${
        hover ? "transition-shadow duration-300 hover:shadow-md" : ""
      } ${className}`}
    >
      {children}
    </article>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function CardTitle({ children, as: Component = "h3", className = "" }: CardTitleProps) {
  return <Component className={`font-semibold text-text ${className}`}>{children}</Component>;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`text-text-muted ${className}`}>{children}</div>;
}
