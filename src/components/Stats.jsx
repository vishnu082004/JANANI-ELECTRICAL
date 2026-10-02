import { useEffect, useState } from 'react'

export function Counter({ value, label, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const node = document.querySelector(`[data-counter="${label}"]`)
    if (!node || !('IntersectionObserver' in window)) {
      setCount(value)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      setStarted(true)
      const start = performance.now()
      const duration = 1800
      function step(now) {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.round(value * eased))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
      observer.disconnect()
    }, { threshold: 0.4 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [label, started, value])
  return <div className="counter" data-counter={label}><strong>{count.toLocaleString('en-IN')}<span>{suffix}</span></strong><span>{label}</span></div>
}

export function Stats({ compact = false }) {
  return (
    <div className={`stats-strip ${compact ? 'stats-compact' : ''}`}>
      <Counter value={2000} label="Happy Clients" />
      <Counter value={15} label="Products" />
      <Counter value={30} label="Years Experience" />
    </div>
  )
}

export default Stats
