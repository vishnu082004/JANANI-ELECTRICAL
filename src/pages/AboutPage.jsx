import Arrow from '../components/Arrow.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/ScrollReveal.jsx'
import PageBanner from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Team from '../components/Team.jsx'
import ArchitectureShowcase from '../components/ArchitectureShowcase.jsx'
import CallToAction from '../components/CallToAction.jsx'

function AboutPage() {
  const strengths = [
    'Customized panel solutions tailored to diverse industry needs',
    'Certified and tested for high performance and reliability',
    'Use of premium components from trusted global brands',
    'Timely delivery with no compromise on quality',
    'Customer-centric approach with flexible design capabilities',
  ]
  return (
    <>
      <PageBanner title="About Janani Electricals" crumb="About Us" />
      <section className="section-space about-page-intro"><div className="container about-page-grid">
        <Team variant="page" />
        <Reveal direction="right"><SectionHeading align="left" eyebrow="About Janani Electricals" title="A trusted name in electrical infrastructure" /><p>Since its inception in 2000, Janani Electricals, founded by Mr. C. Thanikaivelan in Chennai, has grown into a trusted name in India’s electrical infrastructure sector. With over two decades of expertise, we specialize in the design and manufacturing of custom-built electrical control panels ranging from HT, MV to LT systems. Our solutions are fully type tested by CPRI for short circuit, temperature rise, and IP protection, ensuring top-tier performance and safety.</p><p>As an ISO 9001:2015 certified company, we are committed to delivering quality, innovation, and customer satisfaction. Our core strengths include:</p><ul className="check-list strength-list">{strengths.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul></Reveal>
      </div></section>
      <section className="stats-section stats-about"><div className="container"><Stats compact /></div></section>
      <Testimonials />
      <ArchitectureShowcase />
      
      <CallToAction />
    </>
  )
}

export default AboutPage
