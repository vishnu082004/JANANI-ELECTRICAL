import Reveal from './ScrollReveal.jsx'
import { media } from '../content.js'

export default function Team({ variant = 'preview' }) {
  if (variant === 'page') return <Reveal direction="left" className="about-page-image"><img src={media('Lroi-20.webp')} alt="Janani Electricals founder C. Thanikaivelan" /><span className="since-badge"><strong>2000</strong><small>Established</small></span></Reveal>
  return <Reveal direction="left" className="about-image-wrap"><img src={media('Lroi-20.webp')} alt="Janani Electricals founder C. Thanikaivelan" loading="lazy" /><span className="image-caption"><strong>Janani Electricals</strong><small>Building reliable power solutions since 2000</small></span></Reveal>
}
