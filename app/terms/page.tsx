import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Nexora Fitness.',
}

export default function TermsPage() {
  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '120px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>Terms of Service</h1>
      <p style={{ color: 'var(--cyan)', marginBottom: '48px', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 700 }}>
        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      
      <div className="prose" style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>Please read these Terms of Service carefully before using the nexorafitness.ca website operated by Nexora Fitness.</p>
        
        <h2 style={{ color: 'var(--white)', fontSize: '20px', marginTop: '16px', marginBottom: '8px' }}>1. Acceptance of Terms</h2>
        <p>By accessing or using our Site, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
        
        <h2 style={{ color: 'var(--white)', fontSize: '20px', marginTop: '16px', marginBottom: '8px' }}>2. Waitlist Conditions</h2>
        <p>Joining the founding member waitlist does not guarantee a membership spot, but it does secure your position in line. Founding member pricing is locked in for life only for those who complete their registration when the facility officially opens.</p>
        
        <h2 style={{ color: 'var(--white)', fontSize: '20px', marginTop: '16px', marginBottom: '8px' }}>3. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Nexora Fitness and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
        
        <h2 style={{ color: 'var(--white)', fontSize: '20px', marginTop: '16px', marginBottom: '8px' }}>4. Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
      </div>
    </div>
  )
}
