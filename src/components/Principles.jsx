import Arrow from './Arrow.jsx'
import Icon from './Icon.jsx'
import Reveal from './ScrollReveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { media } from '../content.js'

export default function Principles() { return (<section className="section-space why-section">
        <div className="container why-grid">
          <Reveal direction="left" className="why-copy">
            <SectionHeading align="left" eyebrow="Why choose us" title="Built on trust. Driven by engineering." />
            <p>With 20+ years of expertise, Janani Electricals delivers ISO-certified, CPRI-tested panels built for safety, reliability, and custom industry needs — always on time, always with quality.</p>
            <ul className="check-list"><li><Icon name="check" />20+ Years of Industry Expertise</li><li><Icon name="check" />ISO 9001:2015 Certified</li><li><Icon name="check" />CPRI Type-Tested Panels</li><li><Icon name="check" />Trusted by Leading Industries</li></ul>
            <p>With a commitment to quality, competitive pricing, and on-time delivery, Janani Electricals designs and manufactures custom-built electrical control panels, bus ducts, and allied products.</p>
            <a className="text-link" href="/contact-us/">Talk to our team <Arrow /></a>
          </Reveal>
          <Reveal direction="right" className="why-visual"><div className="why-image-frame"><img src={media('Untitled-design-2025-07-03T165330.720.webp')} alt="Electrical panel assembly at Janani Electricals" loading="lazy" /></div><div className="why-stamp"><strong>JE</strong><span>Engineering<br />you can trust</span></div></Reveal>
        </div>
      </section>) }
