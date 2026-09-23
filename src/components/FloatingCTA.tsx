import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-card border border-border rounded-md shadow-luxury p-5 w-72 animate-fade-up">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-heading font-semibold text-primary text-sm">Need Help?</h4>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors h-8 w-8" aria-label="Close contact options">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Chat with us on WhatsApp or call our emergency hotline for immediate assistance.
          </p>
          <div className="space-y-2">
            <a
              href="https://wa.me/2348012345678?text=Hello%2C%20I%20need%20security%20services"
              target="_blank"
              rel="noopener noreferrer"
               className="flex items-center gap-3 w-full p-3 rounded-md bg-accent hover:bg-accent-dark text-accent-foreground font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+2348012345678"
               className="flex items-center gap-3 w-full p-3 rounded-md bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call Emergency Hotline
            </a>
          </div>
        </div>
      )}

      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-gold transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-primary text-primary-foreground rotate-0' : 'bg-accent text-accent-foreground pulse-glow'
        }`}
        aria-label="Contact us"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingCTA;
