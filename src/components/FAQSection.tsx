import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the 30-minute average procedure work?',
      a: 'Each morning or evening, you put on headphones and listen to your designated 30-minute MindHack neuro-acoustic audio track. These tracks use clinically tested binaural beats and hypnotic cadence to shift your brainwaves into theta state (where subconscious reprogramming happens). There is no complex homework, willpower struggle, or journaling exhaustion required.',
    },
    {
      q: 'How is this different from traditional talk therapy or standard coaching?',
      a: 'Traditional therapy predominantly engages the prefrontal cortex—your conscious, analytical mind. However, 95% of our behavioral patterns, emotional triggers, and self-limiting beliefs are stored in the subconscious and somatic nervous system. MindHack accesses the limbic system and neuro-pathways directly, allowing years of chronic stress or imposter syndrome to dissolve rapidly without endless talking.',
    },
    {
      q: 'Why is the average investment $160 / week?',
      a: 'We structured the Whole Human Framework to provide private executive-level immersion without the typical $10,000–$25,000 corporate coaching price tag. At $160 per week, participants receive direct bi-weekly 1-on-1 diagnostic calibrations, live weekly labs with David, full access to the MindHack audio vault, and a lifetime community of high-caliber peers.',
    },
    {
      q: 'What if I cannot attend the live weekly coaching calls?',
      a: 'All live labs are recorded in high-definition audio and video and uploaded to your secure student portal within 3 hours. You can submit questions beforehand for David to calibrate live, and our 24/7 community chamber is staffed with mentors who respond to specific hurdles between sessions.',
    },
    {
      q: 'Who is this experience NOT for?',
      a: 'This program is not for people seeking a magic pill without showing up for their 30 minutes daily. It is also not suitable for individuals with severe active psychosis or clinical personality disorders requiring inpatient psychiatric medical treatment. It is built for ambitious, self-aware humans ready to step into permanent sovereignty.',
    },
    {
      q: 'What is the 30-Day Breakthrough Guarantee?',
      a: 'We want you to enter this container with complete peace of mind. If you complete the first 30 days of the program, perform your daily 30-minute procedure, and do not experience a noticeable, tangible shift in your stress baseline and internal state, simply let David’s team know for an immediate, courteous 100% refund.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#f7f2fc] border-t border-[#ded1f2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6155EA] bg-[#6155EA]/10 px-4 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14121d] tracking-tight mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#55536e]">
            Everything you need to know about the 12-week experience, the daily procedure, and our guarantee.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ded1f2] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#faf7fd] transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#14121d]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#6155EA] text-white rotate-180' : 'bg-[#f0e7fa] text-[#6155EA]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#4f4d66] leading-relaxed border-t border-[#f0e7fa] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
