import { Shield, AlertTriangle, MapPin, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full gradient-card shadow-glow border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full gradient-emergency shadow-emergency glow-effect">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-authority bg-clip-text text-transparent">
                SafeTour
              </h1>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Heart className="h-3 w-3 text-emergency" />
                Tourist Safety Monitoring
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-sm font-medium text-success">System Online</span>
            </div>
            <Button variant="emergency" size="lg" className="font-bold">
              <Phone className="h-5 w-5" />
              Emergency: 112
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;