import React from 'react';
import { Scan, Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('/deoghar_temple.jpg')` }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-dark/90 via-brand-primary-dark/65 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-10 max-w-2xl text-white">
        
        {/* Top Badge */}
        <div className="self-start flex items-center gap-2 bg-saffron-light/25 border border-saffron/40 backdrop-blur-md rounded-full px-4 py-1.5 text-saffron font-medium text-xs tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
          Pic of the Day
        </div>

        {/* Middle Main Text Info */}
        <div className="flex flex-col gap-4 mt-auto mb-6">
          <h3 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white drop-shadow-md">
            Baba Baidyanath Temple
          </h3>
          
          <p className="font-sans text-sm md:text-base text-brand-primary-light/90 leading-relaxed drop-shadow-sm">
            Experience the divine serenity of Deoghar during Shravani Mela 2026. Join millions of Kanwariyas in the holy yatra to Baba Dham.
          </p>

          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-4 mt-2 text-xs text-brand-primary-light/80">
            <span className="flex items-center gap-1.5 bg-brand-primary/20 backdrop-blur-sm px-3 py-1 rounded-md border border-brand-primary-border/25">
              <MapPin size={14} className="text-saffron" />
              Deoghar, Jharkhand
            </span>
            <span className="flex items-center gap-1.5 bg-brand-primary/20 backdrop-blur-sm px-3 py-1 rounded-md border border-brand-primary-border/25">
              <Calendar size={14} className="text-saffron" />
              July - August 2026
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-brand-saffron-bg-dark font-action font-semibold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-saffron/25 transition-all duration-300 transform hover:-translate-y-0.5">
            Register for Yatra
          </button>
          
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 group/play shadow-md">
            <Scan size={18} fill="white" className="ml-0.5 transition-transform duration-300 group-hover/play:scale-110" />
          </button>
        </div>

      </div>
    </div>
  );
}
