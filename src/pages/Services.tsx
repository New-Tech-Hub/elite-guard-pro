import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Plane, MapPin, Car, Users, Building, ClipboardCheck, Headphones, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollRef = useScrollAnimation();

  const services = [
    {
      icon: Shield, title: 'VIP Escort Services',
      description: 'Professional armed and unarmed security escorts for high-profile individuals, executives, and dignitaries.',
      features: ['Armed or unarmed security personnel', 'Close protection specialists', 'Detailed security assessment and planning', 'Advance security planning', 'Discreet and professional service', 'Emergency response protocols'],
      price: 'From ₦150,000/day', link: '/booking',
    },
    {
      icon: Plane, title: 'Airport Pickup & Transfer',
      description: 'Secure airport meet-and-greet services with professional escorts for arrivals and departures.',
      features: ['Flight tracking and monitoring', 'VIP lounge access coordination', 'Luggage assistance', 'Fast-track immigration (where available)', 'Luxury vehicle transportation', 'Security escort to/from airport'],
      price: 'From ₦75,000/trip', link: '/airport-pickup',
    },
    {
      icon: MapPin, title: 'Tourism Security & Tour Guide',
      description: 'Safe and secure tourism experiences with trained security personnel and knowledgeable local guides.',
      features: ['Certified tour guides', 'Armed security escorts', 'Route planning and risk assessment', 'Cultural site protection', 'Photography and documentation', 'Multi-day tour packages available'],
      price: 'From ₦100,000/day', link: '/tour-guide',
    },
    {
      icon: Car, title: 'Secure Transport',
      description: 'Secure vehicle convoys and armored transportation for maximum safety during travel.',
      features: ['Armored vehicle fleet', 'Multi-vehicle convoy coordination', 'Route surveillance and monitoring', 'Communication systems', 'Professional escort teams', 'Emergency response planning'],
      price: 'Custom pricing', link: '/booking',
    },
    {
      icon: Building, title: 'Event Security',
      description: 'Comprehensive security solutions for corporate events, private functions, and public gatherings.',
      features: ['Venue security assessment', 'Access control management', 'Guest screening', 'Crowd control specialists', 'Emergency response teams', 'VIP protection at events'],
      price: 'Custom pricing', link: '/booking',
    },
    {
      icon: Users, title: 'Executive Protection',
      description: 'Dedicated security teams for corporate executives and high-net-worth individuals.',
      features: ['Personal security detail', 'Residential security', 'Office/workplace protection', 'Travel security coordination', 'Ongoing security advisory', 'Long-term security contracts'],
      price: 'Custom pricing', link: '/booking',
    },
    {
      icon: Building, title: 'Site & Asset Protection',
      description: 'Professional security solutions to safeguard your premises and assets.',
      features: ['Site security planning', 'Asset protection', 'Access management', 'Discreet, professional service'],
      price: 'Request a quote', link: '/contact',
    },
    {
      icon: ClipboardCheck, title: 'Risk Assessment',
      description: 'Security and risk management assessments tailored to your protection needs.',
      features: ['Security needs review', 'Risk assessment', 'Protection planning', 'Professional recommendations'],
      price: 'Request a consultation', link: '/contact',
    },
    {
      icon: Headphones, title: '24/7 Support',
      description: 'Round-the-clock support for your safety and peace of mind.',
      features: ['24/7 availability', 'Security enquiries', 'Protection coordination', 'Call +234 809 094 2939'],
      price: 'Contact our team', link: '/contact',
    },
  ];

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground relative overflow-hidden border-b-4 border-accent on-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block brand-accent font-semibold text-sm tracking-widest uppercase mb-4">Our Solutions</span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Our <span className="text-gradient">Security Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              Professional security and risk management solutions: executive protection, site and asset protection, event security, secure transport, risk assessment, and 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children animate-on-scroll">
            {services.map((service, index) => (
              <Card key={index} className="border border-border card-interactive group overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-gold group-hover:scale-105 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>

                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-accent font-bold text-lg mb-4 font-heading">{service.price}</p>
                    <Link to={service.link}>
                      <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl font-semibold group/btn transition-all duration-300">
                        Discuss This Service
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Our Commitment</span>
            <h2 className="text-4xl font-heading font-bold text-primary mb-12">
              Why Choose 1145 Allied Protections?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: 'Vigilant', label: 'Protecting What Matters Most', sub: 'Professional security and risk management' },
                { value: '24/7', label: 'Support', sub: 'Round-the-clock availability' },
                { value: 'Committed', label: 'Standing Guard. Securing Peace.', sub: 'Discipline, discretion, and maximum efficiency' },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-5xl font-heading font-bold text-gradient mb-2">{stat.value}</div>
                  <p className="text-foreground font-semibold mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden border-b-4 border-accent on-dark">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Need a Custom Security Solution?</h2>
          <p className="text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss your specific security requirements and get a personalized quote
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-bold px-10 h-14 text-lg rounded-xl shadow-gold transition-all duration-300 hover:-translate-y-0.5">
                Book Service
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

export default Services;
