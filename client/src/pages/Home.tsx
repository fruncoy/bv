import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import ProductSection from "@/components/ProductSection";
import BoutiqueCTA from "@/components/BoutiqueCTA";
import AudienceSection from "@/components/AudienceSection";
import Footer from "@/components/Footer";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#222] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#444] transition-colors duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <ProductSection />
        <BoutiqueCTA />
        <AudienceSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
