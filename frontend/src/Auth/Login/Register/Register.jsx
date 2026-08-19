import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SquarePen, Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('buyer'); // 'buyer' | 'seller'
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering with:', {
      role,
      fullName,
      companyName,
      email,
      password,
      confirmPassword,
      agreeTerms,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-between items-center px-4 py-8 font-sans">
      
      {/* Spacer for vertical balance */}
      <div className="hidden sm:block"></div>

      {/* Main Auth Card Container */}
      <div className="w-full max-w-[520px] bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-gray-100/80 my-auto">
        
        {/* Brand Header */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-6 group cursor-pointer text-decoration-none">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <SquarePen size={20} />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="text-[17px] font-bold text-gray-900 leading-tight">SupplyNest</h2>
            <p className="text-xs text-gray-500 font-normal">Tender-style marketplace</p>
          </div>
        </Link>

        {/* Title & Subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-1.5">
            Create your account
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-normal">
            Post requirements or start bidding in minutes
          </p>
        </div>

        {/* Buyer / Seller Role Segmented Control */}
        <div className="bg-[#f3f4f6] p-1.5 rounded-full flex items-center mb-5">
          <button
            type="button"
            onClick={() => setRole('buyer')}
            className={`w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full text-center transition-all cursor-pointer ${
              role === 'buyer'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-gray-900 font-medium'
            }`}
          >
            Buyer
          </button>
          <button
            type="button"
            onClick={() => setRole('seller')}
            className={`w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full text-center transition-all cursor-pointer ${
              role === 'seller'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-gray-900 font-medium'
            }`}
          >
            Seller
          </button>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Terms & Privacy Policy Checkbox Box */}
          <div className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-200/80 rounded-xl flex items-center gap-3">
            <input
              type="checkbox"
              id="agree-terms"
              required
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black cursor-pointer"
            />
            <label htmlFor="agree-terms" className="text-xs text-gray-700 font-normal cursor-pointer select-none">
              I agree to the <span className="font-bold text-gray-900">Terms</span> and <span className="font-bold text-gray-900">Privacy Policy</span>
            </label>
          </div>

          {/* Create Account Primary Button */}
          <button
            type="submit"
            className="w-full bg-[#18181b] hover:bg-black text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-xs transition-all duration-200 cursor-pointer mt-2"
          >
            Create Account
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative my-5 flex items-center justify-center">
          <div className="border-t border-gray-200/90 w-full"></div>
          <span className="absolute bg-white px-3 text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
            OR
          </span>
        </div>

        {/* Social Sign Up Button */}
        <div>
          <button
            type="button"
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-gray-200 shadow-2xs transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Bottom Switch Link */}
        <div className="text-center mt-6 flex items-center justify-center gap-1.5">
          <span className="text-xs sm:text-sm text-gray-500 font-normal">Already have an account?</span>
          <Link to="/signin" className="font-bold text-gray-900 text-xs sm:text-sm hover:underline cursor-pointer text-decoration-none">
            Sign In
          </Link>
        </div>

      </div>

      {/* Footer Outside Card */}
      <footer className="mt-8 mb-2 text-xs text-gray-500 flex items-center justify-center gap-6 font-medium">
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition-colors">Privacy</a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition-colors">Terms</a>
      </footer>

    </div>
  );
};

export default Register;