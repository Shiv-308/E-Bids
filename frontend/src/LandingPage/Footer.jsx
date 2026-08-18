import React, { useState } from 'react';
import { ArrowRight, SquarePen, CheckCircle2 } from 'lucide-react';

const Footer = ({ onOpenPostModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
        onOpenPostModal();
      }, 2000);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white">

      {/* Ready to post banner section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ready to post your first requirement?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-normal max-w-xl mx-auto leading-relaxed">
            Join the marketplace where sellers compete for your business. Free to post, free to bid.
          </p>

          {/* Input & Button Form */}
          <form onSubmit={handleSubscribe} className="pt-6 max-w-lg mx-auto">
            {!subscribed ? (
              <div className="flex flex-col sm:flex-row items-center gap-2 bg-gray-900/90 p-1.5 rounded-full border border-gray-800 focus-within:border-gray-600 transition-all shadow-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-2.5 text-sm sm:text-base bg-transparent text-white placeholder-gray-500 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-100 font-semibold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 whitespace-nowrap shadow-xs hover:shadow transition-all flex-shrink-0 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div className="bg-gray-900/90 border border-green-500/40 p-3.5 rounded-full text-green-400 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 shadow-md animate-in fade-in duration-200">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>Redirecting to requirement setup...</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-gray-400">

            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                <SquarePen className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-white tracking-tight text-base">
                SupplyNest
              </span>
            </div>

            {/* Copyright */}
            <div>
              © 2026 SupplyNest
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
