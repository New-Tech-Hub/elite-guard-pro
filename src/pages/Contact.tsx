import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will respond within 24 hours.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      details: ['+234 801 234 5678', '24/7 Available'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@1145alliedprotections.ng', 'support@1145alliedprotections.ng'],
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Plot 123, Victoria Island', 'Lagos, Nigeria'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 2PM'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions about our security services? We're here to help 24/7
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form and our team will respond within 24 hours. For urgent security needs, please call our emergency hotline.
                </p>
                
                <Card className="border-2 border-accent">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">24/7 Hotline</p>
                        <a href="tel:+2348012345678" className="text-xl font-bold text-accent">
                          +234 801 234 5678
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For immediate security assistance or emergency situations
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+234 xxx xxx xxxx" required />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your security needs..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-dark text-primary font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Plot 123, Victoria Island, Lagos, Nigeria
            </p>
            <div className="bg-primary/5 border-2 border-border rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Map integration placeholder<br />
                  Contact us for directions
                </p>
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
