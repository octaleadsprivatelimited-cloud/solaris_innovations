import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  Share2,
  BookOpen,
  Tag,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import ContactForm from '../components/ContactForm';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Get article data based on slug
  const article = slug ? getArticleBySlug(slug) : null;
  const relatedArticles = article ? getRelatedArticles(article.slug, 3) : [];

  // Redirect to blog if article not found
  useEffect(() => {
    if (!article) {
      navigate('/blog');
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  // Structured data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.seoDescription,
    "image": `https://solarisinovations.in${article.image}`,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Solaris Inovations",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solarisinovations.in/logo.png"
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://solarisinovations.in/blog/${article.slug}`
    },
    "keywords": article.seoKeywords.join(", "),
    "articleSection": "Solar Energy",
    "wordCount": article.content.split(' ').length
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate reading time
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <>
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.seoDescription} />
        <meta name="keywords" content={article.seoKeywords.join(', ')} />
        <meta name="author" content={article.author} />
        
        {/* Social meta removed */}
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://solarisinovations.in/blog/${article.slug}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="pt-16">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-yellow-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-yellow-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back to Blog Button */}
              <Link
                to="/blog"
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              {/* Article Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{calculateReadingTime(article.content)} min read</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="capitalize">{article.category.replace('-', ' ')}</span>
                </div>
                {article.location && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{article.location}</span>
                  </div>
                )}
              </div>

              {/* Article Excerpt */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Image */}
              <div className="h-64 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                <img
                  src={article.image}
                  alt={`Solar energy in ${article.location || 'Andhra Pradesh'}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Solar Energy in {article.location || 'Andhra Pradesh'}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content and Contact Form */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Article Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                  {/* Article Body */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  {/* Article Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Tag className="h-5 w-5 mr-2" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          About {article.author}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {article.authorBio}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Sharing */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                    <div className="flex space-x-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Sidebar */}
              <div className="lg:col-span-1">
                <ContactForm 
                  location={article.location}
                  articleTitle={article.title}
                  className="sticky top-24"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedArticle.excerpt.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/blog/${relatedArticle.slug}`}
                      className="text-yellow-600 hover:text-yellow-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ArticlePage;
