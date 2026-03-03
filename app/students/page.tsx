import Navbar from "@/components/navbar"
import StudentsHero from "@/components/students/hero"
import DoctoralStudents from "@/components/students/doctoral-students"
import MastersStudents from "@/components/students/masters-students"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Postgraduate Students | Computer Science | Stellenbosch University',
  description: 'Meet our current Master\'s and Doctoral students conducting innovative research in computer science at Stellenbosch University.',
}

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <StudentsHero />
      <DoctoralStudents />
      <MastersStudents />
      <Footer />
    </main>
  )
}
