import React from 'react';
import { FileText, Users, Award, CheckCircle2, PenTool, Send, Handshake } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const HowItWorks = () => {
  const steps = [
    {
      icon: PenTool,
      title: 'Create Tender',
      description: 'Publish your tender requirements with detailed specifications and deadlines in minutes.'
    },
    {
      icon: Send,
      title: 'Receive Bids',
      description: 'Get qualified bids from verified suppliers. Compare proposals side by side.'
    },
    {
      icon: Handshake,
      title: 'Award Contract',
      description: 'Evaluate bids, select the best supplier, and manage contracts all in one place.'
    }
  ];

  return (
    <Section id="how-it-works" bgColor="light">
      <SectionHeader
        title="How the Tender Flow Works"
        subtitle="A simple, transparent process that saves time and ensures fair competition"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card hover={true} className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <step.icon size={32} className="text-black" />
                </div>
                <div className="absolute top-8 right-8 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </Card>
            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-gray-600">
          <CheckCircle2 size={20} className="text-green-500" />
          <span>End-to-end tracking and notifications included</span>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
