import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Globe, CheckCircle, Leaf, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// CSS-only version (no framer-motion). Uses subtle transitions & hover effects.
// Safe to deploy on Vercel without adding new dependencies.

const AboutPage = () => {
  const values = [{
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Committed to reducing environmental impact through sustainable practices and innovative recycling solutions."
  }, {
    icon: Heart,
    title: "Community First",
    description: "Building strong relationships with our community partners and creating positive local impact."
  }, {
    icon: CheckCircle,
    title: "Transparency & Trust",
    description: "Operating with complete transparency in our processes, pricing, and environmental impact reporting."
  }, {
    icon: Lightbulb,
    title: "Innovation & Excellence",
    description: "Continuously improving our technology and processes to deliver the highest quality biodiesel."
  }];
  const milestones = [{
    year: "2017",
    title: "Company Founded",
    description: "Stanley Chu established SuperEnergy with the vision to transform the waste oil landscape."
  }, {
    year: "2018",
    title: "Growing Our Commercial Partnerships",
    description: "Stanley Chu established SuperEnergy with the vision to transform the waste oil landscape."
  }, {
    year: "2019",
    title: "Processing Facility Launch",
    description: "Opened state-of-the-art UCO processing/filltering facility."
  }, {
    year: "2022",
    title: "Continued Expansion & Growth",
    description: "Reached 500+ business partnerships and 75,000+ litres collected."
  }, {
    year: "2024",
    title: "Certified Leader In sustainable UCO Collection",
    description: "Recognized as Singapore's leading sustainable fuel feedstock provider"
  }];
  const team = [{
    name: "Dr. Sarah Chen",
    position: "Chief Executive Officer",
    bio: "Environmental engineer with 15+ years in renewable energy sector"
  }, {
    name: "Michael Tan",
    position: "Chief Technology Officer",
    bio: "Biochemical engineer specializing in biodiesel production and quality control"
  }, {
    name: "Lisa Wong",
    position: "Head of Operations",
    bio: "Logistics expert with extensive experience in waste management systems"
  }, {
    name: "David Kumar",
    position: "Sustainability Director",
    bio: "Environmental scientist focused on carbon footprint reduction and ESG compliance"
  }];
  const certifications = ["International Sustainability and Carbon Certified (ISCC)", "National Environment Agency (NEA) Certified"];
  return <div className="min-h-screen bg-background relative">
      {/* Decorative background elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-56 w-56 rotate-12 bg-gradient-to-br from-emerald-500/10 to-primary/10 blur-2xl rounded-[40%]" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-5">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">🌟 About Super Energy</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Transforming{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Singapore's
            </span>
            <br />Energy Future
          </h1>
          
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">ISO-aligned • Traceable collection • Real-time reporting</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <div className="rounded-2xl p-8 backdrop-blur border shadow-sm transition-shadow hover:shadow-lg bg-gradient-to-b from-emerald-50 to-white border ">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To create a sustainable circular economy by transforming Singapore's waste cooking oil into high-quality biodiesel,
                reducing environmental impact while supporting the nation's renewable energy goals.
              </p>
              <ul className="space-y-3">
                {["Zero waste to landfill policy", "100% renewable fuel production", "Community-centered approach", "Transparent operations"].map((item, i) => <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>)}
              </ul>
            </div>

            {/* Vision */}
            <div className="rounded-2xl p-8 bg-gradient-to-b from-emerald-50 to-white border shadow-sm bg-yellow-100">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be Southeast Asia's leading sustainable fuel solutions provider, setting the standard for environmental responsibility and innovation in the circular economy.
              </p>
              <div className="rounded-xl p-6 border shadow-xs bg-amber-100">
                <h3 className="text-xl font-semibold mb-3 text-primary">2030 Goals</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 1 million litres of biodiesel production annually</li>
                  <li>• 50,000 tonnes of CO₂ offset per year</li>
                  <li>• Expand to 3 countries in Southeast Asia</li>
                  <li>• Power 10,000+ vehicles with clean fuel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="p-6 text-center border hover:shadow-lg transition-all duration-300 group rounded-2xl bg-teal-100">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 group-hover:rotate-3 transition-transform">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-base font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Team */}
{/* Leadership Section */}
<section className="py-20 bg-emerald-50/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Larger image */}
      <div className="flex justify-center">
        <img
          src="/stanley.jpeg"  // your actual image path
          alt="Stanley Chu"
          className="rounded-2xl shadow-xl w-full max-w-lg lg:max-w-xl object-cover"
        />
      </div>

      {/* Text content */}
      <div className="lg:pl-8">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
          Stanley Chu – Founder of Super Energy
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Stanley Chu is a pioneer in Singapore’s renewable energy sector, widely recognised
          for his early leadership in the collection and recycling of used cooking oil (UCO).
          At a time when waste-to-energy solutions were still emerging in Southeast Asia,
          Stanley identified the untapped potential of UCO as a sustainable feedstock for
          biodiesel and other renewable fuels.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Driven by a vision to reduce waste, lower carbon emissions, and create value from a
          widely discarded resource, he established Super Energy in Singapore. Under his
          direction, the company built one of the first dedicated collection and processing
          networks for used cooking oil in the country, partnering with restaurants, food
          manufacturers, and waste management operators.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          To reinforce its commitment to environmental responsibility and supply chain
          transparency, Super Energy achieved the International Sustainability and Carbon
          Certification (ISCC) — a globally recognised standard that ensures sustainable
          sourcing, carbon emission reductions, and traceability in bio-based supply chains.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Stanley’s work not only set industry standards for quality and sustainability in
          UCO supply but also helped position Singapore as a reliable source of feedstock
          for the global renewable fuel market. Through innovation, strategic partnerships,
          and a commitment to environmental stewardship, Stanley Chu and Super Energy have
          played a key role in supporting the transition towards cleaner energy solutions in Asia.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Timeline */}
      <section className="py-10 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones in our growth and impact</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-emerald-200 to-transparent" />
            <div className="space-y-12">
              {milestones.map((m, i) => <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10"} w-full`}>
                    <Card className="p-6 border bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-sm font-bold">{m.year}</Badge>
                        <div className="h-1 w-20 bg-emerald-200 rounded" />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{m.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base">{m.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-md" />
                      <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

     


      {/* Certifications */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">Certifications & Compliance</h2>
            <p className="text-lg text-muted-foreground">Maintaining the highest standards of quality and environmental responsibility</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => <Card key={index} className="p-6 text-center bg-white border hover:shadow-lg transition-all rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-emerald-700" />
                </div>
                <p className="font-medium text-sm md:text-base">{cert}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl overflow-hidden border bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-10 md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Be part of Singapore's sustainable energy transformation. Together, we can create a cleaner, greener future.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>;
};
export default AboutPage;
