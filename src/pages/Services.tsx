import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Factory, 
  Settings, 
  Wrench, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="h-16 w-16 text-yellow-500" />,
      title: "Residential Solar",
      description: "Complete solar solutions for homes with customized designs",
      features: [
        "3kW to 10kW systems",
        "Rooftop installation",
        "Grid-tied systems",
        "Battery backup options",
        "Smart monitoring"
      ],
      price: "Starting from ₹1,50,000"
    },
    {
      icon: <Building className="h-16 w-16 text-yellow-500" />,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses and offices",
      features: [
        "10kW to 100kW systems",
        "Commercial rooftops",
        "Net metering",
        "Energy optimization",
        "ROI analysis"
      ],
      price: "Starting from ₹5,00,000"
    },
    {
      icon: <Factory className="h-16 w-16 text-yellow-500" />,
      title: "Industrial Solar",
      description: "Heavy-duty solar solutions for manufacturing units",
      features: [
        "100kW to 1MW+ systems",
        "Ground-mounted arrays",
        "High-efficiency panels",
        "Industrial monitoring",
        "Maintenance contracts"
      ],
      price: "Starting from ₹25,00,000"
    }
  ];

  const additionalServices = [
    {
      icon: <Settings className="h-12 w-12 text-blue-500" />,
      title: "System Design & Engineering",
      description: "Professional system design with 3D modeling and optimization"
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-500" />,
      title: "Installation & Commissioning",
      description: "Expert installation with quality assurance and testing"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-500" />,
      title: "Maintenance & Support",
      description: "Regular maintenance, monitoring, and 24/7 support"
    }
  ];

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
            Our Solar Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Comprehensive solar solutions for residential, commercial, and industrial needs across Andhra Pradesh. 
            Expert solar panel installation with premium quality components in Visakhapatnam, Vijayawada, Guntur, Kakinada, Rajahmundry, Tirupati, and Anantapur.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Solar Installation Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect solar solution for your energy needs - from Visakhapatnam solar panels to Vijayawada solar systems, Guntur rooftop solar, and Kakinada solar power solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Service Header with Background */}
                <div className={`h-32 flex items-center justify-center relative overflow-hidden ${
                  index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  'bg-transparent'
                }`}>
                  {/* Background Image for Residential Solar */}
                  {index === 0 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('https://img.freepik.com/free-photo/3d-rendering-isometric-house-model_23-2150799781.jpg?w=360')`
                    }}></div>
                  )}
                  
                  {/* Dark Overlay for Residential Solar */}
                  {index === 0 && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}
                  
                  {/* Background Image for Commercial Solar */}
                  {index === 1 && (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_hybrid&w=740&q=80')`
                    }}></div>
                  )}
                  
                  {/* Dark Overlay for Commercial Solar */}
                  {index === 1 && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}
                  
                  {/* Background Image for Industrial Solar */}
                  {index === 2 && (
                    <div className="absolute inset-0 bg-cover bg-no-repeat opacity-60" style={{
                      backgroundImage: `url('https://5.imimg.com/data5/SELLER/Default/2025/2/491436131/HN/BC/CL/240497554/pexels-pixabay-356036-500x500.jpg')`,
                      backgroundPosition: 'center 70%'
                    }}></div>
                  )}
                  
                  {/* Dark Overlay for Industrial Solar */}
                  {index === 2 && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}
                  
                  <div className="relative z-10 text-center text-white">
                    <div className="mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-4">
                      {service.price}
                    </div>
                    <button 
                      onClick={openWhatsAppQuote}
                      className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center group cursor-pointer"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete support throughout your solar journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Solar Scheme */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              PM Solar Scheme Benefits
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Avail government subsidies and incentives for solar installation. 
              Reduce your investment by up to 40% with PM Solar Scheme.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div>Subsidy on System Cost</div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">₹78,000</div>
                <div>Maximum Subsidy Amount</div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">3kW</div>
                <div>Eligible System Size</div>
              </div>
            </div>
            <Link
              to="/landing"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Get ₹78,000 Subsidy Details
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and customized solar solution quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919332777888"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
                              Call Now: +91 9332-777-888
            </a>
            <a
              href="https://wa.me/919332777888"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
