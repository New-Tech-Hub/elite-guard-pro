import Seo from '@/components/Seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Users, Award, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import convoyImage from '@/assets/convoy-suv.jpg';

const About = () => {
  const scrollRef = useScrollAnimation();

  const values = [
    { icon: Shield, title: 'Vigilant', description: 'Attentive security and proactive risk assessment to protect what matters most.' },
    { icon: Users, title: 'Reliable', description: 'Dependable protection delivered with discipline and discretion.' },
    { icon: Award, title: 'Professional', description: 'Professional security and risk management solutions with maximum efficiency.' },
    { icon: Target, title: 'Committed', description: 'Dedicated to your safety and peace of mind.' },
  ];

  const achievements = [
    'Executive protection', 'Site & asset protection', 'Event security',
    'Secure transport', 'Risk assessment', '24/7 support',
  ];

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Seo title="About 1145 Allied Protections Ltd | Security & Risk Management in Nigeria" description="Trusted provider of professional security and risk management solutions, operating with discipline, discretion, and maximum efficiency." path="/about" />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground relative overflow-hidden border-b-4 border-accent on-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block brand-accent font-semibold text-sm tracking-widest uppercase mb-4">Who We Are</span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              About <span className="text-gradient">1145 Allied Protections</span>
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              1145 Allied Protections is a trusted provider of professional security and risk management solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Our Purpose</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Protecting what matters most. We operate with discipline, discretion, and maximum efficiency to ensure your safety and peace of mind.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Standing guard. Securing peace. Our services cover executive protection, site and asset protection, event security, secure transport, risk assessment, and 24/7 support.
              </p>
            </div>
            <div className="relative animate-on-scroll">
              <img src={convoyImage} alt="Security Convoy" className="rounded-2xl shadow-luxury" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-2xl blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Our Principles</span>
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children animate-on-scroll">
            {values.map((value, index) => (
              <Card key={index} className="border border-border card-interactive group">
                <CardContent className="p-7 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:shadow-gold group-hover:scale-105 transition-all duration-300">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Our Services</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Protection & Risk Management</h2>
              <p className="text-lg text-muted-foreground">Professional security solutions focused on your safety and peace of mind</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 stagger-children animate-on-scroll">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border card-interactive group">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden border-b-4 border-accent on-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <span className="inline-block brand-accent font-semibold text-sm tracking-widest uppercase mb-4">Our Team</span>
            <h2 className="text-4xl font-heading font-bold mb-6">Trusted Security Professionals</h2>
            <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
              Our team comprises highly trained professionals, licensed officers, and certified security specialists with extensive experience in VIP protection and risk management.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Every member undergoes rigorous training, background checks, and continuous professional development.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
