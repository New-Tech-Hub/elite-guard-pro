import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary via-primary-glow to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        </div>
        <div className="text-center relative z-10 px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/15 rounded-2xl mb-6">
            <Shield className="h-10 w-10 text-accent" />
          </div>
          <h1 className="text-8xl font-heading font-bold mb-4 text-gradient">404</h1>
          <h2 className="text-2xl font-heading font-semibold mb-4">Area Not Secured</h2>
          <p className="text-lg text-primary-foreground/75 mb-10 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved to a secure location.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-bold rounded-xl h-14 px-8 shadow-gold transition-all duration-300 hover:-translate-y-0.5">
                <Home className="h-5 w-5 mr-2" />
                Return Home
              </Button>
            </Link>
            <button onClick={() => window.history.back()}>
              <Button size="lg" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/25 h-14 px-8 rounded-xl backdrop-blur-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Button>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
