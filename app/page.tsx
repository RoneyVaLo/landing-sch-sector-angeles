"use client";

import { Navbar } from "@/features/navbar/Navbar";
import { HeroSection } from "@/features/hero/HeroSection";
import { TimelineSection } from "@/features/timeline/TimelineSection";
import { AboutSection } from "@/features/about/AboutSection";
import { InfrastructureSection } from "@/features/about/InfrastructureSection";
import { ActivitiesSection } from "@/features/activities/ActivitiesSection";
import { EventsSection } from "@/features/events/EventsSection";
import { Footer } from "@/features/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <AboutSection />
      <InfrastructureSection />
      <ActivitiesSection />
      <EventsSection />
      <Footer />
    </main>
  );
}
