import ProductCard from './ServiceCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import { homeProducts } from '../content.js'

export default function Services() { return (<section className="section-space products-preview section-tint">
        <div className="container">
          <SectionHeading eyebrow="Our products" title="Power solutions for every application" text="Custom-built panels and electrical products engineered to serve demanding industrial environments." />
          <div className="product-grid product-grid-four">{homeProducts.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div>
          <div className="section-action"><a className="button button-outline" href="/products/">View all products <Arrow /></a></div>
        </div>
      </section>) }
