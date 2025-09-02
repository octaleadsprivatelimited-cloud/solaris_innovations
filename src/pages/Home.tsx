import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Zap, 
  Shield, 
  Award, 
  CheckCircle, 
  Users,
  TrendingUp,
  Globe,
  ArrowRight,
  Gift
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Premium Solar Panels",
      description: "High-efficiency solar panels with 25+ year warranty"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Expert Installation",
      description: "Certified technicians with 10+ years of experience"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "Quality Assurance",
      description: "ISO certified processes and materials"
    },
    {
      icon: <Award className="h-12 w-12 text-yellow-500" />,
      title: "Best Service",
      description: "Award-winning customer service and support"
    }
  ];

  const stats = [
    { number: "500+", label: "Installations", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "50+", label: "Team Members", icon: <Users className="h-6 w-6" /> },
    { number: "10+", label: "Years Experience", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "7", label: "Cities Served", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Solar and Wind Power Background */}
      <section className="relative bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-900/60 text-white min-h-screen flex items-center">
        {/* Tree-Framed House with Solar Panels Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
             style={{
               backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/background/20230723/pngtree-d-illustration-of-a-tree-framed-house-with-solar-panels-on-image_3763959.jpg')`
             }}>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Power Your Future with
                <span className="text-yellow-400"> Solar Energy</span>
              </h1>
              
              {/* Company Tagline with Moving Background Effect */}
              <div className="relative mb-6">
                <motion.div
                  className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Leading Solar Solutions
                </motion.div>
                <motion.div
                  className="text-lg lg:text-xl text-gray-300 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Professional Solar Installation & Energy Solutions
                </motion.div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8">
                Leading solar panel installation company in Telangana - serving Hyderabad, Karimnagar, Warangal, Nizamabad, Khammam, Ramagundam, Mahabubnagar, Adilabad, Nalgonda, Medak, Rangareddy, Suryapet, Miryalaguda, Siddipet, and Jagtial. 
                Save money, save the environment, and enjoy reliable clean energy with rooftop solar panels, solar power systems, and solar energy solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openWhatsAppQuote}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-6 w-6" />
                </button>
                                 <Link
                   to="/landing"
                   className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center border-2 border-red-600"
                 >
                   <Gift className="mr-2 h-6 w-6" />
                   Get Upto ₹78,000/- Subsidy
                 </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative">
                {/* Solar Panel Visual Representation */}
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                  {/* Solar Panel Grid Pattern */}
                  <div className="absolute inset-4 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-8 bg-white/30 rounded-full"></div>
                  <div className="absolute inset-12 bg-white/40 rounded-full"></div>
                  <div className="absolute inset-16 bg-white/50 rounded-full"></div>
                  <div className="absolute inset-20 bg-white/60 rounded-full"></div>
                  <div className="absolute inset-24 bg-white/70 rounded-full"></div>
                  <div className="absolute inset-28 bg-white/80 rounded-full"></div>
                  <div className="absolute inset-32 bg-white/90 rounded-full"></div>
                  <div className="absolute inset-36 bg-white rounded-full"></div>
                  
                  {/* Central Sun Icon */}
                  <Sun className="h-32 w-32 text-white relative z-10" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                  PM Solar Scheme
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-2 rounded-full text-xs font-semibold animate-pulse">
                  ₹78K Subsidy
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Installation Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Solar Installation Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our professional solar panel installations across Telangana - from Hyderabad solar panels to Karimnagar solar systems, Warangal rooftop solar, and Nizamabad solar power solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Installation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Residential Solar House Image */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `url('https://img.freepik.com/free-photo/aerial-view-private-house-with-solar-panels-roof_181624-14677.jpg')`
                }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sun className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Residential Solar</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Home installations</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for Homes</h4>
                <p className="text-gray-600 text-sm">Reduce electricity bills by up to 90% with residential solar panels, rooftop solar systems, and home solar power solutions in Hyderabad, Karimnagar, and across Telangana</p>
              </div>
            </motion.div>

            {/* Commercial Installation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Commercial Solar Panels Image */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `url('https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_hybrid&w=740&q=80')`,
                  backgroundPosition: 'center 30%'
                }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Commercial Solar</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Business solutions</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Business Benefits</h4>
                <p className="text-gray-600 text-sm">Cut operational costs and improve your business sustainability with commercial solar panels, business solar systems, and office solar power solutions in Warangal, Nizamabad, and across Telangana</p>
              </div>
            </motion.div>

            {/* Industrial Installation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                {/* Industrial Solar Plant Image */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `url('https://img.freepik.com/free-photo/beautiful-alternative-energy-plant-with-solar-panels_23-2149192692.jpg')`
                }}></div>
                

                
                <div className="text-center text-white relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Industrial Solar</h3>
                  <p className="text-sm opacity-90 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Large-scale projects</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Industrial Power</h4>
                <p className="text-gray-600 text-sm">Massive energy savings for factories and industrial facilities with industrial solar panels, factory solar systems, and large-scale solar power solutions in Khammam, Ramagundam, and across Telangana</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solaris Inovations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solar solutions with unmatched quality and service - from Hyderabad solar installation to Karimnagar solar maintenance, Warangal solar repair, and Nizamabad solar consultation across Telangana
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers in Hyderabad, Karimnagar, Warangal, Nizamabad, Khammam, Ramagundam, Mahabubnagar, Adilabad, Nalgonda, Medak, Rangareddy, Suryapet, Miryalaguda, Siddipet, and Jagtial who have already switched to solar energy. 
            Get your free solar consultation today for rooftop solar panels, solar power systems, and solar energy solutions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919332777888"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now: +91 9332-777-888
            </a>
            <button
              onClick={openWhatsAppQuote}
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
            >
              Request Quote
            </button>
            <Link
              to="/landing"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-red-600"
            >
              <Gift className="inline mr-2 h-6 w-6" />
              Get Upto ₹78,000/- Subsidy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
