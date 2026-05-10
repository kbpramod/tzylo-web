"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-28" id="pricing" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl blur-3xl scale-110" />

          {/* Card */}
          <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/50 to-card/50 p-10 sm:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                Free during Beta
              </span>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
                Stop writing docs.
                <br />
                <span className="gradient-text">Start shipping.</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                Install Tzylo Synapse on your GitHub repositories. Open a PR — it reviews. Merge it — it documents. Zero configuration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/apps/tzylo-synapse"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-install-btn"
                >
                  <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all duration-300 px-10 py-6 text-base rounded-full font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Install on GitHub — Free
                  </Button>
                </a>
                <a
                  href="https://github.com/tzylo/synapse"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-source-btn"
                >
                  <Button
                    variant="outline"
                    className="border-border/50 text-foreground hover:bg-secondary/50 px-8 py-6 text-base rounded-full font-medium bg-transparent hover:border-primary/50 transition-all duration-300"
                  >
                    View on GitHub
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                No credit card required • Works with any GitHub repository
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
