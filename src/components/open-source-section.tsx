export function OpenSourceSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">Always open. Always inspectable.</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tzylo is GitHub-first, transparent by design, and built to be fully auditable. No hidden logic. No forced
          cloud.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/tzylo"
            className="px-6 py-2 text-muted-foreground hover:text-foreground transition-colors underline"
          >
            View on GitHub
          </a>
          <a
            href="https://docs.tzylo.com"
            className="px-6 py-2 text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Read the Docs
          </a>
        </div>
      </div>
    </section>
  )
}
