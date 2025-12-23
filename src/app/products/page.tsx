import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            A complete suite of open-source authentication and event infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Auth CE */}
          <div className="p-8 border border-border bg-card rounded-lg hover:border-muted transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                Released
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Tzylo Auth CE</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Community Edition — Core authentication features with JWT lifecycle, sessions, roles, and extensible APIs.
            </p>
            <ul className="space-y-2 mb-8 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>JWT-based authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Session management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Role-based access control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Extensible API</span>
              </li>
            </ul>
            <Link href="/products/auth-ce">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg">
                View Product
              </Button>
            </Link>
          </div>

          {/* Flux */}
          <div className="p-8 border border-border bg-card rounded-lg opacity-75 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-muted text-muted-foreground rounded-full">
                Coming Soon
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Tzylo Flux</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Event & workflow engine that powers authentication flows, async jobs, and system events.
            </p>
            <ul className="space-y-2 mb-8 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Event-driven workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Async job processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>System event handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Workflow orchestration</span>
              </li>
            </ul>
            <Button disabled className="w-full rounded-lg bg-muted text-muted-foreground cursor-not-allowed">
              Coming Soon
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
