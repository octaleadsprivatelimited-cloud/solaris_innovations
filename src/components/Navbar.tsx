import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  HelpCircle,
  BookOpen,
  Gift
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Hide navbar on landing page for mobile
  if (location.pathname === '/landing') {
    return null;
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold text-gray-900">Solaris Innovations</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-yellow-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-yellow-600 transition-colors">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-yellow-600 transition-colors">About</Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <span>More</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >

                  <Link
                    to="/faq"
                    className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span>FAQ</span>
                  </Link>
                  <Link
                    to="/blog"
                    className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Blog</span>
                  </Link>

                </motion.div>
              )}
            </div>

            <Link to="/solar-calculator" className="text-gray-600 hover:text-yellow-600 transition-colors">
              Calculator
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-yellow-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Subsidy Button */}
            <Link
              to="/landing"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 shadow-lg"
            >
              <Gift className="h-4 w-4" />
              <span>Get Upto ₹78,000/- Subsidy</span>
            </Link>
            
            {/* Get Quote Button */}
            <button
              onClick={openWhatsAppQuote}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="px-4 py-3 space-y-2 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>About</Link>

            <Link to="/faq" className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>

            <Link to="/solar-calculator" className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Calculator</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {/* Mobile Subsidy Button */}
              <Link
                to="/landing"
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Gift className="h-5 w-5" />
                <span>Get Upto ₹78,000/- Subsidy</span>
              </Link>

              {/* Mobile Get Quote Button */}
              <button
                onClick={() => {
                  openWhatsAppQuote();
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
