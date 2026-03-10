import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="1145 Allied Protections" className="h-12 w-12 rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold">1145 Allied</span>
                <span className="text-xs text-accent">PROTECTIONS LTD</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Nigeria's premier VIP escort and security services. Professional protection you can trust.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary-glow hover:bg-accent transition-colors rounded-lg">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-glow hover:bg-accent transition-colors rounded-lg">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-glow hover:bg-accent transition-colors rounded-lg">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-glow hover:bg-accent transition-colors rounded-lg">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">VIP Escort</Link></li>
              <li><Link to="/airport-pickup" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Airport Pickup</Link></li>
              <li><Link to="/tour-guide" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Tour Guide Security</Link></li>
              <li><Link to="/booking" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Book Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-accent">Emergency Hotline</p>
                  <a href="tel:+2348012345678" className="text-sm text-primary-foreground/80 hover:text-accent">
                    +234 801 234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <a href="mailto:info@eliteshield.ng" className="text-sm text-primary-foreground/80 hover:text-accent">
                    info@1145alliedprotections.ng
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    Plot 123, Victoria Island<br />Lagos, Nigeria
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-glow">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 EliteShield VIP Escort Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
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
