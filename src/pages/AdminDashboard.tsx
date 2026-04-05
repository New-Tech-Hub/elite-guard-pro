import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Users, Calendar, DollarSign, Car, UserCheck, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const scrollRef = useScrollAnimation();

  const stats = [
    { label: 'Total Bookings', value: '47', icon: Calendar },
    { label: 'Active Escorts', value: '12', icon: Shield },
    { label: 'Available Officers', value: '18', icon: UserCheck },
    { label: 'Revenue (Month)', value: '₦8.4M', icon: DollarSign },
  ];

  const pendingBookings = [
    { id: 'BK001', client: 'Chief Adebayo M.', type: 'VIP Escort', date: '2025-12-01', time: '09:00 AM', officers: 2, status: 'pending' },
    { id: 'BK002', client: 'Dr. Sarah Johnson', type: 'Airport Pickup', date: '2025-12-05', time: '2:30 PM', officers: 1, status: 'pending' },
  ];

  const officers = [
    { id: 'OFF001', name: 'John Adebayo', status: 'available', specialty: 'VIP Protection' },
    { id: 'OFF002', name: 'Sarah Williams', status: 'assigned', specialty: 'Tour Guide' },
    { id: 'OFF003', name: 'Michael Okonkwo', status: 'available', specialty: 'Armed Escort' },
  ];

  const vehicles = [
    { id: 'VEH001', model: 'Range Rover', plate: 'ABC-123-XY', status: 'available' },
    { id: 'VEH002', model: 'Mercedes G-Wagon', plate: 'XYZ-456-AB', status: 'in-use' },
    { id: 'VEH003', model: 'Toyota Land Cruiser', plate: 'DEF-789-CD', status: 'available' },
  ];

  const handleAssignOfficer = () => {
    toast.success('Officer assigned successfully!');
  };

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center">
              <Shield className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-heading font-bold">Admin Dashboard</h1>
              <p className="text-primary-foreground/75">Manage bookings, officers, and operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children animate-on-scroll">
            {stats.map((stat, index) => (
              <Card key={index} className="border border-border card-interactive group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-heading font-bold text-primary">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <stat.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <div className="animate-on-scroll">
            <Tabs defaultValue="bookings" className="space-y-6">
              <TabsList className="bg-muted/50 border border-border rounded-xl p-1 h-auto">
                <TabsTrigger value="bookings" className="rounded-lg px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium">Bookings</TabsTrigger>
                <TabsTrigger value="officers" className="rounded-lg px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium">Officers</TabsTrigger>
                <TabsTrigger value="vehicles" className="rounded-lg px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium">Vehicles</TabsTrigger>
                <TabsTrigger value="reports" className="rounded-lg px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-heading font-bold text-primary">Pending Assignments</h2>
                  <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl">
                    View All Bookings
                  </Button>
                </div>

                {pendingBookings.map((booking) => (
                  <Card key={booking.id} className="border border-border card-interactive">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-heading flex items-center gap-3">
                            {booking.type}
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
                              Pending Assignment
                            </span>
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            Booking ID: {booking.id} • Client: {booking.client}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm font-heading font-semibold text-foreground mb-2">Booking Details</p>
                          <p className="text-sm text-muted-foreground">Date: {booking.date} at {booking.time}</p>
                          <p className="text-sm text-muted-foreground">Officers Required: {booking.officers}</p>
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <p className="text-sm font-heading font-semibold text-foreground mb-3">Assign Officers & Vehicle</p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label className="text-foreground text-sm">Primary Officer</Label>
                            <Select>
                              <SelectTrigger className="mt-1.5 h-11 rounded-xl"><SelectValue placeholder="Select officer" /></SelectTrigger>
                              <SelectContent>
                                {officers.filter(o => o.status === 'available').map(officer => (
                                  <SelectItem key={officer.id} value={officer.id}>{officer.name}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-foreground text-sm">Vehicle</Label>
                            <Select>
                              <SelectTrigger className="mt-1.5 h-11 rounded-xl"><SelectValue placeholder="Select vehicle" /></SelectTrigger>
                              <SelectContent>
                                {vehicles.filter(v => v.status === 'available').map(vehicle => (
                                  <SelectItem key={vehicle.id} value={vehicle.id}>{vehicle.model} - {vehicle.plate}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-end">
                            <Button onClick={handleAssignOfficer} className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl h-11 transition-all duration-300 hover:-translate-y-0.5">
                              Assign & Confirm
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="officers" className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-heading font-bold text-primary">Security Personnel</h2>
                  <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl">
                    Add New Officer
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {officers.map((officer) => (
                    <Card key={officer.id} className="border border-border card-interactive group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-heading font-semibold text-lg text-foreground">{officer.name}</h3>
                            <p className="text-sm text-muted-foreground">{officer.id}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            officer.status === 'available'
                              ? 'bg-accent/15 text-accent border border-accent/30'
                              : 'bg-muted text-muted-foreground border border-border'
                          }`}>
                            {officer.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          <span className="font-semibold text-foreground">Specialty:</span> {officer.specialty}
                        </p>
                        <Button variant="outline" size="sm" className="w-full rounded-xl border-border hover:border-accent/30">
                          View Profile
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="vehicles" className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-heading font-bold text-primary">Fleet Management</h2>
                  <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl">
                    Add New Vehicle
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vehicles.map((vehicle) => (
                    <Card key={vehicle.id} className="border border-border card-interactive group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Car className="h-4 w-4 text-accent" />
                              </div>
                              <h3 className="font-heading font-semibold text-lg text-foreground">{vehicle.model}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{vehicle.plate}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            vehicle.status === 'available'
                              ? 'bg-accent/15 text-accent border border-accent/30'
                              : 'bg-primary/10 text-primary border border-primary/20'
                          }`}>
                            {vehicle.status}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full rounded-xl border-border hover:border-accent/30">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reports" className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">Reports & Analytics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {['Revenue Overview', 'Booking Statistics'].map((title, i) => (
                    <Card key={i} className="border border-border">
                      <CardHeader>
                        <CardTitle className="font-heading">{title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 flex items-center justify-center bg-muted/50 rounded-xl border border-border">
                          <p className="text-muted-foreground text-sm">Chart placeholder — {title.toLowerCase()}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
