import React from 'react';

interface FooterProps {
  onApplyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onApplyClick }) => {
  return (
    <footer className="w-full bg-[#12101d] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-9 h-9 relative flex-shrink-0">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C4B5FD" />
                      <stop offset="50%" stopColor="#818CF8" />
                      <stop offset="100%" stopColor="#C084FC" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M14 18C14 11.3726 19.3726 6 26 6C32.6274 6 38 11.3726 38 18C38 23 34 26 28 28L18 31C12 33 8 36.5 8 41"
                    stroke="url(#footerLogoGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 32C18 37.5228 22.4772 42 28 42C33.5228 42 38 37.5228 38 32C38 27.5 34.5 24.5 30 23.5"
                    stroke="url(#footerLogoGrad)"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[13px] font-extrabold uppercase tracking-tight text-white leading-[1.1]">
                  WHOLE HUMAN
                </span>
                <span className="text-[13px] font-extrabold uppercase tracking-tight text-white leading-[1.1]">
                  FRAMEWORK
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a78bfa] leading-[1.2] mt-0.5">
                  + MINDHACK
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              A 12-week transformational experience to release limitations, heal deep patterns, and create extraordinary results in every area of your life.
            </p>

            <button
              onClick={onApplyClick}
              className="bg-[#6155EA] hover:bg-[#5244DC] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#6155ea]/25 cursor-pointer"
            >
              Apply for Next Cohort
            </button>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#framework" className="hover:text-white transition-colors">
                  The Framework
                </a>
              </li>
              <li>
                <a href="#program-details" className="hover:text-white transition-colors">
                  Program Details
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Client Results
                </a>
              </li>
              <li>
                <a href="#about-david" className="hover:text-white transition-colors">
                  About David
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Core Protocols */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Core Protocols
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>MindHack Theta Imprinting</li>
              <li>Somatic Vagus Nerve Reset</li>
              <li>Upper-Limit Dissolution</li>
              <li>Daily 30-Min Audio Ritual</li>
              <li>Executive Sovereign Alignment</li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Trust & Guarantee
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>30-Day Breakthrough Guarantee</li>
              <li>233+ Verified 5-Star Reviews</li>
              <li>Strict 25-Student Cohort Cap</li>
              <li>Confidential Client Chambers</li>
              <li>Terms of Service & Privacy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-white/40 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Whole Human Framework + MindHack. All rights reserved.
          </p>
          <p className="max-w-xl text-center md:text-right text-white/30 text-[10px]">
            Disclaimer: The Whole Human Framework + MindHack is a personal optimization and educational protocol. It is not intended to diagnose, treat, or cure psychiatric disorders or clinical medical conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};
