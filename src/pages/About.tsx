import { Shield, Users, MapPin, Zap, Award, Globe, Heart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SafetyFeatures from "@/components/SafetyFeatures";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import { Link } from "react-router-dom";

const About = () => {
  const achievements = [
    { title: "99.9% Uptime", description: "Reliable 24/7 monitoring", icon: Shield },
    { title: "1M+ Tourists", description: "Protected worldwide", icon: Users },
    { title: "<2min Response", description: "Average emergency response time", icon: Zap },
    { title: "50+ Countries", description: "Global safety network", icon: Globe }
  ];

  const team = [
    { name: "Dr. Sarah Johnson", role: "Chief Safety Officer", expertise: "Emergency Response" },
    { name: "Raj Patel", role: "Technical Director", expertise: "AI & Monitoring Systems" },
    { name: "Maria Garcia", role: "Operations Manager", expertise: "Tourist Services" },
    { name: "David Chen", role: "Security Analyst", expertise: "Threat Assessment" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-dashboard">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="gradient-vibrant border-none text-white font-bold px-6 py-3 text-lg mb-6 hover-lift">
              <Star className="h-5 w-5 mr-2" />
              About SafeTour
            </Badge>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-authority bg-clip-text text-transparent">
                Revolutionizing Tourist Safety
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              SafeTour is the world's most advanced tourist safety monitoring system, 
              combining AI technology, real-time tracking, and rapid emergency response 
              to protect travelers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="interactive-card shadow-vibrant gradient-card border-primary/20 text-center">
                <CardContent className="p-8">
                  <div className="gradient-authority rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To create a world where every tourist can explore safely and confidently, 
                  knowing that advanced technology and dedicated professionals are watching 
                  over their wellbeing 24/7.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that travel should be about discovery and joy, not worry and fear. 
                  Our comprehensive safety ecosystem ensures that help is always within reach, 
                  allowing travelers to focus on creating unforgettable memories.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="vibrant" size="lg" asChild>
                  <Link to="/register">
                    <Shield className="h-5 w-5" />
                    Get Protected Today
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/emergency">
                    <Heart className="h-5 w-5" />
                    Emergency Services
                  </Link>
                </Button>
              </div>
            </div>
            
            <Card className="shadow-vibrant gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  Why Choose SafeTour?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="gradient-success rounded-full p-2 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instant Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Our AI-powered system detects emergencies in real-time and dispatches help immediately.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="gradient-authority rounded-full p-2 mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Global Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Our network spans across major tourist destinations worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="gradient-emergency rounded-full p-2 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Privacy First</h4>
                    <p className="text-sm text-muted-foreground">
                      Your data is encrypted and only accessed during emergencies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-dashboard">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated professionals combine decades of experience in safety, 
              technology, and emergency response.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="interactive-card shadow-card text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full gradient-authority mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <SafetyFeatures />

      {/* Dashboard Section */}
      <MonitoringDashboard />
    </div>
  );
};

export default About;