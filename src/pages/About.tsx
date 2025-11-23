import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Users, Award, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import convoyImage from '@/assets/convoy-suv.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your safety is our top priority. We employ military-grade protocols and advanced security measures.',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Our personnel are highly trained, certified, and experienced in VIP protection services.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of service delivery and operational excellence.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. We plan and execute with military precision and attention to detail.',
    },
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              About <span className="text-accent">EliteShield</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Nigeria's premier VIP escort and security services provider. We combine military-grade security protocols with luxury service delivery to ensure your safety and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To provide world-class VIP escort and security services across Nigeria, ensuring the safety and protection of high-profile individuals, executives, and international visitors through professional, discreet, and reliable security solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We leverage advanced security technology, highly trained personnel, and strategic intelligence to deliver unmatched protection services that exceed international standards.
              </p>
            </div>
            <div className="relative">
              <img
                src={convoyImage}
                alt="Security Convoy"
                className="rounded-2xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-gold transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">
                Our Track Record
              </h2>
              <p className="text-lg text-muted-foreground">
                Proven excellence in VIP security services across Nigeria
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Elite Security Professionals
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team comprises former military personnel, law enforcement officers, and certified security specialists with extensive experience in VIP protection, tactical operations, and risk management.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every member undergoes rigorous training, background checks, and continuous professional development to maintain the highest standards of security service delivery.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
