import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Plane, MapPin, Car, Users, Star, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-security.jpg';

const Index = () => {
  const scrollRef = useScrollAnimation();

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
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children animate-on-scroll">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="h-7 w-7 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-5">
              Our Premium Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive security solutions tailored to your needs with military-grade protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children animate-on-scroll">
            {services.map((service, index) => (
              <Card key={index} className="border border-border hover:border-accent/50 card-interactive group bg-card overflow-hidden">
                <CardContent className="p-7">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-5 group-hover:shadow-gold group-hover:scale-105 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.link} className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold text-sm group/link transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Why Us</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-8">
                Why Choose 1145 Allied Protections?
              </h2>
              <div className="space-y-5">
                {[
                  'Highly trained and certified security professionals',
                  'Military-grade protection protocols',
                  '24/7 emergency response team',
                  'Armored vehicles and advanced security equipment',
                  'Discreet and professional service',
                  'Licensed and insured operations',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/25 transition-colors">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/about">
                  <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl h-13 px-8 font-semibold transition-all duration-300 hover:-translate-y-0.5">
                    Learn About Us
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <img
                src={heroImage}
                alt="Professional Security Team"
                className="rounded-2xl shadow-luxury"
              />
              <div className="relative mt-4 md:absolute md:-bottom-6 md:-right-6 bg-accent p-6 rounded-md shadow-gold max-w-xs">
                <p className="text-accent-foreground font-semibold text-lg font-heading leading-snug">
                  "Protection with precision, delivered with discretion"
                </p>
                <p className="text-accent-foreground/50 text-xs mt-2 font-body">RC: 9231838</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-5">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their experience with 1145 Allied Protections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children animate-on-scroll">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border card-interactive bg-card">
                <CardContent className="p-7">
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="pt-5 border-t border-border">
                    <p className="font-heading font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden border-t-4 border-accent">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience Elite Protection?
          </h2>
          <p className="text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your VIP escort service now and travel with confidence across Nigeria
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-bold px-10 h-14 text-lg rounded-xl shadow-gold transition-all duration-300 hover:-translate-y-0.5">
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/25 h-14 px-10 text-lg rounded-xl backdrop-blur-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
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
