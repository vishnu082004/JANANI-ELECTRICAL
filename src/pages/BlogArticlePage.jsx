import Arrow from '../components/Arrow.jsx'
import PageBanner from '../components/Hero.jsx'
import CallToAction from '../components/CallToAction.jsx'
import { blogPosts, media } from '../content.js'

function BlogArticle({ post }) {
  return <><PageBanner title="Our Blog" crumb="Blog article"/><article className="section-space article-section"><div className="container article-layout"><div className="article-main"><img className="article-cover" src={media(post.image)} alt=""/><span className="eyebrow">Janani Electricals · Insights</span><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p>{post.sections.map((section) => <section className="article-part" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}{section.after && <p>{section.after}</p>}</section>)}<a className="button button-outline" href="/blogs/">Back to blogs <Arrow /></a></div><aside className="article-sidebar"><div className="sidebar-card"><span className="eyebrow">Recent posts</span>{blogPosts.filter((item) => item.slug !== post.slug).map((item) => <a key={item.slug} href={`/${item.slug}/`}>{item.title}<Arrow diagonal /></a>)}</div><div className="sidebar-contact"><h3>Need a custom panel?</h3><p>Talk with our engineering team about your project requirements.</p><a className="button button-primary" href="/contact-us/">Get in touch <Arrow /></a></div></aside></div></article><CallToAction/></>
}

export default BlogArticle
