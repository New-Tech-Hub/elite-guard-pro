import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';

const faqs = [
  { q: 'What security services does 1145 Allied Protections provide?', a: 'We arrange professional VIP escorts, airport pickup protection, tourism security and guide support, secure transport, convoy services, and event security across Nigeria.' },
  { q: 'Where do you operate?', a: 'Our booking service is available for protection and secure movement requests across Nigeria. Share your route and requirements so our team can confirm availability.' },
  { q: 'Can I request armed or unarmed officers?', a: 'Yes. Booking requests can specify armed or unarmed officers. Final arrangements are confirmed by our team based on the service, route, timing, and applicable requirements.' },
  { q: 'How far in advance should I book?', a: 'Advance notice helps us prepare the right personnel and vehicle plan. Same-day requests can be submitted, but availability must be confirmed by our operations team.' },
  { q: 'How does the booking price estimate work?', a: 'The estimate considers service type, officer count, duration, and selected additions such as a tour guide, SUV rental, or convoy vehicles. It is an estimate until our team confirms the request.' },
  { q: 'How do I request airport pickup protection?', a: 'Use the airport pickup service page or contact our team with your flight number, arrival time, airport, destination, and passenger details.' },
  { q: 'Will I receive live booking updates?', a: 'Booking requests are recorded in our live operations system. Once your request is reviewed or assigned, the status shown in your client area can reflect the latest update.' },
  { q: 'How can I reach you for urgent protection?', a: 'For immediate assistance, call +234 801 234 5678. For planned service, submit a booking request or contact info@1145alliedprotections.ng.' },
];

const FAQ = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="pt-32 pb-20 bg-primary text-primary-foreground border-b-4 border-accent on-dark">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="brand-accent text-sm font-semibold tracking-widest uppercase">Answers before you book</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-heading font-bold">Frequently Asked Questions</h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">Clear information about our protection services, coverage, booking process, and urgent support.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center"><HelpCircle className="h-5 w-5 text-accent" /></div>
            <div><p className="text-sm text-muted-foreground">1145 Allied Protections Ltd</p><h2 className="text-2xl font-heading font-bold text-primary">Service questions</h2></div>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq, index) => <AccordionItem value={`faq-${index}`} key={faq.q}><AccordionTrigger className="text-left text-base md:text-lg font-heading font-semibold">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent></AccordionItem>)}
          </Accordion>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/booking"><Button className="bg-accent hover:bg-accent-dark text-accent-foreground rounded-xl h-12 px-6">Start a Booking <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link to="/contact"><Button variant="outline" className="rounded-xl h-12 px-6">Contact Our Team</Button></Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default FAQ;
