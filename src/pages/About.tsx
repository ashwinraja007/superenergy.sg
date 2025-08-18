import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  Users,
  Award,
  Globe,
  CheckCircle,
  Leaf,
  Heart,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "Committed to reducing environmental impact through sustainable practices and responsible UCO collection.",
    },
    {
      icon: Heart,
      title: "Community First",
      description:
        "Building strong partnerships and creating positive local impact with kitchens, hotels, and households.",
    },
    {
      icon: CheckCircle,
      title: "Transparency & Trust",
      description:
        "Clear processes, pricing, and verifiable pickup receipts & compliance notes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Excellence",
      description:
        "Continually improving logistics and traceability to support cleaner fuels via licensed recyclers.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Super Energy established with a vision to transform Singapore’s used cooking oil landscape.",
    },
    {
      year: "2021",
      title: "First Commercial Partnerships",
      description: "Secured partnerships with 50+ restaurants and commercial kitchens.",
    },
    {
      year: "2022",
      title: "Operations at Scale",
      description:
        "Expanded collection network with digital receipts and chain-of-custody tracking.",
    },
    {
      year: "2023",
      title: "Expansion & Growth",
      description: "Reached 3,500+ business partnerships and 175,000+ litres collected annually.",
    },
    {
      year: "2024",
      title: "Sustainability Leadership",
      description:
        "Recognized as a leading responsible UCO collection partner supporting cleaner fuels.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      bio: "Environmental engineer with 15+ years in renewable energy sector.",
    },
    {
      name: "Michael Tan",
      position: "Chief Technology Officer",
      bio: "Biochemical engineer specializing in fuel quality & safety standards.",
    },
    {
      name: "Lisa Wong",
      position: "Head of Operations",
      bio: "Logistics expert with extensive experience in waste management systems.",
    },
    {
      name: "David Kumar",
      position: "Sustainability Director",
      bio: "Environmental scientist focused on carbon reduction and ESG compliance.",
    },
  ];

  const certifications = [
    "Singapore Food Agency (SFA) Licensed",
    "National Environment Agency (NEA) Certified",
    "ISO 14001 Environmental Management",
    "OHSAS 18001 Occupational Health & Safety",
    "Singapore Green Finance Framework Compliant",
    "Carbon Trust Standard Certified",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20">
        {/* Subtle background accents */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-emerald-50/80 to-transparent" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-green-500/15 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              🌟 About Super Energy
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Transforming{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Singapore’s
              </span>{" "}
              Circular Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We collect used cooking oil (UCO) from businesses and households and hand it to{" "}
              <span className="font-medium text-foreground">licensed recyclers</span> who produce
              cleaner fuels—advancing the circular economy for a greener Singapore.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="shadow-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <Card className="p-8 rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur hover:shadow-xl transition">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center mb-6 shadow-inner">
                <Target className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Build a trusted, traceable UCO collection network that reduces environmental harm,
                supports cleaner fuels, and delivers measurable community impact.
              </p>
              <ul className="space-y-3">
                {[
                  "Zero drain & landfill leakage",
                  "Verified pickups with digital receipts",
                  "Community-centered logistics",
                  "Transparent operations & reporting",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 rounded-2xl border border-emerald-100 bg-white/90 backdrop-blur hover:shadow-xl transition">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center mb-6 shadow-inner">
                <Globe className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Be Southeast Asia’s most trusted UCO collection partner—powering a circular fuel
                ecosystem with accountability and innovation.
              </p>
              <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl font-semibold mb-3 text-emerald-700">2030 Goals</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Nationwide traceability on every pickup</li>
                  <li>• 50,000 tonnes CO₂e avoided per year supported via recyclers</li>
                  <li>• Expand to 3 markets in Southeast Asia</li>
                  <li>• Support 10,000+ vehicles powered by cleaner fuels</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-eco-surface relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-50/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="p-6 text-center bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="relative mx-auto mb-4 w-16 h-16">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-300/20 blur-xl" />
                  <div className="relative w-full h-full rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-inner">
                    <value.icon className="h-8 w-8 text-emerald-700" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Key milestones in our growth and impact
            </p>
          </div>

          {/* Desktop center-line timeline; stacked on mobile */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200" />
            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`relative flex items-center ${idx % 2 ? "" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${idx % 2 ? "pr-8" : "pl-8"}`}>
                    <Card className="p-6 border border-emerald-100 rounded-2xl bg-white/90 backdrop-blur hover:shadow-xl transition">
                      <div className="mb-3">
                        <Badge variant="secondary" className="text-sm font-bold">
                          {m.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{m.title}</h3>
                      <p className="text-muted-foreground">{m.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-600 rounded-full border-4 border-background" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile simple timeline */}
          <div className="md:hidden space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 mt-2" />
                  <div className="flex-1 w-px bg-emerald-200" />
                </div>
                <Card className="flex-1 p-5 border border-emerald-100 bg-white/90 backdrop-blur rounded-2xl">
                  <Badge variant="secondary" className="text-xs font-bold mb-2">
                    {m.year}
                  </Badge>
                  <h3 className="font-semibold">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-eco-surface relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-50/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Experienced professionals driving our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card
                key={member.name}
                className="p-6 text-center bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="relative mx-auto mb-4 w-20 h-20">
                  <div className="absolute inset-0 rounded-full bg-emerald-300/20 blur-xl" />
                  <div className="relative w-full h-full rounded-full bg-gradient-eco flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-emerald-700 text-sm font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Maintaining the highest standards of quality and responsibility
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card
                key={cert}
                className="p-6 text-center bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl hover:shadow-xl transition"
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-emerald-700" />
                </div>
                <p className="font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-eco opacity-95" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Be part of Singapore’s sustainable energy transformation. Together, we can create a
            cleaner, greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="shadow-lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-700"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
