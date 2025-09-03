import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Send
} from 'lucide-react';

const Landing: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Popup form submission logic would go here
    setIsSubmitted(true);
    setShowPopup(false);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const benefits = [
    "Up to ₹78,000 government subsidy",
    "Free site survey & consultation",
    "25+ year warranty on panels",
    "Zero maintenance cost",
    "Reduce electricity bills by 90%",
    "Professional installation team"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50 w-full">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between w-full">
            {/* Logo and Company Name */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 mr-1 sm:mr-1.5 lg:mr-2 flex-shrink-0" />
              <h1 className="text-sm sm:text-base lg:text-lg font-bold text-white truncate">Solaris Innovations</h1>
            </div>
            
            {/* Contact Buttons */}
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 flex-shrink-0">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918019355353?text=Hi! I would like to get a quote for solar panel installation. Please provide me with more information."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-lg font-semibold text-xs sm:text-sm lg:text-base transition-colors flex items-center whitespace-nowrap flex-shrink-0"
              >
                <svg className="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              
              {/* Phone Number */}
              <a href="tel:+918019355353" className="text-white hover:text-yellow-400 transition-colors text-xs sm:text-sm lg:text-base flex items-center whitespace-nowrap flex-shrink-0">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 mr-1 flex-shrink-0" />
                <span className="hidden lg:inline">+91 80193 55353</span>
                <span className="hidden sm:inline lg:hidden">+91 80193 55353</span>
                <span className="sm:hidden">+91 80193 55353</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 text-center text-white">
        {/* Background Image for Hero Section */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/portrait-young-indian-technician-manager-wearing-formal-cloths-standing-with-solar-panel-renewable-energy-man-standing-crossed-arm-copy-space_255667-66750.jpg?semt=ais_hybrid&w=740&q=80')`
        }}></div>
        
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Side - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left order-last lg:order-first"
            >
              <div className="bg-red-600 text-white px-3 sm:px-6 py-2 rounded-full inline-block mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">
                🔥 LIMITED TIME OFFER
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Get <span className="text-yellow-400">₹78,000</span> 
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>Solar Subsidy
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200">
                Install solar panels with <strong>40% government subsidy</strong> and 
                <br className="hidden md:block" />
                reduce your electricity bill by up to <strong>90%</strong>
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-6 lg:p-8 border border-white/20">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-center">Quick Solar Calculator</h2>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">₹78,000</div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Maximum Subsidy</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">90%</div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Bill Reduction</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">25+</div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Years Warranty</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8 order-first lg:order-last"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Get ₹78,000 Subsidy
                  </h2>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    Free consultation within 30 minutes
                  </p>
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-400/50 text-green-200 px-4 py-3 rounded-xl mb-4 text-center text-sm"
                  >
                    <CheckCircle className="h-4 w-4 inline mr-2" />
                    Thank you! We'll call you within 30 minutes.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:py-2.5 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                      placeholder="Full Name *"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:py-2.5 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                      placeholder="Phone Number *"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 text-sm sm:text-base shadow-lg"
                    style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  >
                    <span className="inline-block">Get Free Consultation</span>
                  </button>
                </form>

                <div className="mt-3 sm:mt-4 text-center">
                  <p className="text-gray-300 text-xs">
                    Or call us directly: 
                    <a href="tel:+918019355353" className="text-yellow-400 font-semibold ml-1">
                      +91 80193 55353
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5 w-full">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Why Choose Solaris Innovations?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
              >
                <CheckCircle className="h-8 w-8 text-green-400 mb-4 mx-auto" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get ₹78,000 Subsidy
                </h2>
                <p className="text-gray-600 text-sm">
                  Free consultation within 30 minutes
                </p>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-4 text-center text-sm"
                >
                  <CheckCircle className="h-4 w-4 inline mr-2" />
                  Thank you! We'll call you within 30 minutes.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
                      placeholder="Full Name *"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
                      placeholder="Phone Number *"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 py-3 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  <Send className="inline h-5 w-5 mr-2 text-gray-900" />
                  <span className="inline-block">Get Free Quote</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  🔒 Your information is secure and private
                </p>
              </form>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
                <h3 className="text-2xl font-bold mb-4">Government Subsidy Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>40% subsidy on system cost</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Maximum ₹78,000 subsidy amount</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Eligible for 1-3kW systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Direct bank transfer</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold">Form Submission</h4>
                      <p className="text-gray-300 text-sm">Submit your details above</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold">Expert Call</h4>
                      <p className="text-gray-300 text-sm">Our expert calls within 30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold">Free Survey</h4>
                      <p className="text-gray-300 text-sm">Free site survey & quote</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold">Installation</h4>
                      <p className="text-gray-300 text-sm">Professional installation with subsidy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center w-full">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't Miss Out on ₹78,000 Subsidy!
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Limited time offer. Get your free consultation today and start saving on electricity bills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918019355353"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 80193 55353
              </a>
              <a
                href="https://wa.me/918019355353"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8 text-center text-gray-300 w-full">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <p>&copy; 2024 Solaris Innovations. All rights reserved. | ISO 9001:2015 Certified</p>
          <p className="mt-2">Serving Telangana: Hyderabad, Karimnagar, Warangal, Nizamabad, Khammam, Ramagundam, Mahabubnagar, Adilabad, Nalgonda, Medak, Rangareddy, Suryapet, Miryalaguda, Siddipet, Jagtial</p>
        </div>
      </footer>

      {/* Popup Contact Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[95vh] overflow-y-auto"
          >
            <div className="p-0 sm:p-0">
              {/* Green Top Section with Alternative Energy Image */}
              <div className="relative h-24 bg-cover bg-center bg-no-repeat rounded-t-2xl" style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/alternative-energy-ecological-concept_1157-35707.jpg')`
              }}>
                <div className="absolute inset-0 bg-green-600/60 rounded-t-2xl"></div>
                <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">Contact Solaris Innovations</h2>
                      <p className="text-yellow-200 text-xs sm:text-sm">Get ₹78,000 Subsidy</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-white hover:text-yellow-200 transition-colors p-1"
                    aria-label="Close popup"
                    title="Close popup"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Form Content */}
              <div className="p-4 sm:p-6">
                <form onSubmit={handlePopupSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="popup-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="popup-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-base"
                  >
                    Get Free Consultation
                  </button>
                </form>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center text-sm"
                  >
                    Thank you! We'll contact you within 30 minutes.
                  </motion.div>
                )}

                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Or call us directly: 
                    <a href="tel:+918019355353" className="text-yellow-600 font-semibold ml-1">
                      +91 80193 55353
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Landing;
