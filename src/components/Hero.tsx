
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = ["FSSAI Approved", "Carbon Offset", "100% Eco-Friendly", "Free Pickup"];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[86vh] flex items-center pt-24" // pt for fixed header
    >
      {/* Background image + soft overlay */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(250,250,250,0.85), rgba(240,240,240,0.95)), url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Subtle color glows for depth */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="space-y-7">
            <Badge variant="secondary" className="px-4 py-2 text-base font-medium">
              🌱 Join the Green Revolution
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
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

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Recycle your used cooking oil into clean, efficient biodiesel. Reduce pollution, earn
              value for your waste, and help build a sustainable tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-lg rounded-md shadow-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Link to="/contact">Schedule Free Pickup</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-md border-green-600 text-green-700 hover:bg-green-50"
              >
                <Link to="/services">Become a Partner</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 pt-2">
              {features.map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Truck visual */}
          <div className="relative flex items-center justify-center">
            {/* Soft spotlight behind the truck */}
            <div className="absolute inset-0 -z-10 mx-auto max-w-md lg:max-w-lg">
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/50 blur-3xl" />
            </div>

            <img
              src="/van.png"
              alt="Super Energy collection truck"
              className="w-[520px] max-w-full object-contain drop-shadow-2xl"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            {/* Secondary CTA under image on large screens */}
            <div className="hidden lg:block mt-8">
              <Button
                asChild
                size="lg"
                className="px-10 py-5 text-base rounded-md shadow-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Link to="/contact">Book Pickup Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Optional: social proof row */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Trusted by restaurants & hotels</span>
          <div className="h-4 w-px bg-border" />
          <span>No contracts • Free containers • Same-day pickup*</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
