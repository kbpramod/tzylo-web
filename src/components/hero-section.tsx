"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 animate-pulse-glow" style={{ animationDelay: "1s" }} />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.7 0.18 280 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.18 280 / 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">Now available as a GitHub App</span>
        </div>

        {/* Heading */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-foreground">Code review &</span>
          <br />
          <span className="gradient-text-hero">living docs,</span>
          <br />
          <span className="text-foreground">automated.</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tzylo Synapse reviews every pull request for bugs and quality issues, then
          automatically updates{" "}
          <code className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-md text-base">TZYLO.md</code>
          {" "}— a living documentation file that grows with your codebase.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://github.com/apps/tzylo-synapse"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-install-btn"
          >
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all duration-300 px-8 py-6 text-base rounded-full font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Install on GitHub
            </Button>
          </a>
          <a
            href="https://github.com/tzylo/synapse"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-source-btn"
          >
            <Button
              variant="outline"
              className="border-border/50 text-foreground hover:bg-secondary/50 px-8 py-6 text-base rounded-full font-medium bg-transparent hover:border-primary/50 transition-all duration-300"
            >
              View Source
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex flex-wrap justify-center gap-8 sm:gap-12 mt-16 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">Zero Config</div>
            <div className="text-sm text-muted-foreground mt-1">Install and go</div>
          </div>
          <div className="w-px h-12 bg-border/50 hidden sm:block" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">Every PR</div>
            <div className="text-sm text-muted-foreground mt-1">Reviewed automatically</div>
          </div>
          <div className="w-px h-12 bg-border/50 hidden sm:block" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">TZYLO.md</div>
            <div className="text-sm text-muted-foreground mt-1">Living documentation</div>
          </div>
        </div>
      </div>
    </section>
  )
}
