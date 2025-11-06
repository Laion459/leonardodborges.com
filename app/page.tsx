"use client";

import { HeroSection } from "@/components/HeroSection";
import { SignatureSection } from "@/components/SignatureSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { TimelineSection } from "@/components/TimelineSection";
import { DualShowcaseSection } from "@/components/DualShowcaseSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { FooterSection } from "@/components/FooterSection";
import { NextMilestoneSection } from "@/components/NextMilestoneSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NextMilestoneSection />
      <SignatureSection />
      <ManifestoSection />

      <TimelineSection />
      <DualShowcaseSection />
      <HighlightsSection />
      <FooterSection />
    </>
  );
}

