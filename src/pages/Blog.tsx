import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Globe,
  MapPin
} from 'lucide-react';
import { articles } from '../data/articles'; // Updated imports

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'location-guide', name: 'Location Guides', icon: <MapPin className="h-4 w-4" /> },
    { id: 'solar-tips', name: 'Solar Tips', icon: <Lightbulb className="h-4 w-4" /> },
    { id: 'industry-news', name: 'Industry News', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'technology', name: 'Technology', icon: <Globe className="h-4 w-4" /> }
  ];

  // Get unique locations from articles
  const locations = Array.from(new Set(articles.map(article => article.location))).sort();

  const getFilteredPosts = () => {
    let filtered = articles;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(post => post.location === selectedLocation);
    }
    
    return filtered;
  };

  const filteredPosts = getFilteredPosts();
  const featuredPost = articles.find(post => post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/blue-solar-photo-voltaic-panels-system-producing-renewable-clean-energy-rural-landscape-setting-sun_127089-3464.jpg?semt=ais_hybrid&w=740&q=80')`
        }}></div>
        
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <BookOpen className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Solar Energy Blog
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              Stay updated with the latest solar energy insights, tips, and industry news. 
              Expert knowledge to help you make informed solar decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Filter by Category</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-gray-900 shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Location Filters */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Filter by Location</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setSelectedLocation('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedLocation === 'all'
                    ? 'bg-yellow-500 text-gray-900 shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200'
                }`}
              >
                All Locations
              </button>
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedLocation === location
                      ? 'bg-yellow-500 text-gray-900 shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and informative solar energy content
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Post Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    {featuredPost.location && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-2">
                        {featuredPost.location}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.publishDate}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center self-start"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                {/* Featured Post Image */}
                <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={`Solar energy in ${featuredPost.location || 'Andhra Pradesh'}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="relative z-10 text-center text-white">
                      <Sun className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Solar Energy Insights</p>
                      {featuredPost.location && (
                        <p className="text-sm opacity-90">{featuredPost.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed with our expert solar energy content
            </p>
            {selectedCategory !== 'all' || selectedLocation !== 'all' ? (
              <p className="text-sm text-gray-500 mt-2">
                Showing {filteredPosts.length} articles
                {selectedCategory !== 'all' && ` in ${selectedCategory.replace('-', ' ')}`}
                {selectedLocation !== 'all' && ` for ${selectedLocation}`}
              </p>
            ) : null}
          </div>
          
          {filteredPosts.filter(post => !post.featured).length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more articles.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Post Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={`Solar energy in ${post.location || 'Andhra Pradesh'}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-white opacity-80" />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>

                    {/* Location Badge */}
                    {post.location && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                        {post.location}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.publishDate}</span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sun className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with Solar News
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest solar energy insights, tips, and industry updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
