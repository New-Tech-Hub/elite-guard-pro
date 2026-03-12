import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
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
            className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out"
            style={{
              transform: currentSlide === index ? 'scale(1.08)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: currentSlide === index ? 1 : 0,
                transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)',
                position: currentSlide === index ? 'relative' : 'absolute',
                pointerEvents: currentSlide === index ? 'auto' : 'none',
              }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full">
                <span className="text-accent font-semibold text-sm">{slide.badge}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                {slide.heading} <span className="text-accent">{slide.highlight}</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
                {slide.description}
              </p>
            </div>
          ))}

          {/* CTA Buttons - always visible */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch relative z-20">
            <Link to="/booking" className="flex-1 md:flex-initial">
              <Button
                size="lg"
                className="bg-[#d4a017] hover:bg-[#b88a12] text-[#0b1f3a] font-semibold px-8 h-14 text-base md:text-lg rounded-lg shadow-lg shadow-[#d4a017]/30 hover:shadow-xl hover:shadow-[#d4a017]/40 transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
              >
                Book Escort Now
              </Button>
            </Link>
            <Link to="/contact" className="flex-1 md:flex-initial">
              <Button
                size="lg"
                className="bg-[#0b1f3a] hover:bg-[#162d4d] text-white font-semibold px-8 h-14 text-base md:text-lg rounded-lg shadow-lg shadow-[#0b1f3a]/30 hover:shadow-xl hover:shadow-[#0b1f3a]/40 transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
              >
                Request Security Consultation
              </Button>
            </Link>
            <a href="tel:+2348012345678" className="flex-1 md:flex-initial">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#0b1f3a] text-[#0b1f3a] hover:bg-[#0b1f3a] hover:text-white h-14 px-8 text-base md:text-lg rounded-lg transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto backdrop-blur-sm"
              >
                Call for Immediate Protection
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? 'w-10 bg-accent'
                : 'w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
