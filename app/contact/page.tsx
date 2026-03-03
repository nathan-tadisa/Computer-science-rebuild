import Navbar from "@/components/navbar"
import ContactHero from "@/components/contact/hero"
import ContactCards from "@/components/contact/contact-cards"
import LocationMap from "@/components/contact/location-map"
import QRCodeSection from "@/components/contact/qr-code"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Contact Us | Computer Science | Stellenbosch University',
  description: 'Get in touch with the Computer Science department at Stellenbosch University. Contact details, location, and visiting information.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ContactHero />
      <ContactCards />
      <LocationMap />
      <QRCodeSection />
      <Footer />
    </main>
  )
}
