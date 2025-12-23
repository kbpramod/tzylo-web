import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Products</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Auth CE */}
        <div className="p-8 border border-border bg-card rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
              Released
            </span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Tzylo Auth CE</h3>
          <p className="text-muted-foreground mb-6">
            Community Edition — Core authentication features with JWT lifecycle, sessions, roles, and extensible APIs.
          </p>
          <Link href="/products/auth-ce">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg">
              View Product
            </Button>
          </Link>
        </div>

        {/* Flux */}
        <div className="p-8 border border-border bg-card rounded-lg opacity-75">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-semibold bg-muted text-muted-foreground rounded-full">
              Coming Soon
            </span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Tzylo Flux</h3>
          <p className="text-muted-foreground mb-6">
            Event & workflow engine that powers authentication flows, async jobs, and system events.
          </p>
          <Button disabled className="w-full rounded-lg bg-muted text-muted-foreground cursor-not-allowed">
            Coming Soon
          </Button>
        </div>
      </div>
    </section>
  )
}
