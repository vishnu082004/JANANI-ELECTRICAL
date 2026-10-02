import Reveal from './ScrollReveal.jsx'
import { media } from '../content.js'

function PageBanner({ title, crumb = title, image = 'Untitled-design-4.webp', position = 'center 48%' }) {
  return (
    <section className="page-banner" style={{ '--banner-image': `url("${media(image)}")`, '--banner-position': position }}>
      <div className="banner-texture" aria-hidden="true" />
      <div className="container banner-inner">
        <Reveal direction="left"><span className="eyebrow eyebrow-light">Janani Electricals</span><h1>{title}</h1><div className="breadcrumbs"><a href="/">Home</a><span>/</span><span>{crumb}</span></div></Reveal>
        <div className="banner-mark" aria-hidden="true"><img src={media('JE-logo-03-scaled.webp')} alt="" /></div>
      </div>
    </section>
  )
}

export default PageBanner
