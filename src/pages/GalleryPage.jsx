import { useEffect, useState } from 'react'
import { products, media } from '../content.js'
import Reveal from '../components/ScrollReveal.jsx'
import PageBanner from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Arrow from '../components/Arrow.jsx'
import CallToAction from '../components/CallToAction.jsx'

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
      <section className="section-space gallery-section"><div className="container"><SectionHeading eyebrow="Our work" title="Product gallery" text="Explore electrical products manufactured and assembled by Janani Electricals."/><div className="gallery-grid">{products.map((product, index) => <Reveal key={product.name} delay={(index % 4) * 60}><button className="gallery-card" type="button" onClick={() => setSelected(product)} aria-label={`View ${product.name}`}><img src={media(product.image)} alt={product.name} loading="lazy"/><span className="gallery-caption"><span>{product.name}</span><Arrow diagonal /></span></button></Reveal>)}</div></div></section>
      <Lightbox selected={selected} onClose={() => setSelected(null)} />
      <CallToAction />
    </>
  )
}

export default GalleryPage
