import React, { useState, useEffect, useRef } from "react";
import { Compass, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/baidyanath_temple_hero.jpg",
    title: "Shravani Mela 2026",
    subtitle: "Embark on a sacred pilgrimage to the Baba Baidyanath Temple. Discover real-time queue updates, digital darshan slots, and essential yatra services.",
    badge: "Experience the Divine Journey",
    location: "Deoghar, Jharkhand · July – August 2026"
  },
  {
    image: "/kanwar_yatra_pilgrims.jpg",
    title: "The Holy Kanwar Yatra",
    subtitle: "Millions of devotees walk 105 km from Sultanganj to Deoghar, carrying Ganga water on foot to offer to Lord Shiva.",
    badge: "Sacred Walk of Devotion",
    location: "Katoria Path Route · 105 KM Pilgrimage"
  },
  {
    image: "/sultanganj_ganga_ghat.jpg",
    title: "Holy Bath at Sultanganj",
    subtitle: "Begin your journey with a purifying bath in the sacred Ganga River at Ajgaibinath, Sultanganj before collecting holy water.",
    badge: "The Auspicious Start",
    location: "Ganga Ghat, Sultanganj · Origin of Yatra"
  },
  {
    image: "/mela_night_celebration.jpg",
    title: "Vibrant Spiritual Festival",
    subtitle: "Experience 24/7 facilities, medical support camps, resting shelters, and continuous food service throughout the route.",
    badge: "Devotee Care & Support",
    location: "Transit Camps & Dharamshalas"
  },
  {
    image: "/devotees_offering_prayers.jpg",
    title: "Baba Baidyanath Darshan",
    subtitle: "Get digital queue tokens, real-time crowd status alerts, and map routes to complete your prayers with peace of mind.",
    badge: "Seek Blessings of Bholenath",
    location: "Baidyanath Dham Shrine · Deoghar"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const sectionRef = useRef(null);
  const [scrollStyle, setScrollStyle] = useState({
    transform: "scale(1) translateY(0px)",
    opacity: 1,
    borderRadius: "0px",
    boxShadow: "none"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const parent = sectionRef.current?.parentElement;
    if (!parent) return;

    const handleScroll = () => {
      const scrollTop = parent.scrollTop;
      const height = sectionRef.current?.offsetHeight || 600;
      
      // Calculate progress (0 at top, 1 when scrolled past hero section)
      const progress = Math.min(Math.max(scrollTop / height, 0), 1);
      
      // Scale down (pop inward) from 1 to 0.85 as we scroll down
      const currentScale = 1 - progress * 0.15;
      
      // Fade out to 0.15
      const currentOpacity = 1 - progress * 0.85;
      
      // Parallax translation (moves up at 35% scroll speed)
      const currentTranslateY = scrollTop * 0.35;
      
      // Expand border radius from 0px to 32px (rounded-3xl)
      const currentRadius = `${progress * 32}px`;
      
      // Dynamic drop shadow
      const currentShadow = progress > 0.02
        ? `0 25px 50px -12px rgba(0, 0, 0, ${progress * 0.35})`
        : "none";

      setScrollStyle({
        transform: `scale(${currentScale}) translateY(${currentTranslateY}px)`,
        opacity: currentOpacity,
        borderRadius: currentRadius,
        boxShadow: currentShadow,
        transformOrigin: "center top",
        willChange: "transform, opacity, border-radius",
        transition: "transform 0.12s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.12s ease-out, border-radius 0.15s ease-out"
      });
    };

    parent.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => parent.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen min-h-[500px] overflow-visible group bg-neutral-bg"
    >
      {/* Dynamic Keyframe Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-animate-content {
          animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes KenBurns {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.08);
          }
        }
        .hero-zoom-active {
          animation: KenBurns 6.5s ease-out forwards;
        }

        @keyframes indicatorProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .indicator-progress-bar {
          animation: indicatorProgress 6s linear forwards;
        }
      `}} />

      {/* Scroll-animated Container (Pops inward and shifts up smoothly) */}
      <div 
        className="relative w-full h-full overflow-hidden"
        style={scrollStyle}
      >
        {/* Images Layer with Fade Transitions */}
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex
                ? "opacity-100 z-0 hero-zoom-active"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Subtle low-intensity gradients for clear image visibility */}
        <div className="absolute inset-0 bg-neutral-dark/35 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent z-10" />

        {/* Hero Content (re-mounts on index change to trigger slideUp animation) */}
        <div 
          key={currentIndex} 
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-24 hero-animate-content"
        >
          {/* Dynamic Experience Badge */}
          <div className="flex items-center gap-2 mb-5 px-4.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
            <span className="text-[10px] font-sans font-bold text-white/90 uppercase tracking-[0.25em]">
              {slides[currentIndex].badge}
            </span>
          </div>

          {/* Dynamic Main Heading */}
          <h1 className="font-philosopher italic font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-wide max-w-5xl">
            {slides[currentIndex].title}
          </h1>

          {/* Dynamic Subtitle */}
          <p className="mt-4 font-sans text-xs sm:text-sm md:text-base text-white/85 leading-relaxed max-w-2xl font-medium">
            {slides[currentIndex].subtitle}
          </p>

          {/* Dynamic Location Tag */}
          <div className="mt-8 flex items-center gap-2 text-white/60 text-xs font-semibold">
            <MapPin size={13} className="text-saffron" />
            <span>{slides[currentIndex].location}</span>
          </div>
        </div>

        {/* Manual Navigation Arrows (Hover state triggers visibility) */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/25 hover:bg-black/45 border border-white/10 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
          title="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/25 hover:bg-black/45 border border-white/10 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
          title="Next Slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider Indicator Dots with progress loader */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
          {slides.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? "bg-white/20 w-9"
                    : "bg-white/40 w-2.5 hover:bg-white/70"
                }`}
                title={`Go to slide ${idx + 1}`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 h-full bg-saffron rounded-full indicator-progress-bar" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
