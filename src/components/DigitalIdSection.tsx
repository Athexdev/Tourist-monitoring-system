import { QrCode, Shield, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import digitalIdImage from "@/assets/digital-id.jpg";

const DigitalIdSection = () => {
  return (
    <section className="py-20 gradient-dashboard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Digital Tourist ID
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure digital identification linked to your phone number or passport. 
            Valid for your entire trip duration with instant verification.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <QrCode className="h-6 w-6 text-authority" />
                    Quick Registration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Register at entry points with phone number or passport. 
                    Get instant digital ID with QR code for verification.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-success" />
                    Secure Verification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Government-grade encryption ensures your data is protected. 
                    Linked to official databases for instant authentication.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-warning" />
                    Trip Duration Validity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ID remains active throughout your stay. Automatic expiry 
                    ensures privacy protection after departure.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="emergency" size="lg">
                <Phone className="h-5 w-5" />
                Register with Phone
              </Button>
              <Button variant="authority" size="lg">
                <Shield className="h-5 w-5" />
                Register with Passport
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="shadow-dashboard bg-white p-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Badge variant="outline" className="text-success border-success">
                    VERIFIED TOURIST
                  </Badge>
                </div>
                <img 
                  src={digitalIdImage} 
                  alt="Digital Tourist ID Interface"
                  className="rounded-lg w-full h-auto"
                />
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Tourist ID: #ST2024001</h3>
                  <p className="text-sm text-muted-foreground">Valid until: Dec 31, 2024</p>
                  <div className="flex justify-center">
                    <QrCode className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalIdSection;