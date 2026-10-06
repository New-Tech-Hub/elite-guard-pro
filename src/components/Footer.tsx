import { Link } from 'react-router-dom';
import { Phone, Shield, Clock, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-accent">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
               <img src="/shield-logo.webp" alt="1145 Allied Protections shield" className="h-16 w-16 object-contain drop-shadow-md" />
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold">1145 Allied</span>
                 <span className="text-xs text-steel font-semibold tracking-wider">PROTECTIONS LTD</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Professional security and risk management solutions. Protecting what matters most.
            </p>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/alliedby1145/" target="_blank" rel="noopener noreferrer" aria-label="1145 Allied Protections on Instagram: @alliedby1145" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" /> @alliedby1145
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-heading font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/contact', label: 'Contact' },
                { to: '/faq', label: 'FAQ' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group">
                    {label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-heading font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                { to: '/services', label: 'Executive Protection' },
                { to: '/services', label: 'Site & Asset Protection' },
                { to: '/services', label: 'Event Security' },
                { to: '/services', label: 'Secure Transport' },
                { to: '/services', label: 'Risk Assessment' },
                { to: '/contact', label: '24/7 Support' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group">
                    {label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-heading font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-accent font-semibold mb-0.5">Emergency Hotline</p>
                  <a href="tel:+2348090942939" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    +234 809 094 2939
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">
                    Standing guard.<br />Securing peace.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2026 1145 Allied Protections Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
