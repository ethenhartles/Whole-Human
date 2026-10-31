import React from 'react';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  onApplyClick: () => void;
  onWatchVideoClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onApplyClick,
  onWatchVideoClick,
}) => {
  return (
    <section
      className="relative w-full overflow-hidden pt-4 pb-16 lg:pt-8 lg:pb-20 bg-[#e2d6f3] bg-no-repeat bg-[position:right_bottom] lg:bg-[position:calc(50%+140px)_bottom] bg-contain min-h-[640px] lg:min-h-[720px] flex items-center"
      style={{
        backgroundImage: `url('https://assets.cdn.filesafe.space/jkFZ19PRuceG3ckaf8gk/media/6a7854845a64f2b567384aca.png')`,
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headline, Copy, CTA, Highlights (lg:col-span-7 xl:col-span-6) */}
          <div className="relative z-10 lg:pr-4 flex flex-col justify-center lg:col-span-7 xl:col-span-6">
            

            {/* Main Headline matching exact text & colors - Strictly two lines */}
            <h1 className="text-[clamp(1.75rem,3.8vw,3.75rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-[#14121d] mb-6 max-w-2xl">
              <span className="block whitespace-nowrap">Reprogram Your Mind.</span>
              <span className="block whitespace-nowrap">
                Transform Your <span className="text-[#886bf6] drop-shadow-sm">Life.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-[18px] text-[#4f4d62] font-normal leading-[1.65] max-w-xl mb-8 sm:mb-10">
              A 12-week transformational experience to help you release
              limitations, heal deep patterns and create extraordinary results
              in every area of your life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12 sm:mb-14">
              {/* Apply Now Primary Button */}
              <button
                onClick={onApplyClick}
                className="bg-[#6155EA] hover:bg-[#5244DC] active:scale-[0.98] text-white font-semibold text-base sm:text-[17px] px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-[#6155ea]/25 hover:shadow-xl hover:shadow-[#6155ea]/30 transition-all duration-200 cursor-pointer"
              >
                Apply Now
              </button>

              {/* Watch Video Secondary Button */}
              <button
                onClick={onWatchVideoClick}
                className="group bg-white/40 hover:bg-white/80 active:scale-[0.98] text-[#1c1a2e] font-semibold text-base sm:text-[17px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-[#b2a2e4] hover:border-[#8f79dc] shadow-sm transition-all duration-200 flex items-center gap-3 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full border border-[#1c1a2e] flex items-center justify-center text-[#1c1a2e] group-hover:bg-[#6155EA] group-hover:border-[#6155EA] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Video</span>
              </button>
            </div>

            {/* Bottom 3 Highlights Strip */}
            <div className="pt-6 sm:pt-8 border-t border-[#d8cceb]/80 flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
              
              {/* Feature 1: 12 Weeks */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-[#bfaee0] bg-white/30 flex items-center justify-center text-[#6155EA] flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#6155EA]"
                  >
                    <path d="M12 2C12 2 7 8 7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 8 12 2 12 2Z" />
                    <path d="M12 18V22" />
                    <path d="M8 22H16" />
                    <path d="M4 14C4 14 7 18 12 18C17 18 20 14 20 14" />
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] sm:text-[15px] font-bold text-[#14121d] leading-snug">
                    12 Weeks
                  </div>
                  <div className="text-[12px] sm:text-[13px] text-[#6b6980] font-medium leading-snug">
                    Life-Changing
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="hidden sm:block h-8 w-px bg-[#cbb8e4]" />

              {/* Feature 2: Proven Framework */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-[#bfaee0] bg-white/30 flex items-center justify-center text-[#6155EA] flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#6155EA]"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04Z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] sm:text-[15px] font-bold text-[#14121d] leading-snug">
                    Proven Framework
                  </div>
                  <div className="text-[12px] sm:text-[13px] text-[#6b6980] font-medium leading-snug">
                    MindHack + WHF
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="hidden sm:block h-8 w-px bg-[#cbb8e4]" />

              {/* Feature 3: Global Community */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-[#bfaee0] bg-white/30 flex items-center justify-center text-[#6155EA] flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#6155EA]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] sm:text-[15px] font-bold text-[#14121d] leading-snug">
                    Global Community
                  </div>
                  <div className="text-[12px] sm:text-[13px] text-[#6b6980] font-medium leading-snug">
                    Transform Together
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Floating Stats Cards (lg:col-span-5 xl:col-span-6) */}
          <div className="relative mt-8 lg:mt-0 flex flex-col items-center lg:items-end justify-center lg:col-span-5 xl:col-span-6 z-20">
            <div className="w-full sm:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5 xl:gap-6 lg:mr-2 xl:mr-4">
              
              {/* Card 1: 30 min Average procedure */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(20,10,40,0.06)] border border-white/80 hover:shadow-lg transition-all duration-300 w-full sm:w-56 lg:w-56 xl:w-60 animate-float-slow">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#14121d] tracking-tight">
                    30
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-[#14121d] ml-1.5">
                    min
                  </span>
                </div>
                <div className="text-xs sm:text-[13px] text-[#6e6c84] font-medium mt-1">
                  Average procedure
                </div>
              </div>

              {/* Card 2: 4.9 (233) Average rating with Sparkle stars */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(20,10,40,0.06)] border border-white/80 hover:shadow-lg transition-all duration-300 w-full sm:w-56 lg:w-56 xl:w-60 animate-float-delay-1">
                {/* 2 Sparkle Stars in Top Right corner */}
                <div className="absolute top-4 right-4 text-[#14121d] pointer-events-none flex flex-col items-end">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M12 2C12 7 17 12 22 12C17 12 12 17 12 22C12 17 7 12 2 12C7 12 12 7 12 2Z" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 -mt-1 -mr-2"
                  >
                    <path d="M12 2C12 7 17 12 22 12C17 12 12 17 12 22C12 17 7 12 2 12C7 12 12 7 12 2Z" />
                  </svg>
                </div>

                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#14121d] tracking-tight">
                    4.9
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#6155EA] ml-2">
                    (233)
                  </span>
                </div>
                <div className="text-xs sm:text-[13px] text-[#6e6c84] font-medium mt-1">
                  Average rating
                </div>
              </div>

              {/* Card 3: $160 Average investment */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(20,10,40,0.06)] border border-white/80 hover:shadow-lg transition-all duration-300 w-full sm:w-56 lg:w-56 xl:w-60 animate-float-delay-2">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#14121d] tracking-tight">
                    $160
                  </span>
                </div>
                <div className="text-xs sm:text-[13px] text-[#6e6c84] font-medium mt-1">
                  Average investment
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
