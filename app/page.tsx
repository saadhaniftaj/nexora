import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import EssenceCards from '@/components/sections/EssenceCards'
import ProgramsSection from '@/components/sections/ProgramsSection'
import CommunitySection from '@/components/sections/CommunitySection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Nexora Fitness',
  description:
    'Nexora Fitness is coming soon to River Market, Downtown New Westminster. 5,000 sq ft premium training floor with Atlantis Strength, Bootybuilder, Core Health & Wellness, Shua, Xmaster & Torque equipment. Fraser River views, private washrooms, on-site physio. Join the founding member waitlist.',
  alternates: { canonical: 'https://nexorafitness.ca' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EssenceCards />
      <ProgramsSection />
      <CommunitySection />
      <CTASection />
    </>
  )
}
