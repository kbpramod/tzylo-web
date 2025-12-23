"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)


    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({ name: "", email: "", message: "" })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions, feedback, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 border border-border bg-card rounded-lg text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank you for reaching out!</h2>
            <p className="text-muted-foreground mb-6">
              We've received your message and will get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-border bg-card rounded-lg">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}

        {/* Alternative Contact Methods */}
        <div className="mt-16 p-8 border border-border bg-card rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-6">Other ways to reach us</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">GitHub</p>
              <a href="https://github.com/tzylo" className="text-foreground hover:text-primary transition-colors">
                github.com/tzylo
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Documentation</p>
              <a href="https://docs.tzylo.com" className="text-foreground hover:text-primary transition-colors">
                docs.tzylo.com
              </a>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
