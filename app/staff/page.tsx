import Navbar from "@/components/navbar"
import StaffHero from "@/components/staff/hero"
import AcademicStaff from "@/components/staff/academic-staff"
import AdministrativeStaff from "@/components/staff/administrative-staff"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Staff | Computer Science | Stellenbosch University',
  description: 'Meet the dedicated team of academics, researchers, and administrative professionals in the Computer Science department at Stellenbosch University.',
}

export default function StaffPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <StaffHero />
      <AcademicStaff />
      <AdministrativeStaff />
      <Footer />
    </main>
  )
}
