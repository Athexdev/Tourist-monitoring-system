import { Shield, MapPin, AlertTriangle, UserCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/india-wonders.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Dynamic Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-30 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-300 opacity-30 animate-bounce" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-red-300 opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <Badge className="gradient-vibrant border-none text-white font-bold px-4 py-2 text-sm hover-lift">
                <Sparkles className="h-4 w-4 mr-2" />
                Next-Gen Safety Technology
              </Badge>
              
              <h1 className="text-6xl font-bold leading-tight">
                Smart Tourist Safety
                <span className="block bg-gradient-to-r from-authority to-vibrant-cyan bg-clip-text text-transparent">
                  Monitoring System
                </span>
              </h1>
              
              <p className="text-2xl text-white/90 leading-relaxed font-light">
                Real-time safety monitoring, instant emergency response, and intelligent 
                threat detection for tourists. <span className="gradient-warning bg-clip-text text-transparent font-bold">Your safety is our priority.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="vibrant" size="xl" className="font-bold shadow-vibrant">
                <UserCheck className="h-6 w-6" />
                Register as Tourist
              </Button>
              <Button variant="authority" size="xl" className="font-bold">
                <Shield className="h-6 w-6" />
                Authority Dashboard
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <Card className="gradient-card border-white/30 backdrop-blur-sm interactive-card shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="gradient-warning rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Monitoring</div>
                </CardContent>
              </Card>
              
              <Card className="gradient-card border-white/30 backdrop-blur-sm interactive-card shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="gradient-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">&lt;2min</div>
                  <div className="text-sm text-muted-foreground font-medium">Response Time</div>
                </CardContent>
              </Card>
              
              <Card className="gradient-card border-white/30 backdrop-blur-sm interactive-card shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="gradient-authority rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground font-medium">Secure</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 gradient-authority rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Smart Tourist Safety System"
              className="relative rounded-3xl shadow-vibrant w-full h-auto hover-lift glow-effect"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;