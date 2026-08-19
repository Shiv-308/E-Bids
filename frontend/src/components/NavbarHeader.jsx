import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, ShoppingCart, Package, Clock, Mail, PlusCircle } from 'lucide-react';

const NavbarHeader = ({ activeTabOverride }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = () => {
    if (activeTabOverride) return activeTabOverride;
    const path = location.pathname;
    if (path === '/browse-requirements' || path === '/tenders') return 'buyers';
    if (path === '/post-requirement' || path === '/create-tender') return 'post';
    return 'home';
  };

  const currentTab = getActiveTab();

  const handleNavClick = (tab, targetPath, hashId) => {
    setIsMenuOpen(false);
    if (location.pathname === '/' && hashId) {
      const el = document.getElementById(hashId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(targetPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Left Brand Identity matching photo */}
          <Link to="/" className="flex items-center gap-3 text-decoration-none group">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight tracking-tight">
                BidBazaar
              </span>
              <span className="text-[11px] font-medium text-gray-500 tracking-tight">
                Tender-style marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => handleNavClick('home', '/')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
                currentTab === 'home' && location.pathname === '/'
                  ? 'text-gray-900 bg-gray-100 font-semibold shadow-2xs border border-gray-200/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>🏠</span> Home
            </button>

            <button
              onClick={() => handleNavClick('buyers', '/browse-requirements')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
                currentTab === 'buyers'
                  ? 'text-gray-900 bg-gray-100 font-semibold shadow-2xs border border-gray-200/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <ShoppingCart size={15} /> For Buyers
            </button>

            <button
              onClick={() => handleNavClick('sellers', '/browse-requirements')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
            >
              <Package size={15} /> For Sellers
            </button>

            <button
              onClick={() => handleNavClick('how', '/', 'how-it-works')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
            >
              <Clock size={15} /> How It Works
            </button>

            <button
              onClick={() => handleNavClick('contact', '/', 'contact')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
            >
              <Mail size={15} /> Contact
            </button>
          </nav>

          {/* Action Buttons Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/post-requirement"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-xs hover:shadow transition-all text-decoration-none"
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-black rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 bg-white space-y-2 px-2 animate-in fade-in duration-150">
            <button
              onClick={() => handleNavClick('home', '/')}
              className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-900 bg-gray-100 rounded-xl"
            >
              🏠 Home
            </button>
            <button
              onClick={() => handleNavClick('buyers', '/browse-requirements')}
              className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
            >
              <ShoppingCart size={16} /> For Buyers (Browse)
            </button>
            <button
              onClick={() => handleNavClick('post', '/post-requirement')}
              className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
            >
              <PlusCircle size={16} /> Post Requirement
            </button>
            <button
              onClick={() => handleNavClick('how', '/', 'how-it-works')}
              className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
            >
              <Clock size={16} /> How It Works
            </button>
            <button
              onClick={() => handleNavClick('contact', '/', 'contact')}
              className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl"
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavbarHeader;
