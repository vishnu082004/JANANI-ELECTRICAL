import Arrow from '../components/Arrow.jsx'
import Icon from '../components/Icon.jsx'
import PageBanner from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/Contact.jsx'
import { alternateContactEmail, companyAddress, contactEmail, phone, registeredAddress } from '../content/company.js'

function handleCardPointerMove(event) {
  if (event.pointerType !== 'mouse') return
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height
  event.currentTarget.style.setProperty('--card-tilt-x', `${(0.5 - y) * 4}deg`)
  event.currentTarget.style.setProperty('--card-tilt-y', `${(x - 0.5) * 4}deg`)
}

function resetCardPointer(event) {
  event.currentTarget.style.setProperty('--card-tilt-x', '0deg')
  event.currentTarget.style.setProperty('--card-tilt-y', '0deg')
}

function ContactPage() {
  return <><PageBanner title="Contact Us" /><section className="section-space contact-page-section"><div className="container"><SectionHeading eyebrow="Get in touch" title="Let’s discuss your requirements" text="Contact our team for product information, a project discussion, or a quotation." /><div className="contact-page-grid"><div className="contact-details"><div className="contact-detail-card" onPointerMove={handleCardPointerMove} onPointerLeave={resetCardPointer}><span className="contact-detail-icon"><Icon name="pin" /></span><div><h2>Location</h2><p>{companyAddress}</p></div></div><div className="contact-detail-card" onPointerMove={handleCardPointerMove} onPointerLeave={resetCardPointer}><span className="contact-detail-icon"><Icon name="phone" /></span><div><h2>Phone</h2><a href="tel:+916369040966">{phone}</a></div></div><div className="contact-detail-card contact-email-card" onPointerMove={handleCardPointerMove} onPointerLeave={resetCardPointer}><span className="contact-detail-icon"><Icon name="mail" /></span><div><h2>Email</h2><a href={`mailto:${alternateContactEmail}`}>{alternateContactEmail}</a><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div><div className="contact-detail-card" onPointerMove={handleCardPointerMove} onPointerLeave={resetCardPointer}><span className="contact-detail-icon"><Icon name="pin" /></span><div><h2>Registered Address</h2><p>{registeredAddress}</p></div></div><div className="contact-detail-card" onPointerMove={handleCardPointerMove} onPointerLeave={resetCardPointer}><span className="contact-detail-icon"><Icon name="phone" /></span><div><h2>Phone</h2><a href="tel:+919444005067">94440 05067</a></div></div></div><div className="contact-form-panel"><h2>Send us a message</h2><p>Share a few details about your project and we’ll get back to you.</p><ContactForm /></div></div><div className="contact-social"><span className="eyebrow">OUR SOCIAL MEDIA</span><div><span>Instagram</span><span>Youtube</span></div></div><div className="map-frame"><iframe title="Janani Electricals location in Chennai" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(companyAddress)}&output=embed`} /></div></div></section></>
}

export default ContactPage
