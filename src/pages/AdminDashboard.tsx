import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Users, Calendar, DollarSign, Car, UserCheck, LogOut } from 'lucide-react';
import { toast } from 'sonner';

interface LiveBooking {
  id: string; full_name: string; service_type: string; booking_date: string; booking_time: string;
  officers: number; status: string; pickup_location: string; destination: string;
  estimated_total: number; assigned_officers: unknown[]; vehicle?: string | null;
}
const db = supabase as unknown as { from: (table: string) => any; channel: typeof supabase.channel; removeChannel: typeof supabase.removeChannel };

const officers = [
  { id: 'OFF001', name: 'John Adebayo', status: 'available', specialty: 'VIP Protection' },
  { id: 'OFF002', name: 'Sarah Williams', status: 'assigned', specialty: 'Tour Guide' },
  { id: 'OFF003', name: 'Michael Okonkwo', status: 'available', specialty: 'Professional Escort' },
];
const vehicles = [
  { id: 'VEH001', model: 'Range Rover', plate: 'ABC-123-XY', status: 'available' },
  { id: 'VEH002', model: 'Mercedes G-Wagon', plate: 'XYZ-456-AB', status: 'in-use' },
  { id: 'VEH003', model: 'Toyota Land Cruiser', plate: 'DEF-789-CD', status: 'available' },
];

