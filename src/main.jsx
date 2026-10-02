import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { media } from './content.js'
import './index.css'
import App from './App.jsx'

const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/png'
favicon.href = media('JE-logo-03-scaled.webp')
document.head.append(favicon)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
