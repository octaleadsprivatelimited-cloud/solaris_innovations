import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/solar-calculator', label: 'Cost Calculator' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-yellow-500 mr-2" />
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Solaris Innovations
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/landing"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              🔥 Get ₹78K Subsidy
            </Link>
            <a
              href="tel:+918019355353"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-2">
              <Link
                to="/landing"
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-xs font-medium transition-colors"
              >
                🔥 ₹78K
              </Link>
              <a
                href="tel:+918019355353"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-md text-xs font-medium transition-colors"
              >
                Call
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-yellow-600 bg-yellow-50'
                    : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/landing"
              className="block bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              🔥 Get ₹78K Subsidy
            </Link>
            <a
              href="tel:+918019355353"
              className="block bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
