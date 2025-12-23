/**
 * Central configuration file for the entire website.
 * All practice information, branding, and content can be changed here.
 */

export const siteConfig = {
  // ============================================
  // PRACTICE INFORMATION
  // ============================================
  practiceName: "Rumpfwerk",
  tagline: "Ihre Gesundheit in besten Händen",
  description:
    "Professionelle Physiotherapie in Horgen am Zürichsee. Individuelle Behandlungen, erfahrene Therapeuten und modernste Methoden für Ihre Genesung.",

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    email: "info@physio-horgen.ch",
    phone: "+41 44 123 45 67",
    phoneDisplay: "044 123 45 67",
    address: {
      street: "Seestrasse 123",
      zip: "8810",
      city: "Horgen",
      region: "Zürich",
      country: "Schweiz",
    },
    openingHours: [
      { days: "Montag – Freitag", hours: "08:00 – 19:00" },
      { days: "Samstag", hours: "09:00 – 13:00" },
      { days: "Sonntag", hours: "Geschlossen" },
    ],
    mapLink: "https://maps.google.com/?q=Seestrasse+123,+8810+Horgen",
  },

  // ============================================
  // FORM CONFIGURATION
  // ============================================
  form: {
    // Change this to your form submission endpoint (e.g., Formspree, Netlify Forms, etc.)
    endpoint: "https://formspree.io/f/your-form-id",
    successMessage: "Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.",
    errorMessage:
      "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
  },

  // ============================================
  // SEO & META
  // ============================================
  seo: {
    siteUrl: "https://rumpfwerk.ch",
    title: "Physiotherapie Horgen | Rumpfwerk",
    titleTemplate: "%s | Rumpfwerk",
    defaultDescription:
      "Physiotherapie Horgen – Professionelle Behandlung am Zürichsee. Manuelle Therapie, Sportphysiotherapie, Rehabilitation. Jetzt Termin anfragen!",
    keywords: [
      "Physiotherapie Horgen",
      "Physio Horgen",
      "Physiotherapeut Horgen",
      "Manuelle Therapie Zürichsee",
      "Sportphysiotherapie Horgen",
      "Rehabilitation Horgen",
      "Physiotherapie Zürich",
    ],
    ogImage: "/og-image.jpg",
    twitterHandle: "@physiohorgen",
  },

  // ============================================
  // COLOR SCHEME (CSS Variables)
  // Change these values to update the entire site's color scheme
  // ============================================
  colors: {
    primary: "#664930", // Warmes Braun - main brand color (Buttons)
    primaryDark: "#523A26", // Darker brown for hover states
    secondary: "#FFDBBB", // Warmes Pfirsich/Beige
    accent: "#997E67", // Sand-Akzent
    background: "#CCBEB1", // Warmes Beige background
    surface: "#FFF3EB", // Helle Karten
    text: "#664930", // Warmes Braun - main text
    textMuted: "#8C6E55", // Secondary/muted text
  },

  // ============================================
  // SERVICES / ANGEBOT
  // ============================================
  services: [
    {
      id: "manuelle-therapie",
      title: "Manuelle Therapie",
      description:
        "Gezielte Handgriffe zur Behandlung von Funktionsstörungen des Bewegungsapparates. Wir lösen Blockaden und verbessern die Beweglichkeit Ihrer Gelenke.",
      icon: "hands",
    },
    {
      id: "sportphysiotherapie",
      title: "Sportphysiotherapie",
      description:
        "Spezialisierte Behandlung für Sportler aller Leistungsstufen. Von der Prävention über die Rehabilitation bis zur Leistungsoptimierung.",
      icon: "activity",
    },
    {
      id: "rehabilitation",
      title: "Rehabilitation",
      description:
        "Professionelle Nachbehandlung nach Operationen und Verletzungen. Wir begleiten Sie auf dem Weg zurück in den Alltag.",
      icon: "heart",
    },
    {
      id: "schmerztherapie",
      title: "Schmerztherapie",
      description:
        "Ganzheitliche Behandlung akuter und chronischer Schmerzen. Moderne Techniken für nachhaltige Schmerzlinderung.",
      icon: "shield",
    },
    {
      id: "bewegungstherapie",
      title: "Bewegungstherapie",
      description:
        "Individuell angepasste Übungsprogramme zur Kräftigung, Stabilisierung und Verbesserung Ihrer Bewegungsmuster.",
      icon: "move",
    },
    {
      id: "praevention",
      title: "Prävention",
      description:
        "Vorbeugende Massnahmen und Beratung, um Beschwerden gar nicht erst entstehen zu lassen. Investieren Sie in Ihre Gesundheit.",
      icon: "check",
    },
  ],

  // ============================================
  // TEAM MEMBERS
  // ============================================
  team: [
    {
      id: "anna-mueller",
      name: "Anna Müller",
      role: "Leitende Physiotherapeutin",
      qualifications: ["BSc Physiotherapie", "Manuelle Therapie OMT", "Dry Needling"],
      bio: "Anna verfügt über 12 Jahre Erfahrung in der Physiotherapie und leitet unser Praxisteam. Ihr Schwerpunkt liegt auf der manuellen Therapie und der Behandlung von Wirbelsäulenbeschwerden.",
      image: "/team/placeholder-1.jpg",
    },
    {
      id: "marco-weber",
      name: "Marco Weber",
      role: "Sportphysiotherapeut",
      qualifications: ["BSc Physiotherapie", "Sportphysiotherapie SPT", "Triggerpunkt-Therapie"],
      bio: "Marco ist unser Experte für Sportverletzungen und betreut Athleten vom Hobbysportler bis zum Profi. Er verbindet fundiertes Fachwissen mit praktischer Erfahrung aus dem Leistungssport.",
      image: "/team/placeholder-2.jpg",
    },
    {
      id: "lisa-bernhard",
      name: "Lisa Bernhard",
      role: "Physiotherapeutin",
      qualifications: ["BSc Physiotherapie", "Neurologische Rehabilitation", "Lymphdrainage"],
      bio: "Lisa hat sich auf die neurologische Rehabilitation spezialisiert und unterstützt Patienten nach Schlaganfall oder bei chronischen Erkrankungen. Ihre einfühlsame Art schafft Vertrauen.",
      image: "/team/placeholder-3.jpg",
    },
  ],

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: [
    { id: "home", label: "Home", href: "#home" },
    { id: "angebot", label: "Angebot", href: "#angebot" },
    { id: "team", label: "Team", href: "#team" },
    { id: "praxis", label: "Praxis & Lage", href: "#praxis" },
    { id: "kontakt", label: "Kontakt", href: "#kontakt" },
  ],

  // ============================================
  // LEGAL PAGES (Placeholders)
  // ============================================
  legal: {
    impressum: {
      title: "Impressum",
      content: `
        <h2>Angaben gemäss Schweizer Recht</h2>
        <p><strong>Betreiber der Website:</strong></p>
        <p>
          [Praxisname]<br />
          [Strasse und Hausnummer]<br />
          [PLZ] [Ort]<br />
          Schweiz
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          Telefon: [Telefonnummer]<br />
          E-Mail: [E-Mail-Adresse]
        </p>
        <p>
          <strong>Vertretungsberechtigte Person(en):</strong><br />
          [Name der verantwortlichen Person]
        </p>
        <p>
          <strong>Berufsbezeichnung:</strong> Physiotherapeut/in<br />
          <strong>Zuständige Aufsichtsbehörde:</strong> Gesundheitsdirektion Kanton Zürich
        </p>
        <p>
          <strong>Haftungsausschluss:</strong><br />
          Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, 
          Zuverlässigkeit und Vollständigkeit der Informationen.
        </p>
      `,
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      content: `
        <h2>1. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten 
          daher ausschliesslich auf Grundlage der gesetzlichen Bestimmungen (DSG, DSGVO).
        </p>
        
        <h2>2. Kontaktaufnahme</h2>
        <p>
          Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, 
          werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von 
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        
        <h2>3. Datenspeicherung</h2>
        <p>
          Wir weisen darauf hin, dass zum Zweck der Vertragsabwicklung und zur weiteren 
          Bearbeitung Ihrer Anfragen Ihre persönlichen Daten gespeichert werden.
        </p>
        
        <h2>4. Cookies</h2>
        <p>
          Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch 
          notwendige Cookies eingesetzt.
        </p>
        
        <h2>5. Ihre Rechte</h2>
        <p>
          Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, 
          Einschränkung, Datenübertragbarkeit und Widerspruch zu.
        </p>
        
        <h2>6. Kontakt</h2>
        <p>
          Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten 
          wenden Sie sich bitte an die im Impressum angegebene Adresse.
        </p>
      `,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
