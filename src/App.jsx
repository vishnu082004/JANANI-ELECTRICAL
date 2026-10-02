import { useEffect, useState } from 'react'
import {
  blogPosts,
  clientNames,
  companyVideos,
  homeProducts,
  media,
  navLinks,
  processPhotos,
  products,
  testimonials,
} from './content.js'
import ThreeScene from './components/ThreeScene.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import './styles/index.css'

const companyAddress = 'No: 2/1, Bharathi Street, Vallalar Nagar, (Raja’s Garden 1st Street), Chettiyaragaram, Chennai – 600 095.'
const phone = '+91 6369040966'
const contactEmail = 'sales@jananielectricals.com'
const alternateContactEmail = 'c_thanikai2004@yahoo.co.in'
const registeredAddress = 'TS 71/1, Industrial Estate, Ekkaduthangal, Guindy, Chennai – 600 032.'

function Arrow({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      {diagonal ? <path d="M7 17 17 7M8 7h9v9" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  )
}

function Icon({ name }) {
  const paths = {
    phone: <><path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 3a14 14 0 0 1-7-7l3-2-2-5Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  }
  return <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function TrustIcon({ name }) {
  const icons = {
    tested: <><path d="M8 4h8l1 2h3v15H4V6h3l1-2Z" /><path d="M9 4h6v4H9zM8 11h2m3 0h4M8 15h2m3 0h4M8 19h2m3 0h4" /></>,
    certified: <><path d="M12 3 15 4l3.2-.2.8 3 2 2.5-1.5 2.8.1 3.2-2.8 1.4-1.7 2.7-3.1-.8-3.1.8-1.7-2.7-2.8-1.4.1-3.2L3 9.3 5 6.8l.8-3L9 4l3-1Z" /><path d="m8.5 16.3-1 5 4.5-2.2 4.5 2.2-1-5M9 10.8l2 2 4-4" /></>,
    engineering: <><rect x="3" y="5" width="15" height="10" rx="1.5" /><path d="M3 8h15m-11 7v2.5M7 18h7" /><rect x="11" y="12" width="10" height="8" rx="1.5" /><circle cx="16" cy="16" r="1.5" /></>,
  }
  return <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>
}

function Reveal({ children, className = '', direction = 'up', delay = 0 }) {
  const [visible, setVisible] = useState(false)
  const [id] = useState(() => 'reveal-' + Math.random().toString(36).slice(2))
  useEffect(() => {
    const node = document.querySelector(`[data-reveal-id="${id}"]`)
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.14 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [id])
  return (
    <div data-reveal-id={id} className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}
function Header({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="main-header">
        <div className="container main-header-inner">
          <a className="brand" href="/" aria-label="Janani Electricals home">
            <img src={media('JE-logo-03-scaled.webp')} alt="Janani Electricals" />
          </a>
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = currentPage === link.href || (link.href === '/blogs/' && blogPosts.some((post) => currentPage === '/' + post.slug + '/'))
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={active ? 'active' : ''}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
            <a className="nav-contact" href="/contact-us/">Get In Touch <Arrow diagonal /></a>
          </nav>
        </div>
      </div>
    </header>
  )
}

const pageHeroImages = {
  'About Us': 'Untitled-design-4.webp',
  Products: 'Lroi-18.webp',
  'Product Gallery': 'Lroi-16.webp',
  Blog: 'Untitled-design-5.webp',
  'Our Blog': 'Untitled-design-1.webp',
  'Contact Us': 'Untitled-design-5.webp',
  'Page not found': 'hero-panel.webp',
}

function PageBanner({ title, crumb = title, image = pageHeroImages[title] || 'Lroi-18.webp' }) {
  return (
    <section className="page-banner" style={{ '--banner-image': `url("${media(image)}")` }}>
      <div className="banner-texture" aria-hidden="true" />
      <div className="container banner-inner">
        <Reveal direction="left">
          <span className="eyebrow eyebrow-light">Janani Electricals</span>
          <h1>{title}</h1>
          <div className="breadcrumbs"><a href="/">Home</a><span>/</span><span>{crumb}</span></div>
        </Reveal>
        <div className="banner-mark" aria-hidden="true"><img src={media('JE-logo-03-scaled.webp')} alt="" /></div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function ContactForm({ compact = false }) {
  const [status, setStatus] = useState('idle')
  const [submittedName, setSubmittedName] = useState('')
  const requestedProduct = new URLSearchParams(window.location.search).get('product') || ''
  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const projectType = String(data.get('projectType') || '').trim()
    data.set('_subject', `Website enquiry${projectType ? `: ${projectType}` : ''} from ${name}`)
    data.set('_replyto', String(data.get('email') || ''))
    setStatus('sending')
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await response.json()
      if (!response.ok || result.success === false || result.success === 'false') throw new Error('Submission failed')
      setSubmittedName(name)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }
  return (
    <form className={`contact-form ${compact ? 'contact-form-compact' : ''}`} onSubmit={handleSubmit}>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />
      <div className="form-grid">
        <label><span>Name</span><input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
        <label><span>Mobile Number</span><input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required /></label>
      </div>
      <label><span>Email</span><input name="email" type="email" placeholder="Your email address" autoComplete="email" required /></label>
      <label><span>Product or service</span><select name="projectType" defaultValue={products.some((product) => product.name === requestedProduct) ? requestedProduct : ''}><option value="">Choose a product (optional)</option>{products.map((product) => <option key={product.name} value={product.name}>{product.name}</option>)}<option value="Other / not sure">Other / not sure</option></select></label>
      <label className={compact ? 'compact-project-details' : ''}><span></span><textarea name="message" rows={compact ? 3 : 5} placeholder={compact ? 'Message' : 'How can we help?'} required={!compact} /></label>
      <button type="submit" className="button button-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : status === 'success' ? 'Send another response' : 'Send enquiry'} <Arrow /></button>
      {status === 'success' ? (
        <div className="form-success-card" role="status" aria-live="polite">
          <span className="form-success-mark" aria-hidden="true"><Icon name="check" /></span>
          <div>
            <p className="form-success-title">A bright idea starts here{submittedName ? `, ${submittedName}` : ''}.</p>
            <p className="form-success-copy">Your enquiry is with our team. We’ll be in touch soon to help power your next project.</p>
          </div>
        </div>
      ) : (
        <p className={`form-note form-note-${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">{status === 'error' ? 'We could not send your enquiry. Please try again or email us directly.' : status === 'sending' ? 'Sending your enquiry...' : 'We will get back to you as soon as possible.'}</p>
      )}
    </form>
  )
}

function ProductCard({ product, index = 0 }) {
  return (
    <Reveal delay={(index % 4) * 80} className="product-card-wrap">
      <a className="product-card" href="/products/">
        <div className="product-card-image"><img src={media(product.image)} alt={product.name} loading="lazy" /><span className="card-arrow"><Arrow diagonal /></span></div>
        <div className="product-card-caption"><span className="product-index">{String(index + 1).padStart(2, '0')}</span><h3>{product.name}</h3></div>
      </a>
    </Reveal>
  )
}

function Counter({ value, label, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const node = document.querySelector(`[data-counter="${label}"]`)
    if (!node || !('IntersectionObserver' in window)) {
      setCount(value)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      setStarted(true)
      const start = performance.now()
      const duration = 1800
      function step(now) {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.round(value * eased))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
      observer.disconnect()
    }, { threshold: 0.4 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [label, started, value])
  return <div className="counter" data-counter={label}><strong>{count.toLocaleString('en-IN')}<span>{suffix}</span></strong><span>{label}</span></div>
}

function Stats({ compact = false }) {
  return (
    <div className={`stats-strip ${compact ? 'stats-compact' : ''}`}>
      <Counter value={2000} label="Happy Clients" />
      <Counter value={15} label="Products" />
      <Counter value={30} label="Years Experience" />
    </div>
  )
}

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
              <div className="testimonial-stars" aria-label="5 out of 5 stars"></div>
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-name"><span className="avatar-mark">{item.name.slice(0, 1)}</span><strong>{item.name}</strong></div>
            </div>
            <div className="carousel-controls">
              <button type="button" aria-label="Previous testimonial" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}>&#8592;</button>
              <div className="carousel-dots">{testimonials.map((testimonial, index) => <button type="button" key={testimonial.name} aria-label={`Show testimonial ${index + 1}`} className={index === active ? 'active' : ''} onClick={() => setActive(index)} />)}</div>
              <button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}>&#8594;</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Clients() {
  const duplicated = [...clientNames, ...clientNames]
  return (
    <section className="clients-section section-space-sm">
      <div className="container"><SectionHeading eyebrow="Our clients" title="Trusted across industries" /></div>
      <div className="client-marquee" aria-label="Selected clients">
        <div className="client-track">{duplicated.map((client, index) => <span className="client-pill" key={`${client}-${index}`} aria-hidden={index >= clientNames.length}>{client}</span>)}</div>
      </div>
      <div className="container client-list">{clientNames.map((client) => <span key={client}>{client}</span>)}</div>
    </section>
  )
}

function QuickContact() {
  return (
    <section className="quick-contact">
      <div className="container quick-contact-inner">
        <div className="quick-contact-card">
          <div className="quick-contact-intro">
            <span className="quick-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13.5 2 5 13h6l-.5 9L19 10h-6l.5-8Z" /></svg></span>
            <span className="quick-contact-kicker"><i /> Welcome to Janani Electricals</span>
            <h2>Let’s build your next <em>power solution.</em></h2>
            <p>We’re glad you’re here. Tell us what you’re working on and our electrical team will help you find the right fit for your project.</p>
            <div className="quick-contact-benefits">
              <span><i><Icon name="check" /></i><span><strong>Personal response</strong><small>Talk directly with our team</small></span></span>
              <span><i><Icon name="check" /></i><span><strong>Built around your needs</strong><small>Custom solutions since 2000</small></span></span>
            </div>
          </div>
          <div className="quick-contact-form-panel">
            <div className="quick-contact-form-heading">
              <div><span className="eyebrow">Start with the basics</span><h3>Tell us about your project</h3></div>
              <span className="quick-contact-time"><i /> 2 minute form</span>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  )
}
function HomePage() {
  return (
    <>
      <section className="home-hero" style={{ '--hero-image': `url("${media('Lroi-18.webp')}")` }}>
        <div className="hero-glow" aria-hidden="true" />
        <div className="container home-hero-grid">
          <Reveal direction="left" className="hero-copy">
            <span className="eyebrow">Manufacturing excellence since 2000</span>
            <h1>Powering industries with <em>reliable</em> electrical solutions</h1>
            <p>Trusted experts in designing and manufacturing high-quality electrical control panels, bus ducts, and switchgear assemblies for diverse industrial needs.</p>
            <div className="hero-actions"><a className="button button-primary" href="/about-us/">About us <Arrow /></a><a className="button button-outline" href="/contact-us/">Get in touch <Arrow diagonal /></a></div>
            <div className="hero-proof"><span className="proof-icon"><Icon name="check" /></span><span><strong>CPRI tested</strong><small>Quality you can rely on</small></span><span className="proof-divider" /><span><strong>ISO 9001:2015</strong><small>Certified quality systems</small></span></div>
          </Reveal>
          <Reveal direction="right" className="hero-visual"><ThreeScene /></Reveal>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="trust-strip" aria-label="Our strengths">
        <div className="container trust-grid">
          <div className="trust-card trust-card-tested"><TrustIcon name="tested" /><span className="trust-copy"><small className="trust-kicker">QUALITY YOU CAN TRUST</small><strong>CPRI Tested Products</strong><small>Proven safety and performance</small></span><span className="trust-orbit" aria-hidden="true" /></div>
          <div className="trust-card trust-card-certified"><TrustIcon name="certified" /><span className="trust-copy"><small className="trust-kicker">CONSISTENT BY DESIGN</small><strong>ISO 9001:2015 Certified</strong><small>Quality standards in every build</small></span><span className="trust-orbit" aria-hidden="true" /></div>
          <div className="trust-card trust-card-engineering"><TrustIcon name="engineering" /><span className="trust-copy"><small className="trust-kicker">MADE FOR YOUR PROJECT</small><strong>Skilled Engineering Team</strong><small>Solutions designed around you</small></span><span className="trust-orbit" aria-hidden="true" /></div>
        </div>
      </section>

      <QuickContact />

      <section className="section-space about-preview">
        <div className="container about-preview-grid">
          <Reveal direction="left" className="about-image-wrap"><img src={media('Lroi-20.webp')} alt="Janani Electricals founder C. Thanikaivelan" loading="lazy" /><span className="image-caption"><strong>Janani Electricals</strong><small>Building reliable power solutions since 2000</small></span></Reveal>
          <Reveal direction="right" className="about-preview-copy">
            <SectionHeading align="left" eyebrow="About Janani Electricals" title="Experience that powers your progress" />
            <p>Established in 2000 by Mr. C. Thanikaivelan, Janani Electricals has grown into a reputable Chennai-based manufacturer of high-performance electrical control panels, bus ducts, and switchgear assemblies. With over two decades of industry experience, the company holds an ISO 9001:2015 certification and offers CPRI-tested products that meet the highest quality and safety standards.</p>
            <p>Janani Electricals specializes in delivering customized, reliable, and cost-effective power distribution and control solutions tailored to the specific needs of industries such as power generation, cement, IT, and infrastructure. Known for engineering excellence, timely project execution, and client-focused service, the company continues to serve as a trusted partner across India.</p>
            <a className="text-link" href="/about-us/">Discover our story <Arrow /></a>
          </Reveal>
        </div>
      </section>

      <section className="section-space products-preview section-tint">
        <div className="container">
          <SectionHeading eyebrow="Our products" title="Power solutions for every application" text="Custom-built panels and electrical products engineered to serve demanding industrial environments." />
          <div className="product-grid product-grid-four">{homeProducts.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div>
          <div className="section-action"><a className="button button-outline" href="/products/">View all products <Arrow /></a></div>
        </div>
      </section>

      <section className="section-space why-section">
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
      </section>

      <section className="stats-section"><div className="container"><Stats /></div></section>
      <Testimonials />
      <Clients />
      <CallToAction />
    </>
  )
}

function CallToAction() {
  return <section className="cta-section"><div className="container cta-inner"><Reveal direction="left"><span className="eyebrow eyebrow-light">Let’s power what’s next</span><h2>Power your infrastructure with safe, efficient, customized electrical solutions.</h2></Reveal><Reveal direction="right"><a className="button button-light" href="/contact-us/">Contact us now <Arrow diagonal /></a></Reveal></div></section>
}

function AboutPage() {
  const strengths = [
    'Customized panel solutions tailored to diverse industry needs',
    'Certified and tested for high performance and reliability',
    'Use of premium components from trusted global brands',
    'Timely delivery with no compromise on quality',
    'Customer-centric approach with flexible design capabilities',
  ]
  return (
    <>
      <PageBanner title="About Us" />
      <section className="section-space about-page-intro"><div className="container about-page-grid">
        <Reveal direction="left" className="about-page-image"><img src={media('Lroi-20.webp')} alt="Janani Electricals founder C. Thanikaivelan" /><span className="since-badge"><strong>2000</strong><small>Established</small></span></Reveal>
        <Reveal direction="right"><SectionHeading align="left" eyebrow="About Janani Electricals" title="A trusted name in electrical infrastructure" /><p>Since its inception in 2000, Janani Electricals, founded by Mr. C. Thanikaivelan in Chennai, has grown into a trusted name in India’s electrical infrastructure sector. With over two decades of expertise, we specialize in the design and manufacturing of custom-built electrical control panels ranging from HT, MV to LT systems. Our solutions are fully type tested by CPRI for short circuit, temperature rise, and IP protection, ensuring top-tier performance and safety.</p><p>As an ISO 9001:2015 certified company, we are committed to delivering quality, innovation, and customer satisfaction. Our core strengths include:</p><ul className="check-list strength-list">{strengths.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul></Reveal>
      </div></section>
      <section className="stats-section stats-about"><div className="container"><Stats compact /></div></section>
      <Testimonials />
      <section className="section-space process-section section-tint"><div className="container"><SectionHeading eyebrow="How we work" title="Our work process" text="From design and fabrication to assembly and testing, each step is handled by our experienced engineering team." /><div className="process-grid">{processPhotos.map((step, index) => <Reveal key={step.title} delay={(index % 4) * 60}><figure className="process-card"><div><img src={media(step.image)} alt={step.title} loading="lazy" /></div><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{step.title}</figcaption></figure></Reveal>)}</div></div></section>
      <section className="section-space videos-section"><div className="container"><SectionHeading eyebrow="Inside Janani Electricals" title="See our work in action" text="A look at the people, processes, and production behind our electrical solutions." /><div className="video-grid">{companyVideos.map((video, index) => <Reveal key={video.file} delay={(index % 2) * 90}><figure className="video-card"><video controls preload="none" playsInline poster={media(video.poster)}><source src={media(video.file)} type="video/mp4" />Your browser does not support this video.</video><figcaption>{video.title}</figcaption></figure></Reveal>)}</div></div></section>
      <CallToAction />
    </>
  )
}

function ProductsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All products')
  const categories = ['All products', ...new Set(products.map((product) => product.category))]
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All products' || product.category === category
    const matchesQuery = `${product.name} ${product.description}`.toLowerCase().includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  })
  return (
    <>
      <PageBanner title="Products" crumb="Product Detail" />
      <section className="section-space product-details-section"><div className="container">
        <div className="product-finder">
          <div className="product-finder-heading"><span className="eyebrow">Find your solution</span><h2>What does your project need?</h2><p>Search our products or choose a category to narrow the list.</p></div>
          <label className="product-search"><span className="sr-only">Search products</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products and applications" /></label>
          <div className="product-filters" role="group" aria-label="Filter products by category">{categories.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <p className="product-result-count" aria-live="polite">Showing {filteredProducts.length} of {products.length} products</p>
        </div>
        <div className="product-detail-list">
        {filteredProducts.length === 0 && <div className="product-empty"><h2>No matching products</h2><p>Try another search or clear the selected category.</p><button type="button" className="button button-outline" onClick={() => { setQuery(''); setCategory('All products') }}>Show all products</button></div>}
        </div>
      </div></section>
      <CallToAction />
    </>
  )
}

function GalleryPage() {
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    if (!selected) return undefined
    function onKeyDown(event) { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('modal-open')
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('modal-open') }
  }, [selected])
  return (
    <>
      <PageBanner title="Product Gallery" />
      <section className="section-space gallery-section"><div className="container"><SectionHeading eyebrow="Our work" title="Product gallery" text="Explore electrical products manufactured and assembled by Janani Electricals." /><div className="gallery-grid">{products.map((product, index) => <Reveal key={product.name} delay={(index % 4) * 60}><button className="gallery-card" type="button" onClick={() => setSelected(product)} aria-label={`View ${product.name}`}><img src={media(product.image)} alt={product.name} loading="lazy" /><span className="gallery-caption"><span>{product.name}</span><Arrow diagonal /></span></button></Reveal>)}</div></div></section>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.name} onClick={() => setSelected(null)}><button className="lightbox-close" type="button" aria-label="Close image" onClick={() => setSelected(null)}>&times;</button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={media(selected.image)} alt={selected.name} /><h2>{selected.name}</h2></div></div>}
      <CallToAction />
    </>
  )
}

const blogCategories = {
  [blogPosts[0].slug]: 'Electrical Panels',
  [blogPosts[1].slug]: 'Industrial Efficiency',
  [blogPosts[2].slug]: 'Electrical Safety',
}

function BlogCard({ post, index, category, onImageClick }) {
  const imageUrl = media(post.image)
  return (
    <Reveal delay={index * 100} className="blog-card-reveal">
      <article className="blog-card">
        <button className="blog-image" type="button" onClick={() => onImageClick(index)} aria-label={`View full image for ${post.title}`} data-full={imageUrl}>
          <img src={imageUrl} alt={`Electrical engineering: ${post.title}`} loading="lazy" width="1600" height="900" />
          <span className="blog-image-action" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M10.5 4H4v6.5M13.5 20H20v-6.5M4 10.5 10 4m10 9.5L14 20" /></svg></span>
        </button>
        <div className="blog-card-copy">
          <span className="blog-category">{category}</span>
          <h2><a href={`/${post.slug}/`}>{post.title}</a></h2>
          <p>{post.excerpt}</p>
          <a className="blog-read-more" href={`/${post.slug}/`}>Read article <Arrow /></a>
        </div>
      </article>
    </Reveal>
  )
}

function BlogLightbox({ posts, selectedIndex, onClose, onSelect }) {
  const post = posts[selectedIndex]
  useEffect(() => {
    if (!post) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onSelect((selectedIndex + 1) % posts.length)
      if (event.key === 'ArrowLeft') onSelect((selectedIndex - 1 + posts.length) % posts.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [post, selectedIndex, posts.length, onClose, onSelect])
  if (!post) return null
  const fullImage = media(post.image)
  return (
    <div className="blog-lightbox" role="dialog" aria-modal="true" aria-label={`Image preview: ${post.title}`} onClick={onClose}>
      <button className="blog-lightbox-close" type="button" aria-label="Close image preview" onClick={onClose}>&times;</button>
      <button className="blog-lightbox-step blog-lightbox-previous" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); onSelect((selectedIndex - 1 + posts.length) % posts.length) }}><span aria-hidden="true">&#8249;</span></button>
      <figure className="blog-lightbox-figure" onClick={(event) => event.stopPropagation()}>
        <img src={fullImage} alt={`Electrical engineering: ${post.title}`} width="1600" height="900" />
        <figcaption><span>{post.title}</span><span>{selectedIndex + 1} / {posts.length}</span></figcaption>
      </figure>
      <button className="blog-lightbox-step blog-lightbox-next" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); onSelect((selectedIndex + 1) % posts.length) }}><span aria-hidden="true">&#8250;</span></button>
    </div>
  )
}

function BlogsPage() {
  const posts = blogPosts.slice(0, 3)
  const categories = ['All', ...new Set(posts.map((post) => blogCategories[post.slug]))]
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const filteredPosts = posts.filter((post) => {
    const category = blogCategories[post.slug]
    const matchesCategory = activeCategory === 'All' || category === activeCategory
    const searchableText = `${post.title} ${post.excerpt} ${category}`.toLowerCase()
    return matchesCategory && searchableText.includes(query.trim().toLowerCase())
  })
  return <>
    <section className="blog-hero" style={{ '--blog-hero-image': `url("${media('Untitled-design-5.webp')}")` }}>
      <div className="blog-hero-grid" aria-hidden="true" />
      <div className="container blog-hero-content"><Reveal direction="left"><span className="blog-hero-kicker">Janani Electricals</span><h1>Blog</h1><span className="blog-hero-rule" /><nav className="blog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Blog</span></nav></Reveal></div>
      <div className="blog-hero-orbit" aria-hidden="true" />
    </section>
    <section className="section-space blogs-section"><div className="container">
      <Reveal><SectionHeading eyebrow="Our blog" title="Latest blog & articles" text="Ideas and information about electrical control panels, power distribution, and industrial efficiency." /></Reveal>
      <div className="blog-toolbar" aria-label="Filter and search articles">
        <div className="blog-filters" role="group" aria-label="Filter articles by category">{categories.map((category) => <button type="button" key={category} className={`blog-filter ${activeCategory === category ? 'is-active' : ''}`} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <label className="blog-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3" /><path d="m16 16 4.5 4.5" /></svg><span className="sr-only">Search articles</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles..." /></label>
      </div>
      {filteredPosts.length ? <div className="blog-grid">{filteredPosts.map((post) => <BlogCard key={post.slug} post={post} category={blogCategories[post.slug]} index={posts.indexOf(post)} onImageClick={setSelectedImage} />)}</div> : <p className="blog-empty" role="status">No articles match your search. Try another term.</p>}
    </div></section>
    <BlogLightbox posts={posts} selectedIndex={selectedImage} onClose={() => setSelectedImage(null)} onSelect={setSelectedImage} />
    <CallToAction />
  </>
}

function BlogArticle({ post }) {
  return <><PageBanner title="Our Blog" crumb="Blog article" /><article className="section-space article-section"><div className="container article-layout"><div className="article-main"><img className="article-cover" src={media(post.image)} alt="" /><span className="eyebrow">Janani Electricals · Insights</span><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p>{post.sections.map((section) => <section className="article-part" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}{section.after && <p>{section.after}</p>}</section>)}<a className="button button-outline" href="/blogs/">Back to blogs <Arrow /></a></div><aside className="article-sidebar"><div className="sidebar-card"><span className="eyebrow">Recent posts</span>{blogPosts.filter((item) => item.slug !== post.slug).map((item) => <a key={item.slug} href={`/${item.slug}/`}>{item.title}<Arrow diagonal /></a>)}</div><div className="sidebar-contact"><h3>Need a custom panel?</h3><p>Talk with our engineering team about your project requirements.</p><a className="button button-primary" href="/contact-us/">Get in touch <Arrow /></a></div></aside></div></article><CallToAction /></>
}

function ContactPage() {
  return <><PageBanner title="Contact Us" /><section className="section-space contact-page-section"><div className="container"><SectionHeading eyebrow="Get in touch" title="Let’s discuss your requirements" text="Contact our team for product information, a project discussion, or a quotation." /><div className="contact-page-grid"><div className="contact-details"><div className="contact-detail-card"><span className="contact-detail-icon"><Icon name="pin" /></span><div><h2>Location</h2><p>{companyAddress}</p></div></div><div className="contact-detail-card"><span className="contact-detail-icon"><Icon name="phone" /></span><div><h2>Phone</h2><a href="tel:+916369040966">{phone}</a></div></div><div className="contact-detail-card contact-email-card"><span className="contact-detail-icon"><Icon name="mail" /></span><div><h2>Email</h2><a href={`mailto:${alternateContactEmail}`}>{alternateContactEmail}</a><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div><div className="contact-detail-card"><span className="contact-detail-icon"><Icon name="pin" /></span><div><h2>Registered Address</h2><p>{registeredAddress}</p></div></div></div><div className="contact-form-panel"><h2>Send us a message</h2><p>Share a few details about your project and we’ll get back to you.</p><ContactForm /></div></div><section className="contact-social" aria-labelledby="contact-social-title"><div className="contact-social-copy"><span className="eyebrow">STAY CONNECTED</span><h2 id="contact-social-title">Follow our work</h2><p>See company updates, manufacturing moments, and product highlights.</p></div><div className="contact-social-links"><a className="social-link social-instagram" href="https://www.instagram.com/jananielectricals/" target="_blank" rel="noopener noreferrer" aria-label="Visit Janani Electricals on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" className="social-icon-fill"/></svg><span><strong>Instagram</strong><small>@jananielectricals</small></span><Arrow diagonal /></a><a className="social-link social-youtube" href="https://www.youtube.com/results?search_query=Janani+Electricals+Chennai" target="_blank" rel="noopener noreferrer" aria-label="Search for Janani Electricals on YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" className="social-icon-fill"/></svg><span><strong>YouTube</strong><small>Find our videos</small></span><Arrow diagonal /></a></div></section><section className="location-card" aria-label="Find Janani Electricals"><div className="location-card-heading"><div><span className="eyebrow">VISIT OUR OFFICE</span><h2>Find us in Chennai</h2><p>{companyAddress}</p></div><a className="location-directions" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyAddress)}`} target="_blank" rel="noopener noreferrer"><Icon name="pin" /> Get directions <Arrow diagonal /></a></div><div className="map-frame"><iframe title="Map showing Janani Electricals in Chennai" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(companyAddress)}&output=embed`} /></div><div className="location-card-foot"><span className="location-live-dot" aria-hidden="true" /> Map powered by Google Maps <span className="location-card-name">JANANI ELECTRICALS · CHENNAI</span></div></section></div></section></>
}

function NotFound() {
  return <><PageBanner title="Page not found" /><section className="section-space not-found"><div className="container"><h2>We couldn’t find that page.</h2><p>Choose a page from the navigation to continue.</p><a className="button button-primary" href="/">Return home <Arrow /></a></div></section></>
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <a href="/" className="footer-brand"><img src={media('Heading-1-1.webp')} alt="Janani Electricals" /></a>
          <p>Janani Electricals is a leading manufacturer of custom-built electrical control panels and switch gear assemblies.</p>
          <div className="footer-cert"><span>ISO</span><span>CPRI</span><small>Certified quality<br />and tested products</small></div>
        </div>
        <div className="footer-links">
          <h2>Quick links</h2>
          {navLinks.filter((link) => link.href !== '/product-gallery/').map((link) => <a key={link.href} href={link.href}>{link.label}<Arrow diagonal /></a>)}
          <a href="/privacy-policy/">Privacy Policy<Arrow diagonal /></a>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <p><Icon name="pin" />{companyAddress}</p>
          <a href={`mailto:${contactEmail}`}><Icon name="mail" />{contactEmail}</a>
          <a href="tel:+916369040966"><Icon name="phone" />{phone}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span className="footer-copyright">&copy; {new Date().getFullYear()} Janani Electricals. All rights reserved.</span>
          <span className="footer-credit">Developed by <a href="https://sagegfx.com/" target="_blank" rel="noopener noreferrer">Sage GFX Digital Solutions</a></span>
          <a className="footer-policy" href="/privacy-policy/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
function getRoute() {
  const path = window.location.pathname.replace(/\/{2,}/g, '/').replace(/\/?$/, '/')
  const post = blogPosts.find((item) => path === `/${item.slug}/`)
  return { path, post }
}

function App() {
  const { path, post } = getRoute()
  const pageTitles = {
    '/': 'Home',
    '/about-us/': 'About Us',
    '/products/': 'Products',
    '/product-gallery/': 'Product Gallery',
    '/blogs/': 'Blogs',
    '/contact-us/': 'Contact Us',
    '/privacy-policy/': 'Privacy Policy',
  }
  useEffect(() => {
    const title = post?.title || pageTitles[path] || 'Page Not Found'
    document.title = `${title} | Janani Electricals`
  }, [path, post])
  let page
  if (post) page = <BlogArticle post={post} />
  else if (path === '/') page = <HomePage />
  else if (path === '/about-us/') page = <AboutPage />
  else if (path === '/products/') page = <ProductsPage />
  else if (path === '/product-gallery/') page = <GalleryPage />
  else if (path === '/blogs/') page = <BlogsPage />
  else if (path === '/contact-us/') page = <ContactPage />
  else if (path === '/privacy-policy/') page = <PrivacyPolicyPage />
  else page = <NotFound />
  return <><Header currentPage={path} /><main>{page}</main><Footer /><a className="floating-whatsapp" href="https://wa.me/916369040966" target="_blank" rel="noopener noreferrer" aria-label="Chat with Janani Electricals on WhatsApp at +91 6369040966"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3.2A12.7 12.7 0 0 0 5.12 22.38L3.4 28.65l6.42-1.68A12.7 12.7 0 1 0 16.04 3.2Zm0 23.1a10.3 10.3 0 0 1-5.25-1.44l-.38-.23-3.81 1 1.02-3.71-.25-.39a10.34 10.34 0 1 1 8.67 4.77Zm5.67-7.74c-.31-.16-1.84-.91-2.12-1.02-.29-.1-.49-.16-.7.16-.2.31-.8 1.02-.98 1.23-.18.2-.36.23-.67.08-.31-.16-1.31-.49-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.69-.95-2.31-.25-.6-.5-.52-.7-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.1 2.97 1.25 3.18c.15.2 2.17 3.31 5.25 4.64.73.32 1.3.51 1.74.65.73.23 1.39.2 1.91.12.58-.09 1.84-.75 2.1-1.48.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36Z"/></svg></a></>
}

export default App
