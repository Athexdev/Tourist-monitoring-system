import { Shield, MapPin, AlertTriangle, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-safety.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Smart Tourist Safety
                <span className="block text-authority">Monitoring System</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Real-time safety monitoring, instant emergency response, and intelligent 
                threat detection for tourists. Your safety is our priority.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="emergency" size="lg" className="text-lg px-8 py-4">
                <UserCheck className="h-5 w-5" />
                Register as Tourist
              </Button>
              <Button variant="authority" size="lg" className="text-lg px-8 py-4">
                <Shield className="h-5 w-5" />
                Authority Dashboard
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/80">Monitoring</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-8 w-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">&lt;2min</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-authority mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-white/80">Secure</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src={heroImage} 
              alt="Smart Tourist Safety System"
              className="rounded-2xl shadow-dashboard w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;