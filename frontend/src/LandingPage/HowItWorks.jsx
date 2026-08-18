import React from 'react';
import { FileText, Mail, Scale, Clock } from 'lucide-react';

const HowItWorks = ({ onOpenPostModal }) => {
  const steps = [
    {
      icon: FileText,
      step: 'STEP 1',
      title: 'Post a requirement',
      description: 'Describe your need and attach a description folder with specs and quantities.'
    },
    {
      icon: Mail,
      step: 'STEP 2',
      title: 'Receive seller bids',
      description: 'Service providers submit tender files with their offers and selection criteria.'
    },
    {
      icon: Scale,
      step: 'STEP 3',
      title: 'Evaluate & compare',
      description: 'Review all tender files side by side and shortlist the strongest bid.'
    },
    {
      icon: Clock,
      step: 'STEP 4',
      title: 'Award & close',
      description: 'Select a winner, close the tender, and notify the awarded seller instantly.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            How the tender flow works
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-normal">
            Four simple steps — no payments or order generation, just a clean selection process.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                onClick={index === 0 ? onOpenPostModal : undefined}
                className={`bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between ${
                  index === 0 ? 'cursor-pointer' : ''
                }`}
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-10 h-10 bg-gray-100/80 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent size={20} className="text-gray-800" />
                  </div>

                  {/* Step Label */}
                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {item.step}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
