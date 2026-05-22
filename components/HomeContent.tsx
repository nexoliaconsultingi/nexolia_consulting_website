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
    <div className="min-h-screen bg-white">
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
    </div>
  )
}
