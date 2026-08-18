import React, { useState } from 'react';
import { X, CheckCircle, Upload, ArrowRight, ShieldCheck } from 'lucide-react';

const PostRequirementModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    sector: 'Hotels & Hospitality',
    description: '',
    quantity: '',
    budget: '',
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Reset after 3s
    }, 3000);
  };

  const resetModal = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
        <button
          onClick={resetModal}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                Step {step} of 2
              </span>
              <span className="text-xs text-gray-400">Free posting • No hidden fees</span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Post a Requirement
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Let verified sellers submit competitive bids for your business needs.
            </p>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Requirement Title / Need *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Supply of 500 Modern Ergonomic Office Chairs"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Sector Category
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-sm"
                    >
                      <option value="Hotels & Hospitality">Hotels & Hospitality</option>
                      <option value="Offices & Corporates">Offices & Corporates</option>
                      <option value="Industries & Shops">Industries & Shops</option>
                      <option value="Healthcare & Medical">Healthcare & Medical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Description & Specifications
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detail specifications, quality standards, or delivery timelines..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => formData.title && setStep(2)}
                      disabled={!formData.title}
                      className="w-full py-3 bg-black hover:bg-gray-800 disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
                    >
                      Next Step <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 units"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Target Budget (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹2,50,000"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Attach Tender Docs / Specs Folder (PDF, ZIP)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:border-black transition-colors bg-gray-50">
                      <Upload className="mx-auto text-gray-400 mb-1" size={24} />
                      <p className="text-xs font-medium text-gray-700">Click or drag files here to attach</p>
                      <p className="text-[11px] text-gray-400">PDF, XLSX, DOCX up to 25MB</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex items-start gap-2 text-xs text-gray-600">
                    <ShieldCheck size={16} className="text-black flex-shrink-0 mt-0.5" />
                    <span>Your requirement will be visible to 2,400+ verified sellers in your sector.</span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold rounded-xl text-sm transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl text-sm transition-colors"
                    >
                      Publish Tender Requirement
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Tender Published!</h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Your requirement <span className="font-semibold text-gray-900">"{formData.title || 'Office Chairs'}"</span> is now live. Verified sellers will submit bids within 24 hours.
            </p>
            <button
              onClick={resetModal}
              className="px-6 py-2.5 bg-black text-white font-medium rounded-xl text-sm hover:bg-gray-800 transition-colors"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostRequirementModal;
