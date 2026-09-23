import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import heroTeam1 from '@/assets/hero-team-1.jpeg.asset.json';
import heroTeam2 from '@/assets/hero-team-2.jpeg.asset.json';
import heroTeam3 from '@/assets/hero-team-3.jpeg.asset.json';
import heroTeam4 from '@/assets/hero-team-4.jpeg.asset.json';
import heroTeam5 from '@/assets/hero-team-5.jpeg.asset.json';

const slides = [
  {
    image: heroTeam1.url,
    badge: 'Nigeria\'s Premier Security Service',
    heading: 'Secure VIP Escort Services',
    highlight: 'Across Nigeria',
    description: 'Professional armed escorts, airport pickups, tour guide protection, and convoy services for high-profile individuals and executives.',
  },
  {
    image: heroTeam2.url,
    badge: 'Trusted Close Protection',
    heading: 'Executive Protection',
    highlight: 'You Can Rely On',
    description: 'Discreet, highly trained operatives providing close protection for executives, dignitaries, and high-net-worth individuals across all 36 states.',
  },
  {
    image: heroTeam3.url,
    badge: 'Secure Vehicle Escort',
    heading: 'Convoy Protection',
    highlight: '& Secure Transport',
    description: 'Protective vehicle escorts with advance route planning and professional drivers for every movement, day or night.',
  },
  {
    image: heroTeam4.url,
    badge: 'Rapid Response Teams',
    heading: 'Event Security',
    highlight: '& Crowd Control',
    description: 'Uniformed and plainclothes officers managing access, crowds, and VIP movements at private, corporate, and public events.',
  },
  {
    image: heroTeam5.url,
    badge: 'Elite Operational Standards',
    heading: 'Armed & Unarmed',
    highlight: 'Security Details',
    description: 'From residential details to full movement security, our officers deliver military-grade discipline with corporate professionalism.',
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
       <Button
         variant="ghost"
         size="icon"
        onClick={prevSlide}
         className="absolute left-4 md:left-8 bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
       </Button>
       <Button
         variant="ghost"
         size="icon"
        onClick={nextSlide}
         className="absolute right-4 md:right-8 bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
       </Button>

      {/* Slide indicators */}
       <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
           <Button
             variant="ghost"
             size="icon"
            key={index}
            onClick={() => goToSlide(index)}
             className={`!h-2.5 !min-h-0 !p-0 rounded-full transition-all duration-500 ${
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
