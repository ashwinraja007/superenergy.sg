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
    title: "Certified Leader In sustainable UCO Collector ",
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
  const certifications = ["Singapore Food Agency (SFA) Licensed", "National Environment Agency (NEA) Certified", "ISO 14001 Environmental Management", "OHSAS 18001 Occupational Health & Safety", "Singapore Green Finance Framework Compliant", "Carbon Trust Standard Certified"];
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

     <section className="relative py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-green-50/30 to-teal-50/50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-emerald-500 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Leader</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering sustainable energy solutions and leading the renewable revolution in Southeast Asia
          </p>
        </div>

        {/* Stanley Chu Profile */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-700 group">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative p-8 lg:p-12 flex justify-center items-center bg-gradient-to-br from-emerald-50 to-green-50">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-105"></div>
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-400 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110"></div>
                
                <img
                  src="/stanley.jpeg"
                  alt="Stanley Chu - Founder of Super Energy"
                  className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <p className="text-sm font-semibold">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Stanley Chu
                </h3>
                <p className="text-xl text-emerald-600 font-semibold mb-4">
                  Founder of Super Energy
                </p>
                
                {/* Achievement badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                    🌱 Renewable Energy Pioneer
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    ♻️ UCO Recycling Expert
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">
                    🏆 ISCC Certified
                  </span>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Stanley Chu is a <strong className="text-emerald-700">pioneer in Singapore's renewable energy sector</strong>, widely recognised for his early leadership in the collection and recycling of used cooking oil (UCO). At a time when waste-to-energy solutions were still emerging in Southeast Asia, Stanley identified the untapped potential of UCO as a sustainable feedstock for biodiesel and other renewable fuels.
                </p>
                
                <p>
                  Driven by a vision to reduce waste, lower carbon emissions, and create value from a widely discarded resource, he established Super Energy in Singapore. Under his direction, the company built one of the first dedicated collection and processing networks for used cooking oil in the country, partnering with restaurants, food manufacturers, and waste management operators.
                </p>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border-l-4 border-emerald-500">
                  <p className="italic">
                    To reinforce its commitment to environmental responsibility and supply chain transparency, Super Energy achieved the <strong className="text-emerald-700">International Sustainability and Carbon Certification (ISCC)</strong> — a globally recognised standard that ensures sustainable sourcing, carbon emission reductions, and traceability in bio-based supply chains.
                  </p>
                </div>
                
                <p>
                  Stanley's work not only set industry standards for quality and sustainability in UCO supply but also helped position Singapore as a reliable source of feedstock for the global renewable fuel market. Through innovation, strategic partnerships, and a commitment to environmental stewardship, Stanley Chu and Super Energy have played a key role in supporting the transition towards cleaner energy solutions in Asia.
                </p>
              </div>

              {/* Call-to-action */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More About Our Mission
                </button>
                <button className="px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300">
                  Contact Stanley
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300">
            <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Restaurants</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/80 transition-all duration-300">
            <div className="text-3xl font-bold text-teal-600 mb-2">ISCC</div>
            <div className="text-gray-600">Certified Operations</div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
