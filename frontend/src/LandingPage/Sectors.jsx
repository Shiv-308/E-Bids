import React from 'react';
import { Factory, Building, HeartPulse, ShoppingBag, Zap, Plane, Cpu, Wrench, Microscope, Store, Battery, Truck } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

const Sectors = () => {
  const sectors = [
    { icon: Factory, name: 'Manufacturing', count: '120+' },
    { icon: Building, name: 'Construction', count: '85+' },
    { icon: HeartPulse, name: 'Healthcare', count: '65+' },
    { icon: Store, name: 'Retail', count: '90+' },
    { icon: Zap, name: 'Energy', count: '45+' },
    { icon: Truck, name: 'Logistics', count: '55+' }
  ];

  return (
    <Section id="sectors" bgColor="light">
      <SectionHeader
        title="Trusted Across Private Sectors"
        subtitle="Industry leaders rely on our platform for their procurement needs"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <sector.icon size={28} className="text-black" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{sector.name}</h3>
            <p className="text-sm text-gray-500">{sector.count} companies</p>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="mt-12 bg-white rounded-xl p-8 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-black mb-2">500+</p>
            <p className="text-gray-600">Active Companies</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-black mb-2">$2.4B</p>
            <p className="text-gray-600">Tender Value</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-black mb-2">98%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-black mb-2">24/7</p>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Sectors;
