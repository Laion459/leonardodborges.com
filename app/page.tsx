"use client";

import { HeroSection } from "@/components/HeroSection";
import { SignatureSection } from "@/components/SignatureSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { TimelineSection } from "@/components/TimelineSection";
import { DualShowcaseSection } from "@/components/DualShowcaseSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { FooterSection } from "@/components/FooterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SignatureSection />
      <ManifestoSection />

      <TimelineSection />
      <DualShowcaseSection />
      <HighlightsSection />
      <FooterSection />
    </>
  );
}

