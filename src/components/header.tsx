"use client"

import Link from "next/link"
import { Search, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground">T</span>
          </div>
          <span className="text-foreground">Tzylo</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-foreground hover:text-muted-foreground transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-foreground hover:text-muted-foreground transition-colors">
            About
          </Link>
          <a href="https://docs.tzylo.com" className="text-foreground hover:text-muted-foreground transition-colors">
            Docs
          </a>
          <Link href="/contact" className="text-foreground hover:text-muted-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </Link>
          
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex relative h-9 w-9 items-center justify-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border md:hidden flex flex-col gap-4 p-4">
            <Link href="/" className="text-foreground hover:text-muted-foreground" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <a
              href="https://docs.tzylo.com"
              className="text-foreground hover:text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </a>
            <Link
              href="/contact"
              className="text-foreground hover:text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </Link>
            <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
