import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Droplets, Leaf, Globe, Truck, Shield } from "lucide-react";
const benefits = [{
  icon: Flame,
  title: "Burns Cleaner",
  description: "No harmful sulfur or soot emissions",
  img: "https://www.mdpi.com/energies/energies-15-03381/article_deploy/html/images/energies-15-03381-g001-550.jpg"
}, {
  icon: Truck,
  title: "Engine Compatible",
  description: "Works in existing diesel vehicles without modification",
  img: "https://5.imimg.com/data5/SELLER/Default/2025/3/495420447/DU/OY/OC/80863524/biodiesel-500x500.jpg"
}, {
  icon: Leaf,
  title: "100% Biodegradable",
  description: "Completely breaks down naturally",
  img: "https://www.mdpi.com/sustainability/sustainability-15-16550/article_deploy/html/images/sustainability-15-16550-g001.png"
}, {
  icon: Droplets,
  title: "Water Protection",
  description: "Protects water bodies from oil pollution",
  img: "https://www.bjultrasonic.com/wp-content/uploads/2023/04/biodiesel-2.jpg"
}, {
  icon: Globe,
  title: "Reduces Imports",
  description: "Cuts India's crude oil dependency",
  img: "https://www.iamrenew.com/wp-content/uploads/2024/01/CFG-biofuels-bioenergy-biomass-biogas-ethanol-methanol-plant-e1705573202565.jpg"
}, {
  icon: Shield,
  title: "Safe & Legal",
  description: "FSSAI approved and environmentally compliant",
  img: "https://yt3.googleusercontent.com/KJ25TBGtmAUadOyCZ8JFmP_w32LoX7vkHyFh9Q8t3MaSR_Y0mLnHLNxR4NJN6lDkL0ydGwqyeyQ=s900-c-k-c0x00ffffff-no-rj"
}];
const WhyBiodiesel = () => <section id="why-biodiesel" className="py-20 bg-eco-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in">
        <Badge variant="secondary" className="mb-4 px-4 py-2 text-base bg-lime-100">
          🌿 Environmental Impact
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Why <span className="bg-gradient-eco bg-clip-text text-transparent">Biodiesel?</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Instead of ending up as waste, used cooking oil can be repurposed into clean, sustainable fuel.
        </p>
      </div>

      {/* Key Fact Card */}
      <div className="mb-16 px-4 sm:px-0 animate-fade-in">
        <Card className="p-8 bg-gradient-eco text-white border-0 shadow-eco">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
            <p className="text-lg leading-relaxed">
              <span className="text-3xl font-bold">1 litre</span> of used cooking oil can produce enough biodiesel
              to drive a car for <span className="text-3xl font-bold">20 km</span> — clean & sustainable!
            </p>
          </div>
        </Card>
      </div>

      {/* Benefits Grid */}
      

      {/* National Contribution */}
      <div className="mt-16 animate-fade-in">
        
      </div>
    </div>
  </section>;
export default WhyBiodiesel;