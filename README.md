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
```

This creates a static export in the `out/` directory.

## Deployment

### Cloudflare Pages (Recommended)

This project is configured for **Cloudflare Pages** deployment.

**Quick Start:**
1. Push your code to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Use these build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Add `zach7.dev` as custom domain (automatic DNS since domain is on Cloudflare!)

**📖 [Full Deployment Guide](./CLOUDFLARE_DEPLOY.md)** - Step-by-step instructions with screenshots

**Why Cloudflare Pages?**
- ✅ Your domain is already on Cloudflare (no DNS changes needed)
- ✅ Unlimited projects on free tier
- ✅ Global CDN with 200+ edge locations
- ✅ Automatic HTTPS
- ✅ Instant deployments on every push

### Alternative: Vercel

You can also deploy to Vercel if preferred:

1. Push to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Add `zach7.dev` custom domain
4. Update Cloudflare DNS with Vercel's CNAME

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
