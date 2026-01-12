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
            Sync Amazon email receipts to YNAB as itemized split transactions.
            <br />
            Forward an email. Get a perfect budget entry.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="https://budget-inbox.zach7.dev" target="_blank" rel="noopener noreferrer">
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
                You love YNAB. You order from Amazon. But manually entering each item from a $200 Amazon order
                with 15 different products? That's 15 minutes of tedious data entry, every single time.
                <br /><br />
                Most people give up and enter one lumped transaction. But that ruins your category tracking.
                How much did you <em>really</em> spend on groceries vs. household items vs. electronics this month?
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
                <CardTitle className="text-xl">1. Forward the Email</CardTitle>
                <CardDescription className="text-base">
                  Get an Amazon order confirmation email? Just forward it to your Budget-Inbox address.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">2. AI Does the Work</CardTitle>
                <CardDescription className="text-base">
                  Our system parses the email, extracts all items, and uses AI to categorize each one intelligently.
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
                  A fully itemized split transaction appears in YNAB with each item in the right category.
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
                    <li>1. Forward an email</li>
                    <li>2. Done.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    What Happens Behind the Scenes
                  </h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Gmail API receives your forwarded email</li>
                    <li>2. Inngest triggers background job processing</li>
                    <li>3. Cheerio parses Amazon's complex HTML</li>
                    <li>4. Claude AI analyzes and categorizes each item</li>
                    <li>5. YNAB API creates itemized split transaction</li>
                    <li>6. Webhook confirms success back to you</li>
                    <li>7. Database logs everything for troubleshooting</li>
                  </ol>
                  <p className="mt-4 text-sm text-primary font-medium">
                    13 service integrations. 23 environment variables. Milliseconds of your time.
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
                Budget-Inbox started with Amazon receipts. But the platform architecture is designed
                for so much more.
              </p>
              <div className="grid gap-4 md:grid-cols-2 mt-6">
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">More Retailers</h4>
                  <p className="text-sm text-muted-foreground">
                    Target, Walmart, Costco, Instacart - any receipt by email becomes a YNAB transaction.
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Smart Categorization</h4>
                  <p className="text-sm text-muted-foreground">
                    AI learns your spending patterns and suggests categories that match your budget style.
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Receipt Photos</h4>
                  <p className="text-sm text-muted-foreground">
                    Took a photo of a paper receipt? Text it or email it. We'll handle the rest.
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Enterprise Integrations</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect to accounting systems, expense platforms, and financial planning tools.
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
                Ready to automate your budget?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Try Budget-Inbox and never manually enter an Amazon receipt again.
              </p>
              <a href="https://budget-inbox.zach7.dev" target="_blank" rel="noopener noreferrer">
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
