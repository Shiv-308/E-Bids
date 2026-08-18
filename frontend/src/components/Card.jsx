import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${hover ? 'hover:shadow-lg hover:scale-105 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
