import React, { useState } from 'react';
import { Zap, ArrowRight, MoreHorizontal } from 'lucide-react';

const RequirementCard = ({ requirement, onViewDetails, onBidNow }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Fallbacks to handle dynamic posted requirements
  const postedDate = requirement.postedDate || requirement.publishedAt || 'Jun 18, 2024';
  const endingDate = requirement.endingDate || requirement.closing || 'Jun 28, 2024';
  const budget = requirement.budget || '₹5L - ₹10L';
  const bidsCountText = requirement.bidsReceivedText || `${requirement.bidsCount || 0} bids`;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 relative group">
      
      {/* Top Category, Location, Status Badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          {requirement.category && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200/70">
              {requirement.category}
            </span>
          )}
          {requirement.location && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200/70">
              {requirement.location}
            </span>
          )}
          {(requirement.badge || requirement.status) && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200/70">
              {requirement.badge || requirement.status}
            </span>
          )}
        </div>
      </div>

      {/* Title & Options dots */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 tracking-tight leading-snug">
          {requirement.title}
        </h3>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-1 text-gray-400 hover:text-gray-700 rounded-lg transition-colors cursor-pointer"
            title="Options"
          >
            <MoreHorizontal size={20} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-20 animate-in fade-in duration-150">
              <button
                onClick={() => { setShowDropdown(false); onViewDetails(requirement); }}
                className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
              >
                View full details
              </button>
              {onBidNow && (
                <button
                  onClick={() => { setShowDropdown(false); onBidNow(requirement); }}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
                >
                  Submit a bid
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 4 Metric Boxes matching Photo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 my-4">
        
        {/* POSTED DATE */}
        <div className="bg-[#f4f4f5] sm:bg-[#f6f7f8] rounded-2xl p-4 flex flex-col justify-center">
          <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            POSTED DATE
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-900">
            {postedDate}
          </span>
        </div>

        {/* ENDING DATE */}
        <div className="bg-[#f4f4f5] sm:bg-[#f6f7f8] rounded-2xl p-4 flex flex-col justify-center">
          <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            ENDING DATE
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-900">
            {endingDate}
          </span>
        </div>

        {/* BUDGET */}
        <div className="bg-[#f4f4f5] sm:bg-[#f6f7f8] rounded-2xl p-4 flex flex-col justify-center">
          <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            BUDGET
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-900">
            {budget}
          </span>
        </div>

        {/* BIDS RECEIVED */}
        <div className="bg-[#f4f4f5] sm:bg-[#f6f7f8] rounded-2xl p-4 flex flex-col justify-center">
          <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            BIDS RECEIVED
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-900">
            {bidsCountText}
          </span>
        </div>

      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100/80 mt-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
          <Zap size={14} className="text-gray-400" />
          <span>Last updated recently</span>
        </div>

        <button
          onClick={() => onViewDetails(requirement)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-2xs transition-all cursor-pointer"
        >
          <span>View details</span>
          <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
};

export default RequirementCard;
