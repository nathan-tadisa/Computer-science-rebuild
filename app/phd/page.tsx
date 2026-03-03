import Navbar from "@/components/navbar"
import PhDHero from "@/components/phd/hero"
import AdmissionRequirements from "@/components/phd/admission-requirements"
import ApplicationJourney from "@/components/phd/application-journey"
import CTAFooter from "@/components/phd/cta-footer"
import Footer from "@/components/footer"

export const metadata = {
  title: 'PhD Programme | Computer Science | Stellenbosch University',
  description: 'Pursue a doctorate in Computer Science at Stellenbosch University. Conduct original research and contribute new knowledge to the field.',
}

export default function PhDPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PhDHero />
      <AdmissionRequirements />
      <ApplicationJourney />
      <CTAFooter />
      <Footer />
    </main>
  )
}
