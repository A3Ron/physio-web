import { useState } from "react";
import { siteConfig } from "../config/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <nav
        className="container-width mx-auto flex items-center justify-between px-4 py-4 md:px-6"
        aria-label="Hauptnavigation"
      >
        {/* Logo / Practice Name */}
        <a
          href="#home"
          className="text-xl font-bold text-primary transition-colors hover:text-primary-dark"
          aria-label={`${siteConfig.practiceName} - Startseite`}
        >
          {siteConfig.practiceName}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark md:block"
        >
          Termin anfragen
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-gray-100 md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Menü schliessen" : "Menü öffnen"}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white px-4 py-4 md:hidden"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-text-muted transition-colors hover:bg-gray-50 hover:text-primary"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#kontakt"
                className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                onClick={closeMenu}
              >
                Termin anfragen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
