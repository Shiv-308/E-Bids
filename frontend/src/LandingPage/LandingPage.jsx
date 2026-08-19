import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Features from './Features';
import Sectors from './Sectors';
import FAQ from './FAQ';
import Footer from './Footer';
import PostRequirementModal from './PostRequirementModal';
import TenderPreviewModal from './TenderPreviewModal';

const LandingPage = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isTenderPreviewOpen, setIsTenderPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      <Header
        onOpenPostModal={() => setIsPostModalOpen(true)}
      />

      <main>
        <Hero
          onOpenPostModal={() => setIsPostModalOpen(true)}
          onOpenTenderPreview={() => setIsTenderPreviewOpen(true)}
        />
        <HowItWorks
          onOpenPostModal={() => setIsPostModalOpen(true)}
        />
        <Features />
        <Sectors
          onOpenPostModal={() => setIsPostModalOpen(true)}
        />
        <FAQ />
      </main>

      <Footer
        onOpenPostModal={() => setIsPostModalOpen(true)}
      />

      {/* Interactive Modals */}
      <PostRequirementModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
      />

      <TenderPreviewModal
        isOpen={isTenderPreviewOpen}
        onClose={() => setIsTenderPreviewOpen(false)}
      />
    </div>
  );
};

export default LandingPage;