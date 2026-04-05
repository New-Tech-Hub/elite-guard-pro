import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const scrollRef = useScrollAnimation();

  const pricingTiers = [
    {
      name: 'Airport Pickup', price: '₦75,000', period: 'per trip',
      description: 'Professional airport transfer with security',
      features: ['Flight tracking', 'Meet and greet service', 'Luxury vehicle transportation', 'Professional driver', 'Luggage assistance', 'Airport to destination'],
      cta: 'Book Pickup', link: '/airport-pickup', popular: false,
    },
    {
      name: 'VIP Escort', price: '₦150,000', period: 'per day',
      description: 'Armed security escort for high-profile individuals',
      features: ['2 armed security officers', 'Luxury SUV transportation', 'Risk assessment', 'Emergency response', 'Communication equipment', 'Route planning'],
      cta: 'Book Escort', link: '/booking', popular: true,
    },
    {
      name: 'Tour Guide Security', price: '₦100,000', period: 'per day',
      description: 'Safe tourism with security and guide',
      features: ['Armed security personnel', 'Expert local tour guide', 'Luxury transportation', 'Entrance fees included', 'Photography assistance', 'Flexible itinerary'],
      cta: 'Book Tour', link: '/tour-guide', popular: false,
    },
  ];

  const additionalServices = [
    { service: 'Additional Armed Officer', price: '₦50,000/day' },
    { service: 'Unarmed Security Officer', price: '₦30,000/day' },
    { service: 'Luxury SUV Rental', price: '₦50,000/day' },
    { service: 'Tour Guide Only', price: '₦30,000/day' },
    { service: 'Convoy Vehicle', price: '₦75,000 each' },
    { service: 'VIP Lounge Access', price: '₦25,000' },
    { service: 'Fast Track Immigration', price: '₦15,000' },
    { service: 'Luggage Assistance', price: '₦10,000' },
  ];

  return (
    <div className="min-h-screen" ref={scrollRef}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Plans & Pricing</span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Professional security services with clear, upfront pricing. No hidden fees.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children animate-on-scroll">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border card-interactive ${
                  tier.popular ? 'border-accent shadow-gold scale-[1.03]' : 'border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-5 py-1.5 rounded-full text-sm font-bold shadow-gold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-heading font-bold text-primary mb-2">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-5">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-heading font-bold text-gradient">{tier.price}</span>
                    <span className="text-muted-foreground">/ {tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={tier.link}>
                    <Button
                      className={`w-full rounded-xl font-semibold h-12 ${
                        tier.popular
                          ? 'bg-accent hover:bg-accent-dark text-accent-foreground shadow-gold'
                          : 'bg-primary hover:bg-primary-glow text-primary-foreground'
                      } transition-all duration-300 hover:-translate-y-0.5`}
                      size="lg"
                    >
                      {tier.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">Extras</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">Add-On Services</h2>
              <p className="text-lg text-muted-foreground">Enhance your security package with additional services</p>
            </div>

            <Card className="border border-border animate-on-scroll">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-300">
                      <span className="font-medium text-foreground">{item.service}</span>
                      <span className="font-bold text-accent font-heading">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-accent/30 bg-gradient-to-br from-card to-muted animate-on-scroll">
            <CardContent className="p-12 text-center">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">For Organizations</span>
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Enterprise & Long-Term Contracts</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Need ongoing security services? We offer customized packages with special pricing.
              </p>
              <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                {['Dedicated security teams', 'Volume discounts available', 'Customized security protocols', 'Priority response and support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-bold rounded-xl px-10 h-14 shadow-gold transition-all duration-300 hover:-translate-y-0.5">
                  Contact for Enterprise Pricing
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center animate-on-scroll">Pricing FAQs</h2>
            <Accordion type="single" collapsible className="space-y-3 animate-on-scroll">
              {[
                { q: 'Do you charge for travel time?', a: 'No, all quoted prices include travel time within major Nigerian cities. For remote locations, a small surcharge may apply.' },
                { q: 'What payment methods do you accept?', a: 'We accept bank transfers, credit/debit cards, and online payment platforms. Payment is required before service commencement.' },
                { q: 'Can I cancel or reschedule?', a: 'Yes, with 24 hours notice for full refund. Cancellations within 24 hours incur a 50% fee.' },
                { q: 'Are your officers licensed?', a: 'Yes, all our security officers are fully licensed, trained, and certified by relevant Nigerian security authorities.' },
                { q: 'Do you offer long-term contracts?', a: 'Absolutely. We offer monthly and annual contracts with preferential rates. Contact us for a custom enterprise quote.' },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:border-accent/40 data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left font-heading font-semibold text-primary hover:text-accent hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
