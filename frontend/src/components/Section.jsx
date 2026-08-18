import React from 'react';

const Section = ({ children, className = '', id = '', bgColor = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900'
  };
  
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bgColor]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
