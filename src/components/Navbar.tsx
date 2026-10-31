import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Framework', href: '#framework' },
    { label: 'Program Details', href: '#program-details' },
    { label: 'Results', href: '#results' },
    { label: 'About David', href: '#about-david' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="w-full relative z-30 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-3.5 group cursor-pointer">
          {/* Logo Mark: Iridescent folded ribbon SVG matching design */}
          <div className="w-10 h-10 relative flex-shrink-0">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            >
              <defs>
                <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C4B5FD" />
                  <stop offset="50%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
                <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FBCFE8" />
                  <stop offset="60%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              {/* Top loop of ribbon */}
              <path
                d="M14 18C14 11.3726 19.3726 6 26 6C32.6274 6 38 11.3726 38 18C38 23 34 26 28 28L18 31C12 33 8 36.5 8 41"
                stroke="url(#logoGrad1)"
                strokeWidth="7"
                strokeLinecap="round"
                className="opacity-95"
              />
              {/* Bottom fold of ribbon */}
              <path
                d="M10 26C10 21 14 18 20 16L30 13C36 11 40 7.5 40 3"
                stroke="url(#logoGrad2)"
                strokeWidth="6"
                strokeLinecap="round"
                className="opacity-80"
              />
              <path
                d="M18 32C18 37.5228 22.4772 42 28 42C33.5228 42 38 37.5228 38 32C38 27.5 34.5 24.5 30 23.5"
                stroke="url(#logoGrad1)"
                strokeWidth="6.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Wordmark matching exact typography */}
          <div className="flex flex-col text-left">
            <span className="text-[13px] font-extrabold uppercase tracking-tight text-[#14121d] leading-[1.1]">
              WHOLE HUMAN
            </span>
            <span className="text-[13px] font-extrabold uppercase tracking-tight text-[#14121d] leading-[1.1]">
              FRAMEWORK
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#14121d] leading-[1.2] mt-0.5">
              + MINDHACK
            </span>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] xl:text-[15px] font-medium text-[#1e1c29] hover:text-[#6155EA] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onApplyClick}
            className="bg-[#6155EA] hover:bg-[#5044DC] active:scale-[0.98] text-white text-[14px] sm:text-[15px] font-semibold px-6 sm:px-7 py-2.5 rounded-xl shadow-md shadow-[#6155ea]/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Apply Now
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-1 text-[#14121d] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.2]" />
            ) : (
              <div className="w-6 h-5 flex flex-col justify-between py-0.5">
                <span className="w-full h-[2.2px] bg-[#14121d] rounded-full transition-all" />
                <span className="w-full h-[2.2px] bg-[#14121d] rounded-full transition-all" />
                <span className="w-full h-[2.2px] bg-[#14121d] rounded-full transition-all" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#f4effc]/95 backdrop-blur-md border-b border-[#ded2f2] shadow-xl px-6 py-6 transition-all duration-300 z-50">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1e1c29] hover:text-[#6155EA] py-2 border-b border-[#ded2f2]/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#6155EA]" />
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onApplyClick();
                }}
                className="w-full bg-[#6155EA] text-white text-base font-semibold py-3 rounded-xl shadow-md shadow-[#6155ea]/20"
              >
                Apply Now for Next Cohort
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
