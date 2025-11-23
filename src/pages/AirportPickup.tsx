import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Plane, Shield, CheckCircle } from 'lucide-react';
import airportImage from '@/assets/airport-pickup.jpg';

const AirportPickup = () => {
  const [serviceType, setServiceType] = useState('arrival');
  const [escortType, setEscortType] = useState('armed');
  const [addOns, setAddOns] = useState({
    vipLounge: false,
    luggageAssist: false,
    fastTrack: false,
  });

  const calculatePrice = () => {
    const basePrice = serviceType === 'arrival' ? 75000 : 75000;
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={airportImage}
            alt="Airport VIP Service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Plane className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                Airport Pickup & Transfer
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Secure and professional airport escort services with luxury transportation for international and domestic travelers
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">Book Airport Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Service Type */}
                      <div>
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select value={serviceType} onValueChange={setServiceType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="arrival">Airport Arrival Pickup</SelectItem>
                            <SelectItem value="departure">Airport Departure Drop-off</SelectItem>
                            <SelectItem value="both">Both (Round Trip)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Personal Information */}
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input id="fullName" placeholder="As on passport" required />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input id="phone" type="tel" placeholder="+234 xxx xxx xxxx" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      {/* Flight Details */}
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-semibold text-primary">Flight Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="airline">Airline *</Label>
                            <Input id="airline" placeholder="e.g., British Airways" required />
                          </div>
                          <div>
                            <Label htmlFor="flightNumber">Flight Number *</Label>
                            <Input id="flightNumber" placeholder="e.g., BA075" required />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="arrivalDate">Arrival Date *</Label>
                            <Input id="arrivalDate" type="date" required />
                          </div>
                          <div>
                            <Label htmlFor="arrivalTime">Arrival Time *</Label>
                            <Input id="arrivalTime" type="time" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="airport">Airport *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select airport" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lagos">Murtala Muhammed Airport (Lagos)</SelectItem>
                              <SelectItem value="abuja">Nnamdi Azikiwe Airport (Abuja)</SelectItem>
                              <SelectItem value="portharcourt">Port Harcourt Airport</SelectItem>
                              <SelectItem value="kano">Mallam Aminu Kano Airport</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Destination */}
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-semibold text-primary">Transfer Details</h3>
                        <div>
                          <Label htmlFor="destination">Destination Address *</Label>
                          <Input id="destination" placeholder="Hotel or residence address" required />
                        </div>
                        <div>
                          <Label htmlFor="passengers">Number of Passengers *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4+ Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Security Options */}
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-semibold text-primary">Security Options</h3>
                        <div>
                          <Label htmlFor="escortType">Security Escort</Label>
                          <Select value={escortType} onValueChange={setEscortType}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Armed Escort</SelectItem>
                              <SelectItem value="armed">Armed Security Escort (+₦30,000)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Add-ons */}
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-semibold text-primary">Additional Services</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="vipLounge"
                              checked={addOns.vipLounge}
                              onCheckedChange={(checked) =>
                                setAddOns({ ...addOns, vipLounge: checked as boolean })
                              }
                            />
                            <Label htmlFor="vipLounge" className="cursor-pointer">
                              VIP Lounge Access (+₦25,000)
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="luggageAssist"
                              checked={addOns.luggageAssist}
                              onCheckedChange={(checked) =>
                                setAddOns({ ...addOns, luggageAssist: checked as boolean })
                              }
                            />
                            <Label htmlFor="luggageAssist" className="cursor-pointer">
                              Luggage Assistance (+₦10,000)
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="fastTrack"
                              checked={addOns.fastTrack}
                              onCheckedChange={(checked) =>
                                setAddOns({ ...addOns, fastTrack: checked as boolean })
                              }
                            />
                            <Label htmlFor="fastTrack" className="cursor-pointer">
                              Fast Track Immigration (+₦15,000)
                            </Label>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent-dark text-primary font-semibold"
                      >
                        Book Airport Service
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Price Summary */}
              <div className="lg:col-span-1">
                <Card className="border-2 border-accent sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">Price Estimate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b">
                        <span className="text-sm text-muted-foreground">Service Type:</span>
                        <span className="text-sm font-semibold capitalize">{serviceType}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b">
                        <span className="text-sm text-muted-foreground">Security:</span>
                        <span className="text-sm font-semibold">{escortType === 'armed' ? 'Armed' : 'Standard'}</span>
                      </div>
                      {Object.entries(addOns).some(([_, v]) => v) && (
                        <div className="text-sm text-muted-foreground pb-2 border-b">
                          Add-ons selected
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t-2 border-accent">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Estimated Total:</span>
                        <span className="text-2xl font-bold text-accent">₦{calculatePrice()}</span>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-xs font-semibold mb-2">Included:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✓ Flight tracking</li>
                        <li>✓ Meet & greet</li>
                        <li>✓ Luxury vehicle</li>
                        <li>✓ Professional driver</li>
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
