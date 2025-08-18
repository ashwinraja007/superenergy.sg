import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const WhyBiodieselSection = () => {
  return (
    <section id="why-biodiesel" className="py-20 bg-eco-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-base bg-lime-100">
            🌿 Environmental Impact
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="bg-gradient-eco bg-clip-text text-transparent">Biodiesel?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Instead of ending up as waste, used cooking oil can be repurposed into clean, sustainable fuel.
          </p>
        </div>

        {/* Image right after subtext */}
        <div className="mb-12">
          {/* Place your file at /public/images/biodiesel-hero.jpg */}
          <img
            src="/images/biodiesel-hero.jpg"
            alt="Used cooking oil being repurposed into clean, sustainable fuel"
            className="w-full h-[220px] sm:h-[320px] md:h-[380px] object-cover rounded-2xl border border-emerald-100 shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Did You Know card */}
        <Card className="p-8 bg-gradient-eco text-white border-0 shadow-eco">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Did You Know?</h3>
            <p className="text-lg leading-relaxed">
              <span className="text-3xl font-bold">1 litre</span> of used cooking oil can produce enough biodiesel
              to drive a car for <span className="text-3xl font-bold">20 km</span> — clean &amp; sustainable!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyBiodieselSection;
