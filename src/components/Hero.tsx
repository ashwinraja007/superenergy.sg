import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Building, Truck } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-soft opacity-90"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center shadow-soft">
          <CheckCircle className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1000ms'}}>
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-eco-success" />
                FSSAI Approved
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-eco-success" />
                Carbon Offset
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-eco-success" />
                100% Eco-Friendly
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-eco-success" />
                Free Pickup
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Super Energy - Clean biodiesel from cooking oil"
                className="w-full h-auto rounded-3xl shadow-eco"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-soft border animate-float border-eco-light/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3,500+</div>
                  <div className="text-sm text-muted-foreground">Businesses Served</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-background rounded-2xl p-6 shadow-soft border animate-float border-eco-light/20" style={{animationDelay: '500ms'}}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-eco-success/20 rounded-full flex items-center justify-center">
                  <Building className="h-6 w-6 text-eco-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-eco-success">1,75,000+</div>
                  <div className="text-sm text-muted-foreground">Litres Collected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;