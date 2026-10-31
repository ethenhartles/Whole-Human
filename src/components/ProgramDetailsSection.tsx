import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ProgramDetailsSectionProps {
  onApplyClick: () => void;
}

export const ProgramDetailsSection: React.FC<ProgramDetailsSectionProps> = ({
  onApplyClick,
}) => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phase: 'Phase 1',
      weeks: 'Weeks 1 – 4',
      name: 'Foundation & Root Pattern Diagnosis',
      tagline: 'Illuminating subconscious blind spots and resetting nervous system baseline.',
      modules: [
        'Subconscious Architecture Mapping: Identifying root limiting loops formed in early development',
        'Vagus Nerve Toning & Somatic Baseline Reset: Transitioning out of chronic sympathetic hyper-arousal',
        'Cognitive Pattern Interruption: Stopping reactive emotional triggers within 90 seconds',
        'Daily 30-min procedure initialization: Establishing the core MindHack listening ritual',
      ],
      outcome: 'A clear neuro-blueprint of your blockers and an immediate reduction in daily anxiety & mental fatigue.',
    },
    {
      phase: 'Phase 2',
      weeks: 'Weeks 5 – 8',
      name: 'Deep MindHack Rewiring & Emotional Release',
      tagline: 'Dissolving subconscious resistance and installing empowered operating scripts.',
      modules: [
        'Theta State Imprinting: Custom neuro-acoustic sessions designed for rapid synaptic restructuring',
        'Somatic Emotional Discharge: Releasing multi-year stored grief, rage, and inadequacy from the body',
        'Sovereign Boundary Architecture: Neutralizing people-pleasing and scarcity-driven choices',
        'Wealth & Success Upper-Limit Expansion: Rewiring subconscious capacity for prosperity and ease',
      ],
      outcome: 'Profound lightness in body and mind; automatic behaviors shifting without effort or willpower.',
    },
    {
      phase: 'Phase 3',
      weeks: 'Weeks 9 – 12',
      name: 'Identity Transcendence & Real-World Mastery',
      tagline: 'Locking in your new baseline and executing with effortless confidence.',
      modules: [
        'The Sovereign Identity Matrix: Embodying your peak state as your permanent default character',
        'High-Stakes Performance Protocol: Showing up under corporate, creative, and personal pressure',
        'Relational Harmonic Realignment: Creating authentic intimacy and commanding respect effortlessly',
        'Life Long Integration Vault: Lifelong access to audio triggers and private alumni mastermind',
      ],
      outcome: 'Tangible, measured life results across career milestones, emotional peace, and fulfilling relationships.',
    },
  ];

  return (
    <section id="program-details" className="py-20 lg:py-28 relative bg-[#f1e8f9] border-t border-[#ded0f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-4 py-1.5 rounded-full mb-4">
            Curriculum & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14121d] tracking-tight mb-5">
            The 12-Week Transformation Journey
          </h2>
          <p className="text-base sm:text-lg text-[#535069] leading-relaxed">
            A step-by-step sequential experience designed for busy professionals, entrepreneurs, and leaders seeking quantum leaps without overwhelm.
          </p>
        </div>

        {/* Phase Navigator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {phases.map((p, idx) => {
            const isActive = activePhase === idx;
            return (
              <button
                key={p.phase}
                onClick={() => setActivePhase(idx)}
                className={`text-left p-6 sm:p-7 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-white shadow-xl shadow-purple-950/5 border-[#6155EA] ring-2 ring-[#6155EA]/20'
                    : 'bg-white/70 hover:bg-white border-[#ded2f0] hover:border-[#bfaee0]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-2.5 py-1 rounded-md">
                    {p.phase}
                  </span>
                  <span className="text-xs font-semibold text-[#7e7b99] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {p.weeks}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#14121d] mb-1.5 line-clamp-1">
                  {p.name}
                </h3>
                <p className="text-xs text-[#63617a] line-clamp-2">
                  {p.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-purple-950/5 border border-white mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#ebdff7]">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-widest text-[#6155EA] mb-1">
                <span>{phases[activePhase].phase}</span>
                <span>·</span>
                <span>{phases[activePhase].weeks}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14121d]">
                {phases[activePhase].name}
              </h3>
              <p className="text-sm sm:text-base text-[#56546e] mt-1.5 max-w-2xl">
                {phases[activePhase].tagline}
              </p>
            </div>

            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 bg-[#6155EA] hover:bg-[#5044DC] active:scale-[0.98] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md shadow-[#6155ea]/20 transition-all self-start lg:self-center cursor-pointer whitespace-nowrap"
            >
              <span>Join Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
            {/* Left Modules List */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#8683a3]">
                Core Weekly Modules
              </h4>
              {phases[activePhase].modules.map((mod, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#f9f5fd] border border-[#ebdff7] flex items-start gap-3.5 hover:bg-[#f5ecfc] transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#6155EA] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm sm:text-[15px] font-medium text-[#252336] leading-snug">
                    {mod}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Phase Outcome Box */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#f8f3fe] to-[#ebe0f8] border border-[#dccff2]">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6155EA] mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Phase Deliverable Outcome</span>
                </div>
                <h4 className="text-lg font-bold text-[#14121d] mb-3">
                  What shifts by the end of {phases[activePhase].weeks}
                </h4>
                <p className="text-sm text-[#4e4b65] leading-relaxed mb-6">
                  {phases[activePhase].outcome}
                </p>
              </div>

              {/* The 30 min daily procedure callout */}
              <div className="bg-white/90 rounded-xl p-4 border border-[#e2d4f5] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#14121d] mb-1">
                  <Clock className="w-4 h-4 text-[#6155EA]" />
                  <span>Daily Commitment: Exactly 30 Minutes</span>
                </div>
                <p className="text-xs text-[#6a6880] leading-normal">
                  Listen to your daily guided neuro-audio morning or evening. No homework piles, no grueling exercises. Designed for real lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Receive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white/80 p-5 rounded-2xl border border-[#ded1f2]">
            <div className="w-10 h-10 rounded-xl bg-[#6155EA]/10 text-[#6155EA] flex items-center justify-center font-bold mb-3">
              1:1
            </div>
            <div className="font-bold text-sm text-[#14121d] mb-1">Bi-Weekly 1-on-1 Audits</div>
            <div className="text-xs text-[#67647d] leading-relaxed">Direct personalized calibration with David to clear individual somatic bottlenecks.</div>
          </div>

          <div className="bg-white/80 p-5 rounded-2xl border border-[#ded1f2]">
            <div className="w-10 h-10 rounded-xl bg-[#6155EA]/10 text-[#6155EA] flex items-center justify-center font-bold mb-3">
              HQ
            </div>
            <div className="font-bold text-sm text-[#14121d] mb-1">MindHack Audio Portal</div>
            <div className="text-xs text-[#67647d] leading-relaxed">High-fidelity binaural recordings tailored for deep subconscious encoding.</div>
          </div>

          <div className="bg-white/80 p-5 rounded-2xl border border-[#ded1f2]">
            <div className="w-10 h-10 rounded-xl bg-[#6155EA]/10 text-[#6155EA] flex items-center justify-center font-bold mb-3">
              24/7
            </div>
            <div className="font-bold text-sm text-[#14121d] mb-1">Global Community Chamber</div>
            <div className="text-xs text-[#67647d] leading-relaxed">Daily peer encouragement, accountability partners, and real-time breakthroughs.</div>
          </div>

          <div className="bg-white/80 p-5 rounded-2xl border border-[#ded1f2]">
            <div className="w-10 h-10 rounded-xl bg-[#6155EA]/10 text-[#6155EA] flex items-center justify-center font-bold mb-3">
              ∞
            </div>
            <div className="font-bold text-sm text-[#14121d] mb-1">Lifetime Vault Access</div>
            <div className="text-xs text-[#67647d] leading-relaxed">Keep all recordings, updates, and future masterclass releases forever.</div>
          </div>
        </div>

      </div>
    </section>
  );
};
