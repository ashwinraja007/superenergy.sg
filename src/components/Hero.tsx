import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Building } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      // ✅ ultra-light green background
      className="bg-green-50 relative min-h-screen overflow-hidden lg:flex lg:items-center pt-14 lg:pt-0 pb-10"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-base font-medium bg-orange-100 inline-block"
            >
              🌱 Join the Green Revolution
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                Waste,
              </span>
              <br />
              Power the{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                Future
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join the green energy movement by recycling your{" "}
              <strong className="text-green-600">used cooking oil</strong> into
              clean, efficient renewable fuels. Together, we can reduce pollution and
              build a sustainable tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
  <Button
    variant="hero-outline"
    size="lg"
    className="w-full sm:w-auto text-white text-lg px-8 py-6 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-xl"
  >
    Book a Collection
  </Button>
</Link>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 justify-items-center lg:justify-items-start">
              {[
                "ISCC Certified",
                "Efficient Pickup Scheduling",
                "Hygienic & Safe Handling",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Stats */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src="/hero-image.jpg"
                alt="Super Energy - Clean biodiesel from cooking oil"
                className="w-full h-auto rounded-3xl shadow-eco"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-soft border animate-float border-eco-light/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Businesses Served
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-8 -right-8 bg-background rounded-2xl p-6 shadow-soft border animate-float border-eco-light/20"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-eco-success/20 rounded-full flex items-center justify-center">
                  <Building className="h-6 w-6 text-eco-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-eco-success">
                    175,000+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Litres Collected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Request Pickup",
              desc: "Book a collection—get sealed SmartDrums for your used cooking oil.",
            },
            {
              title: "We Collect & Weigh",
              desc: "Dedicated staff, timely collections, and digital weight records for peace of mind.",
            },
            {
              title: "Collected for Licensed Recycling",
              desc: "Our team picks up sealed containers and hands them over to licensed recyclers.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-emerald-100 backdrop-blur p-5 shadow-sm bg-emerald-100 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  {idx + 1}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
