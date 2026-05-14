"use client"

import { useEffect, useRef, useState } from "react"

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Lives in your repo",
    description: "Versioned with your code. Always in sync. No external platform to maintain.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Searchable",
    description: "grep, GitHub search, or your IDE — find what changed, when, and why in seconds.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Survives team changes",
    description: "New engineers have full context from day one. No tribal knowledge lost.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Grows automatically",
    description: "No manual effort. No stale docs. Every merge adds what matters.",
  },
]

export function WhySection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-28" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why TZYLO.md</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Documentation that{" "}
              <span className="gradient-text">writes itself</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Engineering teams at startups move fast and skip documentation — until it becomes a problem.
              Tzylo Synapse captures institutional memory automatically so you never lose context when someone joins or leaves.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex gap-4 items-start transition-all duration-700 ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          {/* <div
            className={`mt-12 lg:mt-0 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl blur-3xl scale-110" />

              <div className="relative glass-card rounded-2xl p-8 sm:p-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                    <span className="text-sm text-muted-foreground font-mono">your-repo/TZYLO.md</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                      <div className="text-3xl font-bold gradient-text">142</div>
                      <div className="text-sm text-muted-foreground mt-1">PRs documented</div>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                      <div className="text-3xl font-bold gradient-text">28</div>
                      <div className="text-sm text-muted-foreground mt-1">Breaking changes caught</div>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                      <div className="text-3xl font-bold gradient-text">0</div>
                      <div className="text-sm text-muted-foreground mt-1">Manual docs written</div>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                      <div className="text-3xl font-bold gradient-text">∞</div>
                      <div className="text-sm text-muted-foreground mt-1">Hours saved</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground italic">
                      &quot;We onboarded a new engineer in 20 minutes. They read TZYLO.md.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
