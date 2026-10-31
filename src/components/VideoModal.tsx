import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, Sparkles, ArrowRight, Check } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyClick: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onApplyClick,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#14121f] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Canvas Area */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-[#1d1a33] via-[#151326] to-[#0c0a17] flex flex-col items-center justify-center p-8 overflow-hidden">
          
          {/* Subtle Ambient Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6155EA]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8b6df0]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Soundwave Animation while playing */}
          <div className="flex items-center gap-1.5 h-16 mb-6">
            {[40, 65, 30, 85, 95, 45, 75, 55, 90, 60, 35, 80, 50, 70, 40].map((h, i) => (
              <span
                key={i}
                className="w-1.5 bg-gradient-to-t from-[#6155EA] to-[#c4b5fd] rounded-full transition-all duration-300"
                style={{
                  height: isPlaying ? `${Math.max(12, (h * (progress % 10 + 10)) / 18)}%` : '15%',
                  opacity: isPlaying ? 0.9 : 0.4,
                }}
              />
            ))}
          </div>

          {/* Video Title Card Overlay */}
          <div className="text-center max-w-xl z-10 px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a892f7] bg-white/10 px-3 py-1 rounded-full mb-3 inline-block">
              Exclusive Framework Walkthrough
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              The MindHack Neuro-Protocol in 4 Minutes
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
              How subconscious audio imprinting bypasses mental resistance and reprograms identity in 30 minutes a day.
            </p>
          </div>

          {/* Big Center Play / Pause Floating Trigger */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-16 sm:bottom-20 w-14 h-14 rounded-full bg-[#6155EA] hover:bg-[#5244dc] text-white flex items-center justify-center shadow-xl shadow-[#6155ea]/40 cursor-pointer transition-transform hover:scale-105 active:scale-95 z-20"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>

          {/* Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2 z-10">
            {/* Progress line */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-[#6155EA] to-[#a892f7] transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between text-xs text-white/70 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white cursor-pointer"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <span>01:14 / 04:18</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-white/70" />
                <span>Binaural Audio Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Key Takeaways & CTA Bar */}
        <div className="p-6 sm:p-8 bg-[#181628] flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5">
          <div className="space-y-1.5 text-left w-full sm:w-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-[#a892f7]">
              Next Step: Application
            </div>
            <div className="text-sm font-semibold text-white/90">
              Ready to experience this transformation firsthand?
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onApplyClick();
              }}
              className="w-full sm:w-auto bg-[#6155EA] hover:bg-[#5244dc] active:scale-[0.98] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-[#6155ea]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply for Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
