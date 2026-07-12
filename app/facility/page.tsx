import type { Metadata } from 'next'
import FacilityHero from '@/components/sections/facility/FacilityHero'
import NexoraStandard from '@/components/sections/facility/NexoraStandard'
import FacilityCards from '@/components/sections/facility/FacilityCards'

export const metadata: Metadata = {
  title: 'The Facility | Premium Gym Floor, Private Washrooms & Fraser River Views — Nexora Fitness',
  description:
    '5,000 sq ft premium training facility at River Market, Downtown New Westminster. Curated Atlantis Strength, Shua, Xmaster & Core Health equipment. Private gender-neutral washrooms, InBody assessment, on-site physio & RMT, cold plunge & sauna infrastructure. Fraser River views from every angle.',
  alternates: { canonical: 'https://nexorafitness.ca/facility' },
}

export default function FacilityPage() {
  return (
    <>
      <FacilityHero />
      <NexoraStandard />
      <FacilityCards />

    </>
  )
}
