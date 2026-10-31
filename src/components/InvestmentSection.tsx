import React from 'react';
import { Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface InvestmentSectionProps {
  onApplyClick: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({
  onApplyClick,
}) => {
  return (
    <section className="py-20 lg:py-28 relative bg-[#f2e9fa] border-t border-[#ded0f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-4 py-1.5 rounded-full mb-4">
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14121d] tracking-tight mb-5">
            An Investment in Permanent Freedom
          </h2>
          <p className="text-base sm:text-lg text-[#55536e] leading-relaxed">
            The average participant invests <strong>$160/week</strong> over 12 weeks to permanently rewire limiting patterns that have cost them years of happiness, income, and health.
          </p>
        </div>

        {/* Pricing Card Showcase */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-purple-950/5 border border-white relative overflow-hidden">
          
          {/* Subtle Top Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6155EA] via-[#9478f7] to-[#baa3f7]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Tier Details */}
            <div className="lg:col-span-7">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#6155EA] mb-2">
                12-Week Immersion Cohort
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14121d] mb-4">
                The Complete Whole Human Experience
              </h3>
              <p className="text-sm text-[#55536e] leading-relaxed mb-6">
                Full access to all 3 phases of the MindHack protocol, personal diagnostic audits, live coaching labs with David, and the private global alumni chamber.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  '12 Weekly Live Transformation & Calibration Labs with David',
                  '1-on-1 Subconscious Architecture Diagnostic Onboarding Call',
                  'Complete MindHack Neuro-Audio Vault (Daily 30-min protocols)',
                  'Somatic Vagus Nerve Regulation & Trauma Release Sequences',
                  '24/7 Global Mastermind Access with verified cohort peers',
                  '100% Unconditional 30-Day Breakthrough Guarantee',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6155EA] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#27253b] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#57546e] bg-[#f8f3fe] p-3 rounded-xl border border-[#ebdff7]">
                <ShieldCheck className="w-4 h-4 text-[#6155EA]" />
                <span>30-Day Money-Back Guarantee: If you don’t feel a profound shift, you receive a full refund.</span>
              </div>
            </div>

            {/* Right Price Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#f9f5fd] to-[#ede3f7] rounded-2xl p-8 border border-[#e0d2f2] text-center flex flex-col items-center justify-between">
              <div className="w-full">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#6155EA] bg-white px-3 py-1 rounded-full shadow-xs">
                  Most Flexible Option
                </span>

                <div className="mt-6 mb-2 flex items-baseline justify-center">
                  <span className="text-5xl font-black text-[#14121d] tracking-tight">
                    $160
                  </span>
                  <span className="text-sm font-semibold text-[#686580] ml-2">
                    / week
                  </span>
                </div>

                <div className="text-xs text-[#716e87] font-medium mb-6">
                  Billed in 3 monthly installments or 1 upfront tuition ($1,750 saving $170)
                </div>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={onApplyClick}
                  className="w-full bg-[#6155EA] hover:bg-[#5044DC] active:scale-[0.98] text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-[#6155ea]/25 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Next Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-[#716e87]">
                  Cohort capped at 25 individuals for intimate mastery
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
