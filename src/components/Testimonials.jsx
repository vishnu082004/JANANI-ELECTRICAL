import { useEffect, useState } from 'react'
import Reveal from './ScrollReveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { testimonials } from '../content.js'

function Testimonials() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 2000)
    return () => window.clearInterval(timer)
  }, [])
  const item = testimonials[active]
  return (
    <section className="testimonials-section section-space">
      <div className="container">
        <SectionHeading eyebrow="Customer stories" title="Trusted by our clients" text="We build lasting partnerships through quality, reliable service, and electrical solutions made for each project." />
        <Reveal>
          <div className="testimonial-card" aria-live="polite" aria-atomic="true">
            <span className="testimonial-progress" key={active} aria-hidden="true" />
            <div className="testimonial-content" key={active}>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{item.quote}”</blockquote>
              <div className="testimonial-name"><span className="avatar-mark">{item.name.slice(0, 1)}</span><strong>{item.name}</strong></div>
            </div>
            <div className="carousel-controls">
              <button type="button" aria-label="Previous testimonial" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}>←</button>
              <div className="carousel-dots">{testimonials.map((testimonial, index) => <button type="button" key={testimonial.name} aria-label={`Show testimonial ${index + 1}`} className={index === active ? 'active' : ''} onClick={() => setActive(index)} />)}</div>
              <button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}>→</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials
