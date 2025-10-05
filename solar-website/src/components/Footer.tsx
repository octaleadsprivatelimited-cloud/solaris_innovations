import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sun } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-yellow-500 mr-2" />
              <h3 className="text-2xl font-bold">Solaris Innovations</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leading solar panel installation company serving Telangana with premium quality 
              solar solutions. We specialize in residential, commercial, and industrial solar installations.
            </p>
            <div className="flex space-x-4" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solar-calculator" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/landing" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Get ₹78K Subsidy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                <a href="tel:+918019355353" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  +91 80193 55353
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                <a href="mailto:info@solarisinovations.in" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  info@solarisinovations.in
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                <div className="text-gray-300">
                  <p>Visakhapatnam, Telangana</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-yellow-500 text-center">Service Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {['Visakhapatnam', 'Rajahmundry', 'Amalapuram', 'Kakinada', 'Tanuku', 'Eluru', 'Bhimavaram'].map((city) => (
              <div key={city} className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer">
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {currentYear} Solaris Innovations. All rights reserved. | 
            <span className="ml-2">ISO 9001:2015 Certified</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Developed by{' '}
            <a 
              href="https://www.octaleads.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
            >
              OctaLeads Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
