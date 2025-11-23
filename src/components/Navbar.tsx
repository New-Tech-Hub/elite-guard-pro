import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg group-hover:shadow-gold transition-all">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-primary">EliteShield</span>
              <span className="text-xs text-accent font-medium">VIP SECURITY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-accent font-semibold'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Emergency Hotline & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+2348012345678" className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-accent" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Emergency</span>
                <span className="font-semibold text-accent">+234 801 234 5678</span>
              </div>
            </a>
            <Link to="/booking">
              <Button className="bg-gradient-to-r from-accent to-accent-dark hover:shadow-gold transition-all text-primary font-semibold">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive(link.path) ? 'text-accent' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-border">
                  <a href="tel:+2348012345678" className="flex items-center gap-2 mb-4">
                    <Phone className="h-5 w-5 text-accent" />
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Emergency</span>
                      <span className="font-semibold text-accent">+234 801 234 5678</span>
                    </div>
                  </a>
                  <Link to="/booking" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-accent to-accent-dark text-primary font-semibold">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
