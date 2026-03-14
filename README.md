# Abhishek Singh — Portfolio Website

> A personal portfolio website built with React + Vite, hosted on GitHub Pages.

## 🚀 Live Demo

[https://akkiverse.github.io](https://akkiverse.github.io)

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router v6 (HashRouter) | Client-side routing |
| Lucide React | Icons |
| gh-pages | Deployment |

## 📦 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
git clone https://github.com/akkiverse/akkiverse.github.io.git
cd akkiverse.github.io
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` first (via `predeploy`), then pushes the `dist/` folder to the `gh-pages` branch automatically.

## 🗂️ Project Structure

```
akkiverse.github.io/
├── public/
│   ├── .nojekyll               # Prevents GitHub Pages from ignoring _prefixed files
│   ├── favicon.svg
│   └── Resume_Abhishek_Singh.pdf
├── src/
│   ├── assets/                 # Static images and media
│   ├── components/
│   │   ├── sections/           # Page section components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                 # Reusable atomic components
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── ScrollProgressBar.tsx
│   │       └── SocialIcon.tsx
│   ├── data/
│   │   └── portfolio.ts        # ✏️ All personal content lives here
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   ├── useTypewriter.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useScrollSpy.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## ✏️ Customization

**All personal content lives in `src/data/portfolio.ts`.**

To update your portfolio, edit only that file:

- `meta` — name, tagline, roles, email, location, resume URL
- `social` — GitHub, LinkedIn, Twitter, email links
- `about` — bio paragraphs, stats, current focus
- `skills` — grouped skill categories with tech names
- `experience` — work history with achievements and tech
- `projects` — projects with descriptions, links, and stats

No JSX changes needed for content updates.

### Resume

Place your resume PDF at `public/Resume_Abhishek_Singh.pdf`.  
The download link in the site points to this file automatically via `portfolio.meta.resumeUrl`.

### Profile Photo

To add a profile photo, place it in `public/` or `src/assets/` and reference it in the `About` section component. The current implementation uses a styled text avatar.

## ⚙️ GitHub Pages Setup

1. Set `base: '/'` in `vite.config.ts` (already configured for root domain `username.github.io`)
2. Set `homepage` in `package.json` to your GitHub Pages URL
3. Ensure `.nojekyll` exists in `public/` (already included)
4. Run `npm run deploy` — this pushes to the `gh-pages` branch
5. In GitHub repo settings → Pages → set source to `gh-pages` branch

> **Note:** For `username.github.io` repos (not project repos), the `base` should be `'/'`. For project repos like `username.github.io/portfolio`, set `base: '/portfolio/'`.

## ✅ Pre-deployment Checklist

- [ ] Updated all content in `src/data/portfolio.ts`
- [ ] Resume PDF placed in `public/`
- [ ] Social links verified
- [ ] `npm run build` passes with zero errors
- [ ] `npm run lint` passes with zero warnings
- [ ] Tested on mobile viewport
- [ ] Tested keyboard navigation

## 📄 License

MIT © Abhishek Singh
