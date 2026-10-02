import Arrow from './Arrow.jsx'
import Icon from './Icon.jsx'
import { media, navLinks } from '../content.js'
import { companyAddress, contactEmail, phone } from '../content/company.js'

export function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-about"><a href="/" className="footer-brand"><img src={media('Heading-1-1.webp')} alt="Janani Electricals"/></a><p>Janani Electricals is a leading manufacturer of custom-built electrical control panels and switch gear assemblies.</p><div className="footer-cert"><span>ISO</span><span>CPRI</span><small>Certified quality<br/>and tested products</small></div></div><div className="footer-contact"><h2>Address</h2><p><Icon name="pin"/>{companyAddress}</p><a href={`mailto:${contactEmail}`}><Icon name="mail"/>{contactEmail}</a><a href="tel:+916369040966"><Icon name="phone"/>{phone}</a></div><div className="footer-links"><h2>Quick links</h2>{navLinks.filter((link) => link.href !== '/product-gallery/').map((link) => <a key={link.href} href={link.href}>{link.label}<Arrow diagonal /></a>)}<a href="/privacy-policy/">Privacy Policy<Arrow diagonal /></a></div><div className="footer-contact-cta"><span className="eyebrow eyebrow-light">Have a project in mind?</span><h2>Let’s build a safer, more reliable power system.</h2><a className="button button-light" href="/contact-us/">Contact us <Arrow /></a></div></div><div className="footer-bottom"><div className="container"><span>Copyrights © 2025 Janani Electricals. All rights reserved.</span><a href="/">Janani Electricals</a></div></div></footer>
}

export default Footer
