import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import heroSlide1 from '@/assets/hero-security.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

const slides = [
  {
    image: heroSlide1,
    badge: "Nigeria's Premier Security Service",
    heading: 'Secure VIP Escort Services',
    highlight: 'Across Nigeria',
    description: 'Professional armed escorts, airport pickups, tour guide protection, and convoy services for high-profile individuals and executives.',
  },
  {
    image: heroSlide2,
    badge: 'Elite Executive Protection',
    heading: 'Armed & Unarmed',
    highlight: 'Security Details',
    description: 'Highly trained operatives providing close protection for executives, dignitaries, and high-net-worth individuals across all 36 states.',
  },
  {
    image: heroSlide3,
    badge: 'Seamless Airport Transfers',
    heading: 'VIP Airport Pickup',
    highlight: '& Drop-off',
    description: 'Meet-and-greet services with secure vehicle transfers from all major Nigerian airports. Travel with confidence from touchdown to destination.',
  },
  {
    image: heroSlide4,
    badge: 'Maximum Security Transport',
    heading: 'Armored Convoy',
    highlight: '& Escort Services',
    description: 'Military-grade convoy protection with armored vehicles, advance route planning, and tactical response teams for ultimate safety.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative pt-24 min-h-[680px] h-[min(800px,90svh)] max-sm:h-auto max-sm:min-h-[740px] flex items-center overflow-hidden on-dark bg-primary">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: currentSlide === index ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.heading}
             className="w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out"
            style={{
              transform: currentSlide === index ? 'scale(1.08)' : 'scale(1)',
            }}
          />
           <div className="absolute inset-0 hero-shade" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative py-20 max-sm:pt-16 max-sm:pb-24">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: currentSlide === index ? 1 : 0,
                transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                position: currentSlide === index ? 'relative' : 'absolute',
                pointerEvents: currentSlide === index ? 'auto' : 'none',
              }}
            >
               <div className="inline-flex items-center gap-3 mb-6">
                 <span className="h-7 w-1 brand-rail" aria-hidden="true" />
                 <span className="brand-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">{slide.badge}</span>
              </div>
               <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-[1.05] uppercase">
                {slide.heading}{' '}
                <span className="text-gradient">{slide.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl leading-relaxed">
                {slide.description}
              </p>
            </div>
          ))}

          {/* CTA Buttons */}
           <div className="flex flex-col md:flex-row gap-3 items-stretch relative z-20">
             <Link to="/booking" className="md:flex-initial">
              <Button
                size="lg"
                 className="bg-accent hover:bg-accent-dark text-accent-foreground font-bold px-6 h-14 text-base rounded-md shadow-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 w-full"
              >
                Book Escort Now
              </Button>
            </Link>
             <Link to="/contact" className="md:flex-initial">
              <Button
                size="lg"
                 className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-semibold px-6 h-14 text-base rounded-md border border-steel/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 w-full"
              >
                Request Consultation
              </Button>
            </Link>
             <a href="tel:+2348012345678" className="md:flex-initial">
              <Button
                size="lg"
                 className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-6 h-14 text-base rounded-md transition-all duration-300 hover:-translate-y-0.5 w-full"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
         className="absolute left-4 md:left-8 bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
         className="absolute right-4 md:right-8 bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide indicators */}
       <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? 'w-12 bg-accent shadow-gold'
                : 'w-2.5 bg-primary-foreground/30 hover:bg-primary-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;
