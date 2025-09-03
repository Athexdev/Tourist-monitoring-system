import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-emergency">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SafeTour</h3>
                <p className="text-sm opacity-80">Tourist Safety Monitoring</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Advanced safety monitoring system ensuring tourist protection 
              through real-time tracking and emergency response.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Emergency Contacts</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emergency" />
                <span className="text-sm">Emergency: 112</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-authority" />
                <span className="text-sm">Tourist Helpline: +91-1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-success" />
                <span className="text-sm">support@safetour.gov.in</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-primary transition-colors">• About SafeTour</Link></li>
              <li><Link to="/register" className="hover:text-primary transition-colors">• Tourist Registration</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">• Authority Dashboard</Link></li>
              <li><Link to="/emergency" className="hover:text-primary transition-colors">• Emergency Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">• Contact Support</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Access</h4>
            <div className="space-y-3">
              <Button variant="emergency" className="w-full" asChild>
                <Link to="/emergency">
                  <Phone className="h-4 w-4" />
                  Emergency Help
                </Link>
              </Button>
              <Button variant="authority" className="w-full" asChild>
                <Link to="/dashboard">
                  <Shield className="h-4 w-4" />
                  Authority Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 SafeTour - Government of India Initiative. 
            Built for tourist safety and security.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;