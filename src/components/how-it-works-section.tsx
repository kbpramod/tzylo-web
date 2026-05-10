"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Install the GitHub App",
    description: "One click to install Tzylo Synapse on your repositories. Grant permissions for pull requests and contents.",
    detail: "Pull requests (read & write) • Contents (read & write)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Open a Pull Request",
    description: "When a PR is opened, Synapse reviews the code for bugs, security issues, and quality problems. It posts a structured comment with findings.",
    detail: "Bugs • Security • Quality • Suggestions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 21V9a9 9 0 009 9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Merge and Move On",
    description: "When the PR is merged, Synapse classifies changes and appends a structured entry to TZYLO.md in your repo — automatically committed.",
    detail: "Auto-commit • No action needed • Growing docs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export function HowItWorksSection() {
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
    <section className="relative py-28" id="how-it-works" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
            Three steps.{" "}
            <span className="gradient-text">That&apos;s it.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No configuration files. No CI pipeline changes. No onboarding docs.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-transparent" />

          <div className="space-y-20 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                  {/* Content Side */}
                  <div className={`${index % 2 !== 0 ? "lg:col-start-2 lg:text-left" : ""} mb-8 lg:mb-0`}>
                    <div className={`${index % 2 !== 0 ? "lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                      <span className="text-6xl font-black gradient-text opacity-30">{step.number}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
                        <span className="text-sm text-muted-foreground font-mono">{step.detail}</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon Side */}
                  <div className={`${index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""} flex ${index % 2 !== 0 ? "lg:justify-end" : "lg:justify-start"} justify-center`}>
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl scale-150" />
                      {/* Card */}
                      <div className="relative w-32 h-32 rounded-2xl glass-card flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
