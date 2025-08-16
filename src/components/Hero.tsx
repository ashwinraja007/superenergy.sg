import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

// Image placeholders (replace with actual assets)

const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-to-br from-[#f5fdf7] to-[#eaf4ed] overflow-hidden px-6 pt-24 lg:pt-32 bg-gray-500">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* 🌱 Left Side - Text */}
        <div className="space-y-8 animate-fade-in">
          <Badge variant="secondary" className="px-4 py-2 text-base font-medium">
            🌱 Join the Green Revolution
          </Badge>

          <h1 className="text-5xl font-bold leading-tight lg:text-5xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Waste
            </span>
            <br />
            Power the{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            Join the green energy movement by recycling your used cooking oil into clean, 
            efficient biodiesel. Together, we can reduce pollution and build a sustainable tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Schedule Free Pickup
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
              Become a Partner
            </Button>
          </div>

          {/* ✅ Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {["FSSAI Approved", "Carbon Offset", "100% Eco-Friendly", "Free Pickup"].map(text => <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-600" />
                {text}
              </div>)}
          </div>
        </div>

        {/* 🚛 Right Side - Van, Button & Plants */}
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-fade-in">
          {/* Van */}
          <img src="/van.png" alt="Super Energy Van" className="w-[500px] max-w-full object-contain  animate-float" />

          {/* Contact Now Button */}
          <div className="mt-6 animate-bounce">
            <Button size="lg" className="text-white px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg shadow-xl">
              Contact Now
            </Button>
          </div>

          {/* 🌿 Plants */}
          <img src="/CarbonFootprint.jpg" alt="Plant Left" className="absolute bottom-0 left-0 w-28 h-auto animate-grow-slow" />
          <img src="/CarbonFootprint.jpg" alt="Plant Right" className="absolute bottom-0 right-0 w-28 h-auto animate-grow-slow delay-300" />
        </div>
      </div>
    </section>;
};
export default Hero;