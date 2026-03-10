import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Plane, MapPin, Car, Users, Star, CheckCircle, Clock, Award } from 'lucide-react';
import heroImage from '@/assets/hero-security.jpg';

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: 'VIP Escort Services',
      description: 'Professional armed and unarmed escorts for high-profile individuals and executives.',
      link: '/services',
    },
    {
      icon: Plane,
      title: 'Airport Pickup & Drop-off',
      description: 'Secure airport transfers with meet-and-greet services for international and domestic travelers.',
      link: '/airport-pickup',
    },
    {
      icon: MapPin,
      title: 'Tour Guide Protection',
      description: 'Safe tourism experiences with trained security personnel and local guides.',
      link: '/tour-guide',
    },
    {
      icon: Car,
      title: 'Convoy & Armored Transport',
      description: 'Secure vehicle convoys and armored transportation for maximum safety.',
      link: '/services',
    },
  ];

  const testimonials = [
    {
      name: 'Chief Adebayo M.',
      role: 'Business Executive',
      rating: 5,
      text: '1145 Allied Protections provided exceptional security during my recent trip to Lagos. Professional, discreet, and highly reliable.',
    },
    {
      name: 'Ambassador Williams',
      role: 'Diplomat',
      rating: 5,
      text: 'Outstanding service! Their team made me feel completely safe throughout my visit. Highly recommend for VIP protection.',
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'International Consultant',
      rating: 5,
      text: 'The airport pickup service was seamless. My security escort was professional and the vehicle was immaculate.',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Protected' },
    { icon: Clock, value: '24/7', label: 'Available Support' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Star, value: '5.0', label: 'Client Rating' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="VIP Security Escort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full">
              <span className="text-accent font-semibold text-sm">Nigeria's Premier Security Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Secure VIP Escort Services <span className="text-accent">Across Nigeria</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Professional armed escorts, airport pickups, tour guide protection, and convoy services for high-profile individuals and executives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary font-semibold px-8 h-14 text-lg shadow-gold">
                  Book Escort Now
                </Button>
              </Link>
              <Link to="/airport-pickup">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-14 px-8 text-lg backdrop-blur-sm">
                  Airport Pickup
                </Button>
              </Link>
              <Link to="/tour-guide">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-14 px-8 text-lg backdrop-blur-sm">
                  Tour Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your needs with military-grade protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-gold transition-all group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:shadow-gold transition-all">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="ghost" className="text-accent hover:text-accent-dark p-0 h-auto font-semibold">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Why Choose EliteShield?
              </h2>
              <div className="space-y-4">
                {[
                  'Highly trained and certified security professionals',
                  'Military-grade protection protocols',
                  '24/7 emergency response team',
                  'Armored vehicles and advanced security equipment',
                  'Discreet and professional service',
                  'Licensed and insured operations',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional Security Team"
                className="rounded-2xl shadow-luxury"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-xl shadow-gold max-w-xs">
                <p className="text-primary font-semibold text-lg">
                  "Trusted by Nigeria's top executives and international dignitaries"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with EliteShield
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience Elite Protection?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your VIP escort service now and travel with confidence across Nigeria
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary font-semibold px-8 h-14 text-lg shadow-gold">
                Book Now
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

export default Index;
