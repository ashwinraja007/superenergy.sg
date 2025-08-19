import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
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
      <section className="relative pt-28 lg:pt-32 pb-20 text-center bg-gradient-hero">
        <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
          📞 Contact Us
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
          Get in{" "}
          <span className="bg-gradient-eco bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to start your sustainable journey? Reach out to schedule a free pickup,
          explore partnerships, or ask about our services.
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {contactInfo.map((info, i) => (
            <Card
              key={i}
              className="p-6 text-center hover:shadow-eco transition-all duration-300 hover:-translate-y-1 bg-eco-surface"
            >
              <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <info.icon className={`h-8 w-8 ${info.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
              <p className="text-primary font-medium mb-1">{info.details}</p>
              <p className="text-muted-foreground text-sm">{info.subtitle}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-16 lg:py-20 bg-eco-surface/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-4">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <Card className="p-6 bg-background">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input value={form.name} onChange={onChange("name")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input value={form.phone} onChange={onChange("phone")} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" value={form.email} onChange={onChange("email")} />
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
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  />
                </div>

                <Button size="lg" className="w-full" type="submit" disabled={submitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Quick Service Access</h2>
            <div className="space-y-6">
              {services.map((service, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-eco transition-all duration-300 bg-background hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-eco-light rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <Button variant="outline" size="sm">
                        {service.action}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Card>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-20 bg-eco-surface" id="map">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Visit Our Office</h2>
          <Card className="p-6 bg-background">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Super Energy Head Office</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p>1001 Tai Seng Avenue, #01-2526</p>
                      <p className="text-muted-foreground">Singapore 534420</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+65 6XXX XXXX</span>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@superenergy.sg</span>
                  </div>
                </div>
                <Button asChild>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
              <div className="rounded-2xl bg-eco-surface flex items-center justify-center p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <p className="text-muted-foreground">
                  Interactive map integration will appear here to show our exact location.
                </p>
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
