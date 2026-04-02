import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import LoanBanner from "@/components/LoanBanner";
import BulkBanner from "@/components/BulkBanner";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PartnerSection from "@/components/PartnerSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
// import SegmentControl from "@/components/SegmentControl";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <SegmentControl /> */}
      <Hero />
      <Categories />
      <LoanBanner />
      <BulkBanner />
      <TrustSection />
      <HowItWorks />
      <Testimonials />
      <PartnerSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
