import React from 'react';
import { ArrowRight, PlayCircle, FileText } from 'lucide-react';

const Hero = ({ onOpenPostModal, onOpenTenderPreview }) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-block">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-700 bg-gray-100/80 border border-gray-200/80 tracking-tight">
                The private sector GeM alternative
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.12]">
              Let sellers come to you.<br />
              Post once, get<br />
              competitive bids.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              A tender-style marketplace for private hotels, offices, shops and industries. Post your requirement, receive bids with tender files, and award the best offer — no shop visits, no cold calls.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenPostModal}
                className="px-6 py-3.5 bg-black hover:bg-gray-800 text-white font-semibold text-sm sm:text-base rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Post a Requirement</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenTenderPreview}
                className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm sm:text-base rounded-full border border-gray-200 flex items-center gap-2 shadow-xs transition-all"
              >
                <PlayCircle size={18} className="text-gray-700" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Metrics / Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 max-w-lg">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">2,400+</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Verified sellers</p>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">8,900</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Tenders posted</p>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">₹0</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">To post & bid</p>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer" onClick={onOpenTenderPreview}>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                  alt="Business partners shaking hands across meeting table"
                  className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Tender Card Overlay at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-100 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-3">
                    
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText size={18} className="text-gray-800" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-xs sm:text-sm">
                          Tender #TD-4821 awarded
                        </h5>
                        <p className="text-[11px] sm:text-xs text-gray-500">
                          7 bids received • closed in 3 days
                        </p>
                      </div>
                    </div>

                    <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full shadow-2xs">
                      Closed
                    </span>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
