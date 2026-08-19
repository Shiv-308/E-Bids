import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is there any payment or order handling?',
      answer: 'No. SupplyNest is strictly a tender discovery and proposal evaluation platform. No payments, escrow, or order generation take place on the platform, keeping the process simple, transparent, and fee-free.'
    },
    {
      question: 'Who can post a requirement?',
      answer: 'Any private business owner, hotel manager, facility manager, shop owner, or corporate procurement officer can post tender requirements for free to receive competitive seller offers.'
    },
    {
      question: 'How is a winner selected?',
      answer: 'You review all submitted tender files side-by-side, compare price quotes and specification folders, and click "Award Tender" to notify your winning vendor directly.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Header */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Frequently asked
            </h2>
            <p className="text-base text-gray-500 font-normal">
              The essentials about our MVP tender flow.
            </p>
          </div>

          {/* Right Column Accordion Stack */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 text-base hover:text-black transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-gray-100' : ''
                    }`}>
                      <ChevronDown size={18} className="text-gray-600" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-100/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
