import React, { useState } from 'react';
import { Star, Sparkles, Quote, CheckCircle2 } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'career' | 'peace' | 'relationships'>('all');

  const testimonials = [
    {
      id: 1,
      category: 'career',
      name: 'Elena Rostova',
      role: 'VP of Product, FinTech',
      location: 'San Francisco, CA',
      stars: 5,
      headline: 'From chronic burnout to effortless executive composure',
      quote:
        'I had spent 7 years in traditional therapy talking about my anxiety. MindHack did in 4 weeks what years of talk therapy couldn’t touch. My team noticed the shift immediately. Within 3 months of graduation, I was promoted to VP without working weekends.',
      highlight: 'Promoted to VP · 0 weekend hours · Deep inner baseline calm',
      metric: 'Cortisol -48%',
    },
    {
      id: 2,
      category: 'peace',
      name: 'Marcus Vance',
      role: 'Founding Partner & Architect',
      location: 'London, UK',
      stars: 5,
      headline: 'The 30-minute daily procedure gave me my sanity back',
      quote:
        'As an architect with 40-person deadlines, my mind never turned off. The Whole Human Framework taught me how to discharge stored nervous tension in minutes. The 30-min procedure is the single most valuable habit of my adult life.',
      highlight: 'Sleeping 7.5 hrs uninterrupted · No insomnia for 8 months',
      metric: 'Sleep Quality +85%',
    },
    {
      id: 3,
      category: 'relationships',
      name: 'Dr. Sarah Lin',
      role: 'Clinical Psychologist',
      location: 'Sydney, Australia',
      stars: 5,
      headline: 'Even as a clinician, I was astonished by the neural speed',
      quote:
        'I was skeptical about subconscious reprogrammers until I experienced the MindHack neuro-audios myself. The precision with which it isolates childhood survival scripts and replaces them with somatic ease is remarkable. My relationship with my partner transformed completely.',
      highlight: 'Deep marital intimacy restored · Healed ancestral guilt',
      metric: 'Relationship Harmony 10/10',
    },
    {
      id: 4,
      category: 'career',
      name: 'Julian Montgomery',
      role: 'SaaS Founder & Investor',
      location: 'Austin, TX',
      stars: 5,
      headline: 'Broke through a 3-year revenue plateau in week 7',
      quote:
        'I realized I had a deeply embedded poverty identity despite making high six figures. We tackled the upper-limit problem in Phase 2. We just closed our largest enterprise client in company history last Tuesday.',
      highlight: '$1.4M ARR Contract Closed · Completely dissolved imposter syndrome',
      metric: 'Revenue +140%',
    },
    {
      id: 5,
      category: 'peace',
      name: 'Aria Takahashi',
      role: 'Creative Director',
      location: 'Tokyo / Remote',
      stars: 5,
      headline: 'Quiet confidence that cannot be shaken',
      quote:
        'I used to replay every meeting in my head for hours afterwards. Through David’s somatic anchoring, that self-critical voice has simply evaporated. It’s not that I force positive thoughts—the negative chatter just no longer exists.',
      highlight: 'Zero mental replay chatter · Effortless creative flow',
      metric: 'Self-Doubt Eliminated',
    },
    {
      id: 6,
      category: 'relationships',
      name: 'Gabriel Morales',
      role: 'Private Equity Director',
      location: 'Miami, FL',
      stars: 5,
      headline: 'Became the father and leader I always aspired to be',
      quote:
        'I was always irritable when coming home from high-stakes deals. The nervous system regulation exercises allowed me to transition states seamlessly. My kids have their father back, and my marriage is stronger than on our wedding day.',
      highlight: 'Present with family · Emotional agility under extreme market stress',
      metric: 'Patience & Presence 100%',
    },
  ];

  const filtered = filter === 'all' ? testimonials : testimonials.filter((t) => t.category === filter);

  return (
    <section id="results" className="py-20 lg:py-28 relative bg-[#f6f0fc] border-t border-[#ded1f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact 4.9 (233) link */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Transformations</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14121d] tracking-tight mb-5">
            Real Humans. Measurable Breakthroughs.
          </h2>
          
          {/* Rating Showcase Badge */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-[#e2d5f4] mb-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-[#14121d]">
              4.9
            </span>
            <span className="text-sm font-bold text-[#6155EA]">
              (233 Verified Reviews)
            </span>
          </div>

          <p className="text-base sm:text-lg text-[#55536e] leading-relaxed">
            Read direct accounts from professionals, entrepreneurs, and seekers who reprogrammed their subconscious baseline through the Whole Human Framework.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Breakthroughs (233)' },
            { id: 'career', label: 'Career & Wealth Mastery' },
            { id: 'peace', label: 'Inner Peace & Anxiety Relief' },
            { id: 'relationships', label: 'Relationships & Boundaries' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#6155EA] text-white shadow-md shadow-[#6155ea]/20'
                  : 'bg-white/80 hover:bg-white text-[#4f4d66] border border-[#ded2f2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-purple-950/5 border border-white hover:border-[#cfbfe8] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-2 py-0.5 rounded">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#14121d] leading-snug mb-3">
                  "{item.headline}"
                </h3>

                <p className="text-xs sm:text-sm text-[#4e4b63] leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0e7f9]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c8b7f5] to-[#8d70ea] text-white font-bold flex items-center justify-center text-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#14121d]">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-[#716e87]">
                      {item.role} · {item.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Impact Strip */}
        <div className="bg-gradient-to-r from-[#6155EA] to-[#7f69f2] rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-[#6155ea]/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">98.4%</div>
              <div className="text-xs sm:text-sm text-white/80">Program Completion Rate</div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">30 min</div>
              <div className="text-xs sm:text-sm text-white/80">Average Daily Procedure</div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">233+</div>
              <div className="text-xs sm:text-sm text-white/80">Verified 5-Star Reviews</div>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold mb-1">$160</div>
              <div className="text-xs sm:text-sm text-white/80">Average Weekly Investment</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
