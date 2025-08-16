import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
const Hero = () => {
  return <section id="hero"
  // Full height, vertically centered, professional gray gradient
  className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-200">
      {/* Plants (bottom corners) */}
      <img src="/plant.png" alt="Plant left" className="pointer-events-none select-none absolute -bottom-3 left-2 w-48 sm:w-32 md:w-36 animate-sway" />
      <img src="/plant.png" alt="Plant right" className="pointer-events-none select-none absolute -bottom-4 right-2 w-28 sm:w-32 md:w-36 animate-sway-delayed" />

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
              Join the green energy movement by recycling your used cooking oil into clean,
              efficient biodiesel. Together, we can reduce pollution and build a sustainable tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-outline" size="lg" className="text-white text-lg px-8 py-6 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-xl">
                Become a Partner
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {["FSSAI Approved", "Carbon Offset", "100% Eco-Friendly", "Free Pickup"].map(text => <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {text}
                </div>)}
            </div>
          </div>

          {/* Right: Van + CTA */}
          <div className="relative flex flex-col items-center justify-center animate-fade-in">
            <img src="/van.png" // place van.png in /public
          alt="Super Energy Van" className="w-[520px] max-w-full object-contain drop-shadow-2xl animate-float" />
            <div className="mt-6 animate-bounce">
              <Button size="lg" className="text-white px-10 py-5 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg shadow-xl">
                Schedule Free Pickup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
