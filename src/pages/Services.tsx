import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Plane, MapPin, Car, Users, Building, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'VIP Escort Services',
      description: 'Professional armed and unarmed security escorts for high-profile individuals, executives, and dignitaries.',
      features: [
        'Armed or unarmed security personnel',
        'Close protection specialists',
        'Risk assessment and threat analysis',
        'Advance security planning',
        'Discreet and professional service',
        'Emergency response protocols',
      ],
      price: 'From ₦150,000/day',
      link: '/booking',
    },
    {
      icon: Plane,
      title: 'Airport Pickup & Transfer',
      description: 'Secure airport meet-and-greet services with professional escorts for arrivals and departures.',
      features: [
        'Flight tracking and monitoring',
        'VIP lounge access coordination',
        'Luggage assistance',
        'Fast-track immigration (where available)',
        'Luxury vehicle transportation',
        'Security escort to/from airport',
      ],
      price: 'From ₦75,000/trip',
      link: '/airport-pickup',
    },
    {
      icon: MapPin,
      title: 'Tourism Security & Tour Guide',
      description: 'Safe and secure tourism experiences with trained security personnel and knowledgeable local guides.',
      features: [
        'Certified tour guides',
        'Armed security escorts',
        'Route planning and risk assessment',
        'Cultural site protection',
        'Photography and documentation',
        'Multi-day tour packages available',
      ],
      price: 'From ₦100,000/day',
      link: '/tour-guide',
    },
    {
      icon: Car,
      title: 'Convoy & Armored Transport',
      description: 'Secure vehicle convoys and armored transportation for maximum safety during travel.',
      features: [
        'Armored vehicle fleet',
        'Multi-vehicle convoy coordination',
        'Route surveillance and monitoring',
        'Communication systems',
        'Tactical escort teams',
        'Emergency evacuation protocols',
      ],
      price: 'Custom pricing',
      link: '/booking',
    },
    {
      icon: Building,
      title: 'Event Security',
      description: 'Comprehensive security solutions for corporate events, private functions, and public gatherings.',
      features: [
        'Venue security assessment',
        'Access control management',
        'Guest screening',
        'Crowd control specialists',
        'Emergency response teams',
        'VIP protection at events',
      ],
      price: 'Custom pricing',
      link: '/booking',
    },
    {
      icon: Users,
      title: 'Executive Protection',
      description: 'Dedicated security teams for corporate executives and high-net-worth individuals.',
      features: [
        'Personal security detail',
        'Residential security',
        'Office/workplace protection',
        'Travel security coordination',
        'Threat intelligence',
        'Long-term security contracts',
      ],
      price: 'Custom pricing',
      link: '/booking',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="text-accent">Security Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive VIP protection and escort services tailored to your specific security needs across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-gold transition-all group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6 group-hover:shadow-gold transition-all">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-accent font-bold text-lg mb-4">{service.price}</p>
                    <Link to={service.link}>
                      <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground">
                        Book This Service
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Why Choose EliteShield Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-foreground font-semibold mb-2">Successful Missions</p>
                <p className="text-sm text-muted-foreground">VIP escort operations completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-foreground font-semibold mb-2">Emergency Response</p>
                <p className="text-sm text-muted-foreground">Round-the-clock availability</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-foreground font-semibold mb-2">Client Satisfaction</p>
                <p className="text-sm text-muted-foreground">Zero security breach record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Need a Custom Security Solution?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific security requirements and get a personalized quote
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary font-semibold px-8 h-14 text-lg shadow-gold">
                Book Service
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-14 px-8 text-lg backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
