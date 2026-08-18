import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EB</span>
            </div>
            <span className="text-2xl font-bold text-black">E-Bids</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/buyerfeed">
              <Button variant="ghost" size="sm">
                <ShoppingCart size={16} className="mr-2" />
                Buyer
              </Button>
            </Link>
            <Link to="/sellerfeed">
              <Button variant="ghost" size="sm">
                <Briefcase size={16} className="mr-2" />
                Seller
              </Button>
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:text-gray-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link to="/signup">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/buyerfeed" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm">
                  <ShoppingCart size={16} className="mr-2" />
                  Buyer
                </Button>
              </Link>
              <Link to="/sellerfeed" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm">
                  <Briefcase size={16} className="mr-2" />
                  Seller
                </Button>
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-gray-700 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
