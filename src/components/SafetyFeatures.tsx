import { AlertTriangle, MapPin, Brain, Shield, Phone, Zap, Sparkles, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SafetyFeatures = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Panic Button",
      description: "Instant emergency alert with live location sharing to authorities",
      gradient: "gradient-emergency",
      iconBg: "bg-emergency/20",
      badge: "Critical"
    },
    {
      icon: MapPin,
      title: "Geo-fencing Alerts",
      description: "Real-time warnings when entering high-risk or restricted areas",
      gradient: "gradient-warning",
      iconBg: "bg-warning/20",
      badge: "Smart"
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Smart monitoring for sudden drop-offs or prolonged inactivity",
      gradient: "gradient-authority",
      iconBg: "bg-authority/20",
      badge: "AI-Powered"
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "24/7 surveillance with instant response capabilities",
      gradient: "gradient-success",
      iconBg: "bg-success/20",
      badge: "24/7"
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "Direct connection to police, medical, and tourism departments",
      gradient: "gradient-emergency",
      iconBg: "bg-emergency/20",
      badge: "Direct"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Under 2-minute response time with location verification",
      gradient: "gradient-warning",
      iconBg: "bg-warning/20",
      badge: "Lightning"
    }
  ];

  return (
    <section className="py-24 gradient-dashboard relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full gradient-authority opacity-10 float-animation"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full gradient-success opacity-10 float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="gradient-vibrant border-none text-white font-bold px-6 py-3 text-lg mb-6 hover-lift">
            <Star className="h-5 w-5 mr-2" />
            Advanced Protection
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-authority bg-clip-text text-transparent">
              Advanced Safety Features
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Comprehensive protection powered by AI and real-time monitoring 
            to ensure tourist safety at all times.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="interactive-card shadow-vibrant gradient-card border-primary/20 overflow-hidden group">
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-2xl ${feature.iconBg} group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline" className={`${feature.gradient} border-none text-white font-bold hover-lift`}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${feature.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Card className="inline-block shadow-vibrant gradient-card border-primary/30 overflow-hidden relative">
            <div className="absolute inset-0 shimmer-effect"></div>
            <CardContent className="p-12 relative">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="gradient-success rounded-full p-4">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-success to-authority bg-clip-text text-transparent">
                  99.9% Uptime Guarantee
                </h3>
                <div className="gradient-authority rounded-full p-4">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Our system is built for reliability with redundant monitoring 
                and instant failover capabilities. Your safety never sleeps.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;