import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["1001 Tai Seng Avenue, #01-2526, Singapore 534420"],
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+65 XXXXX XXXXX"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@superenergy.sg"],
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: ["https://www.linkedin.com/company/moltechglobal/"],
    },
  ];

  return (
    <section id="contact" className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together for a{" "}
            <span className="bg-gradient-eco bg-clip-text text-transparent">
              Greener Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, want to schedule a pickup, or explore a partnership? Reach out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-eco transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-eco-light rounded-xl flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{info.title}</h4>

                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {info.title === "LinkedIn" ? (
                              <a
                                href={detail}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="p-8 bg-eco-surface border-2 border-eco-light">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      placeholder="Your full name"
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <Select>
                    <SelectTrigger className="border-2 focus:border-primary">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pickup">Pickup Request</SelectItem>
                      <SelectItem value="partner">Partnership</SelectItem>
                      <SelectItem value="general">General Query</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="border-2 focus:border-primary"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
