import React from 'react';
import { X, FileText, CheckCircle2, DollarSign, Calendar, MapPin, Layers, UploadCloud } from 'lucide-react';

const RequirementDetailModal = ({ isOpen, onClose, requirement, onBidNow }) => {
  if (!isOpen || !requirement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
            {requirement.category}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
            {requirement.location}
          </span>
          {requirement.verifiedSellerOnly && (
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 size={12} /> Verified Sellers Only
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
          {requirement.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {requirement.description}
        </p>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200/70 mb-6 text-center">
          <div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">Budget</span>
            <span className="text-sm sm:text-base font-extrabold text-gray-900">{requirement.budget}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">Closing</span>
            <span className="text-sm sm:text-base font-extrabold text-gray-900">{requirement.closing}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">Bids</span>
            <span className="text-sm sm:text-base font-extrabold text-gray-900">{requirement.bidsCount} Received</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">Files</span>
            <span className="text-sm sm:text-base font-extrabold text-gray-900">{requirement.filesCount} Attached</span>
          </div>
        </div>

        {/* Requirements Details */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
            Requirement Specifications
          </h4>

          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-gray-400" />
              <span className="font-semibold text-gray-900">Type:</span> {requirement.type || 'Goods'}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-400" />
              <span className="font-semibold text-gray-900">Location:</span> {requirement.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span className="font-semibold text-gray-900">Published:</span> {requirement.publishedAt}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-gray-400" />
              <span className="font-semibold text-gray-900">Partial Bids:</span> {requirement.allowPartialBids ? 'Allowed' : 'Not Allowed'}
            </div>
          </div>
        </div>

        {/* Attached Files Section */}
        {requirement.attachedFiles && requirement.attachedFiles.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2 mb-3">
              Attached Tender Files ({requirement.attachedFiles.length})
            </h4>
            <div className="space-y-2">
              {requirement.attachedFiles.map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <FileText size={18} className="text-gray-800" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-gray-900">{file.name}</h5>
                      <span className="text-[11px] text-gray-500">{file.size} · {file.type}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBidNow(requirement);
            }}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-md transition-all cursor-pointer flex items-center gap-1.5"
          >
            <UploadCloud size={16} />
            <span>Submit Bid</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default RequirementDetailModal;
