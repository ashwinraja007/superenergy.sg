import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Users, Building, Send, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "@/components/Contact";
const ContactPage = () => {
  const contactInfo = [{
    icon: Phone,
    title: "Phone Support",
    details: "+65 9298 8849,+65 9385 1609",
    subtitle: "Available 24/7 for emergencies",
    color: "text-primary"
  }, {
    icon: Mail,
    title: "Email Support",
    details: "info@superenergy.sg",
    subtitle: "Response within 2 hours",
    color: "text-blue-600"
  }, {
    icon: MapPin,
    title: "Head Office",
    details: "1001 Tai Seng Avenue, #01-2526",
    subtitle: "Singapore 534420",
    color: "text-green-600"
  }, {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Saturday",
    subtitle: "9:00 AM - 7:00 PM",
    color: "text-orange-500"
  }];
  const services = [{
    icon: Users,
    title: "Household Pickup",
    description: "Free collection service for residential customers",
    action: "Schedule Pickup"
  }, {
    icon: Building,
    title: "Commercial Services",
    description: "Bulk collection for restaurants and businesses",
    action: "Get Quote"
  }, {
    icon: MessageSquare,
    title: "Partnership Inquiry",
    description: "Explore franchise and partnership opportunities",
    action: "Learn More"
  }, {
    icon: Calendar,
    title: "Consultation",
    description: "Free sustainability consultation for businesses",
    action: "Book Consultation"
  }];
  const faqs = [{
    question: "What types of cooking oil do you collect?",
    answer: "We collect all types of used cooking oil including vegetable oil, palm oil, canola oil, and other food-grade oils."
  }, {
    question: "Is there a minimum quantity for pickup?",
    answer: "For households, the minimum is 1 liter. For businesses, we can collect any quantity from 5 liters upwards."
  }, {
    question: "How much do you pay for used cooking oil?",
    answer: "Pricing varies based on quality and quantity. Contact us for current rates and to discuss your specific requirements."
  }, {
    question: "How often can I schedule pickups?",
    answer: "You can schedule pickups as needed. Many businesses opt for weekly or bi-weekly collections."
  }, {
    question: "Do you provide collection containers?",
    answer: "Yes, we provide appropriate storage containers for both household and commercial customers at no additional cost."
  }];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(s => ({
    ...s,
    [key]: e.target.value
  }));
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
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });
    }, 900);
  };
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 lg:pt-32 pb-20 text-center bg-gradient-hero">
        <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
          📞 Contact Us
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-slate-950">
          Get in{" "}
          <span className="bg-gradient-eco bg-clip-text text-slate-950">Touch</span>
        </h1>
        
      </section>

      {/* Contact Info */}
      <section className="">
       <Contact />
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Card>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location */}
    <section className="py-16 lg:py-20 bg-eco-surface" id="map">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">Visit Our Office</h2>

    <Card className="p-6 bg-background shadow-lg rounded-2xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
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
              <span>+65 9298 8849, +65 9385 1609</span>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>info@superenergy.sg</span>
            </div>
          </div>
          <Button asChild>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1001+Tai+Seng+Avenue+Singapore+534420"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </Button>
        </div>

        {/* Clean Google Map */}
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]">
          <iframe
            title="Super Energy Location"
            src="https://www.google.com/maps/d/embed?mid=1QYWOGZQvE8w1dDvza5mQ-ex2sXLGqYM&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Card>
  </div>
</section>

      <Footer />
      <ScrollToTop />
    </div>;
};
export default ContactPage;
