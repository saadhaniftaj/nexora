import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Nexora Fitness.',
}

export default function PrivacyPage() {
  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '120px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--cyan)', marginBottom: '48px', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 700 }}>
        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      
      <div className="prose" style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>At Nexora Fitness, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from nexorafitness.com.</p>
        
        <h2 style={{ color: 'var(--white)', fontSize: '20px', marginTop: '16px', marginBottom: '8px' }}>1. Information We Collect</h2>
        <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
        
        <h2 style={{ color: 'var(--white)', fontSize: '20px', marginTop: '16px', marginBottom: '8px' }}>2. Waitlist & Communications</h2>
        <p>If you join our waitlist, we collect your name and email address. We use this information exclusively to communicate with you about Nexora Fitness updates, founding member pricing, and facility news. We do not sell your data to third parties.</p>
        
        <h2 style={{ color: 'var(--white)', fontSize: '20px', marginTop: '16px', marginBottom: '8px' }}>3. Contact Us</h2>
        <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@nexorafitness.ca.</p>
      </div>
    </div>
  )
}
