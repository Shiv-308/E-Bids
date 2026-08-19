import React from 'react';
import { Building2, Building, Factory } from 'lucide-react';

const Sectors = ({ onOpenPostModal }) => {
  const sectors = [
    {
      title: 'Hotels & Hospitality',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Offices & Corporates',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Industries & Shops',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Trusted across private sectors
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-normal">
            From boutique hotels to manufacturing floors.
          </p>
        </div>

        {/* 3 Sector Image Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const IconComp = sector.icon;
            return (
              <div
                key={index}
                onClick={onOpenPostModal}
                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer h-64 sm:h-72 border border-gray-100"
              >
                {/* Background Image */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Overlay Badge at Bottom Left */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-white shadow-sm">
                    <IconComp size={16} className="text-white/90" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      {sector.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Sectors;
