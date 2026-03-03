import Navbar from "@/components/navbar"
import UndergraduateModulesHero from "@/components/current-students/undergraduate-modules-hero"
import UndergraduateModuleCatalog from "@/components/current-students/undergraduate-module-catalog"
import Footer from "@/components/footer"

export default function UndergraduateModulesPage() {
  return (
    <main>
      <Navbar />
      <UndergraduateModulesHero />
      <UndergraduateModuleCatalog />
      <Footer />
    </main>
  )
}
