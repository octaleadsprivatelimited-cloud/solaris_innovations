import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Building,
  Users
} from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: <Newspaper className="h-4 w-4" /> },
    { id: 'government', name: 'Government', icon: <Building className="h-4 w-4" /> },
    { id: 'industry', name: 'Industry', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'company', name: 'Company', icon: <Users className="h-4 w-4" /> }
  ];

  const newsItems = [
    {
      id: 1,
      title: "PM Solar Scheme Extended: New Deadline March 2025",
      excerpt: "The government has extended the PM Solar Scheme deadline, giving more homeowners time to apply for solar subsidies up to ₹78,000.",
      category: "government",
      date: "March 20, 2024",
      time: "2 hours ago",
      featured: true
    },
    {
      id: 2,
      title: "Telangana Sets New Solar Energy Target: 10,000 MW by 2030",
      excerpt: "The state government announces ambitious plans to increase solar energy capacity, creating new opportunities for installations.",
      category: "government",
      date: "March 18, 2024",
      time: "1 day ago"
    },
    {
      id: 3,
      title: "Solaris Innovations Wins Best Solar Company Award 2024",
      excerpt: "We're proud to announce that Solaris Innovations has been recognized as the Best Solar Company in Telangana.",
      category: "company",
      date: "March 15, 2024",
      time: "3 days ago"
    },
    {
      id: 4,
      title: "New Solar Panel Technology Increases Efficiency by 25%",
      excerpt: "Breakthrough in solar panel technology promises higher energy output and better performance.",
      category: "industry",
      date: "March 12, 2024",
      time: "1 week ago"
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.find(item => item.featured);

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
            <Newspaper className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Solar Industry News
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              Stay updated with the latest solar energy news, government announcements, 
              industry updates, and company developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest Breaking News
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl overflow-hidden shadow-xl border-l-4 border-red-500"
            >
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Breaking News
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredNews.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredNews.time}</span>
                </div>
                
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest News Updates
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(item => !item.featured).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className={`h-48 relative overflow-hidden ${
                  item.category === 'government' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  item.category === 'industry' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  'bg-gradient-to-br from-purple-400 to-purple-600'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="h-12 w-12 text-white opacity-80" />
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{item.date}</span>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
