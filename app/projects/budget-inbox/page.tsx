import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Sparkles, Mail, Zap, Database, Shield, Code2, Cpu, Cloud } from "lucide-react";
import Link from "next/link";

export default function BudgetInboxProject() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container relative mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="mr-1.5 h-3 w-3" />
              Active Project
            </Badge>

            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Budget-Inbox
            </h1>

            <p className="mb-4 text-2xl lg:text-3xl font-semibold text-foreground">
              Your bank shows $200.
              <br />
              Your budget shows every item.
            </p>

            <p className="mb-8 text-lg text-muted-foreground max-w-2xl">
              Automatically sync Amazon orders to YNAB as itemized split transactions.
              Built for real YNAB users who are tired of manual data entry.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.budgetinbox.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  Try Budget-Inbox
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#vision">
                  Learn More
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Full width accent section */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">The Problem</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                You check your bank: <span className="font-mono font-semibold text-foreground">"Amazon - $247.83"</span>
              </p>
              <p className="text-xl text-foreground">
                But what did you actually buy?
              </p>
              <p>
                Your bank has no idea. It's just a lump sum. Meanwhile, your email has the full order
                confirmation with every item, every price, everything that actually happened.
              </p>
              <p>
                You love YNAB. You want to track groceries separate from household items separate from electronics.
                But manually entering 15 items from that email? <span className="text-foreground font-semibold">15 minutes you'll never get back.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Bento Grid */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect once. Shop normally. Your YNAB budget fills itself in with perfect itemized transactions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Step 1 - Spans 2 columns on desktop */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground">Step 1</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold">We Watch Your Inbox</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect your Gmail account once. Our pub/sub service monitors for Amazon order confirmations 24/7.
                  No forwarding, no manual work—completely automatic.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 mb-6">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <div className="mb-2 flex items-center gap-3">
              <span className="text-sm font-semibold text-muted-foreground">Step 2</span>
            </div>
            <h3 className="mb-3 text-xl font-bold">AI Extracts & Categorizes</h3>
            <p className="text-muted-foreground">
              Claude AI parses every item and intelligently categorizes each one based on your YNAB setup.
            </p>
          </div>

          {/* Step 3 - Spans full width */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 ring-1 ring-primary/30">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-semibold text-primary">Step 3</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold">Perfect YNAB Entry</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A fully itemized split transaction appears in YNAB automatically. Every item in the right category.
                  Zero effort from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You See vs Behind the Scenes - Side by side */}
      <section className="bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Simple UX, Complex Engineering</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What You See */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">What You See</h3>
              </div>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</span>
                  <span className="text-muted-foreground">Connect Gmail & YNAB (one time)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</span>
                  <span className="text-muted-foreground">Shop on Amazon like normal</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</span>
                  <span className="text-muted-foreground">Itemized transactions appear in YNAB</span>
                </li>
              </ol>
            </div>

            {/* Behind the Scenes */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Behind the Scenes</h3>
              </div>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Gmail pub/sub monitors inbox 24/7</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Amazon order detected instantly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Inngest triggers background processing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Cheerio parses complex HTML email</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Claude AI categorizes each item</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">YNAB API creates split transaction</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Webhook confirms, database logs</span>
                </li>
              </ol>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-primary">
                  13 integrations · 23 environment variables · Zero effort from you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Modern grid */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Built With Modern Tools</h2>
          <p className="text-lg text-muted-foreground">
            A powerful stack managing 13 service integrations seamlessly
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Frontend */}
          <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <Code2 className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Frontend</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>Next.js 16</div>
              <div>React 19</div>
              <div>TypeScript</div>
              <div>Tailwind CSS 4</div>
            </div>
          </div>

          {/* Database */}
          <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <Database className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Database</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>PostgreSQL</div>
              <div>Supabase</div>
              <div>Prisma ORM</div>
            </div>
          </div>

          {/* Auth & Security */}
          <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <Shield className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Auth</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>Clerk</div>
              <div>OAuth 2.0</div>
              <div>Gmail API</div>
              <div>YNAB API</div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <Cloud className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Infrastructure</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>Vercel</div>
              <div>Inngest</div>
              <div>Claude AI</div>
              <div>Stripe/Polar</div>
            </div>
          </div>
        </div>

        {/* Shields.io badges below */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" className="h-5" />
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" className="h-5" />
          <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" className="h-5" />
          <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" className="h-5" />
          <img src="https://img.shields.io/badge/Claude_AI-191919?style=flat-square&logo=anthropic&logoColor=white" alt="Claude" className="h-5" />
        </div>
      </section>

      {/* The Vision */}
      <section id="vision" className="bg-gradient-to-br from-primary/5 via-background to-background border-y border-border/40">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-center">The Vision</h2>

            <div className="mb-12 text-center">
              <p className="text-xl font-semibold text-foreground mb-4">
                Email captures what really happened. Your bank just shows a lump sum.
              </p>
              <p className="text-lg text-muted-foreground">
                Budget-Inbox started with Amazon because it's a real problem for real YNAB users (like me).
                But the same pattern exists everywhere.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-background/50 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-lg mb-2">More Retailers</h3>
                <p className="text-muted-foreground">
                  Target, Walmart, Costco, Instacart—anywhere you get a detailed email receipt but a lump sum bank transaction.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background/50 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-lg mb-2">Learning AI</h3>
                <p className="text-muted-foreground">
                  Claude learns from your corrections and gets better at matching your budget categories over time.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background/50 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-lg mb-2">Receipt Photos & PDFs</h3>
                <p className="text-muted-foreground">
                  Physical receipts? Email a photo. PDF statements? Forward them. Same itemization magic.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background/50 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-lg mb-2">Other Platforms</h3>
                <p className="text-muted-foreground">
                  The platform works for any budgeting system. YNAB today, Mint/EveryDollar/Actual tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 p-12">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Stop entering receipts manually
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Connect once. Shop normally. Your YNAB budget fills itself in with perfect itemized transactions.
            </p>
            <a href="https://www.budgetinbox.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Get Started with Budget-Inbox
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} zach7. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <a href="mailto:hello@zach7.dev" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
