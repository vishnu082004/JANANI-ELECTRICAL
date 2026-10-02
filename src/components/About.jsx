import Arrow from './Arrow.jsx'
import Reveal from './ScrollReveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import Team from './Team.jsx'

export default function About() { return (<section className="section-space about-preview">
        <div className="container about-preview-grid">
          <Team />
          <Reveal direction="right" className="about-preview-copy">
            <SectionHeading align="left" eyebrow="About Janani Electricals" title="Experience that powers your progress" />
            <p>Established in 2000 by Mr. C. Thanikaivelan, Janani Electricals has grown into a reputable Chennai-based manufacturer of high-performance electrical control panels, bus ducts, and switchgear assemblies. With over two decades of industry experience, the company holds an ISO 9001:2015 certification and offers CPRI-tested products that meet the highest quality and safety standards.</p>
            <p>Janani Electricals specializes in delivering customized, reliable, and cost-effective power distribution and control solutions tailored to the specific needs of industries such as power generation, cement, IT, and infrastructure. Known for engineering excellence, timely project execution, and client-focused service, the company continues to serve as a trusted partner across India.</p>
            <a className="text-link" href="/about-us/">Discover our story <Arrow /></a>
          </Reveal>
        </div>
      </section>) }