const AdminDashboard = () => {
  const scrollRef = useScrollAnimation();
  const [bookings, setBookings] = useState<LiveBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selections, setSelections] = useState<Record<string, { officer?: string; vehicle?: string }>>({});

  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | undefined;
    const load = async () => {
      const { data, error } = await db.from('bookings').select('*').order('created_at', { ascending: false });
      if (error) toast.error('Live bookings could not be loaded.');
      else setBookings((data ?? []) as LiveBooking[]);
      setLoading(false);
      channel = supabase.channel('admin-live-bookings').on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, (payload) => {
        if (payload.eventType === 'DELETE') setBookings((current) => current.filter((item) => item.id !== payload.old.id));
        else setBookings((current) => { const next = payload.new as LiveBooking; return [next, ...current.filter((item) => item.id !== next.id)]; });
      }).subscribe();
    };
    void load();
    return () => { if (channel) void db.removeChannel(channel); };
  }, []);

  const pendingBookings = bookings.filter((booking) => booking.status === 'pending');
  const revenue = useMemo(() => bookings.reduce((sum, booking) => sum + Number(booking.estimated_total || 0), 0), [bookings]);
  const stats = [
    { label: 'Total Bookings', value: bookings.length, icon: Calendar },
    { label: 'Active Escorts', value: bookings.filter((booking) => booking.status === 'confirmed').length, icon: Shield },
    { label: 'Available Officers', value: officers.filter((officer) => officer.status === 'available').length, icon: UserCheck },
    { label: 'Recorded Estimates', value: `₦${revenue.toLocaleString('en-NG')}`, icon: DollarSign },
  ];

  const updateSelection = (bookingId: string, key: 'officer' | 'vehicle', value: string) => setSelections((current) => ({ ...current, [bookingId]: { ...current[bookingId], [key]: value } }));
  const assignBooking = async (booking: LiveBooking) => {
    const selection = selections[booking.id];
    if (!selection?.officer || !selection.vehicle) { toast.error('Select an officer and vehicle first.'); return; }
    const officer = officers.find((item) => item.id === selection.officer);
    const vehicle = vehicles.find((item) => item.id === selection.vehicle);
    const { error } = await db.from('bookings').update({ status: 'confirmed', assigned_officers: [{ id: officer?.id, name: officer?.name }], vehicle: vehicle?.model ?? null }).eq('id', booking.id);
    if (error) toast.error('Assignment could not be saved.');
    else toast.success('Booking assigned and confirmed.');
  };
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return <div className="min-h-screen" ref={scrollRef}><Navbar />
    <section className="pt-32 pb-12 bg-primary text-primary-foreground border-b-4 border-accent on-dark"><div className="container mx-auto px-4"><div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"><div className="flex items-center gap-4"><div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center"><Shield className="h-7 w-7 text-accent" /></div><div><h1 className="text-4xl font-heading font-bold">Admin Dashboard</h1><p className="text-primary-foreground/75">Live booking records and assignment controls.</p></div></div><Button variant="outline" onClick={() => void signOut()} className="w-full sm:w-auto border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><LogOut className="mr-2 h-4 w-4" />Sign out</Button></div></div></section>
    <section className="py-12"><div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">{stats.map((stat) => <Card key={stat.label} className="border border-border card-interactive"><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground mb-1">{stat.label}</p><p className="text-3xl font-heading font-bold text-primary">{stat.value}</p></div><div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center"><stat.icon className="h-6 w-6 text-accent" /></div></div></CardContent></Card>)}</div>
      <Tabs defaultValue="bookings" className="space-y-6"><TabsList className="bg-muted/50 border border-border rounded-xl p-1 h-auto"><TabsTrigger value="bookings" className="rounded-lg px-5 py-2.5">Bookings</TabsTrigger><TabsTrigger value="officers" className="rounded-lg px-5 py-2.5">Officers</TabsTrigger><TabsTrigger value="vehicles" className="rounded-lg px-5 py-2.5">Vehicles</TabsTrigger></TabsList>
        <TabsContent value="bookings" className="space-y-6"><h2 className="text-2xl font-heading font-bold text-primary">Pending Assignments</h2>{loading ? <p className="text-muted-foreground">Loading live bookings…</p> : pendingBookings.length === 0 ? <Card><CardContent className="p-8 text-center text-muted-foreground">No pending assignments.</CardContent></Card> : pendingBookings.map((booking) => <Card key={booking.id} className="border border-border card-interactive"><CardHeader><CardTitle className="text-xl font-heading">{booking.service_type.replace(/_/g, ' ')} <span className="ml-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">Pending Assignment</span></CardTitle><p className="text-sm text-muted-foreground">{booking.full_name} · {booking.booking_date} at {booking.booking_time}</p></CardHeader><CardContent><p className="text-sm text-muted-foreground mb-5">{booking.pickup_location} → {booking.destination} · {booking.officers} officer{booking.officers === 1 ? '' : 's'}</p><div className="grid md:grid-cols-3 gap-4"><div><Label>Primary Officer</Label><Select onValueChange={(value) => updateSelection(booking.id, 'officer', value)}><SelectTrigger className="mt-1.5 h-11 rounded-xl"><SelectValue placeholder="Select officer" /></SelectTrigger><SelectContent>{officers.filter((item) => item.status === 'available').map((officer) => <SelectItem key={officer.id} value={officer.id}>{officer.name}</SelectItem>)}</SelectContent></Select></div><div><Label>Vehicle</Label><Select onValueChange={(value) => updateSelection(booking.id, 'vehicle', value)}><SelectTrigger className="mt-1.5 h-11 rounded-xl"><SelectValue placeholder="Select vehicle" /></SelectTrigger><SelectContent>{vehicles.filter((item) => item.status === 'available').map((vehicle) => <SelectItem key={vehicle.id} value={vehicle.id}>{vehicle.model} - {vehicle.plate}</SelectItem>)}</SelectContent></Select></div><div className="flex items-end"><Button onClick={() => void assignBooking(booking)} className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl h-11">Assign & Confirm</Button></div></div></CardContent></Card>)}</TabsContent>
        <TabsContent value="officers"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{officers.map((officer) => <Card key={officer.id}><CardContent className="p-6"><Users className="h-5 w-5 text-accent mb-4" /><h3 className="font-heading font-semibold">{officer.name}</h3><p className="text-sm text-muted-foreground">{officer.specialty}</p><p className="mt-3 text-sm capitalize">{officer.status}</p></CardContent></Card>)}</div></TabsContent>
        <TabsContent value="vehicles"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{vehicles.map((vehicle) => <Card key={vehicle.id}><CardContent className="p-6"><Car className="h-5 w-5 text-accent mb-4" /><h3 className="font-heading font-semibold">{vehicle.model}</h3><p className="text-sm text-muted-foreground">{vehicle.plate}</p><p className="mt-3 text-sm capitalize">{vehicle.status}</p></CardContent></Card>)}</div></TabsContent>
      </Tabs>
    </div></section><Footer /></div>;
};
export default AdminDashboard;
