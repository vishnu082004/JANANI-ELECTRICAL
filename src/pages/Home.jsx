import Arrow from '../components/Arrow.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/ScrollReveal.jsx'
import { QuickContact } from '../components/Contact.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Clients from '../components/Clients.jsx'
import CallToAction from '../components/CallToAction.jsx'
import ThreeScene from '../components/ThreeScene.jsx'
import MissionVision from '../components/MissionVision.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Principles from '../components/Principles.jsx'

function HomePage() {
  return (
    <>
      <section className="home-hero">
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

      <MissionVision />

      <QuickContact />

      <About />

      <Services />

      <Principles />

      <section className="stats-section"><div className="container"><Stats /></div></section>
      <Testimonials />
      <Clients />
      <CallToAction />
    </>
  )
}

export default HomePage
