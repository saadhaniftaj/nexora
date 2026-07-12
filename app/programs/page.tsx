import type { Metadata } from 'next'
import ProgramHero from '@/components/sections/programs/ProgramHero'
import ProgramCards from '@/components/sections/programs/ProgramCards'
import EquipmentBrands from '@/components/sections/programs/EquipmentBrands'
import SupportServices from '@/components/sections/programs/SupportServices'

export const metadata: Metadata = {
  title: 'Training Programs | Strength, Conditioning, Sculpt & Shape — Nexora Fitness New Westminster',
  description:
    'Explore Nexora Fitness programs in New Westminster, BC: Strength training with Atlantis & Xmaster, Conditioning with Core Health & Wellness, Functional Training with Torque, Sculpt & Shape with Bootybuilder, and Active Rehab & Wellness with on-site physio. Built for every version of you.',
  alternates: { canonical: 'https://nexorafitness.ca/programs' },
}

export default function ProgramsPage() {
  return (
    <>
      <ProgramHero />
      <ProgramCards />
      <EquipmentBrands />
      <SupportServices />

    </>
  )
}
