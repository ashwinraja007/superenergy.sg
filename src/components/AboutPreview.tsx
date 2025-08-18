import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Leaf, Receipt } from "lucide-react";
import { Link } from "react-router-dom";
const AboutPreview = () => {
  return <section id="about-preview" className="relative py-20">
      {/* subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-50/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT: IMAGE (stacks first on mobile, stays left on md+) */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-100 shadow-2xl">
            {/* Put your image at /public/images/about-us.jpg */}
            <img src="/about-us.png" alt="Team collecting sealed used cooking oil containers" className="w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[520px] object-cover" loading="lazy" decoding="async" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent" />
          </div>

          {/* floating mini-stat card (responsive) */}
          <Card className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 p-4 sm:p-5 bg-white/90 backdrop-blur border border-emerald-100 rounded-xl shadow-xl w-[88%] sm:w-auto">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-semibold">100+ Partner Kitchens</div>
                <div className="text-xs text-muted-foreground">
                  Free pickup • sealed containers • digital receipt
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            About Us
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight lg:text-5xl">
            Responsible{" "}
            <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
              Used Cooking Oil
            </span>{" "}
            Collection
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-prose">
            We’re a sustainability-first team that <strong className="text-emerald-600">only collects used cooking oil (UCO)</strong> from restaurants, hotels, and households. 
            Our trained staff provide sealed containers, schedule free pickups, and hand over your UCO to{" "}
            <span className="font-medium text-foreground">licensed recyclers</span> with full traceability.
          </p>

          {/* highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{
            icon: CheckCircle2,
            title: "Free Pickup",
            desc: "Fast, reliable collections at your convenience."
          }, {
            icon: ShieldCheck,
            title: "Compliant & Safe",
            desc: "Authorized partners and chain-of-custody records."
          }, {
            icon: Leaf,
            title: "Eco-Positive",
            desc: "Divert UCO from drains and landfills."
          }, {
            icon: Receipt,
            title: "Proof & Receipts",
            desc: "Digital pickup receipts for your records."
          }].map(f => <Card key={f.title} className="p-4 bg-white/85 backdrop-blur border border-emerald-100 rounded-xl flex items-start gap-3">
                <div className="mt-0.5">
                  <f.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-sm text-muted-foreground">{f.desc}</div>
                </div>
              </Card>)}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Button asChild size="lg" className="px-8 py-6 text-lg rounded-md shadow-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* small disclaimer */}
          <p className="text-xs text-muted-foreground">
            *We collect used cooking oil and hand it over to licensed recyclers. We do not process biodiesel.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutPreview;