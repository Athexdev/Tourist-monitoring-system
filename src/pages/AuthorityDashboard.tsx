import { useState } from "react";
import { Shield, Users, AlertTriangle, MapPin, Clock, Activity, TrendingUp, Eye, Bell, Settings, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import dashboardImage from "@/assets/dashboard-india.jpg";

const AuthorityDashboard = () => {
  const [activeAlerts] = useState([
    { id: 1, type: "emergency", message: "Tourist #ST2024045 panic button activated", time: "Just now", location: "Red Fort Area", priority: "high" },
    { id: 2, type: "warning", message: "Group of 8 tourists in restricted zone", time: "3 min ago", location: "Old Delhi Market", priority: "medium" },
    { id: 3, type: "info", message: "Tourist #ST2024067 check-in required", time: "8 min ago", location: "India Gate", priority: "low" },
    { id: 4, type: "success", message: "Emergency response completed", time: "15 min ago", location: "Connaught Place", priority: "resolved" }
  ]);

  const [tourists] = useState([
    { id: "ST2024045", name: "John Smith", status: "emergency", location: "Red Fort", lastSeen: "Just now", country: "USA" },
    { id: "ST2024046", name: "Emma Johnson", status: "safe", location: "India Gate", lastSeen: "2 min ago", country: "UK" },
    { id: "ST2024047", name: "Carlos Rodriguez", status: "warning", location: "Chandni Chowk", lastSeen: "5 min ago", country: "Spain" },
    { id: "ST2024048", name: "Yuki Tanaka", status: "safe", location: "Lotus Temple", lastSeen: "1 min ago", country: "Japan" }
  ]);

  const stats = [
    { title: "Active Tourists", value: "1,247", change: "+12%", icon: Users, color: "text-authority", trend: "up" },
    { title: "Emergency Alerts", value: "2", change: "+1", icon: AlertTriangle, color: "text-emergency", trend: "up" },
    { title: "Avg Response Time", value: "1.3min", change: "-15%", icon: Clock, color: "text-success", trend: "down" },
    { title: "System Health", value: "99.9%", change: "0%", icon: Activity, color: "text-success", trend: "stable" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "emergency": return "text-emergency bg-emergency/10 border-emergency/20";
      case "warning": return "text-warning bg-warning/10 border-warning/20";
      case "safe": return "text-success bg-success/10 border-success/20";
      default: return "text-muted-foreground bg-muted/10 border-muted/20";
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "emergency": return "destructive";
      case "warning": return "secondary";
      case "info": return "outline";
      case "success": return "default";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen gradient-dashboard py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                <span className="bg-gradient-to-r from-primary to-authority bg-clip-text text-transparent">
                  Authority Command Center
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Real-time monitoring and emergency response coordination
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="gradient-success border-none text-white px-4 py-2">
                <Activity className="h-4 w-4 mr-2" />
                System Online
              </Badge>
              <Button variant="emergency" size="lg">
                <Phone className="h-5 w-5" />
                Emergency Line
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs font-medium ${
                          stat.trend === 'up' ? 'text-success' : 
                          stat.trend === 'down' ? 'text-warning' : 
                          'text-muted-foreground'
                        }`}>
                          {stat.change}
                        </span>
                        <span className="text-xs text-muted-foreground">from last hour</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full bg-primary/10`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-dashboard">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-authority" />
                  Live Monitoring Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img 
                    src={dashboardImage} 
                    alt="Real-time monitoring dashboard"
                    className="rounded-lg w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-white/90 text-foreground border-none">
                      1,247 Active Tourists
                    </Badge>
                    <Badge variant="destructive" className="bg-emergency text-white">
                      2 Emergency Alerts
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between bg-white/90 rounded-lg p-3">
                      <span className="text-sm font-medium">Map Controls</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="tourists" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tourists">Active Tourists</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tourists" className="space-y-4">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-authority" />
                      Tourist Status Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tourists.map((tourist) => (
                        <div key={tourist.id} className="flex items-center justify-between p-4 border rounded-lg bg-card">
                          <div className="flex items-center gap-4">
                            <Badge className={getStatusColor(tourist.status)} variant="outline">
                              {tourist.status}
                            </Badge>
                            <div>
                              <p className="font-medium">{tourist.name}</p>
                              <p className="text-sm text-muted-foreground">ID: {tourist.id} • {tourist.country}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{tourist.location}</p>
                            <p className="text-xs text-muted-foreground">Last seen: {tourist.lastSeen}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>System Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Response Efficiency</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Tourist Coverage</span>
                        <span className="text-sm font-medium">99.7%</span>
                      </div>
                      <Progress value={99.7} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">System Uptime</span>
                        <span className="text-sm font-medium">99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Generate Reports</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4" />
                      Daily Activity Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <AlertTriangle className="h-4 w-4" />
                      Incident Summary
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4" />
                      Tourist Statistics
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-emergency" />
                  Emergency Alerts
                  <Badge variant="destructive" className="ml-auto">
                    {activeAlerts.filter(alert => alert.type === 'emergency').length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {activeAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 rounded-lg border bg-card space-y-2">
                    <div className="flex items-start justify-between">
                      <Badge variant={getAlertColor(alert.type)} className="capitalize">
                        {alert.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {alert.location}
                      </p>
                      {alert.type === 'emergency' && (
                        <Button size="sm" variant="emergency">
                          Respond
                        </Button>
                      )}
                    </div>
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
                  <Bell className="h-4 w-4" />
                  Broadcast Alert
                </Button>
                <Button variant="authority" className="w-full justify-start">
                  <Users className="h-4 w-4" />
                  Tourist Clusters
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4" />
                  System Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4" />
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;