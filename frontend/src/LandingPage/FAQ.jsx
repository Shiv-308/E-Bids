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
      question: 'Is E-Bids free to use?',
      answer: 'Yes! E-Bids is completely free to use for all users. You can create tenders, submit bids, and manage contracts without any cost. No credit card or payment required.'
    },
    {
      question: 'How are suppliers verified?',
      answer: 'We have a rigorous verification process that includes business registration checks, document verification, and reference checks. This ensures you only deal with legitimate and qualified suppliers.'
    },
    {
      question: 'Can I integrate E-Bids with my existing systems?',
      answer: 'Absolutely. E-Bids offers API integrations with popular ERP systems, accounting software, and procurement tools. Our team can also help with custom integrations for enterprise clients.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 customer support via chat, email, and phone. Our average response time is under 2 hours to help you with any questions or issues.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Security is our top priority. We use bank-level encryption, regular security audits, and comply with GDPR and other data protection regulations. Your data is stored in secure, redundant data centers.'
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
