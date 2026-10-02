import { useRef } from 'react'
import { media } from '../content.js'

export default function ThreeScene() {
 const scene = useRef(null)
 function moveScene(event) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const bounds = scene.current?.getBoundingClientRect()
  if (!bounds) return
  const x = (event.clientX - bounds.left) / bounds.width - 0.5
  const y = (event.clientY - bounds.top) / bounds.height - 0.5
  scene.current.style.setProperty('--tilt-x', `${y * -8}deg`)
  scene.current.style.setProperty('--tilt-y', `${x * 11}deg`)
 }
 function resetScene() {
  scene.current?.style.setProperty('--tilt-x', '0deg')
  scene.current?.style.setProperty('--tilt-y', '0deg')
 }

 return (
  <div className="three-scene" ref={scene} onPointerMove={moveScene} onPointerLeave={resetScene} aria-label="Interactive 3D view of an industrial electrical control panel">
   <div className="three-scene-orbit three-scene-orbit-one" aria-hidden="true" />
   <div className="three-scene-orbit three-scene-orbit-two" aria-hidden="true" />
   <div className="three-scene-platform" aria-hidden="true" />
   <div className="three-scene-panel">
    <img src={media('hero-panel.webp')} alt="Industrial electrical control panel" fetchPriority="high" />
    <span className="scene-pin scene-pin-one"><i />Reliable power</span>
    <span className="scene-pin scene-pin-two"><i />Engineered for industry</span>
   </div>
   <div className="hero-float-tag"><span className="status-dot" />Built for reliable power</div>
   <div className="hero-float-badge"><strong>20+</strong><span>years of<br />experience</span></div>
  </div>
 )
}
