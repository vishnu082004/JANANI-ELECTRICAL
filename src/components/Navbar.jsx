import { useState } from 'react'
import Arrow from './Arrow.jsx'
import Icon from './Icon.jsx'
import { blogPosts, media, navLinks } from '../content.js'
import { contactEmail, phone } from '../content/company.js'

function Header({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <a href={`mailto:${contactEmail}`}><Icon name="mail" />{contactEmail}</a>
          <a href="tel:+916369040966"><Icon name="phone" />{phone}</a>
        </div>
      </div>
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

export default Header
