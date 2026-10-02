export default function Lightbox({ selected, onClose }) {
 if (!selected) return null
 return <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.name} onClick={onClose}><button className="lightbox-close" type="button" aria-label="Close image" onClick={onClose}>×</button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={selected.image} alt={selected.name}/><h2>{selected.name}</h2></div></div>
}
