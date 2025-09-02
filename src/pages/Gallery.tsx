import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Home, 
  Building, 
  Factory, 
  Image,
  MapPin,
  Calendar,
  Eye
} from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Sun className="h-4 w-4" /> },
    { id: 'residential', name: 'Residential', icon: <Home className="h-4 w-4" /> },
    { id: 'commercial', name: 'Commercial', icon: <Building className="h-4 w-4" /> },
    { id: 'industrial', name: 'Industrial', icon: <Factory className="h-4 w-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Villa Solar Installation",
      category: "residential",
      location: "Hyderabad",
      date: "March 2024",
      description: "5kW rooftop solar system with battery backup",
      image: "residential-1",
      capacity: "5 kW",
      savings: "₹8,000/month"
    },
    {
      id: 2,
      title: "Office Complex Solar Project",
      category: "commercial",
      location: "Karimnagar",
      date: "February 2024",
      description: "25kW commercial solar installation",
      image: "commercial-1",
      capacity: "25 kW",
      savings: "₹35,000/month"
    },
    {
      id: 3,
      title: "Factory Solar Power Plant",
      category: "industrial",
      location: "Warangal",
      date: "January 2024",
      description: "100kW industrial solar system",
      image: "industrial-1",
      capacity: "100 kW",
      savings: "₹1,20,000/month"
    },
    {
      id: 4,
      title: "Apartment Solar Solution",
      category: "residential",
      location: "Nizamabad",
      date: "December 2023",
      description: "3kW residential solar panel system",
      image: "residential-2",
      capacity: "3 kW",
      savings: "₹4,500/month"
    },
    {
      id: 5,
      title: "Shopping Mall Solar",
      category: "commercial",
      location: "Khammam",
      date: "November 2023",
      description: "50kW commercial solar installation",
      image: "commercial-2",
      capacity: "50 kW",
      savings: "₹70,000/month"
    },
    {
      id: 6,
      title: "Warehouse Solar System",
      category: "industrial",
      location: "Ramagundam",
      date: "October 2023",
      description: "75kW industrial solar power plant",
      image: "industrial-2",
      capacity: "75 kW",
      savings: "₹90,000/month"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Solar Installation Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Explore our portfolio of successful solar installations across Telangana. 
            From residential rooftops to industrial power plants.
          </motion.p>
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

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 relative overflow-hidden ${
                  project.category === 'residential' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  project.category === 'commercial' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  'bg-gradient-to-br from-purple-400 to-purple-600'
                }`}>
                  {/* Solar Panel Pattern */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `
                      linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                      linear-gradient(0deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="h-16 w-16 text-white opacity-80" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                  
                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {project.capacity}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.date}
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">Monthly Savings:</span>
                      <div className="text-lg font-bold text-green-600">{project.savings}</div>
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Project Details</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close project details"
                  title="Close project details"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-semibold">{project.location}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500">Capacity</div>
                        <div className="font-semibold">{project.capacity}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500">Installation Date</div>
                        <div className="font-semibold">{project.date}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500">Monthly Savings</div>
                        <div className="font-semibold text-green-600">{project.savings}</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                        Get Similar Quote
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
