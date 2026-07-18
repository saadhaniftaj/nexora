import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export const metadata: Metadata = {
  title: {
    default: 'Nexora Fitness',
    template: '%s | Nexora Fitness',
  },
  description:
    'Nexora Fitness is a premium training facility opening at River Market, Downtown New Westminster, BC. Curated equipment — Atlantis, Core Health & Wellness, Shua, Xmaster, Torque, Bootybuilder — Fraser River views, private washrooms, on-site physio. Join the founding member waitlist.',
  keywords: [
    'premium gym New Westminster',
    'downtown New Westminster gym',
    'New West fitness centre',
    'River Market gym',
    'Westminster Quay gym',
    'Fraser River view gym',
    'Nexora Fitness',
    'founding member gym waitlist BC',
    'Atlantis Strength equipment gym',
    'Bootybuilder gym New Westminster',
    'private washroom gym BC',
    'physio gym New Westminster',
    'strength training New Westminster',
    'premium fitness facility BC',
    'gym near SkyTrain New Westminster',
    'best gym Burnaby New Westminster',
    'open floor gym BC',
    'fitness waitlist New Westminster',
    'functional training gym BC',
    'sculpt and shape gym New Westminster',
    'conditioning gym New Westminster',
    'active rehab wellness gym BC',
  ],
  metadataBase: new URL('https://nexorafitness.ca'),
  alternates: {
    canonical: 'https://nexorafitness.ca',
  },
  openGraph: {
    title: 'Nexora Fitness',
    description:
      "Power. Progress. Nexora. Join the founding member waitlist for New Westminster's most premium fitness facility. Fraser River views, curated equipment, private washrooms, on-site physio.",
    type: 'website',
    locale: 'en_CA',
    url: 'https://nexorafitness.ca',
    siteName: 'Nexora Fitness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Fitness',
    description:
      "New Westminster's most premium gym. Founding member waitlist now open. Atlantis equipment, Fraser River views, private washrooms, on-site physio & recovery.",
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon.ico' },
    ],
    apple: { url: '/favicons/apple-touch-icon.png' },
    other: { url: '/favicons/favicon-192x192.png', sizes: '192x192' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: 'Nexora Fitness',
  description:
    'Premium fitness facility at River Market, Downtown New Westminster, BC. Curated equipment, Fraser River views, private washrooms, physio.',
  url: 'https://nexorafitness.ca',
  logo: 'https://nexorafitness.ca/logos/nexora-wordmark.png',
  image: 'https://nexorafitness.ca/images/hero/hero-home.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'River Market at Westminster Quay',
    addressLocality: 'New Westminster',
    addressRegion: 'BC',
    postalCode: 'V3M 6G5',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.2056,
    longitude: -122.9124,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
    ],
    opens: '05:00',
    closes: '22:00',
  },
  telephone: '+16041234567',
  email: 'info@nexorafitness.ca',
  sameAs: [
    'https://www.instagram.com/nexorafitness',
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Atlantis Strength Equipment', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Bootybuilder Equipment', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Washrooms', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Fraser River View', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'On-site Physio', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'InBody Assessment', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Personal Training', value: true },
  ],
  keywords: 'premium gym New Westminster, River Market gym, Fraser River view gym, Atlantis equipment, founding member fitness',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <ScrollIndicator />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
