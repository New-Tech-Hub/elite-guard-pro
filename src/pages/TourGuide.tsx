import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Shield, Camera, Users, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourGuide = () => {
  const destinations = [
    {
      name: 'Lagos City Tour',
      description: 'Explore Victoria Island, Lekki, National Museum, and beaches with security.',
      duration: '1 Day',
      price: '₦100,000',
    },
    {
      name: 'Abuja Heritage Tour',
      description: 'Visit Aso Rock, National Mosque, Arts & Craft Village with armed escorts.',
      duration: '1 Day',
      price: '₦100,000',
    },
    {
      name: 'Calabar Cultural Experience',
      description: 'Tinapa Resort, Obudu Cattle Ranch, and cultural sites with protection.',
      duration: '2-3 Days',
      price: '₦250,000',
    },
    {
      name: 'Yankari Safari Adventure',
      description: 'Wildlife safari in Bauchi with professional security and guide.',
      duration: '2 Days',
      price: '₦200,000',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Armed Security',
      description: 'Trained security personnel accompany all tours',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Knowledgeable local guides for cultural insights',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photo opportunities at all locations',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Customize your itinerary to your preferences',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold">
                Tourism Security & Tour Guide
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Experience Nigeria's rich culture and heritage safely with professional security escorts and expert local guides
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure tourism experiences across Nigeria's most popular destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {destinations.map((destination, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-gold transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-heading font-semibold text-primary">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {destination.duration}
                      </div>
                      <div className="text-lg font-bold text-accent">{destination.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              What's Included in Every Tour
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4">Security & Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Armed security escorts throughout tour</li>
                    <li>✓ Risk assessment of all locations</li>
                    <li>✓ Emergency response protocols</li>
                    <li>✓ Secure transportation</li>
                    <li>✓ Communication equipment</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4">Tour Services</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Expert local tour guide</li>
                    <li>✓ Luxury vehicle transportation</li>
                    <li>✓ Entrance fees to attractions</li>
                    <li>✓ Bottled water and refreshments</li>
                    <li>✓ Photography assistance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Need a Custom Tour Package?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We can create personalized tour itineraries based on your interests, timeline, and security requirements
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary font-semibold px-8">
                  Book Custom Tour
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourGuide;
