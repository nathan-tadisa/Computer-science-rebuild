import Navbar from "@/components/navbar"
import AlumniHero from "@/components/alumni/hero"
import AlumniTabs from "@/components/alumni/alumni-tabs"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Alumni | Computer Science | Stellenbosch University',
  description: 'Celebrate the legacy of Stellenbosch University Computer Science alumni - distinguished faculty and graduates shaping the global technology landscape.',
}

export default function AlumniPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AlumniHero />
      <AlumniTabs />
      <Footer />
    </main>
  )
}
