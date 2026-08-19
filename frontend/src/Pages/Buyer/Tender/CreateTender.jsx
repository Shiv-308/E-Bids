import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Upload, Cloud, Trash2, Info, CheckCircle2, Save, Send } from 'lucide-react';
import NavbarHeader from '../../../components/NavbarHeader';
import ToggleSwitch from '../../../components/ToggleSwitch';
import { saveNewRequirement } from '../../../data/mockRequirements';

const CreateTender = () => {
  const navigate = useNavigate();

  // Form Fields initialized matching Image 2
  const [title, setTitle] = useState('Office Chairs Procurement');
  const [requirementType, setRequirementType] = useState('Goods');
  const [itemCount, setItemCount] = useState('120');
  const [deliveryTimeline, setDeliveryTimeline] = useState('30 Days');
  const [bidClosingDate, setBidClosingDate] = useState('2026-09-15');
  const [description, setDescription] = useState(
    'Need ergonomic office chairs for a 120-seat workspace. Please include warranty, delivery, and installation details in the bid.'
  );
  const [budgetRange, setBudgetRange] = useState('₹8,00,000 - ₹10,00,000');
  const [location, setLocation] = useState('Bengaluru, Karnataka');

  // Attached files matching photo 2
  const [attachedFiles, setAttachedFiles] = useState([
    { id: 'f-1', name: 'Requirement_Specs.pdf', size: '2.4 MB · PDF', status: 'Ready' }
  ]);

  // Settings switches matching photo 2
  const [allowPartialBids, setAllowPartialBids] = useState(true);
  const [requireTenderFile, setRequireTenderFile] = useState(true);
  const [isPublicListing, setIsPublicListing] = useState(false);

  // UX Feedback states
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file, idx) => ({
        id: `file-${Date.now()}-${idx}`,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB · ${file.name.split('.').pop().toUpperCase()}`,
        status: 'Ready'
      }));
      setAttachedFiles(prev => [...prev, ...newFiles]);
      showToast('File uploaded successfully!');
    }
  };

  const removeFile = (fileId) => {
    setAttachedFiles(prev => prev.filter(f => f.id !== fileId));
    showToast('File removed');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleSaveDraft = () => {
    showToast('Draft saved successfully!');
  };

  const handleSubmitRequirement = (e) => {
    e.preventDefault();
    if (!title || !description) {
      showToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    const newReq = {
      id: `req-user-${Date.now()}`,
      category: requirementType === 'Goods' ? 'Office Furniture' : 'Services',
      location: location || 'Bengaluru, Karnataka',
      type: requirementType,
      badge: allowPartialBids ? 'Partial bids allowed' : 'Vendor-buyer',
      title: title,
      description: description,
      budget: budgetRange || '₹8L - ₹10L',
      budgetNum: 800000,
      closing: `${deliveryTimeline} left`,
      closingDays: parseInt(deliveryTimeline) || 30,
      bidsCount: 0,
      filesCount: attachedFiles.length,
      publishedAt: 'Just now',
      attachedFiles: attachedFiles.map(f => ({ name: f.name, size: f.size, type: 'PDF' })),
      allowPartialBids,
      requireTenderFile,
      isPublic: isPublicListing,
      verifiedSellerOnly: true,
      bookmarked: false
    };

    saveNewRequirement(newReq);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Requirement Published Successfully!');
      setTimeout(() => {
        navigate('/browse-requirements');
      }, 1000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans selection:bg-gray-200">
      
      {/* Navigation Bar Header */}
      <NavbarHeader activeTabOverride="post" />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs sm:text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Main Card Container matching Photo 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm space-y-6">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-100/90 border border-gray-200/70">
            <FileText size={14} className="text-gray-600" />
            <span>Create Bid Request</span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Post a new requirement
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1 leading-relaxed">
              Share your title, item count, and detailed description so sellers can submit accurate bids and tender files.
            </p>
          </div>

          <div className="border-b border-gray-100" />

          {/* Form Content */}
          <form onSubmit={handleSubmitRequirement} className="space-y-6">
            
            {/* Field 1: Title */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Office Chairs Procurement"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Field 2: Requirement Type */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Requirement Type
              </label>
              <select
                value={requirementType}
                onChange={(e) => setRequirementType(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-900 focus:border-black outline-none transition-all"
              >
                <option value="Goods">Goods</option>
                <option value="Services">Services</option>
                <option value="Turnkey">Turnkey</option>
                <option value="Works">Works</option>
              </select>
            </div>

            {/* Field 3: Number of items */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Number of items
              </label>
              <input
                type="number"
                value={itemCount}
                onChange={(e) => setItemCount(e.target.value)}
                placeholder="120"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Field 4: Delivery timeline */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Delivery timeline
              </label>
              <select
                value={deliveryTimeline}
                onChange={(e) => setDeliveryTimeline(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-900 focus:border-black outline-none transition-all"
              >
                <option value="30 Days">30 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="45 Days">45 Days</option>
                <option value="60 Days">60 Days</option>
              </select>
            </div>

            {/* Field 5: Bid closing */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Bid closing
              </label>
              <input
                type="date"
                value={bidClosingDate}
                onChange={(e) => setBidClosingDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Field 6: Description */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Description
              </label>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Need ergonomic office chairs for a 120-seat workspace..."
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Field 7: Budget range */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Budget range
              </label>
              <input
                type="text"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                placeholder="₹8,00,000 - ₹10,00,000"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Field 8: Location */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1.5">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Bengaluru, Karnataka"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              />
            </div>

            {/* Field 9: Upload supporting files Card Box matching photo 2 */}
            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-xl border border-gray-200 shadow-2xs">
                  <Upload size={18} className="text-gray-800" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                    Upload supporting files
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500">
                    Attach specs, drawings, or tender documents for sellers to review.
                  </p>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3">
                <label className="px-4 py-2 bg-black hover:bg-gray-800 text-white text-xs font-semibold rounded-full shadow-2xs cursor-pointer transition-all flex items-center gap-1.5">
                  <Upload size={14} />
                  <span>Choose files</span>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>

                <button
                  type="button"
                  onClick={() => showToast('Cloud import feature connected!')}
                  className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-xs font-semibold rounded-full shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Cloud size={14} />
                  <span>Upload from cloud</span>
                </button>
              </div>

              {/* Attached file item list */}
              {attachedFiles.length > 0 && (
                <div className="space-y-2 pt-2">
                  {attachedFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-gray-100 rounded-lg">
                          <FileText size={16} className="text-gray-700" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-gray-900">{file.name}</h5>
                          <span className="text-[11px] text-gray-500">{file.size}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-semibold rounded-full border border-gray-200">
                          {file.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(file.id)}
                          className="p-1 text-gray-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Field 10: Bid settings section matching Photo 2 */}
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-sm font-extrabold text-gray-900">Bid settings</h3>
                <p className="text-xs text-gray-500">Control how sellers respond to your requirement.</p>
              </div>

              <div className="space-y-3">
                
                {/* Setting 1 */}
                <div className="flex items-center justify-between p-3.5 bg-gray-50/80 rounded-2xl border border-gray-200/60">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                      Allow partial bids
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500">
                      Sellers can bid on part of the quantity.
                    </p>
                  </div>
                  <ToggleSwitch
                    checked={allowPartialBids}
                    onChange={setAllowPartialBids}
                  />
                </div>

                {/* Setting 2 */}
                <div className="flex items-center justify-between p-3.5 bg-gray-50/80 rounded-2xl border border-gray-200/60">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                      Require tender file
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500">
                      Bids must include supporting documents.
                    </p>
                  </div>
                  <ToggleSwitch
                    checked={requireTenderFile}
                    onChange={setRequireTenderFile}
                  />
                </div>

                {/* Setting 3 */}
                <div className="flex items-center justify-between p-3.5 bg-gray-50/80 rounded-2xl border border-gray-200/60">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                      Public listing
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500">
                      Visible to all verified sellers.
                    </p>
                  </div>
                  <ToggleSwitch
                    checked={isPublicListing}
                    onChange={setIsPublicListing}
                  />
                </div>

              </div>
            </div>

            {/* Field 11: Summary section matching Photo 2 */}
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-sm font-extrabold text-gray-900">Summary</h3>
                <p className="text-xs text-gray-500">Review the requirement before publishing.</p>
              </div>

              <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-200/60 space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-gray-200/40">
                  <span className="text-gray-500 font-medium">Title</span>
                  <span className="font-bold text-gray-900 text-right">{title || 'Office Chairs Procurement'}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-200/40">
                  <span className="text-gray-500 font-medium">Items</span>
                  <span className="font-bold text-gray-900">{itemCount || '120'} units</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-200/40">
                  <span className="text-gray-500 font-medium">Timeline</span>
                  <span className="font-bold text-gray-900">{deliveryTimeline || '30 days'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500 font-medium">Files</span>
                  <span className="font-bold text-gray-900">{attachedFiles.length} attached</span>
                </div>
              </div>

              {/* Info Alert Box */}
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200/70 flex items-start gap-2.5 text-xs text-gray-600">
                <Info size={16} className="text-gray-500 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Once published, sellers can submit bids and tender files. No payment or order generation is included in this MVP.
                </p>
              </div>
            </div>

            {/* Action Buttons at Bottom */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs sm:text-sm rounded-full border border-gray-300 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Save size={14} />
                <span>Save Draft</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-black hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Send size={14} />
                <span>{isSubmitting ? 'Publishing...' : 'Publish Requirement'}</span>
              </button>
            </div>

          </form>

        </div>

      </main>

    </div>
  );
};

export default CreateTender;
