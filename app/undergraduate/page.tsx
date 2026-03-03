import Navbar from "@/components/navbar"
import UndergraduateHero from "@/components/undergraduate/hero"
import WhatIsCS from "@/components/undergraduate/what-is-cs"
import WhyCS from "@/components/undergraduate/why-cs"
import WhyStellenbosch from "@/components/undergraduate/why-stellenbosch"
import UndergraduateProgrammes from "@/components/undergraduate/programmes"
import AdmissionRequirements from "@/components/undergraduate/admission-requirements"
import CareerPaths from "@/components/undergraduate/career-paths"
import FAQ from "@/components/undergraduate/faq"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Undergraduate Programmes | Computer Science | Stellenbosch University',
  description: 'Explore our world-class undergraduate computer science programmes at Stellenbosch University. Start your journey into AI, software engineering, and computational thinking.',
}

export default function UndergraduatePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <UndergraduateHero />
      <WhatIsCS />
      <WhyCS />
      <WhyStellenbosch />
      <UndergraduateProgrammes />
      <AdmissionRequirements />
      <CareerPaths />
      <FAQ />
      <Footer />
    </main>
  )
}
