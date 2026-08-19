import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Plus, SlidersHorizontal, FileText, Scale, Lightbulb, BookmarkCheck, CheckCircle2 } from 'lucide-react';
import NavbarHeader from '../../../components/NavbarHeader';
import RequirementCard from '../../../components/RequirementCard';
import ToggleSwitch from '../../../components/ToggleSwitch';
import RequirementDetailModal from '../../../components/RequirementDetailModal';
import BidSubmissionModal from '../../../components/BidSubmissionModal';
import { getStoredRequirements } from '../../../data/mockRequirements';

const TenderList = () => {
  const navigate = useNavigate();
  const [requirements, setRequirements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All categories');
  const [locationFilter, setLocationFilter] = useState('All locations');
  const [budgetFilter, setBudgetFilter] = useState('Any budget');
  const [sortFilter, setSortFilter] = useState('Latest');
  const [quickUserType, setQuickUserType] = useState('For Buyers');
  
  // Toggle states matching photo
  const [verifiedSellersOnly, setVerifiedSellersOnly] = useState(true);
  const [tenderFileRequired, setTenderFileRequired] = useState(false);
  const [filterSearchInput, setFilterSearchInput] = useState('');

  // Modals state
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const list = getStoredRequirements();
    setRequirements(list);
  }, []);

  const handleBidSuccess = (reqId) => {
    setRequirements(prev =>
      prev.map(r => r.id === reqId ? { ...r, bidsCount: r.bidsCount + 1 } : r)
    );
    showToast('Your bid has been recorded successfully!');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Filtering Logic
  const filteredRequirements = requirements.filter(item => {
    // Search query filter
    const q = searchQuery.toLowerCase() || filterSearchInput.toLowerCase();
    if (q) {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCat) return false;
    }

    // Category filter
    if (categoryFilter !== 'All categories' && item.category !== categoryFilter) {
      return false;
    }

    // Location filter
    if (locationFilter !== 'All locations' && !item.location.includes(locationFilter)) {
      return false;
    }

    // Verified seller toggle
    if (verifiedSellersOnly && !item.verifiedSellerOnly) {
      return false;
    }

    // Tender file required toggle
    if (tenderFileRequired && item.filesCount === 0) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans selection:bg-gray-200">
      
      {/* Shared Navigation Bar */}
      <NavbarHeader activeTabOverride="buyers" />

      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs sm:text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Top Header Card Container matching Photo 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-100/90 border border-gray-200/70 mb-4">
            <FileText size={14} className="text-gray-600" />
            <span>Published requirements</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
            Browse buyer requirements and submit competitive bids
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed mb-6">
            Filter by category, location, budget, and view file requirements to find the most relevant opportunities for your business.
          </p>

          {/* Search Input & Post Button Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <div className="relative flex-1 w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search title, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-full text-sm text-gray-900 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
              />
            </div>

            <Link
              to="/post-requirement"
              className="w-full sm:w-auto px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all whitespace-nowrap text-decoration-none"
            >
              <Plus size={16} />
              <span>Post Requirement</span>
            </Link>
          </div>

          {/* Filters Control Card Box */}
          <div className="bg-[#f8f9fa] rounded-2xl p-4 sm:p-5 border border-gray-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              
              {/* Category */}
              <div>
                <label className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-wider mb-1.5">
                  CATEGORY
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-900 focus:border-black outline-none transition-all"
                >
                  <option value="All categories">All categories</option>
                  <option value="Office Furniture">Office Furniture</option>
                  <option value="IT Services">IT Services</option>
                  <option value="Facility Supplies">Facility Supplies</option>
                  <option value="Construction">Construction</option>
                  <option value="Logistics">Logistics</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-wider mb-1.5">
                  LOCATION
                </label>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-900 focus:border-black outline-none transition-all"
                >
                  <option value="All locations">All locations</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-wider mb-1.5">
                  BUDGET
                </label>
                <select
                  value={budgetFilter}
                  onChange={(e) => setBudgetFilter(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-900 focus:border-black outline-none transition-all"
                >
                  <option value="Any budget">Any budget</option>
                  <option value="Under ₹2L">Under ₹2L</option>
                  <option value="₹2L - ₹5L">₹2L - ₹5L</option>
                  <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                  <option value="₹10L+">₹10L+</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-[10px] font-extrabold text-gray-500 uppercase tracking-wider mb-1.5">
                  SORT
                </label>
                <select
                  value={sortFilter}
                  onChange={(e) => setSortFilter(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-900 focus:border-black outline-none transition-all"
                >
                  <option value="Latest">Latest</option>
                  <option value="Closing Soonest">Closing Soonest</option>
                  <option value="Most Bids">Most Bids</option>
                </select>
              </div>

            </div>

            {/* Quick Filters Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-200/60">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-gray-600 mr-1">Quick Filters:</span>
                <button
                  onClick={() => setQuickUserType('For Buyers')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    quickUserType === 'For Buyers'
                      ? 'bg-black text-white shadow-2xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  For Buyers
                </button>
                <button
                  onClick={() => setQuickUserType('For Sellers')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    quickUserType === 'For Sellers'
                      ? 'bg-black text-white shadow-2xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  For Sellers
                </button>
              </div>

              {/* Inline Quick Checkboxes */}
              <div className="flex items-center gap-5 text-xs font-medium text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={verifiedSellersOnly}
                    onChange={(e) => setVerifiedSellersOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-black focus:ring-black accent-black"
                  />
                  <span>Verified sellers only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tenderFileRequired}
                    onChange={(e) => setTenderFileRequired(e.target.checked)}
                    className="w-4 h-4 rounded text-black focus:ring-black accent-black"
                  />
                  <span>Tender file required</span>
                </label>
              </div>
            </div>

          </div>

        </div>

        {/* Section: Open Requirements */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Open requirements
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-normal">
                Showing the most relevant published requests for your filters ({filteredRequirements.length} found).
              </p>
            </div>

            <button
              onClick={() => {
                setCategoryFilter('All categories');
                setLocationFilter('All locations');
                setBudgetFilter('Any budget');
                setSearchQuery('');
                setVerifiedSellersOnly(false);
                setTenderFileRequired(false);
                showToast('Filters reset to default');
              }}
              className="text-xs font-semibold text-gray-600 hover:text-black tracking-tight cursor-pointer underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>

          {/* Cards List */}
          {filteredRequirements.length > 0 ? (
            <div className="space-y-5">
              {filteredRequirements.map((req) => (
                <RequirementCard
                  key={req.id}
                  requirement={req}
                  onViewDetails={(item) => {
                    setSelectedRequirement(item);
                    setIsDetailModalOpen(true);
                  }}
                  onBidNow={(item) => {
                    setSelectedRequirement(item);
                    setIsBidModalOpen(true);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 space-y-3">
              <SlidersHorizontal className="mx-auto text-gray-400" size={32} />
              <h3 className="text-lg font-bold text-gray-900">No matching requirements found</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try adjusting your search terms or filters to browse all open buyer requests.
              </p>
            </div>
          )}
        </section>

        {/* Bottom Section 1: Filter Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-5">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">
              Filter summary
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Refine results to match your bidding capacity.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Setting Item 1 */}
            <div className="flex items-center justify-between p-4 bg-gray-50/80 rounded-2xl border border-gray-200/60">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                  Verified sellers only
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  Show trusted opportunities from verified organization profiles.
                </p>
              </div>
              <ToggleSwitch
                checked={verifiedSellersOnly}
                onChange={setVerifiedSellersOnly}
              />
            </div>

            {/* Setting Item 2 */}
            <div className="flex items-center justify-between p-4 bg-gray-50/80 rounded-2xl border border-gray-200/60">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                  Tender file required
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  Only listings with attached specs, drawings or tender documents.
                </p>
              </div>
              <ToggleSwitch
                checked={tenderFileRequired}
                onChange={setTenderFileRequired}
              />
            </div>

            {/* Setting Item 3: Search filter input */}
            <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-200/60 space-y-2">
              <label className="block text-xs font-bold text-gray-900">
                Search filter
              </label>
              <input
                type="text"
                placeholder="Type keyword to filter requirements..."
                value={filterSearchInput}
                onChange={(e) => setFilterSearchInput(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:border-black outline-none transition-all"
              />
            </div>

          </div>
        </div>

        {/* Bottom Section 2: Relevant blocks matching photo */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-5">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">
              Relevant blocks
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Helpful sections for seller bidding opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Block 1 */}
            <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-200/60 flex items-start gap-3.5 hover:bg-gray-100/60 transition-colors">
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-2xs">
                <FileText size={20} className="text-gray-800" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Tender documents</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Specs, scope, and compliance guidelines.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-200/60 flex items-start gap-3.5 hover:bg-gray-100/60 transition-colors">
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-2xs">
                <Scale size={20} className="text-gray-800" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Evaluation criteria</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Price, quality, delivery, and compliance.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-200/60 flex items-start gap-3.5 hover:bg-gray-100/60 transition-colors">
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-2xs">
                <Lightbulb size={20} className="text-gray-800" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">Bid response tips</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Target requirements and clarify timeline.
                </p>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Detail View Modal */}
      <RequirementDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        requirement={selectedRequirement}
        onBidNow={(item) => {
          setSelectedRequirement(item);
          setIsBidModalOpen(true);
        }}
      />

      {/* Bid Submission Modal */}
      <BidSubmissionModal
        isOpen={isBidModalOpen}
        onClose={() => setIsBidModalOpen(false)}
        requirement={selectedRequirement}
        onSuccess={handleBidSuccess}
      />

    </div>
  );
};

export default TenderList;
