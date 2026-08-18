import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I get started with E-Bids?',
      answer: 'Getting started is easy. Simply sign up for an account, complete your profile, and you can start creating or responding to tenders immediately. Our onboarding process takes less than 5 minutes.'
    },
    {
      question: 'What we offer?',
      answer: 'We offer B2B procurement platform that connects buyers and sellers in a transparent, efficient, and secure environment.'
    },
    {
      question: 'How does the bidding process work?',
      answer: 'Our platform allows buyers to create detailed tender requests with specifications, timelines, and budgets. Suppliers can then submit competitive bids, and buyers can compare options side by side to make informed decisions.'
    },
    {
      question: 'How is a winner selected?',
      answer: 'Winners are selected based on a combination of factors including price, quality, delivery time, and supplier reputation. Buyers can set their own criteria and weighting for each factor, with final decision made by the buyer.'
    }
  ];

  return (
    <Section id="faq" bgColor="white">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our platform"
      />
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-semibold text-gray-900 text-left">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp size={20} className="text-gray-500 flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown size={20} className="text-gray-500 flex-shrink-0 ml-4" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
        >
          Contact our support team
          <ChevronDown size={16} className="rotate-[-90deg]" />
        </a>
      </div>
    </Section>
  );
};

export default FAQ;
