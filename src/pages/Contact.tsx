import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const scrollRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will respond within 24 hours.');
  };

  const contactInfo = [
    { icon: Phone, title: 'Emergency Hotline', details: ['+234 801 234 5678', '24/7 Available'] },
    { icon: Mail, title: 'Email Us', details: ['info@1145alliedprotections.ng', 'support@1145alliedprotections.ng'] },
    { icon: MapPin, title: 'Office Location', details: ['Plot 123, Victoria Island', 'Lagos, Nigeria'] },
    { icon: Clock, title: 'Office Hours', details: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 2PM'] },
  ];

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Reach Out</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Have questions about our security services? We're here to help 24/7
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children animate-on-scroll">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border border-border card-interactive text-center">
                <CardContent className="p-7">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-gold transition-all">
                    <info.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Write To Us</span>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form and our team will respond within 24 hours. For urgent security needs, call our emergency hotline.
                </p>
                
                <Card className="border-2 border-accent/30 bg-gradient-to-br from-card to-muted">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center pulse-glow">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">24/7 Hotline</p>
                        <a href="tel:+2348012345678" className="text-xl font-heading font-bold text-accent">
                          +234 801 234 5678
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">For immediate security assistance or emergency situations</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border border-border shadow-luxury animate-on-scroll">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" required className="mt-1.5 h-12 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required className="mt-1.5 h-12 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+234 xxx xxx xxxx" required className="mt-1.5 h-12 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" className="mt-1.5 h-12 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                      <Textarea id="message" placeholder="Tell us about your security needs..." rows={5} required className="mt-1.5 rounded-xl" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-bold rounded-xl h-13 transition-all duration-300 hover:-translate-y-0.5">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground mb-8">Plot 123, Victoria Island, Lagos, Nigeria</p>
            <div className="bg-card border border-border rounded-2xl h-96 flex items-center justify-center shadow-luxury">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <p className="text-muted-foreground">Map integration placeholder<br />Contact us for directions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
