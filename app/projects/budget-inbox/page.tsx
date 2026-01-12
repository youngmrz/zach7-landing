import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Zap, Mail, DollarSign, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BudgetInboxProject() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-8 lg:py-12">
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 h-3 w-3" />
            Active Project
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Budget-Inbox
          </h1>
          <p className="mb-6 max-w-3xl text-xl text-muted-foreground lg:text-2xl">
            Automatically sync Amazon email receipts to YNAB as itemized split transactions.
            <br />
            Your bank shows $200. Your budget shows every item.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="https://www.budgetinbox.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Visit Budget-Inbox
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-foreground">The Problem</h2>
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                You check your bank: <strong className="text-foreground">"Amazon - $247.83"</strong>
                <br /><br />
                But what did you actually buy? Your bank has no idea. It's a lump sum.
                <br /><br />
                Meanwhile, your email has the full order confirmation with every item, every price, everything that actually happened.
                <br /><br />
                You love YNAB. You want to track groceries separate from household items separate from electronics.
                But manually entering 15 items from that order confirmation email? That's 15 minutes of tedious data entry you'll never get back.
                <br /><br />
                Most people give up and just record the lump sum. But then your budget categories are useless.
                How much did you <em>really</em> spend on groceries this month?
              </p>
            </CardContent>
          </Card>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-foreground">The Solution</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">1. We Watch Your Inbox</CardTitle>
                <CardDescription className="text-base">
                  Connect your Gmail. Our pub/sub service monitors for Amazon order confirmations automatically.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">2. AI Extracts & Categorizes</CardTitle>
                <CardDescription className="text-base">
                  When an order arrives, we parse every item, use Claude AI to intelligently categorize each one.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">3. Perfect YNAB Entry</CardTitle>
                <CardDescription className="text-base">
                  A fully itemized split transaction appears in YNAB automatically. Every item in the right category.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* The Complexity Behind Simplicity */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-foreground">The Complexity Behind Simplicity</h2>
          <Card className="border-border bg-card/50">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    What You See
                  </h3>
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Connect your Gmail & YNAB (one time)</li>
                    <li>2. Shop on Amazon like normal</li>
                    <li>3. Itemized transactions appear in YNAB automatically</li>
                  </ol>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    What Happens Behind the Scenes
                  </h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Gmail pub/sub monitors your inbox 24/7</li>
                    <li>2. Amazon order confirmation detected instantly</li>
                    <li>3. Inngest triggers background job processing</li>
                    <li>4. Cheerio parses Amazon's complex HTML email</li>
                    <li>5. Claude AI analyzes and categorizes each item</li>
                    <li>6. YNAB API creates itemized split transaction</li>
                    <li>7. Webhook confirms success, database logs everything</li>
                  </ol>
                  <p className="mt-4 text-sm text-primary font-medium">
                    13 service integrations. 23 environment variables. Zero effort from you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Built With Modern Tools</h2>

          <div className="space-y-8">
            {/* Frontend */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Frontend & Framework</h3>
              <div className="flex flex-wrap gap-3">
                <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
                <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
                <img src="https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn UI" />
              </div>
            </div>

            {/* Database */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Database & ORM</h3>
              <div className="flex flex-wrap gap-3">
                <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
                <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
              </div>
            </div>

            {/* Authentication */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Authentication & Security</h3>
              <div className="flex flex-wrap gap-3">
                <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
                <img src="https://img.shields.io/badge/OAuth_2.0-EB5424?style=for-the-badge&logo=oauth&logoColor=white" alt="OAuth" />
              </div>
            </div>

            {/* APIs & Integrations */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">External APIs & Services</h3>
              <div className="flex flex-wrap gap-3">
                <img src="https://img.shields.io/badge/Gmail_API-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail API" />
                <img src="https://img.shields.io/badge/YNAB_API-68B2E3?style=for-the-badge&logo=ynab&logoColor=white" alt="YNAB API" />
                <img src="https://img.shields.io/badge/Claude_AI-191919?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude AI" />
              </div>
            </div>

            {/* Background Jobs */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Background Processing</h3>
              <div className="flex flex-wrap gap-3">
                <img src="https://img.shields.io/badge/Inngest-000000?style=for-the-badge&logo=inngest&logoColor=white" alt="Inngest" />
                <img src="https://img.shields.io/badge/Svix_Webhooks-FF5100?style=for-the-badge&logo=svix&logoColor=white" alt="Svix" />
              </div>
            </div>

            {/* Payments */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Payment Processing</h3>
              <div className="flex flex-wrap gap-3">
                <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
                <img src="https://img.shields.io/badge/Polar-1E40AF?style=for-the-badge&logo=polar&logoColor=white" alt="Polar" />
              </div>
            </div>

            {/* Infrastructure */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Infrastructure & Deployment</h3>
              <div className="flex flex-wrap gap-3">
                <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
              </div>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-foreground">The Vision</h2>
          <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-6">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                <strong>The insight:</strong> Email captures what really happened. Your bank just shows a lump sum.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Budget-Inbox started with Amazon because it's a real problem for real YNAB users (like me).
                But the same pattern exists everywhere: your bank shows "Target $142.50" while your email
                shows exactly what you bought. Email is the perfect data source—it captures state, products,
                timing, everything.
              </p>
              <div className="grid gap-4 md:grid-cols-2 mt-6">
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">More Retailers</h4>
                  <p className="text-sm text-muted-foreground">
                    Target, Walmart, Costco, Instacart - anywhere you get a detailed email receipt but a lump sum bank transaction.
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Learning AI Categories</h4>
                  <p className="text-sm text-muted-foreground">
                    Claude learns from your corrections and gets better at matching your budget categories over time.
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Receipt Photos & PDFs</h4>
                  <p className="text-sm text-muted-foreground">
                    Physical receipts? Email a photo. PDF statements? Forward them. Same itemization magic.
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Other Budgeting Platforms</h4>
                  <p className="text-sm text-muted-foreground">
                    The platform works for any budgeting system. YNAB today, Mint/EveryDollar/Actual tomorrow.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-primary/50 bg-primary/5">
            <CardContent className="pt-8 pb-8">
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Stop entering receipts manually
              </h3>
              <p className="mb-6 text-muted-foreground">
                Connect once. Shop normally. Your YNAB budget fills itself in with perfect itemized transactions.
              </p>
              <a href="https://www.budgetinbox.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  Get Started with Budget-Inbox
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} zach7. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <a
                href="mailto:hello@zach7.dev"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
