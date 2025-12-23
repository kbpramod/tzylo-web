import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function FluxPage() {
  const useCases = [
    {
      title: "Auth Workflows",
      description: "Orchestrate complex authentication flows with event-driven logic.",
    },
    {
      title: "Async Jobs",
      description: "Background job processing with reliable retry mechanisms.",
    },
    {
      title: "Notifications",
      description: "Event-triggered notifications and system communications.",
    },
    {
      title: "System Events",
      description: "Centralized event handling for your entire infrastructure.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-20">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-muted text-muted-foreground rounded-full mb-4">
              Coming Soon
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Tzylo Flux</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              An event-driven workflow engine originally built to power authentication flows — evolving into a
              general-purpose async and system events layer.
            </p>
          </div>

          <Button disabled className="bg-muted text-muted-foreground cursor-not-allowed px-8 py-6 rounded-lg">
            Coming Soon
          </Button>
        </section>

        {/* Use Cases */}
        <section className="py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-foreground mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 border border-border bg-card rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border mb-20">
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Early Access?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Flux is coming soon. Sign up to get notified when it launches and gain early access to this powerful event
              infrastructure.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
