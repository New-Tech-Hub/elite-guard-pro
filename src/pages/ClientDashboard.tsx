import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, MapPin, User, Download, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
type Booking = {
  id: string; service_type: string; booking_date: string; booking_time: string; pickup_location: string; destination: string; status: string; officers: number; payment_status: string; assigned_officers: unknown[];
};
const db = supabase as unknown as { from: (table: string) => any; channel: typeof supabase.channel; removeChannel: typeof supabase.removeChannel };

const ClientDashboard = () => {
  const scrollRef = useScrollAnimation();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | undefined;
    const loadBookings = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }
      const { data, error } = await db.from('bookings').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
      if (error) toast.error('Bookings could not be loaded.');
      else setBookings(data ?? []);
      channel = supabase.channel(`client-bookings-${user.id}`).on('postgres_changes', { event: '*', schema: 'public', table: 'bookings', filter: `user_id=eq.${user.id}` }, (payload) => {
        if (payload.eventType === 'DELETE') setBookings((current) => current.filter((item) => item.id !== payload.old.id));
        else setBookings((current) => { const next = payload.new as Booking; const without = current.filter((item) => item.id !== next.id); return [next, ...without]; });
      }).subscribe();
    };
    void loadBookings();
    return () => { if (channel) void db.removeChannel(channel); };
  }, []);

  const getStatusVariant = (status: string) => status === 'confirmed' ? 'bg-accent/15 text-accent border border-accent/30' : status === 'completed' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-muted text-muted-foreground border border-border';
  const stats = [{ label: 'Total Bookings', value: bookings.length, icon: Calendar }, { label: 'Active', value: bookings.filter((b) => b.status === 'confirmed').length, icon: Shield }, { label: 'Pending', value: bookings.filter((b) => b.status === 'pending').length, icon: Clock }, { label: 'Completed', value: bookings.filter((b) => b.status === 'completed').length, icon: User }];

  return <div className="min-h-screen" ref={scrollRef}>
    <Navbar />
    <section className="pt-32 pb-20 bg-primary text-primary-foreground relative overflow-hidden border-b-4 border-accent on-dark"><div className="container mx-auto px-4 relative z-10"><div className="flex items-center gap-4"><div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center"><Shield className="h-7 w-7 text-accent" /></div><div><h1 className="text-4xl font-heading font-bold">Client Dashboard</h1><p className="text-primary-foreground/75">Your booking statuses update from the live operations record.</p></div></div></div></section>
    <section className="py-12"><div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">{stats.map((stat) => <Card key={stat.label} className="border border-border card-interactive"><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">{stat.label}</p><p className="text-3xl font-heading font-bold text-primary">{stat.value}</p></div><div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center"><stat.icon className="h-6 w-6 text-accent" /></div></div></CardContent></Card>)}</div>
      <div><div className="flex items-center justify-between mb-6"><h2 className="text-2xl font-heading font-bold text-primary">Your Bookings</h2><Link to="/booking"><Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl">New Booking<ArrowRight className="h-4 w-4 ml-2" /></Button></Link></div>
      {loading ? <p className="text-muted-foreground">Loading your bookings…</p> : bookings.length === 0 ? <Card><CardContent className="p-8 text-center"><p className="text-muted-foreground mb-4">No bookings are linked to this account yet.</p><Link to="/booking"><Button className="bg-accent text-accent-foreground rounded-xl">Create a booking</Button></Link></CardContent></Card> : <div className="space-y-6">{bookings.map((booking) => <Card key={booking.id} className="border border-border card-interactive"><CardHeader><div className="flex items-start justify-between gap-4"><div><div className="flex flex-wrap items-center gap-3 mb-2"><CardTitle className="text-xl font-heading">{booking.service_type.replaceAll('_', ' ')}</CardTitle><span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusVariant(booking.status)}`}>{booking.status}</span></div><p className="text-sm text-muted-foreground">Booking ID: {booking.id.slice(0, 8).toUpperCase()}</p></div><Button variant="outline" size="sm" className="rounded-xl border-border" onClick={() => toast.info('Invoice download will be available after confirmation.')}><Download className="h-4 w-4 mr-2" />Invoice</Button></div></CardHeader><CardContent><div className="grid md:grid-cols-2 gap-6"><div className="space-y-3">{[{ icon: Calendar, title: 'Date & Time', value: `${booking.booking_date} at ${booking.booking_time}` }, { icon: MapPin, title: 'Pickup Location', value: booking.pickup_location }, { icon: MapPin, title: 'Destination', value: booking.destination }].map((item) => <div key={item.title} className="flex items-start gap-3"><div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"><item.icon className="h-4 w-4 text-accent" /></div><div><p className="text-sm font-semibold text-foreground">{item.title}</p><p className="text-sm text-muted-foreground">{item.value}</p></div></div>)}</div><div className="space-y-3">{[{ icon: User, title: 'Assigned Officer', value: booking.assigned_officers.length ? JSON.stringify(booking.assigned_officers) : 'Pending Assignment' }, { icon: Shield, title: 'Security Detail', value: `${booking.officers} Officer${booking.officers > 1 ? 's' : ''}` }, { icon: Shield, title: 'Payment Status', value: booking.payment_status }].map((item) => <div key={item.title} className="flex items-start gap-3"><div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"><item.icon className="h-4 w-4 text-accent" /></div><div><p className="text-sm font-semibold text-foreground">{item.title}</p><p className="text-sm text-muted-foreground break-words">{item.value}</p></div></div>)}</div></div></CardContent></Card>)}</div>}
      </div>
    </div></section>
    <Footer />
  </div>;
};

export default ClientDashboard;
