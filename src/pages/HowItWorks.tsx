import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollToTop from '../components/ScrollToTop';

import {
  Droplets,
  Smartphone,
  Truck,
  ShieldCheck,
  Receipt,
  ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";

/** Steps for the timeline */
const steps = [
  {
    icon: Droplets,
    title: "Save Your Used Oil",
    description:
      "After frying or cooking, let the oil cool and pour it into our provided sealed container.",
    step: "01",
  },
  {
    icon: Smartphone,
    title: "Book a Pickup",
    description:
      "Use our mobile app, website, or hotline to request a free pickup at your convenience.",
    step: "02",
  },
  {
    icon: Truck,
    title: "We Collect It",
    description:
      "Our team arrives at your doorstep. We weigh the oil, issue a receipt, and collect it safely.",
    step: "03",
  },
  {
    icon: ShieldCheck,
    title: "Handover to Licensed Recycler",
    description:
      "We transfer your UCO to an authorized recycler with full chain-of-custody and safety protocols.",
    step: "04",
  },
  {
    icon: Receipt,
    title: "Compliance & Impact",
    description:
      "You receive pickup receipts/compliance notes. Track liters diverted and CO₂e avoided.",
    step: "05",
  },
];

/** Tech/compliance list */
const technologies = [
  { name: "Vacuum Filtration", description: "Advanced filtration removes impurities and solid particles." },
  { name: "Degumming & Neutralization", description: "Removes phosphatides and free fatty acids for stable downstream processing." },
  { name: "Esterification / Transesterification", description: "Performed by licensed recyclers (we only collect UCO)." },
  { name: "Lab Testing (BIS/Compliance)", description: "Quality checks and documentation retained for your records." },
];

const HowItWorks = () => {
  // Scroll-to-top
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Header />
      {/* Header is fixed; slightly smaller pad on xs so content is visible immediately */}
      <main className="pt-20 sm:pt-24">
        <section
          id="how-it-works"
          className="relative py-8 sm:py-10 overflow-x-hidden"
        >
          {/* Background accents */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-50/60 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-14 animate-fade-in">
              <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm bg-lime-100">
                Simple • Transparent • Impactful
              </Badge>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                How It{" "}
                <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                A clean, compliant way to handle your used cooking oil—end to end.
              </p>
            </div>

            {/* Desktop timeline (unchanged) */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />
                <div className="grid grid-cols-5 gap-6 items-stretch">
                  {steps.map((s, i) => (
                    <div
                      key={s.step}
                      className="relative flex flex-col h-full [animation:fadeIn_.6s_ease_forwards] opacity-0"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-[0_8px_24px_rgba(16,185,129,0.35)] bg-teal-300">
                        {s.step}
                      </div>

                      <Card className="flex flex-col h-full min-h-[240px] p-6 text-center backdrop-blur border border-emerald-100 hover:border-emerald-300/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl bg-teal-200">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4 shadow-inner">
                          <s.icon className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                        <div className="mt-auto" />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile vertical timeline (polished) */}
            <div className="lg:hidden space-y-4 sm:space-y-6">
              {steps.map((s, i) => (
                <Card
                  key={s.step}
                  className="p-4 sm:p-5 bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl [animation:fadeIn_.5s_ease_forwards] opacity-0"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold shadow-[0_6px_20px_rgba(16,185,129,0.35)]">
                        {s.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                          <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                        </div>
                        <h3 className="text-sm sm:text-lg font-semibold">{s.title}</h3>
                      </div>
                      <p className="text-[13px] sm:text-base text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* After pickup (balanced, mobile-compact) */}
            <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-4 sm:gap-8 items-stretch">
              <div className="flex flex-col h-full rounded-2xl border border-emerald-200/60 backdrop-blur p-5 sm:p-8 animate-fade-in bg-lime-100">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What Happens After Pickup</h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    "Sealed containers are transported to authorized recyclers.",
                    "Full traceability with chain-of-custody records.",
                    "Recyclers perform testing & processing per regulations.",
                    "You retain receipts/compliance notes for your records.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                      <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto" />
              </div>

              <Card className="flex flex-col h-full p-5 sm:p-8 bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl">
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Technology & Compliance</h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {technologies.map((t) => (
                    <li key={t.name} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                      <div>
                        <div className="text-sm sm:text-base font-medium">{t.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{t.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-[11px] sm:text-xs text-muted-foreground pt-4">
                  *We only collect UCO and hand it over to licensed recyclers.
                </div>
              </Card>
            </div>
          </div>

          {/* keyframes if not present */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Scroll-to-top button (smaller on mobile) */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-5 right-5 z-50 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-600 text-white shadow-xl transition-all duration-300 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-400/40
              ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
          >
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HowItWorks;
