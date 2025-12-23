# PhysioZentrum Horgen – Website

A production-ready, SEO-optimized marketing website for a physiotherapy practice in Horgen, Switzerland.

Built with **Vite + React + TypeScript + Tailwind CSS**.

## Features

- ✅ **Fast & Lightweight** – Minimal dependencies, optimized build
- ✅ **SEO-Optimized** – Proper meta tags, semantic HTML, sitemap, robots.txt
- ✅ **Local SEO** – Optimized for "Physiotherapie Horgen" searches
- ✅ **Fully Responsive** – Mobile-first design
- ✅ **Accessible** – ARIA labels, focus states, sufficient contrast
- ✅ **Easy Customization** – Single config file for all branding & content
- ✅ **Theme System** – CSS variables for easy color scheme changes

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [Yarn](https://yarnpkg.com/) package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd physio-horgen

# Install dependencies
yarn install

# Start development server
yarn dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
yarn build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `yarn dev`     | Start development server             |
| `yarn build`   | Build for production                 |
| `yarn preview` | Preview production build locally     |
| `yarn lint`    | Run Biome linter                     |
| `yarn format`  | Format code with Biome               |

## Customization

All customization is done in a single configuration file:

📁 **`src/config/site.ts`**

### Practice Information

```typescript
export const siteConfig = {
  practiceName: "PhysioZentrum Horgen",
  tagline: "Ihre Gesundheit in besten Händen",
  // ...
};
```

### Contact Details

```typescript
contact: {
  email: "info@physio-horgen.ch",
  phone: "+41 44 123 45 67",
  address: {
    street: "Seestrasse 123",
    zip: "8810",
    city: "Horgen",
    // ...
  },
}
```

### Color Scheme

Colors are defined as CSS variables in the config and applied via Tailwind:

```typescript
colors: {
  primary: "#0d9488",      // Main brand color
  primaryDark: "#0f766e",  // Hover states
  secondary: "#f0fdfa",    // Light backgrounds
  accent: "#14b8a6",       // Accent color
  background: "#ffffff",   // Page background
  surface: "#f8fafc",      // Card backgrounds
  text: "#1e293b",         // Main text
  textMuted: "#64748b",    // Secondary text
}
```

To change colors, simply update the values in `src/config/site.ts`. The CSS variables are defined in `src/styles/globals.css`.

### Services

Add, remove, or modify services in the `services` array:

```typescript
services: [
  {
    id: "manuelle-therapie",
    title: "Manuelle Therapie",
    description: "...",
    icon: "hands", // Available: hands, activity, heart, shield, move, check
  },
  // ...
]
```

### Team Members

Update team members in the `team` array:

```typescript
team: [
  {
    id: "anna-mueller",
    name: "Anna Müller",
    role: "Leitende Physiotherapeutin",
    qualifications: ["BSc Physiotherapie", "..."],
    bio: "...",
    image: "/team/placeholder-1.jpg",
  },
  // ...
]
```

### Legal Pages

Update legal content (Impressum, Datenschutz) in the `legal` object. The placeholders like `[Praxisname]` will be automatically replaced with actual values.

### Contact Form

Configure the form submission endpoint:

```typescript
form: {
  endpoint: "https://formspree.io/f/your-form-id",
  successMessage: "...",
  errorMessage: "...",
}
```

**Supported form providers:**
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Getform](https://getform.io/)
- Any endpoint accepting JSON POST requests

## SEO Configuration

### Meta Tags

Update SEO settings in `src/config/site.ts`:

```typescript
seo: {
  siteUrl: "https://physio-horgen.ch",
  title: "Physiotherapie Horgen | PhysioZentrum Horgen",
  defaultDescription: "...",
  keywords: ["Physiotherapie Horgen", "..."],
  ogImage: "/og-image.jpg",
}
```

### Files to Update for Production

1. **`index.html`** – Update meta tags if needed
2. **`public/robots.txt`** – Update sitemap URL
3. **`public/sitemap.xml`** – Update all URLs and dates
4. **`public/og-image.jpg`** – Add your Open Graph image (1200x630px recommended)

### Local SEO Checklist

- ✅ Practice name + city in title and headings
- ✅ Full address visible in footer and contact section
- ✅ Phone number and email prominently displayed
- ✅ Geo meta tags for Switzerland/Zürich region
- ✅ Structured address data
- ✅ Google Maps link (no embedded iframe for privacy)

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your repository
4. Vercel auto-detects Vite – just click "Deploy"

### Environment Variables (if needed)

If using environment variables for the form endpoint:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., `VITE_FORM_ENDPOINT`)

## Project Structure

```
physio-horgen/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Input.tsx
│   │   ├── Layout.tsx
│   │   ├── Section.tsx
│   │   └── TextArea.tsx
│   ├── config/
│   │   └── site.ts        # ⭐ Main configuration file
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Angebot.tsx
│   │   ├── Team.tsx
│   │   ├── Praxis.tsx
│   │   ├── Kontakt.tsx
│   │   └── Rechtliches.tsx
│   ├── styles/
│   │   └── globals.css    # Tailwind + CSS variables
│   ├── App.tsx
│   └── main.tsx
├── biome.json             # Biome linter/formatter config
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

## Adding Images

### Team Photos

1. Add images to `public/team/` directory
2. Update the `image` path in the team member config:

```typescript
{
  name: "Anna Müller",
  image: "/team/anna-mueller.jpg",
}
```

### Hero/Practice Images

Add images to `public/` and reference them in the components.

**Recommended image sizes:**
- Team photos: 400x300px (4:3 ratio)
- Hero image: 800x600px
- OG image: 1200x630px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private – All rights reserved.

---

Built with ❤️ for physiotherapy practices in Switzerland.
