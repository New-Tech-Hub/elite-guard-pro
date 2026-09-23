import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Plane, CheckCircle, ArrowRight } from 'lucide-react';
import airportImage from '@/assets/airport-pickup.jpg';

const AirportPickup = () => {
  const scrollRef = useScrollAnimation();
  const [serviceType, setServiceType] = useState('arrival');
  const [escortType, setEscortType] = useState('armed');
  const [addOns, setAddOns] = useState({ vipLounge: false, luggageAssist: false, fastTrack: false });

  const calculatePrice = () => {
    const basePrice = 75000;
    const escortPrice = escortType === 'armed' ? 30000 : 0;
    const vipLoungePrice = addOns.vipLounge ? 25000 : 0;
    const luggagePrice = addOns.luggageAssist ? 10000 : 0;
    const fastTrackPrice = addOns.fastTrack ? 15000 : 0;
    const total = basePrice + escortPrice + vipLoungePrice + luggagePrice + fastTrackPrice;
    return total.toLocaleString('en-NG');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Airport pickup booking submitted! We will contact you shortly.');
  };

  const features = [
    'Flight tracking and monitoring',
    'Professional meet-and-greet service',
    'Luxury vehicle transportation',
    'Security escort to/from airport',
    'Luggage handling assistance',
    'VIP lounge access (optional)',
  ];

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden on-dark border-b-4 border-accent">
        <div className="absolute inset-0 z-0">
          <img src={airportImage} alt="Airport VIP Service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-shade" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block brand-accent font-semibold text-sm tracking-widest uppercase mb-4">Travel Safely</span>
            <div className="flex items-center gap-3 mb-4">
              <Plane className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
                Airport Pickup & Transfer
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Secure and professional airport escort services with luxury transportation for travelers
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 stagger-children animate-on-scroll">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 animate-on-scroll">
                <Card className="border border-border shadow-luxury">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">Book Airport Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label className="text-foreground">Service Type *</Label>
                        <Select value={serviceType} onValueChange={setServiceType}>
                          <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="arrival">Airport Arrival Pickup</SelectItem>
                            <SelectItem value="departure">Airport Departure Drop-off</SelectItem>
                            <SelectItem value="both">Both (Round Trip)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-foreground">Full Name *</Label>
                            <Input placeholder="As on passport" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                          <div>
                            <Label className="text-foreground">Phone Number *</Label>
                            <Input type="tel" placeholder="+234 xxx xxx xxxx" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                        </div>
                        <div>
                          <Label className="text-foreground">Email Address *</Label>
                          <Input type="email" placeholder="your@email.com" required className="mt-1.5 h-12 rounded-xl" />
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Flight Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-foreground">Airline *</Label>
                            <Input placeholder="e.g., British Airways" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                          <div>
                            <Label className="text-foreground">Flight Number *</Label>
                            <Input placeholder="e.g., BA075" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-foreground">Arrival Date *</Label>
                            <Input type="date" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                          <div>
                            <Label className="text-foreground">Arrival Time *</Label>
                            <Input type="time" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                        </div>
                        <div>
                          <Label className="text-foreground">Airport *</Label>
                          <Select>
                            <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue placeholder="Select airport" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lagos">Murtala Muhammed Airport (Lagos)</SelectItem>
                              <SelectItem value="abuja">Nnamdi Azikiwe Airport (Abuja)</SelectItem>
                              <SelectItem value="portharcourt">Port Harcourt Airport</SelectItem>
                              <SelectItem value="kano">Mallam Aminu Kano Airport</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Transfer Details</h3>
                        <div>
                          <Label className="text-foreground">Destination Address *</Label>
                          <Input placeholder="Hotel or residence address" required className="mt-1.5 h-12 rounded-xl" />
                        </div>
                        <div>
                          <Label className="text-foreground">Number of Passengers *</Label>
                          <Select>
                            <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4].map(n => (
                                <SelectItem key={n} value={n.toString()}>{n === 4 ? '4+ Passengers' : `${n} Passenger${n > 1 ? 's' : ''}`}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Security Options</h3>
                        <div>
                          <Label className="text-foreground">Security Escort</Label>
                          <Select value={escortType} onValueChange={setEscortType}>
                            <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Armed Escort</SelectItem>
                              <SelectItem value="armed">Armed Security Escort (+₦30,000)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Additional Services</h3>
                        <div className="space-y-3">
                          {[
                            { id: 'vipLounge', label: 'VIP Lounge Access (+₦25,000)', key: 'vipLounge' as const },
                            { id: 'luggageAssist', label: 'Luggage Assistance (+₦10,000)', key: 'luggageAssist' as const },
                            { id: 'fastTrack', label: 'Fast Track Immigration (+₦15,000)', key: 'fastTrack' as const },
                          ].map(({ id, label, key }) => (
                            <div key={id} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-accent/30 transition-colors">
                              <Checkbox id={id} checked={addOns[key]} onCheckedChange={(checked) => setAddOns({ ...addOns, [key]: checked as boolean })} />
                              <Label htmlFor={id} className="cursor-pointer text-foreground flex-1">{label}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-bold rounded-xl h-14 transition-all duration-300 hover:-translate-y-0.5 shadow-gold">
                        Book Airport Service
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Price Summary */}
              <div className="lg:col-span-1 animate-on-scroll">
                <Card className="border-2 border-accent/30 sticky top-24 shadow-luxury">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">Price Estimate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b border-border">
                        <span className="text-sm text-muted-foreground">Service Type:</span>
                        <span className="text-sm font-semibold text-foreground capitalize">{serviceType}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-border">
                        <span className="text-sm text-muted-foreground">Security:</span>
                        <span className="text-sm font-semibold text-foreground">{escortType === 'armed' ? 'Armed' : 'Standard'}</span>
                      </div>
                      {Object.entries(addOns).some(([_, v]) => v) && (
                        <div className="text-sm text-muted-foreground pb-2 border-b border-border">Add-ons selected</div>
                      )}
                    </div>

                    <div className="pt-4 border-t-2 border-accent/30">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">Estimated Total:</span>
                        <span className="text-2xl font-heading font-bold text-gradient">₦{calculatePrice()}</span>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-xl">
                      <p className="text-xs font-heading font-semibold text-foreground mb-2">Included:</p>
                      <ul className="text-xs text-muted-foreground space-y-1.5">
                        {['Flight tracking', 'Meet & greet', 'Luxury vehicle', 'Professional driver'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AirportPickup;
