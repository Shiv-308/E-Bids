import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Call to Action Section */}
      <div className="bg-black py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to post your first requirement or apply for one?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of businesses already using E-Bids
          </p>
          <div className="flex justify-center">
            <Link to="/signup">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">EB</span>
            </div>
            <span className="text-xl font-bold text-white">E-Bids</span>
          </div>


          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} E-Bids
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
