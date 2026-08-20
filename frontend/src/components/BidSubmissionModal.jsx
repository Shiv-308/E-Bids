import React, { useState } from 'react';
import { X, CheckCircle2, Upload, Send } from 'lucide-react';

const BidSubmissionModal = ({ isOpen, onClose, requirement, onSuccess }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [deliveryDays, setDeliveryDays] = useState('15 Days');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !requirement) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setBidAmount('');
      setNotes('');
      setFileName('');
      if (onSuccess) onSuccess(requirement.id);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Submit Bid For Requirement
              </span>
              <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                {requirement.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Budget: <span className="font-semibold text-gray-800">{requirement.budget}</span> • Closing: <span className="font-semibold text-gray-800">{requirement.closing}</span>
              </p>
            </div>

            <div className="border-t border-gray-100 pt-3 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Total Bid Amount (₹) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 8,50,000"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-black outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Proposed Delivery Timeline *
                </label>
                <select
                  value={deliveryDays}
                  onChange={(e) => setDeliveryDays(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-black outline-none transition-all"
                >
                  <option value="7 Days">7 Days</option>
                  <option value="15 Days">15 Days</option>
                  <option value="30 Days">30 Days</option>
                  <option value="45 Days">45 Days</option>
                  <option value="60 Days">60 Days</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Proposal Notes / Terms
                </label>
                <textarea
                  rows={3}
                  placeholder="Include warranty terms, specifications breakdown, or custom notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-black outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Attach Tender Proposal / Quotation Document
                </label>
                <div className="flex items-center gap-3 p-3 bg-gray-50 border border-dashed border-gray-300 rounded-xl">
                  <Upload size={18} className="text-gray-500" />
                  <span className="text-xs text-gray-600 truncate flex-1">
                    {fileName || 'Choose PDF, Excel or Specs file...'}
                  </span>
                  <label className="px-3 py-1 bg-white hover:bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg border border-gray-200 cursor-pointer transition-colors">
                    Browse
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-white bg-black hover:bg-gray-800 rounded-full shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Send size={14} />
                <span>Submit Bid Now</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Bid Submitted Successfully!</h3>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              Your tender proposal has been sent to the buyer. You will receive notification when reviewed.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default BidSubmissionModal;
