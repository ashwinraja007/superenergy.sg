import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Users,
  Building,
  Send,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+65 6XXX XXXX",
      subtitle: "Available 24/7 for emergencies",
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "info@superenergy.sg",
      subtitle: "Response within 2 hours",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: "1001 Tai Seng Avenue, #01-2526",
      subtitle: "Singapore 534420",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday",
      subtitle: "9:00 AM - 7:00 PM",
      color: "text-orange-500",
    },
  ];

  const services = [
    {
      icon: Users,
      title: "Household Pickup",
      description: "Free collection service for residential customers",
      action: "Schedule Pickup",
    },
    {
      icon: Building,
      title: "Commercial Services",
      description: "Bulk collection for restaurants and businesses",
      action: "Get Quote",
    },
    {
      icon: MessageSquare,
      title: "Partnership Inquiry",
      description: "Explore franchise and partnership opportunities",
      action: "Learn More",
    },
    {
      icon: Calendar,
      title: "Consultation",
      description: "Free sustainability consultation for businesses",
      action: "Book Consultation",
    },
  ];

  const faqs = [
    {
      question: "What types of cooking oil do you collect?",
      answer:
        "We collect all types of used cooking oil including vegetable oil, palm oil, canola oil, and other food-grade oils.",
    },
    {
      question: "Is there a minimum quantity for pickup?",
      answer:
        "For households, the minimum is 1 liter. For businesses, we can collect any quantity from 5 liters upwards.",
    },
    {
      question: "How much do you pay for used cooking oil?",
      answer:
        "Pricing varies based on quality and quantity. Contact us for current rates and to discuss your specific requirements.",
    },
    {
      question: "How often can I schedule pickups?",
      answer:
        "You can schedule pickups as needed. Many businesses opt for weekly or bi-weekly collections.",
    },
    {
      question: "Do you provide collection containers?",
      answer:
        "Yes, we provide appropriate storage containers for both household and commercial customers at no additional cost.",
    },
  ];

  // Minimal controlled form state for better UX and simple validation
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    // TODO: Replace with your API call
    setTimeout(() => {
      setSubmitting(false);
      alert("Thanks! We’ve received your message.");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 lg:pt-32 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(60%_40%_at_50%_0%,theme(colors.emerald.300)/.4_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
              📞 Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Get in{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your sustainable journey? Reach out to schedule a free pickup,
              explore partnerships, or ask about our services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="tel:+6560000000">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="mailto:info@superenergy.sg">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats / Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <motion.div key={info.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}>
                <Card className="p-6 text-center hover:shadow-eco transition-all duration-300 hover:-translate-y-1 bg-eco-surface/70 backdrop-blur">
                  <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Services */}
      <section className="py-16 lg:py-20 bg-eco-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Your details are kept confidential and never shared.
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a Message</h2>
            <Card className="p-6 sm:p-8 bg-background">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={onChange("name")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="+65 XXXX XXXX"
                      value={form.phone}
                      onChange={onChange("phone")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={onChange("email")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm((s) => ({ ...s, service: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="household">Household Pickup</SelectItem>
                      <SelectItem value="commercial">Commercial Collection</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="consultation">Business Consultation</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, message: e.target.value }))
                    }
                  />
                </div>

                <Button size="lg" className="w-full" type="submit" disabled={submitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Services Quick Actions */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Quick Service Access</h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="p-6 hover:shadow-eco transition-all duration-300 bg-background hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-eco-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm">
                          {service.action}
                        </Button>
                        {/* Optional deep links */}
                        {service.title === "Household Pickup" && (
                          <Button size="sm" variant="ghost" asChild>
                            <a href="#map">See Coverage</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <Card className="bg-eco-surface/60 backdrop-blur">
            <CardContent className="p-4 sm:p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">
                      <span className="text-primary font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location / Map */}
      <section id="map" className="py-16 lg:py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Visit Our Office</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Located in the heart of Singapore&apos;s business district
            </p>
          </div>

          <Card className="p-6 sm:p-8 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Super Energy Head Office
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">1001 Tai Seng Avenue, #01-2526</p>
                      <p className="text-muted-foreground">Singapore 534420</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+6560000000" className="hover:underline">
                      +65 6XXX XXXX
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:info@superenergy.sg"
                      className="hover:underline"
                    >
                      info@superenergy.sg
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="w-full sm:w-auto">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href="https://maps.google.com?q=1001+Tai+Seng+Avenue" target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Placeholder / Embed area */}
              <div className="rounded-2xl overflow-hidden bg-eco-surface border">
                {/* Replace with your real embed. The wrapper keeps it responsive */}
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <div>
                      <MapPin className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive map integration would be implemented here showing our exact
                        location with nearby landmarks and transportation options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
