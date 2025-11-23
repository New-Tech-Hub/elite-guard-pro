import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Shield, Calculator } from 'lucide-react';

const Booking = () => {
  const [escortType, setEscortType] = useState('armed');
  const [officers, setOfficers] = useState(2);
  const [duration, setDuration] = useState(1);
  const [addOns, setAddOns] = useState({
    tourGuide: false,
    suvRental: false,
    convoyVehicles: 0,
  });

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
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield className="h-8 w-8 text-accent" />
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
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading">Service Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input id="fullName" placeholder="Enter your full name" required />
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

                      {/* Trip Details */}
                      <div className="space-y-4 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-primary">Trip Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="pickup">Pickup Location *</Label>
                            <Input id="pickup" placeholder="Enter pickup address" required />
                          </div>
                          <div>
                            <Label htmlFor="destination">Destination *</Label>
                            <Input id="destination" placeholder="Enter destination" required />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date">Date *</Label>
                            <Input id="date" type="date" required />
                          </div>
                          <div>
                            <Label htmlFor="time">Time *</Label>
                            <Input id="time" type="time" required />
                          </div>
                        </div>
                      </div>

                      {/* Security Configuration */}
                      <div className="space-y-4 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-primary">Security Configuration</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="escortType">Escort Type *</Label>
                            <Select value={escortType} onValueChange={setEscortType}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="armed">Armed Officers</SelectItem>
                                <SelectItem value="unarmed">Unarmed Officers</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="officers">Number of Officers *</Label>
                            <Select value={officers.toString()} onValueChange={(v) => setOfficers(Number(v))}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Officer</SelectItem>
                                <SelectItem value="2">2 Officers</SelectItem>
                                <SelectItem value="3">3 Officers</SelectItem>
                                <SelectItem value="4">4 Officers</SelectItem>
                                <SelectItem value="5">5+ Officers</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="duration">Duration (Days) *</Label>
                          <Select value={duration.toString()} onValueChange={(v) => setDuration(Number(v))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
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

                      {/* Add-ons */}
                      <div className="space-y-4 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-primary">Additional Services</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="tourGuide"
                              checked={addOns.tourGuide}
                              onCheckedChange={(checked) =>
                                setAddOns({ ...addOns, tourGuide: checked as boolean })
                              }
                            />
                            <Label htmlFor="tourGuide" className="cursor-pointer">
                              Tour Guide (+₦30,000/day)
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="suvRental"
                              checked={addOns.suvRental}
                              onCheckedChange={(checked) =>
                                setAddOns({ ...addOns, suvRental: checked as boolean })
                              }
                            />
                            <Label htmlFor="suvRental" className="cursor-pointer">
                              Luxury SUV Rental (+₦50,000/day)
                            </Label>
                          </div>
                          <div>
                            <Label htmlFor="convoyVehicles">Additional Convoy Vehicles</Label>
                            <Select
                              value={addOns.convoyVehicles.toString()}
                              onValueChange={(v) =>
                                setAddOns({ ...addOns, convoyVehicles: Number(v) })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
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

                      {/* Special Requirements */}
                      <div className="space-y-4 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-primary">Special Requirements</h3>
                        <div>
                          <Label htmlFor="notes">Additional Notes</Label>
                          <Textarea
                            id="notes"
                            placeholder="Any special requirements or instructions..."
                            rows={4}
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent-dark text-primary font-semibold"
                      >
                        Submit Booking Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Price Summary */}
              <div className="lg:col-span-1">
                <Card className="border-2 border-accent sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading flex items-center gap-2">
                      <Calculator className="h-6 w-6 text-accent" />
                      Price Estimate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b">
                        <span className="text-muted-foreground">Escort Type:</span>
                        <span className="font-semibold">{escortType === 'armed' ? 'Armed' : 'Unarmed'}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b">
                        <span className="text-muted-foreground">Officers:</span>
                        <span className="font-semibold">{officers}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{duration} day(s)</span>
                      </div>
                      {addOns.tourGuide && (
                        <div className="flex justify-between pb-2 border-b">
                          <span className="text-muted-foreground">Tour Guide:</span>
                          <span className="font-semibold">Yes</span>
                        </div>
                      )}
                      {addOns.suvRental && (
                        <div className="flex justify-between pb-2 border-b">
                          <span className="text-muted-foreground">SUV Rental:</span>
                          <span className="font-semibold">Yes</span>
                        </div>
                      )}
                      {addOns.convoyVehicles > 0 && (
                        <div className="flex justify-between pb-2 border-b">
                          <span className="text-muted-foreground">Convoy Vehicles:</span>
                          <span className="font-semibold">{addOns.convoyVehicles}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t-2 border-accent">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Estimated Total:</span>
                        <span className="text-2xl font-bold text-accent">₦{calculatePrice()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        * Final price may vary based on specific requirements
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <p className="text-sm font-semibold">What's Included:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✓ Professional security officers</li>
                        <li>✓ Risk assessment</li>
                        <li>✓ Communication equipment</li>
                        <li>✓ Emergency response</li>
                        <li>✓ 24/7 support</li>
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
