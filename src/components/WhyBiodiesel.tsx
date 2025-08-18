import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const WhyBiodieselSection = () => {
  return (
    <section id="why-biodiesel" className="py-20 bg-eco-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Two-column layout: LEFT image, RIGHT content */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Image */}
          <div className="order-1 md:order-none">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-100 ">
              <img
                src="/van1.png" // ensure this exists in /public
                alt="Used cooking oil being repurposed into clean, sustainable fuel"
                className="w-full h-[210px] sm:h-[310px] lg:h-[420px] object-fill animate-float"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent" />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-6">
            <div className="text-left">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-base bg-lime-100">
                🌿 Environmental Impact
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                Why <span className="bg-gradient-eco bg-clip-text text-transparent">Biodiesel?</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Instead of ending up as waste, used cooking oil can be repurposed into clean, sustainable fuel.
              </p>
            </div>

            {/* Did You Know card */}
            <Card className="p-6 sm:p-8 bg-gradient-eco text-white border-0 shadow-eco">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 sm:mb-3">Did You Know?</h3>
                <p className="text-lg leading-relaxed">
                  <span className="text-3xl font-bold">1 litre</span> of used cooking oil can produce enough biodiesel
                  to drive a car for <span className="text-3xl font-bold">20 km</span> — clean &amp; sustainable!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBiodieselSection;
