import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  SlidersHorizontal, 
  FileText, 
  ShoppingBag, 
  Clock, 
  LayoutGrid, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import NavbarHeader from '../../../components/NavbarHeader';
import RequirementCard from '../../../components/RequirementCard';
import RequirementDetailModal from '../../../components/RequirementDetailModal';
import BidSubmissionModal from '../../../components/BidSubmissionModal';
import PostRequirementModal from '../../../LandingPage/PostRequirementModal';
import { getStoredRequirements } from '../../../data/mockRequirements';

const BuyerWorkspace = () => {
  const navigate = useNavigate();
  const [requirements, setRequirements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All statuses');
  const [categoryFilter, setCategoryFilter] = useState('All categories');
  const [locationFilter, setLocationFilter] = useState('All locations');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Modals state
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
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
      prev.map(r => r.id === reqId ? { ...r, bidsCount: (r.bidsCount || 0) + 1 } : r)
    );
    showToast('Your bid has been recorded successfully!');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Top dynamic metric stats matching photo
  const totalPosted = requirements.length;
  const totalBids = requirements.reduce((sum, r) => sum + (r.bidsCount || 0), 0);
  const closingSoonCount = requirements.filter(
    r => (r.status === 'Closing soon' || r.badge === 'Closing soon')
  ).length;

  // Filtering Logic
  const filteredRequirements = requirements.filter(item => {
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      const matchTitle = item.title?.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q);
      const matchCat = item.category?.toLowerCase().includes(q);
      const matchLoc = item.location?.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCat && !matchLoc) return false;
    }

    if (statusFilter !== 'All statuses') {
      const itemStatus = item.status || item.badge;
      if (itemStatus !== statusFilter) return false;
    }

    if (categoryFilter !== 'All categories' && item.category !== categoryFilter) {
      return false;
    }

    if (locationFilter !== 'All locations' && !item.location?.includes(locationFilter)) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 font-sans selection:bg-gray-200">
      
      {/* Navigation Header matching photo */}
      <NavbarHeader activeTabOverride="buyers" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs sm:text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">

        {/* 1. Top Header Card: Buyer Workspace matching photo */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-2xs space-y-4">
          
          {/* Buyer workspace badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200/80">
            <LayoutGrid size={14} className="text-gray-700" />
            <span>Buyer workspace</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Your posted requirements
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                Track your live requirements, review incoming bids, and keep every procurement opportunity moving forward.
              </p>
            </div>

            <button
              onClick={() => setIsPostModalOpen(true)}
              className="self-start sm:self-center px-5 py-2.5 bg-black hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm rounded-full flex items-center justify-center gap-1.5 shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap"
            >
              <Plus size={16} />
              <span>Post requirement</span>
            </button>
          </div>
        </div>

        {/* 2. Stats Grid Row (3 Cards matching photo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          
          {/* Card 1: Total posted */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs flex flex-col justify-between min-h-[140px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">Total posted</span>
              <div className="w-8 h-8 rounded-lg bg-gray-100/90 border border-gray-200/60 flex items-center justify-center text-gray-700">
                <FileText size={16} />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {totalPosted}
              </div>
              <div className="text-xs text-gray-400 font-normal mt-0.5">
                Requirements created
              </div>
            </div>
          </div>

          {/* Card 2: Bids received */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs flex flex-col justify-between min-h-[140px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">Bids received</span>
              <div className="w-8 h-8 rounded-lg bg-gray-100/90 border border-gray-200/60 flex items-center justify-center text-gray-700">
                <ShoppingBag size={16} />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {totalBids}
              </div>
              <div className="text-xs text-gray-400 font-normal mt-0.5">
                Across all requirements
              </div>
            </div>
          </div>

          {/* Card 3: Closing soon */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs flex flex-col justify-between min-h-[140px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">Closing soon</span>
              <div className="w-8 h-8 rounded-lg bg-gray-100/90 border border-gray-200/60 flex items-center justify-center text-gray-700">
                <Clock size={16} />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {closingSoonCount}
              </div>
              <div className="text-xs text-gray-400 font-normal mt-0.5">
                Needs your attention
              </div>
            </div>
          </div>

        </div>

        {/* 3. Section Title & Control Bar */}
        <div className="space-y-4 pt-2">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Published requirements
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5">
                Monitor performance and manage your active buyer posts.
              </p>
            </div>

            <div className="self-start sm:self-center">
              <span className="px-3.5 py-1 rounded-full text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200/80">
                {filteredRequirements.length} live posts
              </span>
            </div>
          </div>

          {/* Search & Filter Bar Container matching photo */}
          <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row items-center gap-3">
            
            <div className="relative flex-1 w-full">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your requirements"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-transparent border-none text-xs sm:text-sm text-gray-900 focus:outline-none placeholder-gray-400"
              />
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              
              <div className="relative flex-1 sm:flex-initial">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full appearance-none pl-4 pr-9 py-2 bg-white border border-gray-200/90 rounded-xl text-xs sm:text-sm font-medium text-gray-700 focus:outline-none focus:border-black cursor-pointer shadow-2xs"
                >
                  <option value="All statuses">All statuses</option>
                  <option value="Active">Active</option>
                  <option value="Closing soon">Closing soon</option>
                  <option value="Closed">Closed</option>
                </select>
                <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <button
                onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs ${
                  isFilterDrawerOpen || categoryFilter !== 'All categories' || locationFilter !== 'All locations'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-200/90 hover:bg-gray-50'
                }`}
              >
                <SlidersHorizontal size={15} />
                <span>Filters</span>
              </button>

            </div>

          </div>

          {/* Expandable Filters Panel */}
          {isFilterDrawerOpen && (
            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Category Filter
                  </label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-900 focus:outline-none"
                  >
                    <option value="All categories">All categories</option>
                    <option value="Office Furniture">Office Furniture</option>
                    <option value="IT Services">IT Services</option>
                    <option value="Facility Supplies">Facility Supplies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Location Filter
                  </label>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-900 focus:outline-none"
                  >
                    <option value="All locations">All locations</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setCategoryFilter('All categories');
                      setLocationFilter('All locations');
                      setStatusFilter('All statuses');
                      setSearchQuery('');
                      showToast('Filters reset');
                    }}
                    className="w-full py-2 text-xs font-semibold text-gray-600 hover:text-black border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer"
                  >
                    Reset filters
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 4. Requirements List matching photo */}
        <div className="space-y-4 sm:space-y-5">
          {filteredRequirements.length > 0 ? (
            filteredRequirements.map((req) => (
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
            ))
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80 space-y-3">
              <SlidersHorizontal className="mx-auto text-gray-400" size={32} />
              <h3 className="text-lg font-bold text-gray-900">No matching requirements found</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try adjusting your search terms or filters to view your published posts.
              </p>
            </div>
          )}
        </div>

      </main>

      {/* Post Requirement Modal */}
      <PostRequirementModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
      />

      {/* Requirement Detail View Modal */}
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

export default BuyerWorkspace;
