import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, SquarePen, ShoppingCart, Package, Clock, Mail } from 'lucide-react';

const Header = ({ onOpenPostModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group text-decoration-none">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <SquarePen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              SupplyNest
            </span>
          </Link>

          {/* Desktop Navigation Center */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => scrollToSection('hero')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === 'home' || activeTab === 'hero'
                ? 'text-gray-900 bg-gray-100 font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              <span>🏠</span> Home
            </button>

            <button
              onClick={() => scrollToSection('features')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors"
            >
              <ShoppingCart size={15} /> For Buyers
            </button>

            <button
              onClick={() => scrollToSection('features')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors"
            >
              <Package size={15} /> For Sellers
            </button>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors"
            >
              <Clock size={15} /> How It Works
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors"
            >
              <Mail size={15} /> Contact
            </button>
          </nav>

          {/* Action Buttons Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-decoration-none"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 text-sm font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-xs hover:shadow transition-all text-decoration-none"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-black rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-2 px-2">
              <button
                onClick={() => { scrollToSection('hero'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-900 bg-gray-100 rounded-xl"
              >
                🏠 Home
              </button>
              <button
                onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
              >
                <ShoppingCart size={16} /> For Buyers
              </button>
              <button
                onClick={() => { scrollToSection('features'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
              >
                <Package size={16} /> For Sellers
              </button>
              <button
                onClick={() => { scrollToSection('how-it-works'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
              >
                <Clock size={16} /> How It Works
              </button>
              <button
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
              >
                <Mail size={16} /> Contact
              </button>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-medium text-gray-700 bg-gray-100 rounded-xl text-decoration-none"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-semibold text-white bg-black rounded-xl text-decoration-none"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
