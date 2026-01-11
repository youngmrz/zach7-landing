# zach7 Landing Page

Beautiful landing page for zach7.dev built with modern web technologies.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Shadcn UI** (radix-nova style) - Beautiful, accessible components
- **Lucide Icons** - Icon library

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js settings
5. Configure your domain:
   - Go to Project Settings → Domains
   - Add `zach7.dev` as a custom domain
   - Follow Vercel's instructions to update DNS records in Cloudflare

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Domain Configuration

This project is designed to be deployed at **zach7.dev**.

### Cloudflare DNS Setup

1. Log in to Cloudflare
2. Select your domain `zach7.dev`
3. Add the DNS records provided by Vercel:
   - Type: `CNAME`
   - Name: `@` (or `www`)
   - Target: `cname.vercel-dns.com`

## Project Structure

```
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles with Tailwind
├── components/
│   └── ui/               # Shadcn UI components
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Features

- 🎨 Modern, clean design
- 🌓 Dark mode support (system preference)
- 📱 Fully responsive
- ♿ Accessible components
- ⚡ Optimized performance
- 🚀 Server components for faster loads

## Customization

### Adding Projects

Edit `app/page.tsx` to add more project cards to the "Featured Projects" section.

### Updating Content

All content is in `app/page.tsx`. Update the hero text, features, or footer links directly there.

### Styling

- Global styles: `app/globals.css`
- Component variants: See individual component files in `components/ui/`
- Tailwind config: Built into CSS with Tailwind 4

## License

© 2026 zach7. All rights reserved.
