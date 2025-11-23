import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Calendar, MapPin, User, Download, Clock } from 'lucide-react';

const ClientDashboard = () => {
  // Mock data - in real app this would come from backend
  const bookings = [
    {
      id: 'BK001',
      type: 'VIP Escort',
      date: '2025-12-01',
      time: '09:00 AM',
      location: 'Victoria Island, Lagos',
      destination: 'Lekki Phase 1',
      status: 'confirmed',
      officer: 'Officer John Adebayo',
      officers: 2,
      vehicle: 'Black Range Rover (ABC-123-XY)',
    },
    {
      id: 'BK002',
      type: 'Airport Pickup',
      date: '2025-12-05',
      time: '2:30 PM',
      location: 'Murtala Muhammed Airport',
      destination: 'Eko Hotel, VI',
      status: 'pending',
      officer: 'Pending Assignment',
      officers: 1,
      vehicle: 'Pending',
    },
    {
      id: 'BK003',
      type: 'Tour Guide',
      date: '2025-11-20',
      time: '10:00 AM',
      location: 'National Museum, Lagos',
      destination: 'Multi-location',
      status: 'completed',
      officer: 'Officer Sarah Williams',
      officers: 2,
      vehicle: 'Mercedes G-Wagon (XYZ-456-AB)',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Shield className="h-10 w-10 text-accent" />
            <div>
              <h1 className="text-4xl font-heading font-bold">Client Dashboard</h1>
              <p className="text-primary-foreground/80">Manage your security bookings and assignments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Bookings</p>
                    <p className="text-3xl font-bold text-primary">12</p>
                  </div>
                  <Calendar className="h-10 w-10 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Active</p>
                    <p className="text-3xl font-bold text-green-600">1</p>
                  </div>
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pending</p>
                    <p className="text-3xl font-bold text-yellow-600">1</p>
                  </div>
                  <Clock className="h-10 w-10 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Completed</p>
                    <p className="text-3xl font-bold text-blue-600">10</p>
                  </div>
                  <User className="h-10 w-10 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bookings List */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary">Your Bookings</h2>
              <Button className="bg-accent hover:bg-accent-dark text-primary">
                New Booking
              </Button>
            </div>

            <div className="space-y-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl font-heading">{booking.type}</CardTitle>
                          <Badge className={`${getStatusColor(booking.status)} text-white`}>
                            {booking.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Invoice
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Calendar className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Date & Time</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.date} at {booking.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Pickup Location</p>
                            <p className="text-sm text-muted-foreground">{booking.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Destination</p>
                            <p className="text-sm text-muted-foreground">{booking.destination}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <User className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Assigned Officer</p>
                            <p className="text-sm text-muted-foreground">{booking.officer}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Security Detail</p>
                            <p className="text-sm text-muted-foreground">
                              {booking.officers} Officer{booking.officers > 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">Vehicle</p>
                            <p className="text-sm text-muted-foreground">{booking.vehicle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {booking.status === 'confirmed' && (
                      <div className="mt-6 pt-6 border-t flex gap-3">
                        <Button variant="outline" size="sm">
                          Modify Booking
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientDashboard;
