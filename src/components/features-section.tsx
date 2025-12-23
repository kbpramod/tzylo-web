export function FeaturesSection() {
  const features = [
    {
      title: "Plug-and-play authentication",
      description: "Easy to integrate with your existing infrastructure and applications.",
    },
    {
      title: "Secure token lifecycle & session handling",
      description: "Built-in security best practices for token and session management.",
    },
    {
      title: "Event-driven & extensible architecture",
      description: "Flexible design that adapts to your unique requirements.",
    },
    {
      title: "Self-hosted, open source, no lock-in",
      description: "Full control over your authentication infrastructure.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Tzylo?</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border border-border bg-card rounded-lg hover:border-muted transition-colors">
            <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
