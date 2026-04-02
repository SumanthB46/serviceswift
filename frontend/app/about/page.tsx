import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import AboutSection from '@/components/AboutSection';
import Mission from '@/components/Mission';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import StickyNavPill from '@/components/StickyNavPill';

export const metadata = {
  title: 'About Us | ArchitecturalService - Crafting Your Sanctuary',
  description: 'Learn about ArchitecturalService, our mission, our values, and the expert team behind our premium home services platform.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <StickyNavPill />
      <Navbar />
      <AboutHero />
      <AboutSection />
      <Mission />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
