"use client"

import { useEffect, useRef, useState } from "react"

const sections = [
  {
    name: "API Changes",
    description: "New or modified endpoints",
    icon: "↗",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
  },
  {
    name: "Database Changes",
    description: "Migrations, schema changes",
    icon: "◉",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
  },
  {
    name: "Architecture",
    description: "Structural changes, refactors",
    icon: "△",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
  },
  {
    name: "Breaking Changes",
    description: "Anything that breaks existing behavior",
    icon: "⚠",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
  },
  {
    name: "Dependencies",
    description: "New packages, version updates",
    icon: "⬡",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
  },
  {
    name: "Configuration",
    description: "Environment variables, config changes",
    icon: "⚙",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
  },
  {
    name: "Bug Fixes",
    description: "Bugs resolved",
    icon: "✓",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
  },
  {
    name: "General Notes",
    description: "Anything else worth documenting",
    icon: "✎",
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
  },
]

export function DocumentationSections() {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Classification</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
            What gets{" "}
            <span className="gradient-text">documented</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every merged PR is classified into relevant sections. Only relevant sections are written — empty sections are skipped.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`group relative rounded-xl border ${section.border} bg-gradient-to-b ${section.color} p-6 transition-all duration-700 hover:scale-[1.02] hover:shadow-lg cursor-default ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="text-2xl mb-3">{section.icon}</div>
              <h3 className="text-base font-semibold text-foreground mb-1">{section.name}</h3>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
