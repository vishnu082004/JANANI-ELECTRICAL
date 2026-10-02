import { products, media } from '../content.js'
import Reveal from '../components/ScrollReveal.jsx'
import PageBanner from '../components/Hero.jsx'
import Arrow from '../components/Arrow.jsx'
import CallToAction from '../components/CallToAction.jsx'

function ServicesPage() {
  return (
    <>
      <PageBanner title="Products" crumb="Product Detail" />
      <section className="section-space product-details-section"><div className="container product-detail-list">
        {products.map((product, index) => <Reveal key={product.name} direction={index % 2 ? 'right' : 'left'}><article className={`product-detail ${index % 2 ? 'product-detail-reverse' : ''}`}><div className="product-detail-image"><img src={media(product.image)} alt={product.name} loading="lazy" /><span className="product-detail-number">{String(index + 1).padStart(2, '0')}</span></div><div className="product-detail-copy"><span className="eyebrow">Electrical solutions</span><h2>{product.name}</h2><p>{product.description}</p><a className="text-link" href="/contact-us/">Enquire about this product <Arrow /></a></div></article></Reveal>)}
      </div></section>
      <CallToAction />
    </>
  )
}

export default ServicesPage
