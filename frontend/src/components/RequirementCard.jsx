import React, { useState } from 'react';
import { Star, Clock, Eye, Plus } from 'lucide-react';
import MetricBox from './MetricBox';

const RequirementCard = ({ requirement, onViewDetails, onBidNow }) => {
  const [isBookmarked, setIsBookmarked] = useState(requirement.bookmarked || false);

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-gray-200/80 shadow-2xs hover:shadow-md transition-all duration-200 group">
      
      {/* Top Tag Badges & Bookmark Star */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          {requirement.category && (
            <span className="px-3 py-1 bg-gray-100/90 hover:bg-gray-200/80 text-gray-800 text-xs font-semibold rounded-full border border-gray-200/60 transition-colors">
              {requirement.category}
            </span>
          )}
          {requirement.location && (
            <span className="px-3 py-1 bg-gray-100/90 hover:bg-gray-200/80 text-gray-700 text-xs font-medium rounded-full border border-gray-200/60 transition-colors">
              {requirement.location}
            </span>
          )}
          {requirement.badge && (
            <span className="px-3 py-1 bg-gray-100/90 text-gray-700 text-xs font-medium rounded-full border border-gray-200/60">
              {requirement.badge}
            </span>
          )}
        </div>

        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="p-1.5 text-gray-400 hover:text-amber-500 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
          title="Save requirement"
        >
          <Star
            size={18}
            className={isBookmarked ? 'fill-amber-400 text-amber-500' : 'text-gray-400'}
          />
        </button>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight leading-snug mb-2 group-hover:text-black transition-colors">
        {requirement.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 line-clamp-2">
        {requirement.description}
      </p>

      {/* 4 Metric Boxes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <MetricBox label="BUDGET" value={requirement.budget} />
        <MetricBox label="CLOSING" value={requirement.closing} />
        <MetricBox label="BIDS" value={`${requirement.bidsCount} received`} />
        <MetricBox label="FILES" value={`${requirement.filesCount} attached`} />
      </div>

      {/* Card Footer: Timestamp & Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
          <Clock size={14} className="text-gray-400" />
          <span>{requirement.publishedAt || 'Published recently'}</span>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={() => onViewDetails(requirement)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-2xs transition-all cursor-pointer"
          >
            <Eye size={14} />
            <span>View Details</span>
          </button>

          <button
            onClick={() => onBidNow(requirement)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-2xs hover:shadow transition-all cursor-pointer"
          >
            <span>Bid Now</span>
            <Plus size={15} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default RequirementCard;
