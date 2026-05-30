// app/HomeContent.tsx ou @/components/HomeContent.tsx
"use client"

import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import SurFooter from "@/components/ui/SurFooter"
import HeroSection from "@/components/heroSection/HeroSectionHome"
import NexoliaServices3D from "@/components/NexoliaServices3D"
import WhyChooseUs from "@/components/WhyChooseUs"
import PuissanceVision from "@/components/PuissanceVision"
import DarkRealTimeServicesImproved from "@/components/DarkRealTimeServicesImproved"
import Testimonials from "@/components/component_5/Testimonials"
import OffersAndNews from "@/components/OffersAndNews"
import FaqAccordion from "@/components/FaqAccordion"
import PartnerCarousel from "@/components/PartnerCarousel"
import ServicesCatalog from "./ServicesCatalog"

export default function HomeContent() {
  return (
    <>
      {/* ========== LIEN D'ÉVITEMENT POUR ACCESSIBILITÉ (BON SEO) ========== */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#53828a] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05f76]"
        aria-label="Passer au contenu principal"
      >
        Passer au contenu principal
      </a>

      {/* ========== BALISE MAIN SÉMANTIQUE (ESSENTIELLE POUR GOOGLE) ========== */}
      <main id="main-content" className="min-h-screen bg-white">
    
          <NavBar />
          <HeroSection />
       

        <ServicesCatalog />
        <NexoliaServices3D />
        <WhyChooseUs />
        <PuissanceVision />
        <DarkRealTimeServicesImproved />
        <Testimonials />
        <OffersAndNews />
        <FaqAccordion />
        <PartnerCarousel />
        <SurFooter />
        <Footer />
      </main>
    </>
  )
}