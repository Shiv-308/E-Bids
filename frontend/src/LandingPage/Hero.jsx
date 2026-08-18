import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 size={16} className="mr-2" />
              Trusted by 500+ companies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Streamline Your
              <span className="text-black"> Tender Process</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Simplify procurement with our digital tender management platform. 
              Connect buyers and suppliers seamlessly, save time, and make smarter decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle2 size={16} className="text-green-500 mr-2" />
                Free to use
              </div>
              <div className="flex items-center">
                <CheckCircle2 size={16} className="text-green-500 mr-2" />
                No setup required
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <TrendingUp size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Active Tenders</p>
                      <p className="text-sm text-gray-500">24 live opportunities</p>
                    </div>
                  </div>
                  <span className="text-green-500 font-bold">+12%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users size={20} className="text-gray-800" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Bids Submitted</p>
                      <p className="text-sm text-gray-500">156 this month</p>
                    </div>
                  </div>
                  <span className="text-green-500 font-bold">+8%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <Award size={20} className="text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Contracts Won</p>
                      <p className="text-sm text-gray-500">$2.4M value</p>
                    </div>
                  </div>
                  <span className="text-green-500 font-bold">+23%</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-300 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
