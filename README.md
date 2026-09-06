# Bilal Ahmed | DevOps Engineer Portfolio

Professional personal portfolio for Bilal Ahmed, focused on cloud infrastructure, DevSecOps, Kubernetes, CI/CD, and observability.

The site presents practical infrastructure projects, technical skill areas, a career journey, education, case-study details, and direct contact links in a dark terminal-inspired interface.

## Highlights

- Responsive single-page portfolio with mobile navigation
- Terminal-style DevOps hero and infrastructure visuals
- Data-driven project and skill cards
- Case-study modal for project architecture, implementation, reliability, and monitoring details
- Project previews for CI/CD pipelines, Kubernetes resources, and observability workflows
- Resume viewing and download actions
- GitHub, LinkedIn, email, and WhatsApp contact links
- SEO title, description, and Open Graph metadata

## Projects Covered

- DevOps Cloud Infrastructure & CI/CD
- Kubernetes Deployment & Administration
- CI/CD Kubernetes Deployment
- Kubernetes Observability & Monitoring

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app is available at the local URL printed by Vite.

## Validation

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── SectionHeading.tsx
│   └── SkillCard.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
├── App.tsx
├── index.css
└── main.tsx
```

The provided resume is served from `public/BILAL AHMED DevOps.pdf`. Replace that file when updating the resume while keeping the same filename, or update the links in `src/App.tsx`.

## Deployment

The project is a standard Vite application and can be deployed to Vercel or another static hosting provider using the existing repository configuration.

For Vercel, use:

- Build command: `npm run build`
- Output directory: `dist`
