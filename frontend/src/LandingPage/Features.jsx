import React from 'react';
import { Building2, Truck, Search, Shield, Clock, TrendingUp, FileText, CheckCircle2, DollarSign, Target, Zap, Globe, Briefcase } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const Features = () => {
  const buyerFeatures = [
    {
      icon: Search,
      title: 'Find Qualified Suppliers',
      description: 'Access a database of verified suppliers with ratings and reviews.'
    },
    {
      icon: FileText,
      title: 'Streamline Documentation',
      description: 'Automate tender creation, bid evaluation, and communication.'
    },
    {
      icon: Shield,
      title: 'Ensure Compliance',
      description: 'Built-in verification and audit trails for regulatory compliance.'
    }
  ];

  const supplierFeatures = [
    {
      icon: Target,
      title: 'Discover Opportunities',
      description: 'Get notified about relevant tenders matching your business profile.'
    },
    {
      icon: CheckCircle2,
      title: 'Submit Winning Bids',
      description: 'Professional bid submission with document management and tracking.'
    },
    {
      icon: TrendingUp,
      title: 'Scale Your Business',
      description: 'Build reputation and win more contracts with transparent processes.'
    }
  ];

  return (
    <Section id="features" bgColor="white">
      <SectionHeader
        title="Built for Both Sides of the Deal"
        subtitle="Whether you're buying or selling, our platform has the tools you need"
      />
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* For Buyers */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <DollarSign size={24} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">For Buyers</h3>
          </div>
          <div className="space-y-4">
            {buyerFeatures.map((feature, index) => (
              <Card key={index} hover={true}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* For Suppliers */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Briefcase size={24} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">For Suppliers</h3>
          </div>
          <div className="space-y-4">
            {supplierFeatures.map((feature, index) => (
              <Card key={index} hover={true}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
