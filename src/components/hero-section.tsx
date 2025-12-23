import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Authentication infrastructure you can trust.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tzylo is an open-source, self-hostable authentication platform built for developers who care about security,
            control, and simplicity.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-full">
                Get Started
              </Button>
            </Link>
            <a href="https://docs.tzylo.com">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent px-8 py-6 text-base rounded-full bg-transparent"
              >
                View Docs
              </Button>
            </a>
          </div>
        </div>

        {/* Placeholder for hero image */}
        <div className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Authentication Platform</span>
        </div>
      </div>
    </section>
  )
}
