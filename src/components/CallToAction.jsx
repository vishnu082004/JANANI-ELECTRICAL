import Arrow from './Arrow.jsx'
import Reveal from './ScrollReveal.jsx'

function CallToAction() {
  return <section className="cta-section"><div className="container cta-inner"><Reveal direction="left"><span className="eyebrow eyebrow-light">Let’s power what’s next</span><h2>Power your infrastructure with safe, efficient, customized electrical solutions.</h2></Reveal><Reveal direction="right"><a className="button button-light" href="/contact-us/">Contact us now <Arrow diagonal /></a></Reveal></div></section>
}

export default CallToAction
