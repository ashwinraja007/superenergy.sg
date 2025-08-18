import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return <section id="hero" style={{
    backgroundImage: "linear-gradient(to bottom, rgba(245,245,245,0.85), rgba(230,230,230,0.95)), url('/greybackgound.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }} className="relative min-h-screen flex items-center overflow-hidden bg-slate-200">
      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-base font-medium">
              🌱 Join the Green Revolution
            </Badge>

            <h1 className="text-5xl font-bold leading-tight lg:text-5xl">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                Waste
              </span>
              <br />
              Power the{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                Future
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Join the green energy movement by recycling your, <strong>used cooking oil</strong> into clean,
              efficient biodiesel. Together, we can reduce pollution and build a sustainable tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-outline" size="lg" className="text-white text-lg px-8 py-6 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-xl">
                Become a Partner
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {["FSSAI Approved", "Carbon Offset", "100% Eco-Friendly", "Free Pickup"].map(text => <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {text}
                  </div>)}
            </div>
          </div>

          {/* Right: Van + CTA */}
          <div className="relative flex flex-col items-center justify-center animate-fade-in">
            <img src="/van.png" // place van.png in /public
          alt="Super Energy Van" className="w-[520px] max-w-full object-contain animate-float" />
            <div className="mt-6 animate-bounce">
              <Button size="lg" className="text-white px-10 py-5 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg shadow-xl">
                Schedule Free Pickup
              </Button>
            </div>
          </div>
        </div>

        {/* ===== Added: Bottom strip only (inside hero) ===== */}
        <div className="mt-12">
          {/* 3-step How It Works */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">1</span>
                <h3 className="font-semibold">Request Pickup</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Book a free collection—get sealed containers for your used cooking oil.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">2</span>
                <h3 className="font-semibold">We Collect & Weigh</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Trained staff, scheduled pickups & digital weight slip for transparency.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">3</span>
                <h3 className="font-semibold">Collected for Licensed Recycling</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                 We only collect used cooking oil. Our team picks up sealed containers and hands them over to licensed recyclers; you receive a pickup receipt/compliance note.
              </p>
            </div>
          </div>
        </div>
        {/* ===== /Bottom strip ===== */}
      </div> {/* <-- closes outer container */}
    </section>;
};
export default Hero;
