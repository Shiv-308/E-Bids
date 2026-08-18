import React from 'react';
import { X, FileText, CheckCircle2, Award, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const TenderPreviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sampleBids = [
    { supplier: 'Apex Commercial Supplies', amount: '₹1,85,000', rating: '4.9 ★', specs: 'Full spec match + 2yr warranty', status: 'Awarded' },
    { supplier: 'Zenith Facility Logistics', amount: '₹1,98,000', rating: '4.8 ★', specs: 'Standard spec match', status: 'Shortlisted' },
    { supplier: 'Urban Global Traders', amount: '₹2,10,000', rating: '4.7 ★', specs: 'Premium grade material', status: 'Reviewed' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <FileText size={12} /> Tender #TD-4821
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Clock size={12} /> Closed in 3 days
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-md">
            Awarded
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Boutique Hotel Linen & Hospitality Supplies
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Posted by Grand Vista Hotels • 7 competitive bids received from verified suppliers.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200 grid grid-cols-3 gap-4 text-center">
          <div>
            <span className="text-xs text-gray-500 block">Total Bids</span>
            <span className="text-lg font-bold text-gray-900">7 Bids</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Lowest Bid</span>
            <span className="text-lg font-bold text-green-600">₹1,85,000</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Time to Award</span>
            <span className="text-lg font-bold text-gray-900">3 Days</span>
          </div>
        </div>

        <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
          Submitted Bids Comparison
        </h3>

        <div className="space-y-3 mb-6">
          {sampleBids.map((bid, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                bid.status === 'Awarded'
                  ? 'bg-green-50/50 border-green-200 shadow-xs'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 text-sm">{bid.supplier}</span>
                  <span className="text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">{bid.rating}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{bid.specs}</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-gray-900 text-sm block">{bid.amount}</span>
                {bid.status === 'Awarded' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-700">
                    <Award size={12} /> Awarded Winner
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-400">{bid.status}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <ShieldCheck size={16} className="text-black" /> Standardized tender evaluation completed
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black text-white font-medium rounded-xl text-xs hover:bg-gray-800 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenderPreviewModal;
