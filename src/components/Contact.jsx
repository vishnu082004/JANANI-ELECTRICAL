import { useState } from 'react'
import Arrow from './Arrow.jsx'
import { contactEmail } from '../content/company.js'

export function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const body = [
      `Name: ${fields.get('name')}`,
      `Mobile Number: ${fields.get('phone')}`,
      `Email: ${fields.get('email')}`,
      '',
      String(fields.get('message') || ''),
    ].join('\n')
    const subject = encodeURIComponent(`Website enquiry from ${fields.get('name')}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }
  return (
    <form className={`contact-form ${compact ? 'contact-form-compact' : ''}`} onSubmit={handleSubmit}>
      <div className="form-grid">
        <label><span>Name</span><input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
        <label><span>Mobile Number</span><input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required /></label>
      </div>
      <label><span>Email</span><input name="email" type="email" placeholder="Your email address" autoComplete="email" required /></label>
      {!compact && <label><span>Message</span><textarea name="message" rows="5" placeholder="How can we help?" required /></label>}
      {compact && <input name="message" type="hidden" value="Please contact me about your electrical products and services." readOnly />}
      <button type="submit" className="button button-primary">{submitted ? 'Open your email app' : 'Send enquiry'} <Arrow /></button>
      <p className="form-note" aria-live="polite">{submitted ? 'Your email app will open with your enquiry ready to send.' : 'We’ll get back to you as soon as possible.'}</p>
    </form>
  )
}

export function QuickContact() {
  return (
    <section className="quick-contact">
      <div className="container quick-contact-inner">
        <div className="quick-contact-heading">
          <span className="eyebrow">Have a project in mind?</span>
          <h2>Get in touch</h2>
        </div>
        <ContactForm compact />
      </div>
    </section>
  )
}

export default ContactForm
