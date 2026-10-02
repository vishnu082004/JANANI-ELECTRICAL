import Reveal from './ScrollReveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { companyVideos, media, processPhotos } from '../content.js'

export default function ArchitectureShowcase() { return <>
<section className="section-space process-section section-tint"><div className="container"><SectionHeading eyebrow="How we work" title="Our work process" text="From design and fabrication to assembly and testing, each step is handled by our experienced engineering team."/><div className="process-grid">{processPhotos.map((step, index) => <Reveal key={step.title} delay={(index % 4) * 60}><figure className="process-card"><div><img src={media(step.image)} alt={step.title} loading="lazy"/></div><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{step.title}</figcaption></figure></Reveal>)}</div></div></section>
<section className="section-space videos-section"><div className="container"><SectionHeading eyebrow="Inside Janani Electricals" title="See our work in action" text="A look at the people, processes, and production behind our electrical solutions."/><div className="video-grid">{companyVideos.map((video, index) => <Reveal key={video.file} delay={(index % 2) * 90}><figure className="video-card"><video controls preload="none" playsInline poster={media(video.poster)}><source src={media(video.file)} type="video/mp4"/>Your browser does not support this video.</video><figcaption>{video.title}</figcaption></figure></Reveal>)}</div></div></section>
</> }
