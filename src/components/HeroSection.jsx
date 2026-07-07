import React, { useState } from "react";
import { Scan, Calendar, MapPin, X } from "lucide-react";

export default function HeroSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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
            Experience the divine serenity of Deoghar during Shravani Mela 2026.
            Join millions of Kanwariyas in the holy yatra to Baba Dham.
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
      </div>

      {/* Floating Scan Button on Bottom-Right */}
      <button
        onClick={() => setIsPreviewOpen(true)}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg active:scale-95 cursor-pointer group"
        title="Preview Background Image"
      >
        <Scan
          size={18}
          className="text-white transition-transform duration-300 group-hover:rotate-90"
        />
      </button>

      {/* Image Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsPreviewOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer"
            title="Close Preview"
          >
            <X size={24} />
          </button>

          {/* Centered Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <img
              src="/deoghar_temple.jpg"
              alt="Baba Baidyanath Temple Full Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
