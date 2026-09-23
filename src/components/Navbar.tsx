import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import logo from '@/assets/allied-shield.jpeg.asset.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-accent ${
      scrolled
        ? 'bg-primary/95 backdrop-blur-lg shadow-sm'
        : 'bg-primary/85 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo.url} alt="1145 Allied Protections shield" className="h-12 w-12 rounded-sm object-cover shadow-sm group-hover:shadow-md transition-shadow" />
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold leading-tight text-primary-foreground">1145 ALLIED</span>
              <span className="text-xs text-steel font-semibold tracking-wider">PROTECTIONS LTD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-foreground bg-accent/80 font-semibold'
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Emergency Hotline & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+2348012345678" className="flex items-center gap-2 text-sm group">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <div className="flex flex-col">
                 <span className="text-xs text-steel">Emergency</span>
                 <span className="font-semibold text-primary-foreground text-sm">+234 801 234 5678</span>
              </div>
            </a>
            <Link to="/booking">
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl shadow-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium px-4 py-3 rounded-xl transition-all ${
                      isActive(link.path) ? 'text-accent bg-accent/10' : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 mt-4 border-t border-border">
                  <a href="tel:+2348012345678" className="flex items-center gap-3 mb-6 px-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Emergency</span>
                      <span className="font-semibold text-accent">+234 801 234 5678</span>
                    </div>
                  </a>
                  <Link to="/booking" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl h-12">
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
