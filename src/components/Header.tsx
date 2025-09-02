import { Shield, AlertTriangle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full gradient-dashboard border-b shadow-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-emergency/10">
              <Shield className="h-6 w-6 text-emergency" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SafeTour</h1>
              <p className="text-xs text-muted-foreground">Tourist Safety Monitoring</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="authority" size="sm">
              <Phone className="h-4 w-4" />
              Emergency: 112
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;