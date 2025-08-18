import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245,245,245,0.85), rgba(230,230,230,0.95)), url('/greybackgound.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-200"
    >
      {/* === Added: Background accents (pure CSS, no assets) === */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" />
      </div>

      {/* Main Grid (unchanged) */}
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
              <Button
                variant="hero-outline"
                size="lg"
                className="text-white text-lg px-8 py-6 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-xl"
              >
                Become a Partner
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {["FSSAI Approved", "Carbon Offset", "100% Eco-Friendly", "Free Pickup"].map(
                (text) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {text}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: Van + CTA */}
          <div className="relative flex flex-col items-center justify-center animate-fade-in">
            {/* Added: soft spotlight behind van */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl" />
            </div>

            <img
              src="/van.png" // place van.png in /public
              alt="Super Energy Van"
              className="w-[520px] max-w-full object-contain animate-float drop-shadow-2xl"
            />
            <div className="mt-6 animate-bounce">
              <Button
                size="lg"
                className="text-white px-10 py-5 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg shadow-xl"
              >
                Schedule Free Pickup
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* === Added: Bottom content to fill empty space === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-12 mb-8">
        {/* How it works (3-step strip) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                1
              </span>
              <h3 className="font-semibold">Request Pickup</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Book a free collection—sealed containers provided for your used cooking oil.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                2
              </span>
              <h3 className="font-semibold">We Collect Safely</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Trained staff, scheduled pickups & digital weight slip for full transparency.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                3
              </span>
              <h3 className="font-semibold">Convert to Biodiesel</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Traceable processing with compliance certificates for your records.
            </p>
          </div>
        </div>

        {/* Quick stats row */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="rounded-lg border bg-white/70 backdrop-blur p-4">
            <div className="text-2xl font-bold text-emerald-700">100+</div>
            <div className="text-xs text-muted-foreground">Partner Kitchens</div>
          </div>
          <div className="rounded-lg border bg-white/70 backdrop-blur p-4">
            <div className="text-2xl font-bold text-emerald-700">25K+</div>
            <div className="text-xs text-muted-foreground">Liters Recycled</div>
          </div>
          <div className="rounded-lg border bg-white/70 backdrop-blur p-4">
            <div className="text-2xl font-bold text-emerald-700">0₹</div>
            <div className="text-xs text-muted-foreground">Pickup Cost</div>
          </div>
          <div className="rounded-lg border bg-white/70 backdrop-blur p-4">
            <div className="text-2xl font-bold text-emerald-700">ISO</div>
            <div className="text-xs text-muted-foreground">Compliant Process</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
