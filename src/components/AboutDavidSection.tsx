import React from 'react';
import { Award, BookOpen, Shield, Heart, ArrowRight } from 'lucide-react';

interface AboutDavidSectionProps {
  onApplyClick: () => void;
}

export const AboutDavidSection: React.FC<AboutDavidSectionProps> = ({
  onApplyClick,
}) => {
  return (
    <section id="about-david" className="py-20 lg:py-28 relative bg-[#f9f5fd] border-t border-[#ded1f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Image with exact placeholder instruction */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative gradient border */}
              <div className="rounded-3xl p-2 bg-gradient-to-b from-[#d8c5f5] via-[#baa2ed] to-[#8c6df0] shadow-2xl shadow-purple-900/10">
                {/* Styled placeholder frame with exact placeholder tag requested by user */}
                <div className="w-full aspect-[4/5] rounded-2xl bg-[#ebe0f8] border border-white/60 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                  
                  {/* Subtle inner ambient gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6155EA]/10 via-transparent to-[#9d8ff7]/20 pointer-events-none" />

                  {/* Placeholder Avatar / Icon */}
                  <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-[#6155EA] mb-4 relative z-10 group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-12 h-12 stroke-[1.5]" />
                  </div>

                  {/* Explicit user placeholder text */}
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6155EA] bg-white/90 px-3 py-1.5 rounded-lg border border-[#d5c5f0] shadow-xs mb-3 relative z-10">
                    PLACEHOLDER_david-founder-photo
                  </span>

                  <h3 className="text-xl font-extrabold text-[#14121d] mb-1 relative z-10">
                    David Vance
                  </h3>
                  <p className="text-xs font-semibold text-[#575470] relative z-10">
                    Creator of Whole Human Framework & MindHack
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#d8c7f0] w-full flex items-center justify-center gap-4 text-[11px] text-[#716e87] relative z-10">
                    <span>15+ Years Clinical Exp.</span>
                    <span>·</span>
                    <span>2,500+ Humans Coached</span>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white rounded-2xl p-4 shadow-xl border border-[#ded1f2] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6155EA] text-white flex items-center justify-center font-bold">
                  WHF
                </div>
                <div>
                  <div className="text-xs font-bold text-[#14121d]">Master Protocol</div>
                  <div className="text-[11px] text-[#6d6b84]">Clinically Grounded</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-4 py-1.5 rounded-full mb-4">
              Meet Your Guide
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14121d] tracking-tight mb-6">
              "You cannot intellectualize your way out of patterns installed in your nervous system."
            </h2>

            <div className="space-y-4 text-base text-[#4f4d66] leading-relaxed mb-8">
              <p>
                After spending over a decade researching why brilliant, ambitious individuals remain trapped in cycles of self-doubt, panic, and upper-limit self-sabotage, David realized the fundamental flaw in modern coaching: <strong>it relies on conscious willpower.</strong>
              </p>
              <p>
                The human subconscious and somatic nervous system control 95% of daily decision-making, emotional reaction, and state. David developed the <strong>Whole Human Framework + MindHack Protocol</strong> to synthesize targeted neuro-acoustic reprogramming with somatic release—allowing individuals to dismantle decades of limitation in weeks, not years.
              </p>
              <p>
                Today, David guides founders, medical specialists, corporate leaders, and visionaries across 32 countries into total alignment, emotional freedom, and sustained peak sovereignty.
              </p>
            </div>

            {/* Credential Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white border border-[#ded1f2]">
                <BookOpen className="w-5 h-5 text-[#6155EA] mb-2" />
                <div className="text-xs font-bold text-[#14121d]">Applied Neuroscience</div>
                <div className="text-[11px] text-[#6d6b84] mt-0.5">Synaptic rewiring & theta-state induction</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#ded1f2]">
                <Heart className="w-5 h-5 text-[#6155EA] mb-2" />
                <div className="text-xs font-bold text-[#14121d]">Somatic Regulation</div>
                <div className="text-[11px] text-[#6d6b84] mt-0.5">Vagal tone & cellular trauma release</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#ded1f2]">
                <Shield className="w-5 h-5 text-[#6155EA] mb-2" />
                <div className="text-xs font-bold text-[#14121d]">Executive Mastery</div>
                <div className="text-[11px] text-[#6d6b84] mt-0.5">Advising global leaders and innovators</div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={onApplyClick}
                className="bg-[#6155EA] hover:bg-[#5044DC] active:scale-[0.98] text-white text-sm font-semibold px-7 py-3.5 rounded-xl shadow-md shadow-[#6155ea]/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Apply for David’s Next Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
