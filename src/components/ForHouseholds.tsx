import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Shield, Heart, Gift, CheckCircle } from "lucide-react";

const ForHouseholds = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Protect Your Plumbing",
      description: "Avoid clogged drains and expensive repairs",
    },
    {
      icon: CheckCircle,
      title: "Prevent Illegal Reuse",
      description: "Ensure your oil doesn't return to the food chain",
    },
    {
      icon: Heart,
      title: "Be an Environmental Hero",
      description: "Make a difference right from your kitchen",
    },
    {
      icon: Gift,
      title: "Get Rewards",
      description: "Earn discounts, cashback, or utility vouchers",
    },
  ];

  const steps = [
    "Store used oil in a clean plastic or glass bottle after cooking",
    "When your bottle is full (minimum 1 litre), contact us for pickup",
    "We provide collection bottles, instruction flyers, and easy scheduling",
    "Earn thank-you incentives and green points for monthly recycling",
  ];

  return (
    <section id="households" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Make Every{" "}
            <span className="bg-gradient-eco bg-clip-text text-transparent">
              Drop Count
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Instead of throwing your used oil in the bin or drain, hand it over
            to us. It&apos;s easy, clean, and rewarding.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Home className="h-8 w-8 text-primary" />
                Benefits for Households
              </h3>

              {/* Even cards: auto-rows-fr + h-full on cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 [grid-auto-rows:1fr]">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="h-full p-6 border-2 hover:border-primary/20 hover:shadow-eco transition-transform duration-300 hover:scale-[1.02] rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-eco-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA aligned left on larger screens, full-width on mobile */}
            <div className="animate-fade-in">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto sm:self-start"
              >
                Schedule Free Pickup
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">How to Participate</h3>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-eco-surface border-2 border-eco-light rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-eco-dark">We Provide</h4>
              <ul className="space-y-3">
                {[
                  "Collection bottles or jars",
                  "Instruction flyers",
                  "Easy pickup scheduling",
                  "Dedicated customer care",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-eco-success" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForHouseholds;
