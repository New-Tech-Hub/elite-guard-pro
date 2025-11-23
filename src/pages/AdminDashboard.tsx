import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Users, Calendar, DollarSign, Car, UserCheck } from 'lucide-react';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);

  // Mock data
  const stats = [
    { label: 'Total Bookings', value: '47', icon: Calendar, color: 'text-blue-600' },
    { label: 'Active Escorts', value: '12', icon: Shield, color: 'text-green-600' },
    { label: 'Available Officers', value: '18', icon: UserCheck, color: 'text-accent' },
    { label: 'Revenue (Month)', value: '₦8.4M', icon: DollarSign, color: 'text-primary' },
  ];

  const pendingBookings = [
    {
      id: 'BK001',
      client: 'Chief Adebayo M.',
      type: 'VIP Escort',
      date: '2025-12-01',
      time: '09:00 AM',
      officers: 2,
      status: 'pending',
    },
    {
      id: 'BK002',
      client: 'Dr. Sarah Johnson',
      type: 'Airport Pickup',
      date: '2025-12-05',
      time: '2:30 PM',
      officers: 1,
      status: 'pending',
    },
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
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Shield className="h-10 w-10 text-accent" />
            <div>
              <h1 className="text-4xl font-heading font-bold">Admin Dashboard</h1>
              <p className="text-primary-foreground/80">Manage bookings, officers, and operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <stat.icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="officers">Officers</TabsTrigger>
              <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-bold text-primary">Pending Assignments</h2>
                <Button className="bg-accent hover:bg-accent-dark text-primary">
                  View All Bookings
                </Button>
              </div>

              {pendingBookings.map((booking) => (
                <Card key={booking.id} className="border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-heading flex items-center gap-3">
                          {booking.type}
                          <Badge className="bg-yellow-500 text-white">Pending Assignment</Badge>
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
                        <p className="text-sm font-semibold mb-2">Booking Details</p>
                        <p className="text-sm text-muted-foreground">
                          Date: {booking.date} at {booking.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Officers Required: {booking.officers}
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <p className="text-sm font-semibold mb-3">Assign Officers & Vehicle</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor={`officer1-${booking.id}`}>Primary Officer</Label>
                          <Select>
                            <SelectTrigger id={`officer1-${booking.id}`}>
                              <SelectValue placeholder="Select officer" />
                            </SelectTrigger>
                            <SelectContent>
                              {officers.filter(o => o.status === 'available').map(officer => (
                                <SelectItem key={officer.id} value={officer.id}>
                                  {officer.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor={`vehicle-${booking.id}`}>Vehicle</Label>
                          <Select>
                            <SelectTrigger id={`vehicle-${booking.id}`}>
                              <SelectValue placeholder="Select vehicle" />
                            </SelectTrigger>
                            <SelectContent>
                              {vehicles.filter(v => v.status === 'available').map(vehicle => (
                                <SelectItem key={vehicle.id} value={vehicle.id}>
                                  {vehicle.model} - {vehicle.plate}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-end">
                          <Button 
                            onClick={handleAssignOfficer}
                            className="w-full bg-accent hover:bg-accent-dark text-primary"
                          >
                            Assign & Confirm
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Officers Tab */}
            <TabsContent value="officers" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold text-primary">Security Personnel</h2>
                <Button className="bg-accent hover:bg-accent-dark text-primary">
                  Add New Officer
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {officers.map((officer) => (
                  <Card key={officer.id} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-heading font-semibold text-lg">{officer.name}</h3>
                          <p className="text-sm text-muted-foreground">{officer.id}</p>
                        </div>
                        <Badge className={officer.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'}>
                          {officer.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-semibold">Specialty:</span> {officer.specialty}
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Vehicles Tab */}
            <TabsContent value="vehicles" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold text-primary">Fleet Management</h2>
                <Button className="bg-accent hover:bg-accent-dark text-primary">
                  Add New Vehicle
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Car className="h-5 w-5 text-accent" />
                            <h3 className="font-heading font-semibold text-lg">{vehicle.model}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">{vehicle.plate}</p>
                        </div>
                        <Badge className={vehicle.status === 'available' ? 'bg-green-500' : 'bg-blue-500'}>
                          {vehicle.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Reports & Analytics</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                      <p className="text-muted-foreground">Chart placeholder - Revenue trends</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Booking Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                      <p className="text-muted-foreground">Chart placeholder - Booking trends</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
