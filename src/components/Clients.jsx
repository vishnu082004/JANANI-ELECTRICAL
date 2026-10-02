import { clientNames } from '../content.js'

function Clients() {
  const duplicated = [...clientNames, ...clientNames]
  return (
    <section className="clients-section section-space-sm">
      <div className="container"><SectionHeading eyebrow="Our clients" title="Trusted across industries" /></div>
      <div className="client-marquee" aria-label="Selected clients">
        <div className="client-track">{duplicated.map((client, index) => <span className="client-pill" key={`${client}-${index}`} aria-hidden={index >= clientNames.length}>{client}</span>)}</div>
      </div>
      <div className="container client-list">{clientNames.map((client) => <span key={client}>{client}</span>)}</div>
    </section>
  )
}

export default Clients
