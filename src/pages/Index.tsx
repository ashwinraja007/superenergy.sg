import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import ScrollToTop from '../components/ScrollToTop';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyBiodiesel from "@/components/WhyBiodiesel";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import ForHouseholds from "@/components/ForHouseholds";
import ForBusinesses from "@/components/ForBusinesses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutPreview from "@/components/AboutPreview";

const Index = () => {
  // Show/hide Scroll-to-Top button (same behavior as in HowItWorks)
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
      {/* Fixed site header / menu bar */}
      <Header />

      {/* Keep top padding so content isn't hidden behind the fixed header */}
      <main className="pt-24 min-h-screen overflow-x-hidden">
        <Hero />
        <AboutPreview />
        {/* ⚠️ Ensure this HowItWorks is a section-only version (no Header/Footer inside) */}
        <HowItWorks />
        <Stats />
        <WhyBiodiesel />
        <ForHouseholds />
        <ForBusinesses />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />

      {/* Scroll-to-top button (mirrors HowItWorks styling/behavior) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-600 text-white shadow-xl transition-all duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-400/40
        ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default Index;
