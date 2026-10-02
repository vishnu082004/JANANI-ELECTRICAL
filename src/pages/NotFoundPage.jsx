import Arrow from '../components/Arrow.jsx'
import PageBanner from '../components/Hero.jsx'

function NotFound() {
  return <><PageBanner title="Page not found"/><section className="section-space not-found"><div className="container"><h2>We couldn’t find that page.</h2><p>Choose a page from the navigation to continue.</p><a className="button button-primary" href="/">Return home <Arrow /></a></div></section></>
}

export default NotFound
