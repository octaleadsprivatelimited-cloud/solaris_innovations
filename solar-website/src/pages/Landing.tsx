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
    phone: '',
    city: '',
    monthlyBill: '',
    propertyType: 'residential'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Sun className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400 mr-2 sm:mr-3" />
              <h1 className="text-xl sm:text-2xl font-bold text-white">Solaris Innovations</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-3 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Contact Us
              </button>
              <a href="tel:+918019355353" className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 inline mr-1" />
                <span className="hidden sm:inline">+91 80193 55353</span>
                <span className="sm:hidden">+91 80193 55353</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full inline-block mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">
              🔥 LIMITED TIME OFFER
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Get <span className="text-yellow-400">₹78,000</span> 
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>Solar Subsidy
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 px-2">
              Install solar panels with <strong>40% government subsidy</strong> and 
              <br className="hidden md:block" />
              reduce your electricity bill by up to <strong>90%</strong>
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-white/20">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Quick Solar Calculator</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">₹78,000</div>
                  <div className="text-gray-300 text-sm sm:text-base">Maximum Subsidy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">90%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Bill Reduction</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">25+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Years Warranty</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
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
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
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
                <div className="grid grid-cols-2 gap-3">
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

                <div>
                  <label htmlFor="city" className="sr-only">City</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">Select your city *</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Rajahmundry">Rajahmundry</option>
                    <option value="Amalapuram">Amalapuram</option>
                    <option value="Kakinada">Kakinada</option>
                    <option value="Tanuku">Tanuku</option>
                    <option value="Eluru">Eluru</option>
                    <option value="Bhimavaram">Bhimavaram</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="number"
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
                      placeholder="Monthly Bill (₹)"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="sr-only">Property Type</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="inline h-5 w-5 mr-2" />
                  Get Free Quote
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
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
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
      <footer className="bg-black/30 py-8 text-center text-gray-300">
        <div className="max-w-4xl mx-auto px-4">
          <p>&copy; 2024 Solaris Innovations. All rights reserved. | ISO 9001:2015 Certified</p>
          <p className="mt-2">Serving Telangana: Hyderabad, Karimnagar, Warangal, Nizamabad, Khammam, Ramagundam, Mahabubnagar</p>
        </div>
      </footer>

      {/* Popup Contact Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Contact Solaris Innovations</h2>
                    <p className="text-gray-600 text-sm">Get ₹78,000 Subsidy</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close popup"
                  title="Close popup"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handlePopupSubmit} className="space-y-4">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="popup-city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="popup-city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label htmlFor="popup-monthlyBill" className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Electricity Bill
                  </label>
                  <input
                    type="text"
                    id="popup-monthlyBill"
                    name="monthlyBill"
                    value={formData.monthlyBill}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="e.g., ₹2000"
                  />
                </div>

                <div>
                  <label htmlFor="popup-propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    id="popup-propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Free Consultation
                </button>
              </form>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center"
                >
                  Thank you! We'll contact you within 30 minutes.
                </motion.div>
              )}

              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm">
                  Or call us directly: 
                  <a href="tel:+918019355353" className="text-yellow-600 font-semibold ml-1">
                    +91 80193 55353
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Landing;
