import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Shield, Calculator, ArrowRight } from 'lucide-react';

const Booking = () => {
  const scrollRef = useScrollAnimation();
  const [escortType, setEscortType] = useState('armed');
  const [officers, setOfficers] = useState(2);
  const [duration, setDuration] = useState(1);
  const [addOns, setAddOns] = useState({ tourGuide: false, suvRental: false, convoyVehicles: 0 });

  const calculatePrice = () => {
    const basePrice = escortType === 'armed' ? 150000 : 100000;
    const officerPrice = officers * 50000;
    const durationMultiplier = duration;
    const tourGuidePrice = addOns.tourGuide ? 30000 : 0;
    const suvPrice = addOns.suvRental ? 50000 : 0;
    const convoyPrice = addOns.convoyVehicles * 75000;
    const total = (basePrice + officerPrice + tourGuidePrice + suvPrice) * durationMultiplier + convoyPrice;
    return total.toLocaleString('en-NG');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking submitted successfully! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 animate-on-scroll">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                  Book Your Security Escort
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Fill in the details below and we'll arrange professional security for your needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2 animate-on-scroll">
                <Card className="border border-border shadow-luxury">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">Service Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-heading font-semibold text-primary">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                            <Input id="fullName" placeholder="Enter your full name" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                            <Input id="phone" type="tel" placeholder="+234 xxx xxx xxxx" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required className="mt-1.5 h-12 rounded-xl" />
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Trip Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="pickup" className="text-foreground">Pickup Location *</Label>
                            <Input id="pickup" placeholder="Enter pickup address" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                          <div>
                            <Label htmlFor="destination" className="text-foreground">Destination *</Label>
                            <Input id="destination" placeholder="Enter destination" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date" className="text-foreground">Date *</Label>
                            <Input id="date" type="date" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                          <div>
                            <Label htmlFor="time" className="text-foreground">Time *</Label>
                            <Input id="time" type="time" required className="mt-1.5 h-12 rounded-xl" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Security Configuration</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-foreground">Escort Type *</Label>
                            <Select value={escortType} onValueChange={setEscortType}>
                              <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="armed">Armed Officers</SelectItem>
                                <SelectItem value="unarmed">Unarmed Officers</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-foreground">Number of Officers *</Label>
                            <Select value={officers.toString()} onValueChange={(v) => setOfficers(Number(v))}>
                              <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                {[1,2,3,4,5].map(n => (
                                  <SelectItem key={n} value={n.toString()}>{n === 5 ? '5+ Officers' : `${n} Officer${n > 1 ? 's' : ''}`}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label className="text-foreground">Duration (Days) *</Label>
                          <Select value={duration.toString()} onValueChange={(v) => setDuration(Number(v))}>
                            <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Day</SelectItem>
                              <SelectItem value="2">2 Days</SelectItem>
                              <SelectItem value="3">3 Days</SelectItem>
                              <SelectItem value="7">1 Week</SelectItem>
                              <SelectItem value="30">1 Month</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Additional Services</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-accent/30 transition-colors">
                            <Checkbox id="tourGuide" checked={addOns.tourGuide} onCheckedChange={(checked) => setAddOns({ ...addOns, tourGuide: checked as boolean })} />
                            <Label htmlFor="tourGuide" className="cursor-pointer text-foreground flex-1">Tour Guide (+₦30,000/day)</Label>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-accent/30 transition-colors">
                            <Checkbox id="suvRental" checked={addOns.suvRental} onCheckedChange={(checked) => setAddOns({ ...addOns, suvRental: checked as boolean })} />
                            <Label htmlFor="suvRental" className="cursor-pointer text-foreground flex-1">Luxury SUV Rental (+₦50,000/day)</Label>
                          </div>
                          <div>
                            <Label className="text-foreground">Additional Convoy Vehicles</Label>
                            <Select value={addOns.convoyVehicles.toString()} onValueChange={(v) => setAddOns({ ...addOns, convoyVehicles: Number(v) })}>
                              <SelectTrigger className="mt-1.5 h-12 rounded-xl"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0">None</SelectItem>
                                <SelectItem value="1">1 Vehicle (+₦75,000)</SelectItem>
                                <SelectItem value="2">2 Vehicles (+₦150,000)</SelectItem>
                                <SelectItem value="3">3 Vehicles (+₦225,000)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-border">
                        <h3 className="text-lg font-heading font-semibold text-primary">Special Requirements</h3>
                        <Textarea id="notes" placeholder="Any special requirements or instructions..." rows={4} className="rounded-xl" />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-bold rounded-xl h-14 transition-all duration-300 hover:-translate-y-0.5 shadow-gold">
                        Submit Booking Request
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
                    <CardTitle className="text-2xl font-heading flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Calculator className="h-5 w-5 text-accent" />
                      </div>
                      Price Estimate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[
                        { label: 'Escort Type', value: escortType === 'armed' ? 'Armed' : 'Unarmed' },
                        { label: 'Officers', value: String(officers) },
                        { label: 'Duration', value: `${duration} day(s)` },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between pb-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">{item.label}:</span>
                          <span className="font-semibold text-foreground text-sm">{item.value}</span>
                        </div>
                      ))}
                      {addOns.tourGuide && (
                        <div className="flex justify-between pb-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Tour Guide:</span>
                          <span className="font-semibold text-foreground text-sm">Yes</span>
                        </div>
                      )}
                      {addOns.suvRental && (
                        <div className="flex justify-between pb-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">SUV Rental:</span>
                          <span className="font-semibold text-foreground text-sm">Yes</span>
                        </div>
                      )}
                      {addOns.convoyVehicles > 0 && (
                        <div className="flex justify-between pb-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Convoy Vehicles:</span>
                          <span className="font-semibold text-foreground text-sm">{addOns.convoyVehicles}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t-2 border-accent/30">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-foreground">Estimated Total:</span>
                        <span className="text-2xl font-heading font-bold text-gradient">₦{calculatePrice()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">* Final price may vary based on specific requirements</p>
                    </div>

                    <div className="bg-muted p-4 rounded-xl space-y-2">
                      <p className="text-sm font-heading font-semibold text-foreground">What's Included:</p>
                      <ul className="text-xs text-muted-foreground space-y-1.5">
                        {['Professional security officers', 'Risk assessment', 'Communication equipment', 'Emergency response', '24/7 support'].map((item, i) => (
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

export default Booking;
