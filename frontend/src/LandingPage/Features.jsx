import React, { useState } from 'react';
import { EyeOff, Scale, ShieldCheck, TrendingUp, FileText, Zap } from 'lucide-react';

const Features = () => {
  const [activeRole, setActiveRole] = useState('buyers');

  const buyerFeatures = [
    {
      icon: EyeOff,
      title: 'No shop visits',
      description: 'Sellers bring offers to you — never chase a vendor or website again.'
    },
    {
      icon: Scale,
      title: 'Compare fairly',
      description: 'All bids in one place with standardized tender files for easy evaluation.'
    },
    {
      icon: ShieldCheck,
      title: 'Full control',
      description: 'You set the criteria and decide when to close and award the tender.'
    }
  ];

  const sellerFeatures = [
    {
      icon: TrendingUp,
      title: 'Direct commercial leads',
      description: 'Get verified tender notifications from hotels, offices, and factories looking to buy.'
    },
    {
      icon: FileText,
      title: 'Standardized bid submission',
      description: 'Upload structured tender files and quote prices in a transparent format.'
    },
    {
      icon: Zap,
      title: 'Zero platform commission',
      description: 'Keep 100% of your earnings. No hidden transaction fees or order cuts.'
    }
  ];

  const features = activeRole === 'buyers' ? buyerFeatures : sellerFeatures;

  return (
    <section id="features" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Built for both sides of the deal
            </h2>
            <p className="text-base text-gray-500 font-normal">
              Switch the view to see what you get.
            </p>
          </div>

          {/* Toggle Switcher Pill */}
          <div className="inline-flex items-center p-1 bg-gray-100/80 rounded-full border border-gray-200/80 self-start md:self-auto">
            <button
              onClick={() => setActiveRole('buyers')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeRole === 'buyers'
                  ? 'bg-white text-gray-900 shadow-xs border border-gray-200/60'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              For Buyers
            </button>
            <button
              onClick={() => setActiveRole('sellers')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeRole === 'sellers'
                  ? 'bg-white text-gray-900 shadow-xs border border-gray-200/60'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              For Sellers
            </button>
          </div>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                {/* Icon Box */}
                <div className="w-10 h-10 bg-gray-100/80 rounded-xl flex items-center justify-center mb-6">
                  <IconComp size={20} className="text-gray-800" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
