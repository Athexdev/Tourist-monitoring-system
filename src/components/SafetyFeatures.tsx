import { AlertTriangle, MapPin, Brain, Shield, Phone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SafetyFeatures = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Panic Button",
      description: "Instant emergency alert with live location sharing to authorities",
      color: "text-emergency",
      bgColor: "bg-emergency/10"
    },
    {
      icon: MapPin,
      title: "Geo-fencing Alerts",
      description: "Real-time warnings when entering high-risk or restricted areas",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Smart monitoring for sudden drop-offs or prolonged inactivity",
      color: "text-authority",
      bgColor: "bg-authority/10"
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "24/7 surveillance with instant response capabilities",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "Direct connection to police, medical, and tourism departments",
      color: "text-emergency",
      bgColor: "bg-emergency/10"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Under 2-minute response time with location verification",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Advanced Safety Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive protection powered by AI and real-time monitoring 
            to ensure tourist safety at all times.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-dashboard transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      Active
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="inline-block shadow-dashboard bg-gradient-to-r from-emergency/5 to-authority/5 border-emergency/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-emergency" />
                <h3 className="text-2xl font-bold text-foreground">99.9% Uptime Guarantee</h3>
              </div>
              <p className="text-muted-foreground max-w-md">
                Our system is built for reliability with redundant monitoring 
                and instant failover capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;