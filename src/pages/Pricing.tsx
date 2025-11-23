import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Airport Pickup',
      price: '₦75,000',
      period: 'per trip',
      description: 'Professional airport transfer with security',
      features: [
        'Flight tracking',
        'Meet and greet service',
        'Luxury vehicle transportation',
        'Professional driver',
        'Luggage assistance',
        'Airport to destination',
      ],
      cta: 'Book Pickup',
      link: '/airport-pickup',
      popular: false,
    },
    {
      name: 'VIP Escort',
      price: '₦150,000',
      period: 'per day',
      description: 'Armed security escort for high-profile individuals',
      features: [
        '2 armed security officers',
        'Luxury SUV transportation',
        'Risk assessment',
        'Emergency response',
        'Communication equipment',
        'Route planning',
      ],
      cta: 'Book Escort',
      link: '/booking',
      popular: true,
    },
    {
      name: 'Tour Guide Security',
      price: '₦100,000',
      period: 'per day',
      description: 'Safe tourism with security and guide',
      features: [
        'Armed security personnel',
        'Expert local tour guide',
        'Luxury transportation',
        'Entrance fees included',
        'Photography assistance',
        'Flexible itinerary',
      ],
      cta: 'Book Tour',
      link: '/tour-guide',
      popular: false,
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Professional security services with clear, upfront pricing. No hidden fees.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-2 ${
                  tier.popular ? 'border-accent shadow-gold scale-105' : ''
                } transition-all hover:shadow-gold`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-heading font-bold text-primary mb-2">
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-accent">{tier.price}</span>
                    <span className="text-muted-foreground">/ {tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={tier.link}>
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? 'bg-accent hover:bg-accent-dark text-primary'
                          : 'bg-primary hover:bg-primary-glow text-primary-foreground'
                      } font-semibold`}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">
                Add-On Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Enhance your security package with additional services
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalServices.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-background rounded-lg border"
                    >
                      <span className="font-medium text-foreground">{item.service}</span>
                      <span className="font-bold text-accent">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-accent">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Enterprise & Long-Term Contracts
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Need ongoing security services for your organization or extended protection? We offer customized packages for businesses and long-term clients with special pricing.
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Dedicated security teams</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Volume discounts available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Customized security protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Priority response and support</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-primary font-semibold">
                  Contact for Enterprise Pricing
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Pricing FAQs
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">Do you charge for travel time?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, all quoted prices include travel time within major Nigerian cities. For remote locations, a small surcharge may apply.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept bank transfers, credit/debit cards, and online payment platforms. Payment is required before service commencement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">Can I cancel or reschedule?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, with 24 hours notice for full refund. Cancellations within 24 hours incur a 50% fee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
