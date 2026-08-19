import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShoppingCart, Package, Clock, Mail, PlusCircle } from 'lucide-react';

const Header = ({ onOpenPostModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-40 transition-all border-b border-gray-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo matching photo */}
          <Link to="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                BidBazaar
              </span>
              <span className="text-[11px] font-medium text-gray-500">
                Tender-style marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Center */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => scrollToSection('hero')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${activeTab === 'home' || activeTab === 'hero'
                ? 'text-gray-900 bg-gray-100 font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              <span>🏠</span> Home
            </button>

            <Link
              to="/browse-requirements"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors text-decoration-none"
            >
              <ShoppingCart size={15} /> For Buyers
            </Link>

            <Link
              to="/browse-requirements"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors text-decoration-none"
            >
              <Package size={15} /> For Sellers
            </Link>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
            >
              <Clock size={15} /> How It Works
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
            >
              <Mail size={15} /> Contact
            </button>
          </nav>

          {/* Action Buttons Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/post-requirement"
              className="px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-xs hover:shadow transition-all text-decoration-none flex items-center gap-1.5"
            >
              <PlusCircle size={15} />
              <span>Post Requirement</span>
            </Link>

            <Link
              to="/signin"
              className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-decoration-none"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-xs hover:shadow transition-all text-decoration-none"
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
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-900 bg-gray-100 rounded-xl text-left"
              >
                🏠 Home
              </button>
              
              <Link
                to="/browse-requirements"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl text-decoration-none"
              >
                <ShoppingCart size={16} /> Browse Requirements (Buyers/Sellers)
              </Link>

              <Link
                to="/post-requirement"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl text-decoration-none"
              >
                <PlusCircle size={16} /> Post Requirement
              </Link>

              <button
                onClick={() => { scrollToSection('how-it-works'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl text-left"
              >
                <Clock size={16} /> How It Works
              </button>

              <button
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl text-left"
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
