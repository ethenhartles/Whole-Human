/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FrameworkSection } from './components/FrameworkSection';
import { ProgramDetailsSection } from './components/ProgramDetailsSection';
import { ResultsSection } from './components/ResultsSection';
import { AboutDavidSection } from './components/AboutDavidSection';
import { InvestmentSection } from './components/InvestmentSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ede4f7] text-[#14121d] font-sans antialiased selection:bg-[#6155EA] selection:text-white">
      {/* Top Navigation */}
      <Navbar onApplyClick={() => setIsApplyModalOpen(true)} />

      {/* Main Hero Section matching exact design image */}
      <main>
        <HeroSection
          onApplyClick={() => setIsApplyModalOpen(true)}
          onWatchVideoClick={() => setIsVideoModalOpen(true)}
        />

        {/* The Framework (MindHack + WHF 4 Pillars) */}
        <FrameworkSection />

        {/* Program Details (12-Week Transformation Roadmap) */}
        <ProgramDetailsSection onApplyClick={() => setIsApplyModalOpen(true)} />

        {/* Results (4.9 Rating & 233 Verified Reviews) */}
        <ResultsSection />

        {/* About David (Founder & Master Practitioner) */}
        <AboutDavidSection onApplyClick={() => setIsApplyModalOpen(true)} />

        {/* Investment Details ($160 Average Investment) */}
        <InvestmentSection onApplyClick={() => setIsApplyModalOpen(true)} />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onApplyClick={() => setIsApplyModalOpen(true)} />

      {/* Interactive Application Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      {/* Interactive Video Walkthrough Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onApplyClick={() => setIsApplyModalOpen(true)}
      />
    </div>
  );
}
