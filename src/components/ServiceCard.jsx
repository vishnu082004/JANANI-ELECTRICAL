import Arrow from './Arrow.jsx'
import Reveal from './ScrollReveal.jsx'
import { media } from '../content.js'

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

export default ProductCard
