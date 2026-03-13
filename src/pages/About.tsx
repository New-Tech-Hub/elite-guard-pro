import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Users, Award, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import convoyImage from '@/assets/convoy-suv.jpg';

const About = () => {
  const scrollRef = useScrollAnimation();

  const values = [
    { icon: Shield, title: 'Security First', description: 'Your safety is our top priority. We employ military-grade protocols and advanced security measures.' },
    { icon: Users, title: 'Professional Team', description: 'Our personnel are highly trained, certified, and experienced in VIP protection services.' },
    { icon: Award, title: 'Excellence', description: 'We maintain the highest standards of service delivery and operational excellence.' },
    { icon: Target, title: 'Precision', description: 'Every detail matters. We plan and execute with military precision and attention to detail.' },
  ];

  const achievements = [
    '500+ successful VIP escort missions',
    '10+ years of security excellence',
    'Zero security breach incidents',
    'Licensed by Nigerian Security Authorities',
    'Certified international security standards',
    '24/7 emergency response capability',
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
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Who We Are</span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              About <span className="text-gradient">1145 Allied Protections</span>
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed">
              Nigeria's premier VIP escort and security services provider. We combine military-grade security protocols with luxury service delivery.
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
                To provide world-class VIP escort and security services across Nigeria, ensuring the safety and protection of high-profile individuals through professional, discreet, and reliable security solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We leverage advanced security technology, highly trained personnel, and strategic intelligence to deliver unmatched protection services.
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
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Track Record</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Track Record</h2>
              <p className="text-lg text-muted-foreground">Proven excellence in VIP security services across Nigeria</p>
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
      <section className="py-24 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Our Team</span>
            <h2 className="text-4xl font-heading font-bold mb-6">Elite Security Professionals</h2>
            <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
              Our team comprises former military personnel, law enforcement officers, and certified security specialists with extensive experience in VIP protection and risk management.
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
