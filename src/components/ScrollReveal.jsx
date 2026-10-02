import { useEffect, useState } from 'react'

function Reveal({ children, className = '', direction = 'up', delay = 0 }) {
  const [visible, setVisible] = useState(false)
  const [id] = useState(() => 'reveal-' + Math.random().toString(36).slice(2))
  useEffect(() => {
    const node = document.querySelector(`[data-reveal-id="${id}"]`)
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.14 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [id])
  return (
    <div data-reveal-id={id} className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

export default Reveal
