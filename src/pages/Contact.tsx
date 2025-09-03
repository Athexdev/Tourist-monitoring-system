import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Shield, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: "+1-800-SAFETOUR",
      subtitle: "24/7 Emergency Support",
      color: "gradient-emergency"
    },
    {
      icon: Mail,
      title: "Support Email",
      details: "support@safetour.com",
      subtitle: "General inquiries & support",
      color: "gradient-authority"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "123 Safety Street, Delhi, India",
      subtitle: "Visit our main office",
      color: "gradient-success"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 minutes",
      subtitle: "Average emergency response",
      color: "gradient-warning"
    }
  ];

  const offices = [
    { city: "New Delhi", country: "India", phone: "+91-11-2345-6789" },
    { city: "Mumbai", country: "India", phone: "+91-22-3456-7890" },
    { city: "New York", country: "USA", phone: "+1-212-555-0123" },
    { city: "London", country: "UK", phone: "+44-20-7123-4567" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen gradient-dashboard py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="gradient-vibrant border-none text-white font-bold px-6 py-3 text-lg mb-6 hover-lift">
            <MessageSquare className="h-5 w-5 mr-2" />
            Contact SafeTour
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-authority bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our expert team for support, partnerships, or emergency assistance. 
            Your safety and satisfaction are our top priorities.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="mb-12">
          <Card className="gradient-emergency border-emergency/50 text-white">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Shield className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Emergency? Call Now!</h2>
                <Shield className="h-8 w-8" />
              </div>
              <p className="text-xl mb-4">For immediate emergency assistance, call our 24/7 hotline</p>
              <Button variant="outline" size="lg" className="bg-white text-emergency hover:bg-white/90">
                <Phone className="h-5 w-5" />
                +1-800-SAFETOUR
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-vibrant gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="emergency">Emergency Services</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief subject of your message"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry or concern in detail..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="h-32"
                      required
                    />
                  </div>

                  <Button type="submit" variant="vibrant" size="lg" className="w-full">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-success" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${info.color}`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-lg font-bold text-primary">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-authority" />
                  Global Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{office.city}</p>
                        <p className="text-sm text-muted-foreground">{office.country}</p>
                      </div>
                      <p className="text-sm font-mono text-primary">{office.phone}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-authority text-white">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-sm opacity-90">
                  Our support team is available around the clock to assist you 
                  with any questions or emergencies. Your safety never sleeps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="shadow-card max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How quickly do you respond to emergencies?</h4>
                  <p className="text-sm text-muted-foreground">Our average response time is under 2 minutes, with immediate dispatch to local emergency services.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Is my location data secure?</h4>
                  <p className="text-sm text-muted-foreground">Yes, all data is encrypted and only accessed during verified emergencies by authorized personnel.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Do you operate internationally?</h4>
                  <p className="text-sm text-muted-foreground">We have coverage in over 50 countries with local emergency service partnerships.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What if I need help but can't call?</h4>
                  <p className="text-sm text-muted-foreground">Our panic button and automated monitoring systems can detect emergencies even without voice contact.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;