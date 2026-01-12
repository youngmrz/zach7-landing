import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Theme Toggle - Fixed top right */}
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="mr-1 h-3 w-3" />
            Building the Future
          </Badge>

          <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
            zach<span className="text-primary">7</span>
          </h1>

          <p className="mb-8 max-w-2xl text-xl text-muted-foreground lg:text-2xl">
            Crafting innovative solutions with modern technology.
            <br />
            Building tools that make a difference.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            What We Build
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Focused on creating efficient, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border bg-card hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Modern Development</CardTitle>
              <CardDescription>
                Built with the latest technologies including Next.js, React, TypeScript, and Tailwind CSS.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border bg-card hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Performance First</CardTitle>
              <CardDescription>
                Optimized for speed and efficiency with server components and edge runtime capabilities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border bg-card hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Beautiful Design</CardTitle>
              <CardDescription>
                Clean, accessible interfaces powered by Shadcn UI and thoughtful user experience.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Projects Highlight */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border bg-card hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <CardTitle>Budget-Inbox</CardTitle>
                <Badge>Active</Badge>
              </div>
              <CardDescription>
                Sync Amazon email receipts to YNAB as itemized split transactions. Built with Next.js, Prisma, and Clerk authentication.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Prisma</Badge>
                <Badge variant="secondary">Clerk</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <CardTitle>More Coming Soon</CardTitle>
                <Badge variant="outline">In Development</Badge>
              </div>
              <CardDescription>
                New projects and tools are always in the works. Stay tuned for more innovative solutions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
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
