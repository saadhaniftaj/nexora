'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (res.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (err) {
      alert("Failed to send message. Please try again.")
    }
    setLoading(false)
  }

  return (
    <main className="contact-page">
      <div className="contact-hero container">
        <h1 className="contact-title">Leave a Message</h1>
        <p className="contact-subtitle">
          Have a question about our facilities or looking to learn more? Drop us a line and our team will get back to you shortly.
        </p>

        <div className="contact-form-wrapper">
          {success ? (
            <div className="contact-success">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h2>Message Sent</h2>
              <p>Thank you for reaching out. We've received your message and will be in touch soon.</p>
              <button className="btn-primary" onClick={() => setSuccess(false)}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you?"
                  rows={5}
                />
              </div>

              <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding-top: 140px;
          padding-bottom: 80px;
          min-height: 100vh;
        }
        .contact-hero {
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 8vw, 72px);
          font-weight: 900;
          color: var(--white);
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 24px;
        }
        .contact-subtitle {
          font-size: 18px;
          color: rgba(240, 240, 240, 0.7);
          line-height: 1.6;
          margin-bottom: 48px;
          max-width: 600px;
        }

        .contact-form-wrapper {
          background: rgba(20, 20, 20, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 4px;
          backdrop-filter: blur(10px);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        label {
          font-family: var(--font-display);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(240, 240, 240, 0.9);
        }

        input, textarea {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 14px 16px;
          color: var(--white);
          font-family: var(--font-body);
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
        }
        
        input:focus, textarea:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 10px rgba(31, 178, 254, 0.2);
        }

        .submit-btn {
          margin-top: 16px;
          align-self: flex-start;
          padding: 14px 32px;
        }

        .contact-success {
          text-align: center;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .contact-success h2 {
          font-family: var(--font-display);
          font-size: 32px;
          text-transform: uppercase;
          color: var(--white);
        }

        .contact-success p {
          color: rgba(240, 240, 240, 0.7);
          margin-bottom: 24px;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-form-wrapper {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  )
}
