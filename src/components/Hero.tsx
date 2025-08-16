import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Building, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f3fdf8] to-[#e9f2eb] pt-20">
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center shadow-soft">
          <CheckCircle className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1000ms" }}>
        <div className="w-16 h-16 bg-eco-surface rounded-full flex items-center justify-center shadow-soft">
          <Truck className="h-8 w-8 text-eco-success" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-base font-medium animate-fade-in">
                🌱 Join the Green Revolution
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary to-eco-success bg-clip-text text-transparent">
                  Waste
                </span>
                <br />
                Power the{" "}
                <span className="bg-gradient-to-r from-primary to-eco-success bg-clip-text text-transparent">
                  Future
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Join the green energy movement by recycling your used cooking oil into clean, 
                efficient biodiesel. Together, we can reduce pollution and build a sustainable tomorrow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Schedule Free Pickup
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
                Become a Partner
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {["FSSAI Approved", "Carbon Offset", "100% Eco-Friendly", "Free Pickup"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-eco-success" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Custom Layout */}
          <div className="relative animate-scale-in h-[500px] w-full flex flex-col items-center justify-end">
            {/* Van Placeholder */}
            <div className="w-[80%] h-[260px] bg-gray-200 rounded-xl shadow-xl animate-fade-in flex items-center justify-center">
              <span className="text-gray-500">[ VAN IMAGE HERE ]</span>
            </div>

            {/* Contact Now Button */}
            <div className="mt-6 animate-bounce">
              <Button
                size="lg"
                className="text-white px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg"
              >
                Contact Now
              </Button>
            </div>

            {/* Plants Placeholder */}
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-green-200 animate-grow-slow flex items-center justify-center">
              <span className="text-green-700 text-xs">[ Plant ]</span>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-green-200 animate-grow-slow flex items-center justify-center">
              <span className="text-green-700 text-xs">[ Plant ]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
