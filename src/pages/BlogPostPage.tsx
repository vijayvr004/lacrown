import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { BLOG_POSTS } from './BlogPage';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb
            crumbs={[
              { label: 'Home', to: '/' },
              { label: 'Blog', to: '/blog' },
              { label: post.title },
            ]}
            light
          />
          <div className="section-eyebrow mt-4 mb-3">{post.category}</div>
          <h1 className="font-serif text-white text-3xl md:text-5xl leading-tight mb-5 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/80 font-sans">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-gold" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gold" /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-gold" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="aspect-[16/9] mb-8 overflow-hidden bg-ivory-200">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none font-sans text-charcoal/90 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-serif text-2xl text-burgundy font-semibold pt-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc pl-5 space-y-1 text-taupe">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (/^\d+\.\s/.test(paragraph)) {
                  return (
                    <ol key={index} className="list-decimal pl-5 space-y-2 text-taupe">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={index} className="text-taupe leading-relaxed text-base">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 pt-6 border-t border-ivory-300 flex items-center justify-between">
              <Link to="/blog" className="btn-secondary text-xs flex items-center gap-1.5">
                <ArrowLeft size={14} /> Back to Blog
              </Link>
              <Link to="/appointment" className="btn-primary text-xs">
                Book a Consultation
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-ivory-100 p-6 border border-ivory-300">
              <h3 className="font-serif text-lg text-charcoal mb-3">About LA CROWN</h3>
              <p className="font-sans text-xs text-taupe leading-relaxed mb-4">
                LA CROWN is Bengaluru's premier luxury aesthetic clinic and salon, delivering bespoke aesthetic medicine, dermatological solutions, and world-class beauty services.
              </p>
              <Link to="/about" className="text-xs font-semibold text-burgundy hover:text-gold flex items-center gap-1">
                Discover Our Story <ArrowRight size={12} />
              </Link>
            </div>

            {related.length > 0 && (
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      to={`/blog/${r.slug}`}
                      className="block p-4 border border-ivory-300 hover:border-gold transition-colors bg-white group"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-gold font-sans font-semibold">
                        {r.category}
                      </span>
                      <h4 className="font-serif text-sm font-medium text-charcoal group-hover:text-burgundy mt-1">
                        {r.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
