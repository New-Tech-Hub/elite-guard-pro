import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Shield, Camera, Users, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourGuide = () => {
  const scrollRef = useScrollAnimation();

  const destinations = [
    { name: 'Lagos City Tour', description: 'Explore Victoria Island, Lekki, National Museum, and beaches with security.', duration: '1 Day', price: '₦100,000' },
    { name: 'Abuja Heritage Tour', description: 'Visit Aso Rock, National Mosque, Arts & Craft Village with armed escorts.', duration: '1 Day', price: '₦100,000' },
    { name: 'Calabar Cultural Experience', description: 'Tinapa Resort, Obudu Cattle Ranch, and cultural sites with protection.', duration: '2-3 Days', price: '₦250,000' },
    { name: 'Yankari Safari Adventure', description: 'Wildlife safari in Bauchi with professional security and guide.', duration: '2 Days', price: '₦200,000' },
  ];

  const features = [
    { icon: Shield, title: 'Armed Security', description: 'Trained security personnel accompany all tours' },
    { icon: Users, title: 'Expert Guides', description: 'Knowledgeable local guides for cultural insights' },
    { icon: Camera, title: 'Photography', description: 'Professional photo opportunities at all locations' },
    { icon: Clock, title: 'Flexible Schedule', description: 'Customize your itinerary to your preferences' },
  ];

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Explore Safely</span>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold">
                Tourism Security & Tour Guide
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              Experience Nigeria's rich culture and heritage safely with professional security escorts and expert local guides
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children animate-on-scroll">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-gold group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Destinations</span>
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Popular Tour Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure tourism experiences across Nigeria's most popular destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto stagger-children animate-on-scroll">
            {destinations.map((destination, index) => (
              <Card key={index} className="border border-border card-interactive group">
                <CardContent className="p-7">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-heading font-semibold text-primary">{destination.name}</h3>
                    <div className="flex items-center gap-1 bg-accent/10 px-2.5 py-1 rounded-full">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span className="text-sm font-semibold text-accent">4.9</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{destination.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {destination.duration}
                      </div>
                      <div className="text-lg font-heading font-bold text-gradient">{destination.price}</div>
                    </div>
                    <Link to="/booking">
                      <Button size="sm" className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Book
                        <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center animate-on-scroll">
              What's Included in Every Tour
            </h2>
            <div className="grid md:grid-cols-2 gap-6 stagger-children animate-on-scroll">
              <Card className="border border-border card-interactive">
                <CardContent className="p-7">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4">Security & Safety</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {['Armed security escorts throughout tour', 'Risk assessment of all locations', 'Emergency response protocols', 'Secure transportation', 'Communication equipment'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border border-border card-interactive">
                <CardContent className="p-7">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4">Tour Services</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {['Expert local tour guide', 'Luxury vehicle transportation', 'Entrance fees to attractions', 'Bottled water and refreshments', 'Photography assistance'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Need a Custom Tour Package?</h2>
            <p className="text-lg text-primary-foreground/85 mb-10 leading-relaxed">
              We can create personalized tour itineraries based on your interests, timeline, and security requirements
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-bold px-10 h-14 rounded-xl shadow-gold transition-all duration-300 hover:-translate-y-0.5">
                  Book Custom Tour
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/25 h-14 px-10 rounded-xl backdrop-blur-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
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
