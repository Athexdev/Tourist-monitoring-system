import { useState } from "react";
import { Activity, AlertTriangle, Users, MapPin, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dashboardImage from "@/assets/dashboard-india.jpg";

const MonitoringDashboard = () => {
  const [activeAlerts] = useState([
    { id: 1, type: "warning", message: "Tourist #ST2024045 entered high-risk zone", time: "2 min ago", location: "Old City Market" },
    { id: 2, type: "info", message: "Group of 12 tourists approaching checkpoint", time: "5 min ago", location: "Central Station" },
    { id: 3, type: "success", message: "Emergency response completed successfully", time: "15 min ago", location: "Tourist District" }
  ]);

  const stats = [
    { title: "Active Tourists", value: "1,247", change: "+12%", icon: Users, color: "text-authority" },
    { title: "Active Alerts", value: "3", change: "-25%", icon: AlertTriangle, color: "text-warning" },
    { title: "Response Time", value: "1.3min", change: "-15%", icon: Clock, color: "text-success" },
    { title: "System Uptime", value: "99.9%", change: "0%", icon: Activity, color: "text-success" }
  ];

  return (
    <section className="py-20 gradient-dashboard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real-time Monitoring Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive command center for police and tourism departments 
            with live tracking, alerts, and analytics.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className={`text-xs ${stat.change.startsWith('+') ? 'text-success' : stat.change.startsWith('-') ? 'text-warning' : 'text-muted-foreground'}`}>
                          {stat.change} from last hour
                        </p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="shadow-dashboard">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-authority" />
                  Live Map View
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img 
                    src={dashboardImage} 
                    alt="Real-time monitoring dashboard"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <Badge variant="outline" className="bg-white/90 text-foreground border-none">
                      Interactive Map Interface
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Live Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeAlerts.map((alert) => (
                  <div key={alert.id} className="p-3 rounded-lg border bg-card">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant={alert.type === 'warning' ? 'destructive' : alert.type === 'info' ? 'secondary' : 'outline'}
                        className="capitalize"
                      >
                        {alert.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      {alert.location}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="emergency" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4" />
                  Broadcast Emergency Alert
                </Button>
                <Button variant="authority" className="w-full justify-start">
                  <Users className="h-4 w-4" />
                  View Tourist Clusters
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringDashboard;