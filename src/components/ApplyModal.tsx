import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    primaryGoal: '',
    biggestObstacle: '',
    dailyCommitment: 'yes',
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#ded1f2] overflow-hidden">
        
        {/* Top Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f4effc] text-[#535069] hover:text-[#14121d] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full flex-1 transition-all ${
                    step >= s ? 'bg-[#6155EA]' : 'bg-[#e7ddf5]'
                  }`}
                />
              ))}
            </div>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6155EA]">
                Step {step} of 3 · Application Form
              </span>
              <h3 className="text-2xl font-extrabold text-[#14121d] mt-1">
                {step === 1 && 'What are you ready to transform?'}
                {step === 2 && 'Commitment & Routine Readiness'}
                {step === 3 && 'Your Application Details'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5f5c76] mt-1">
                {step === 1 && 'Help us understand your current subconscious patterns.'}
                {step === 2 && 'The Whole Human Framework requires 30 minutes daily.'}
                {step === 3 && 'Where should David’s admissions team send your evaluation?'}
              </p>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#14121d] uppercase tracking-wider mb-2">
                    Primary Area of Focus
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Eliminating Chronic Imposter Syndrome',
                      'Breaking Career / Income Upper Limits',
                      'Healing Deep Anxiety & Nervous Tension',
                      'Mastering Emotional Composure & Peace',
                      'Relationship Boundaries & Sovereignty',
                      'Total Mind-Body State Reset',
                    ].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setFormData({ ...formData, primaryGoal: item })}
                        className={`p-3 text-left rounded-xl text-xs sm:text-[13px] font-semibold border transition-all cursor-pointer ${
                          formData.primaryGoal === item
                            ? 'bg-[#6155EA] text-white border-[#6155EA] shadow-sm'
                            : 'bg-[#faf6fd] text-[#2c293e] border-[#ded2f2] hover:border-[#bfaee0]'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14121d] uppercase tracking-wider mb-1.5">
                    What is the recurring limitation that holds you back?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., I find myself holding back in high-stakes moments, procrastinating out of fear of failure, or feeling restless inside..."
                    value={formData.biggestObstacle}
                    onChange={(e) => setFormData({ ...formData, biggestObstacle: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-[#ded1f2] bg-[#faf6fd] focus:outline-none focus:ring-2 focus:ring-[#6155EA] focus:bg-white transition-all text-[#14121d]"
                  />
                </div>

                <button
                  type="button"
                  disabled={!formData.primaryGoal}
                  onClick={() => setStep(2)}
                  className="w-full bg-[#6155EA] hover:bg-[#5044DC] disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#14121d] uppercase tracking-wider mb-2">
                    Can you dedicate 30 minutes daily to the MindHack neuro-imprint procedure?
                  </label>
                  <div className="space-y-2.5">
                    {[
                      { val: 'yes', text: 'Yes, I am fully committed to the daily 30 minutes morning or night.' },
                      { val: 'mostly', text: 'Yes, with occasional weekend adjustments.' },
                      { val: 'unsure', text: 'I have a very packed schedule and need flexibility.' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.val}
                        onClick={() => setFormData({ ...formData, dailyCommitment: opt.val })}
                        className={`w-full p-3.5 text-left rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer flex items-center gap-3 ${
                          formData.dailyCommitment === opt.val
                            ? 'bg-[#6155EA]/10 border-[#6155EA] text-[#14121d]'
                            : 'bg-[#faf6fd] text-[#55526d] border-[#ded2f2]'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            formData.dailyCommitment === opt.val
                              ? 'border-[#6155EA] bg-[#6155EA] text-white'
                              : 'border-[#b5a3db]'
                          }`}
                        >
                          {formData.dailyCommitment === opt.val && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{opt.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f3fe] border border-[#ebdff7] text-xs text-[#524f68] leading-relaxed">
                  <strong>Cohort Notice:</strong> Each 12-week cohort is strictly capped at 25 individuals to ensure direct personalized supervision by David during bi-weekly calibrations.
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-3 rounded-xl border border-[#ded1f2] text-xs font-bold text-[#55526d] hover:bg-[#faf6fd] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#6155EA] hover:bg-[#5044DC] text-white font-semibold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Final Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#14121d] uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-[#ded1f2] bg-[#faf6fd] focus:outline-none focus:ring-2 focus:ring-[#6155EA] focus:bg-white transition-all text-[#14121d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14121d] uppercase tracking-wider mb-1">
                    Email Address (For Application Status)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-[#ded1f2] bg-[#faf6fd] focus:outline-none focus:ring-2 focus:ring-[#6155EA] focus:bg-white transition-all text-[#14121d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14121d] uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-[#ded1f2] bg-[#faf6fd] focus:outline-none focus:ring-2 focus:ring-[#6155EA] focus:bg-white transition-all text-[#14121d]"
                  />
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-3 rounded-xl border border-[#ded1f2] text-xs font-bold text-[#55526d] hover:bg-[#faf6fd] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#6155EA] hover:bg-[#5044DC] text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-[#6155ea]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Cohort Application</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#6155EA] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#6155ea]/30">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#14121d] mb-2">
              Application Received, {formData.name.split(' ')[0] || 'Friend'}!
            </h3>
            
            <p className="text-sm text-[#54516e] leading-relaxed max-w-md mx-auto mb-6">
              Thank you for taking the first step. David and the admissions committee will review your profile within 24 hours. A welcome orientation link has been sent to <strong>{formData.email}</strong>.
            </p>

            <div className="bg-[#f8f3fe] rounded-2xl p-5 border border-[#ebdff7] text-left max-w-md mx-auto mb-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#14121d]">
                <ShieldCheck className="w-4 h-4 text-[#6155EA]" />
                <span>What Happens Next:</span>
              </div>
              <ul className="text-xs text-[#5e5b74] space-y-1.5 pl-6 list-disc">
                <li>Admissions review of your primary focus: <strong>{formData.primaryGoal}</strong></li>
                <li>Invitation to your 1-on-1 Subconscious Architecture Calibration Call</li>
                <li>Access credentials to the MindHack audio portal upon acceptance</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#6155EA] hover:bg-[#5044DC] text-white text-sm font-semibold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              Back to Experience
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
