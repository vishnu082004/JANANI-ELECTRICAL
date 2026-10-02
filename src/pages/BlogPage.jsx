import Reveal from '../components/ScrollReveal.jsx'
import Arrow from '../components/Arrow.jsx'
import PageBanner from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CallToAction from '../components/CallToAction.jsx'
import { blogPosts, media } from '../content.js'

function BlogCard({ post, index }) {
  return <Reveal delay={(index % 3) * 90}><article className="blog-card"><a className="blog-image" href={`/${post.slug}/`}><img src={media(post.image)} alt="" loading="lazy"/><span><Arrow diagonal /></span></a><div className="blog-card-copy"><span className="eyebrow">Janani Electricals · Insights</span><h2><a href={`/${post.slug}/`}>{post.title}</a></h2><p>{post.excerpt}</p><a className="text-link" href={`/${post.slug}/`}>Read more <Arrow /></a></div></article></Reveal>
}

function BlogsPage() {
  return <><PageBanner title="Blog" crumb="Blog"/><section className="section-space blogs-section"><div className="container"><SectionHeading eyebrow="Our blog" title="Latest blog & articles" text="Ideas and information about electrical control panels, power distribution, and industrial efficiency."/><div className="blog-grid">{blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} index={index}/>)}</div></div></section><CallToAction/></>
}

export default BlogsPage
