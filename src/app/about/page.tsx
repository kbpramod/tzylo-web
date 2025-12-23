import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      title: "Open source by default",
      description: "Transparency and community are at the core of what we build.",
    },
    {
      title: "Security before convenience",
      description: "We prioritize your security over ease of use that compromises safety.",
    },
    {
      title: "Developer experience matters",
      description: "Building authentication shouldn't feel like a chore.",
    },
    {
      title: "No vendor lock-in",
      description: "You own your infrastructure and data, always.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Tzylo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Tzylo was created to give developers a secure, transparent, and scalable alternative to black-box
            authentication services. We believe in building infrastructure that developers actually understand, trust,
            and control.
          </p>
        </section>

        {/* Vision */}
        <section className="py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Build infrastructure that developers actually understand, trust, and control. We envision a world where
            authentication is not a black box managed by third parties, but a transparent, auditable, and customizable
            system that teams can run and modify themselves.
          </p>
        </section>

        {/* Mission */}
        <section className="py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Make authentication and identity infrastructure simple, auditable, and accessible for teams of all sizes.
            Whether you're a solo developer or managing infrastructure at scale, Tzylo provides the tools and
            transparency you need to own your authentication layer.
          </p>
        </section>

        {/* Values */}
        <section className="py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 border border-border bg-card rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border mb-20">
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to learn more?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our documentation to get started or reach out to us with any questions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://docs.tzylo.com"
                className="px-6 py-2 text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Read the Docs
              </a>
              <a
                href="/contact"
                className="px-6 py-2 text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
