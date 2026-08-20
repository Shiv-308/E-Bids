import React from 'react';

const MetricBox = ({ label, value }) => {
  return (
    <div className="bg-[#f3f4f6] rounded-2xl p-3 sm:p-3.5 text-center border border-gray-100/80 transition-all hover:bg-gray-200/50">
      <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-gray-500 uppercase mb-1">
        {label}
      </div>
      <div className="text-sm sm:text-base font-extrabold text-gray-900 tracking-tight">
        {value}
      </div>
    </div>
  );
};

export default MetricBox;
