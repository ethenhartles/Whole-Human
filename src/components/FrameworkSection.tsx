import React, { useState } from 'react';
import { Brain, Heart, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export const FrameworkSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'mindhack',
      title: 'MindHack Subconscious Rewiring',
      subtitle: 'Neural Reprogramming at the Root',
      icon: Brain,
      color: 'from-violet-500 to-indigo-600',
      description:
        'Standard mindset work only addresses the conscious 5% of your brain. MindHack uses targeted neuro-acoustic frequencies and hypnotic pattern interruption to dissolve chronic limiting beliefs directly at their synaptic origin.',
      points: [
        'Eradicate lifelong imposter syndrome and self-sabotaging scripts',
        'Daily 30-min guided neuro-imprint procedure to install sovereign confidence',
        'Rewire default stress responses into focused, proactive state mastery',
      ],
      metric: '94% of clients report freedom from automatic negative thinking in 30 days',
    },
    {
      id: 'somatic',
      title: 'Somatic & Nervous System Reset',
      subtitle: 'Releasing Stored Cellular Trauma',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      description:
        'Your body remembers what your mind tries to suppress. The Whole Human Framework bridges cognition with somatic breath and vagus nerve toning to release stored emotional tension and restore nervous system regulation.',
      points: [
        'Regulate dysregulated autonomic responses without years of talk therapy',
        'Clear physical tightness, gut anxiety, and habitual fight-or-flight loops',
        'Anchor deep biological safety so higher cognitive states become effortless',
      ],
      metric: 'Measured 42% drop in baseline cortisol within 4 weeks',
    },
    {
      id: 'identity',
      title: 'Identity & Operating System Shift',
      subtitle: 'Upgrading the Self-Image Architecture',
      icon: Zap,
      color: 'from-indigo-600 to-blue-500',
      description:
        'You never outperform your subconscious identity. We dismantle the outdated archetypes keeping you small and construct an integrated, unbreakable identity aligned with your highest vision.',
      points: [
        'Align behavior with your true vision rather than willpower fatigue',
        'Elevate wealth, relationship, and career threshold ceilings permanently',
        'Establish natural boundaries and effortless executive presence',
      ],
      metric: 'Over 89% report major career or income breakthroughs during the 12 weeks',
    },
    {
      id: 'integration',
      title: 'Embodied Mastery & Community',
      subtitle: 'Sustained Real-World Execution',
      icon: Sparkles,
      color: 'from-fuchsia-500 to-purple-600',
      description:
        'Transformation is only real when sustained in daily life under pressure. Weekly masterminds and daily accountability inside our global cohort ensure your breakthroughs become your permanent baseline.',
      points: [
        'Weekly live group coaching labs with David and elite peers',
        'Personalized daily accountability tracking and progress audits',
        'Lifetime access to the private alumni network and master library',
      ],
      metric: '98% program completion rate across 230+ global graduates',
    },
  ];

  return (
    <section id="framework" className="py-20 lg:py-28 relative bg-[#f7f2fc] border-t border-[#e2d5f2]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-4 py-1.5 rounded-full mb-4">
            The Whole Human Framework + MindHack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14121d] tracking-tight mb-5">
            A Dual-Engine Protocol for Permanent Transformation
          </h2>
          <p className="text-base sm:text-lg text-[#55536b] leading-relaxed">
            Unlike fragmented self-help or one-dimensional seminars, our methodology integrates subconscious neuro-reprogramming with somatic nervous system mastery.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-white shadow-md border-[#6155EA] ring-2 ring-[#6155EA]/20'
                    : 'bg-white/60 hover:bg-white border-[#ded2f0] hover:border-[#c5b5e3]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#6155EA] text-white shadow-sm' : 'bg-[#efe7fa] text-[#6155EA]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#8683a3]">
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#14121d] line-clamp-1">
                  {pillar.title.split(' ')[0]} {pillar.title.split(' ')[1]}
                </div>
                <div className="text-xs text-[#6e6c84] line-clamp-1 mt-0.5">
                  {pillar.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Feature Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-purple-900/5 border border-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Pillar Content */}
            <div className="lg:col-span-7">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#6155EA] mb-2">
                Pillar 0{activePillar + 1}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14121d] mb-4">
                {pillars[activePillar].title}
              </h3>
              <p className="text-base text-[#4f4d62] leading-relaxed mb-6">
                {pillars[activePillar].description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3.5 mb-8">
                {pillars[activePillar].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6155EA] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#2e2c40] font-medium leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Metric Box */}
              <div className="p-4 rounded-xl bg-[#f5effc] border border-[#e4d6f7] flex items-center gap-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#6155EA] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#383354]">
                  {pillars[activePillar].metric}
                </span>
              </div>
            </div>

            {/* Right Pillar Graphic Container */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-[#f8f4fd] to-[#ede3f7] rounded-2xl p-8 border border-[#e0d2f2] relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Decorative background circle */}
                <div className="w-48 h-48 rounded-full bg-[#6155EA]/10 blur-2xl absolute -top-10 -right-10 pointer-events-none" />
                
                <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#6155EA] mb-6 relative z-10">
                  {React.createElement(pillars[activePillar].icon, { className: 'w-10 h-10' })}
                </div>

                <div className="text-lg font-bold text-[#14121d] mb-2 relative z-10">
                  {pillars[activePillar].subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#5d5b72] mb-6 relative z-10 leading-relaxed">
                  Engineered using applied clinical neuroscience and somatic release techniques to bypass conscious resistance.
                </p>

                <div className="w-full bg-white/80 rounded-xl p-4 border border-[#dfd2f2] text-left">
                  <div className="text-xs uppercase font-bold text-[#6155EA] mb-1">
                    Daily Practice Protocol
                  </div>
                  <div className="text-sm font-bold text-[#14121d]">
                    30-Minute Focused Sequence
                  </div>
                  <div className="text-xs text-[#706e86] mt-0.5">
                    10m Somatic Grounding · 15m MindHack Imprint · 5m Identity Anchoring
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
