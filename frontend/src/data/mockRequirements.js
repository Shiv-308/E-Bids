// Mock dataset and storage helpers for BidBazaar requirements
const INITIAL_REQUIREMENTS = [
  {
    id: 'req-1',
    category: 'Office Furniture',
    location: 'Karnataka',
    type: 'Goods',
    badge: 'Vendor-buyer',
    title: '120 ergonomic office chairs for a 120-seat workspace',
    description: 'Buyer needs ergonomic chairs with warranty, delivery, and installation. Tender file attached for detailed specs and evaluation criteria.',
    budget: '₹8L - ₹10L',
    budgetNum: 900000,
    closing: '3 days left',
    closingDays: 3,
    bidsCount: 15,
    filesCount: 1,
    publishedAt: 'Published 2 hours ago',
    attachedFiles: [
      { name: 'Ergonomic_Chair_Specs.pdf', size: '2.4 MB', type: 'PDF' }
    ],
    allowPartialBids: true,
    requireTenderFile: true,
    isPublic: true,
    verifiedSellerOnly: true,
    bookmarked: false
  },
  {
    id: 'req-2',
    category: 'IT Services',
    location: 'Mumbai',
    type: 'Services',
    badge: 'On-site / Tech support',
    title: 'Managed network support for 12 branch offices',
    description: 'Buyer is seeking 24/7 IT support, SLA 1hr response times, and on-site support coverage across multiple locations.',
    budget: '₹2L - ₹4L',
    budgetNum: 300000,
    closing: '5 days left',
    closingDays: 5,
    bidsCount: 11,
    filesCount: 2,
    publishedAt: 'Published 5 hours ago',
    attachedFiles: [
      { name: 'Network_SLA_Requirement.pdf', size: '3.1 MB', type: 'PDF' },
      { name: 'Branch_Office_List.xlsx', size: '520 KB', type: 'Spreadsheet' }
    ],
    allowPartialBids: false,
    requireTenderFile: true,
    isPublic: true,
    verifiedSellerOnly: true,
    bookmarked: true
  },
  {
    id: 'req-3',
    category: 'Facility Supplies',
    location: 'Delhi NCR',
    type: 'Goods',
    badge: 'Partial bids allowed',
    title: 'Monthly procurement of cleaning and pantry supplies',
    description: 'Long recurring requirement with itemized quantities, delivery schedule, and vendor comparison table based on prices.',
    budget: '₹1L - ₹3L',
    budgetNum: 200000,
    closing: '8 days left',
    closingDays: 8,
    bidsCount: 24,
    filesCount: 0,
    publishedAt: 'Published yesterday',
    attachedFiles: [],
    allowPartialBids: true,
    requireTenderFile: false,
    isPublic: true,
    verifiedSellerOnly: false,
    bookmarked: false
  }
];

const STORAGE_KEY = 'bidbazaar_requirements_list';

export const getStoredRequirements = () => {
  try {
    const customStored = localStorage.getItem(STORAGE_KEY);
    if (customStored) {
      const parsed = JSON.parse(customStored);
      return [...parsed, ...INITIAL_REQUIREMENTS];
    }
  } catch (err) {
    console.error('Error loading stored requirements:', err);
  }
  return INITIAL_REQUIREMENTS;
};

export const saveNewRequirement = (newReq) => {
  try {
    const customStored = localStorage.getItem(STORAGE_KEY);
    const existing = customStored ? JSON.parse(customStored) : [];
    const updated = [newReq, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return [...updated, ...INITIAL_REQUIREMENTS];
  } catch (err) {
    console.error('Error saving requirement:', err);
    return [newReq, ...INITIAL_REQUIREMENTS];
  }
};
