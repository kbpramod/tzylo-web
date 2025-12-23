import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AuthCEPage() {
  const capabilities = [
    "JWT-based authentication with configurable algorithms",
    "Secure session lifecycle management",
    "Role and permission system",
    "Multi-factor authentication support",
    "OAuth 2.0 integration ready",
    "RESTful API for integration",
    "Audit logging",
    "Password hashing with bcrypt",
  ]

  const resources = [
    { name: "Documentation", url: "https://docs.tzylo.com/auth/ce/docs/introduction" },
    { name: "Docker Image", url: "https://hub.docker.com/r/tzylo/auth-ce" },
    { name: "GitHub Repository", url: "https://github.com/tzylo/tzylo-auth-ce" },
    { name: "Example Projects", url: "https://github.com/tzylo/auth-ce-examples" },
    { name: "Node.js SDK", url: "https://www.npmjs.com/package/@tzylo/auth-ce" },
    { name: "Middleware", url: "https://www.npmjs.com/package/@tzylo/auth-middleware" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-20">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-4">
              Released
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Tzylo Auth CE</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Community Edition authentication platform with JWT lifecycle, sessions, roles, and extensible APIs. Built
              for security-conscious developers.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/tzylo/tzylo-auth-ce">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-lg">
                Get Started
              </Button>
            </a>
            <a href="https://docs.tzylo.com/auth/ce/docs/introduction">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent px-8 py-6 rounded-lg bg-transparent"
              >
                View Docs
              </Button>
            </a>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-foreground mb-12">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                <span className="text-primary mt-1">✓</span>
                <p className="text-muted-foreground">{capability}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 border-t border-border mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-8">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="p-4 border border-border bg-card rounded-lg hover:border-muted transition-colors group"
              >
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  {resource.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">→</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
