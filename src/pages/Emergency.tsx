import { useState } from "react";
import { Phone, AlertTriangle, MapPin, Clock, Shield, Heart, Zap, Hospital, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Emergency = () => {
  const { toast } = useToast();
  const [emergencyType, setEmergencyType] = useState("");
  const [location, setLocation] = useState("Detecting location...");
  const [description, setDescription] = useState("");
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  const emergencyContacts = [
    { name: "Police", number: "100", icon: Shield, color: "gradient-authority" },
    { name: "Medical", number: "102", icon: Heart, color: "gradient-emergency" },
    { name: "Fire Brigade", number: "101", icon: Zap, color: "gradient-warning" },
    { name: "Tourist Helpline", number: "1363", icon: Phone, color: "gradient-success" }
  ];

  const quickEmergencies = [
    { type: "Medical Emergency", icon: Hospital, description: "Medical assistance required" },
    { type: "Lost/Stranded", icon: MapPin, description: "Unable to find way or transportation" },
    { type: "Theft/Crime", icon: Shield, description: "Criminal activity or theft" },
    { type: "Accident", icon: Car, description: "Traffic or other accident" }
  ];

  const handlePanicButton = () => {
    setIsEmergencyActive(true);
    toast({
      title: "EMERGENCY ALERT ACTIVATED",
      description: "Emergency services have been notified. Help is on the way!",
      variant: "destructive",
    });
    // Simulate location detection
    setTimeout(() => {
      setLocation("Red Fort, New Delhi - Coordinates: 28.6562°N, 77.2410°E");
    }, 2000);
  };

  const handleQuickEmergency = (type: string) => {
    setEmergencyType(type);
    toast({
      title: "Emergency Type Selected",
      description: `${type} - Please provide additional details below.`,
    });
  };

  return (
    <div className="min-h-screen gradient-dashboard py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="gradient-emergency border-none text-white font-bold px-6 py-3 text-lg mb-6 emergency-pulse">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Emergency Response Center
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-emergency to-warning bg-clip-text text-transparent">
              24/7 Emergency Assistance
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immediate help when you need it most. Your safety is our priority.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Panic Button Section */}
          <div className="lg:col-span-2 space-y-8">
            <Card className={`shadow-vibrant border-emergency/50 ${isEmergencyActive ? 'emergency-pulse bg-emergency/5' : 'gradient-card border-primary/20'}`}>
              <CardHeader>
                <CardTitle className="text-center text-2xl flex items-center justify-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-emergency" />
                  Emergency Panic Button
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="space-y-4">
                  <Button
                    onClick={handlePanicButton}
                    size="lg"
                    variant="emergency"
                    className={`w-64 h-64 rounded-full text-2xl font-bold shadow-emergency glow-effect ${isEmergencyActive ? 'emergency-pulse' : ''}`}
                    disabled={isEmergencyActive}
                  >
                    {isEmergencyActive ? (
                      <div className="flex flex-col items-center gap-2">
                        <Clock className="h-12 w-12 animate-spin" />
                        <span>HELP ON THE WAY</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <AlertTriangle className="h-12 w-12" />
                        <span>EMERGENCY</span>
                      </div>
                    )}
                  </Button>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Press this button in case of immediate danger or emergency. 
                    Your location will be shared with emergency services automatically.
                  </p>
                </div>

                {isEmergencyActive && (
                  <div className="space-y-4 p-6 bg-emergency/10 rounded-lg border border-emergency/20">
                    <div className="flex items-center justify-center gap-2 text-emergency">
                      <MapPin className="h-5 w-5" />
                      <span className="font-bold">Location Detected</span>
                    </div>
                    <p className="text-sm text-foreground">{location}</p>
                    <Badge className="gradient-success border-none text-white">
                      Response Team Dispatched - ETA: 3-5 minutes
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Emergency Types */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-warning" />
                  Quick Emergency Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {quickEmergencies.map((emergency, index) => (
                    <Button
                      key={index}
                      variant={emergencyType === emergency.type ? "destructive" : "outline"}
                      className="h-auto p-4 justify-start"
                      onClick={() => handleQuickEmergency(emergency.type)}
                    >
                      <div className="flex items-center gap-3">
                        <emergency.icon className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-medium">{emergency.type}</div>
                          <div className="text-xs text-muted-foreground">{emergency.description}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>

                {emergencyType && (
                  <div className="space-y-4 p-4 bg-card border rounded-lg">
                    <div className="space-y-2">
                      <Label htmlFor="location">Current Location</Label>
                      <Input
                        id="location"
                        value={location}
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Emergency Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe the emergency situation in detail..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="h-24"
                      />
                    </div>
                    <Button variant="emergency" className="w-full">
                      <AlertTriangle className="h-4 w-4" />
                      Submit Emergency Report
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contacts */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-success" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-card hover-lift">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${contact.color}`}>
                          <contact.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-2xl font-bold text-foreground">{contact.number}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Safety Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <p>Always keep emergency numbers saved in your phone</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <p>Share your location with trusted contacts</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <p>Keep important documents and money in separate places</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <p>Trust your instincts - if something feels wrong, seek help</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card gradient-success">
              <CardContent className="p-6 text-center text-white">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">You're Protected</h3>
                <p className="text-sm opacity-90">
                  Our 24/7 monitoring system is actively watching over your safety. 
                  Help is always just one button away.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;