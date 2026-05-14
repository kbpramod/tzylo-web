"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-foreground font-bold text-lg tracking-tight">Tzylo</span>
            <span className="gradient-text font-semibold text-lg">Synapse</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#documentation" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Documentation
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Pricing
          </a>
          <a
            href="https://github.com/tzylo/synapse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/apps/tzylo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all duration-300 px-6 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Install on GitHub
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-7 h-7 flex flex-col justify-center gap-1.5 relative"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass border-b border-border/50 md:hidden flex flex-col gap-1 p-4 animate-slide-up">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-secondary/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-secondary/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#documentation"
              className="text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-secondary/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-secondary/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="https://github.com/tzylo/synapse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-secondary/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </a>
            <div className="mt-2 px-4">
              <a
                href="https://github.com/apps/tzylo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium">
                  Install on GitHub
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
