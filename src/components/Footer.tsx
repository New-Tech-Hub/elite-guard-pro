import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/shield-logo.webp.asset.json';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-accent">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
               <img src={logo.url} alt="1145 Allied Protections shield" className="h-12 w-12 rounded-sm object-contain bg-primary-foreground" />
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold">1145 Allied</span>
                 <span className="text-xs text-steel font-semibold tracking-wider">PROTECTIONS LTD</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Nigeria's premier VIP escort and security services. Professional protection you can trust.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-primary-foreground/5 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
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
                { to: '/services', label: 'VIP Escort' },
                { to: '/airport-pickup', label: 'Airport Pickup' },
                { to: '/tour-guide', label: 'Tour Guide Security' },
                { to: '/booking', label: 'Book Service' },
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
                  <a href="tel:+2348012345678" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    +234 801 234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <a href="mailto:info@1145alliedprotections.ng" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    info@1145alliedprotections.ng
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">
                    Plot 123, Victoria Island<br />Lagos, Nigeria
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
