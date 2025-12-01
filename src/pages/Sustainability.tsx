import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Globe, Droplets, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// ---
// SIMPLIFIED, RESPONSIVE, CSS-ONLY PAGE
// - Trimmed sections & copy for faster scanning
// - Consistent spacing, elevated cards, subtle gradients
// - Mobile-first layout with accessible sizes
// ---

const SustainabilityPage = () => {
  const impacts = [{
    icon: Globe,
    label: "CO₂ Offset",
    value: "9,000+ t",
    blurb: "78% fewer GHG vs. fossil diesel",
    color: "text-emerald-600"
  }, {
    icon: Recycle,
    label: "Oil Recycled",
    value: "36,50,000+ L",
    blurb: "Diverted from drains & landfills",
    color: "text-primary"
  }, {
    icon: Droplets,
    label: "Water-Safe",
    value: "100%",
    blurb: "Zero liquid discharge facility",
    color: "text-cyan-600"
  }];
  const initiatives = [{
    icon: Zap,
    title: "Zero Waste Ops",
    points: ["ZLD processing", "By‑product recycling", "Digital paperwork"]
  }, {
    icon: Leaf,
    title: "Greener Logistics",
    points: ["B20 across fleet", "Smart routing", "EV pilot"]
  }, {
    icon: Award,
    title: "Community",
    points: ["School programs", "Biz workshops", "Recycling drives"]
  }];
  const certifications = [
  {
    name: "NEA Certified",
    description: "National Environment Agency (NEA) Certified"
  },
  {
    name: "ISCC Certified",
    description: "International Sustainability and Carbon Certification – guaranteeing sustainable sourcing, carbon reduction, and traceable supply chains."
  }
];
  return <div className="min-h-screen bg-background relative">
      {/* Soft background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">🌱 Sustainability</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Simple, Real <span className="bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent">Impact</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">We collect Used Cooking Oil for the production of renewable fuels —cutting emissions, protecting water, and closing the loop for businesses.</p>
          
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {impacts.map((i, idx) => <Card key={idx} className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-yellow-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 grid place-items-center">
                    <i.icon className={`h-6 w-6 ${i.color}`} />
                  </div>
                  <span className="text-sm text-muted-foreground">{i.label}</span>
                </div>
                <div className={`text-3xl font-bold ${i.color}`}>{i.value}</div>
                <p className="mt-1 text-sm text-muted-foreground">{i.blurb}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      

      {/* CERTIFICATIONS */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Certified & Transparent
      </h2>
      <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
        Independent standards that validate our approach.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((c, idx) => (
        <Card
          key={idx}
          className="p-6 border rounded-2xl hover:shadow-lg transition-shadow bg-cyan-100"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-emerald-50 grid place-items-center">
              <Award className="h-6 w-6 text-emerald-700" />
            </div>

            {/* Text Content */}
            <div>
              <div className="font-semibold text-lg">{c.name}</div>
              <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
            <div className="relative text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">Let’s Accelerate Your Sustainability</h2>
              <p className="mt-2 text-sm sm:text-base opacity-90">From compliance to real impact—start with a free consultation.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>;
};
export default SustainabilityPage;
