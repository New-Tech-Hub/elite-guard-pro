import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Calendar, MapPin, User, Download, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientDashboard = () => {
  const scrollRef = useScrollAnimation();

  const bookings = [
    {
      id: 'BK001', type: 'VIP Escort', date: '2025-12-01', time: '09:00 AM',
      location: 'Victoria Island, Lagos', destination: 'Lekki Phase 1', status: 'confirmed',
      officer: 'Officer John Adebayo', officers: 2, vehicle: 'Black Range Rover (ABC-123-XY)',
    },
    {
      id: 'BK002', type: 'Airport Pickup', date: '2025-12-05', time: '2:30 PM',
      location: 'Murtala Muhammed Airport', destination: 'Eko Hotel, VI', status: 'pending',
      officer: 'Pending Assignment', officers: 1, vehicle: 'Pending',
    },
    {
      id: 'BK003', type: 'Tour Guide', date: '2025-11-20', time: '10:00 AM',
      location: 'National Museum, Lagos', destination: 'Multi-location', status: 'completed',
      officer: 'Officer Sarah Williams', officers: 2, vehicle: 'Mercedes G-Wagon (XYZ-456-AB)',
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-accent/15 text-accent border border-accent/30';
      case 'pending': return 'bg-muted text-muted-foreground border border-border';
      case 'completed': return 'bg-primary/10 text-primary border border-primary/20';
      default: return 'bg-muted text-muted-foreground border border-border';
    }
  };

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center">
              <Shield className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-heading font-bold">Client Dashboard</h1>
              <p className="text-primary-foreground/75">Manage your security bookings and assignments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 stagger-children animate-on-scroll">
            {[
              { label: 'Total Bookings', value: '12', icon: Calendar },
              { label: 'Active', value: '1', icon: Shield },
              { label: 'Pending', value: '1', icon: Clock },
              { label: 'Completed', value: '10', icon: User },
            ].map((stat, i) => (
              <Card key={i} className="border border-border card-interactive group">
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

          {/* Bookings */}
          <div className="animate-on-scroll">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary">Your Bookings</h2>
              <Link to="/booking">
                <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl shadow-gold transition-all duration-300 hover:-translate-y-0.5">
                  New Booking
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="border border-border card-interactive">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl font-heading">{booking.type}</CardTitle>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusVariant(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-xl border-border hover:border-accent/30">
                        <Download className="h-4 w-4 mr-2" />
                        Invoice
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        {[
                          { icon: Calendar, title: 'Date & Time', value: `${booking.date} at ${booking.time}` },
                          { icon: MapPin, title: 'Pickup Location', value: booking.location },
                          { icon: MapPin, title: 'Destination', value: booking.destination },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <item.icon className="h-4 w-4 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {[
                          { icon: User, title: 'Assigned Officer', value: booking.officer },
                          { icon: Shield, title: 'Security Detail', value: `${booking.officers} Officer${booking.officers > 1 ? 's' : ''}` },
                          { icon: Shield, title: 'Vehicle', value: booking.vehicle },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <item.icon className="h-4 w-4 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {booking.status === 'confirmed' && (
                      <div className="mt-6 pt-6 border-t border-border flex gap-3">
                        <Button variant="outline" size="sm" className="rounded-xl">Modify Booking</Button>
                        <Button variant="outline" size="sm" className="rounded-xl text-destructive border-destructive/30 hover:bg-destructive/5">Cancel</Button>
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
