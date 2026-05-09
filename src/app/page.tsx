import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DocumentationPreview } from "@/components/documentation-preview"
import { DocumentationSections } from "@/components/documentation-sections"
import { WhySection } from "@/components/why-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DocumentationPreview />
        <DocumentationSections />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
