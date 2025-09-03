import { useState } from "react";
import { UserCheck, Shield, Camera, MapPin, Phone, Mail, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import digitalIdImage from "@/assets/digital-id.jpg";

const TouristRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    duration: "",
    accommodation: "",
    emergencyContact: "",
    medicalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Your digital tourist ID has been generated. Check your email for details.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen gradient-dashboard py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="gradient-vibrant border-none text-white font-bold px-6 py-3 text-lg mb-6 hover-lift">
            <UserCheck className="h-5 w-5 mr-2" />
            Tourist Registration
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-authority bg-clip-text text-transparent">
              Get Your Digital Tourist ID
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quick and secure registration for enhanced safety monitoring during your visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <Card className="shadow-vibrant gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Registration Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Select onValueChange={(value) => handleInputChange("nationality", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Visit Duration</Label>
                    <Select onValueChange={(value) => handleInputChange("duration", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 days</SelectItem>
                        <SelectItem value="4-7">4-7 days</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                        <SelectItem value="longer">Longer than 1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accommodation">Accommodation</Label>
                    <Input
                      id="accommodation"
                      placeholder="Hotel/Hostel name or address"
                      value={formData.accommodation}
                      onChange={(e) => handleInputChange("accommodation", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  <Input
                    id="emergencyContact"
                    placeholder="Name and phone number of emergency contact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalInfo">Medical Information (Optional)</Label>
                  <Textarea
                    id="medicalInfo"
                    placeholder="Any medical conditions, allergies, or special requirements"
                    value={formData.medicalInfo}
                    onChange={(e) => handleInputChange("medicalInfo", e.target.value)}
                    className="h-24"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button type="submit" variant="vibrant" size="lg" className="flex-1">
                    <UserCheck className="h-5 w-5" />
                    Register Now
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="flex-1">
                    <Camera className="h-5 w-5" />
                    Upload Photo
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-vibrant gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Badge className="gradient-success border-none text-white p-2">
                    <Shield className="h-5 w-5" />
                  </Badge>
                  Your Digital Tourist ID
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img 
                    src={digitalIdImage} 
                    alt="Digital Tourist ID Preview"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <Badge variant="outline" className="bg-white/90 text-foreground border-none">
                      Generated after registration
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-success" />
                  Registration Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Real-time Location Tracking</p>
                    <p className="text-sm text-muted-foreground">24/7 safety monitoring during your visit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emergency mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Emergency Response</p>
                    <p className="text-sm text-muted-foreground">Instant access to emergency services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-authority mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Group Management</p>
                    <p className="text-sm text-muted-foreground">Easy coordination with travel companions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Trip Planning</p>
                    <p className="text-sm text-muted-foreground">Personalized safety recommendations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristRegistration;