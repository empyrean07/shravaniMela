import React from 'react';
import { Eye, Clock, Users, ArrowRight, Play } from 'lucide-react';

export default function LiveStatus() {
  const statusBanners = [
    {
      id: 1,
      title: "Arghya Waiting Time",
      value: "1.5 Hours",
      status: "Optimal",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
      pill: "bg-emerald-500",
      desc: "Fastest queue moving from Q-Complex.",
      icon: Clock
    },
    {
      id: 2,
      title: "Current Crowd Density",
      value: "Moderate",
      status: "Flowing",
      color: "bg-saffron-light/10 text-saffron-dark border-saffron-light/20",
      pill: "bg-saffron",
      desc: "Approx. 45,000 pilgrims currently in queue.",
      icon: Users
    }
  ];

  return (
    <div className="flex-1 flex flex-col gap-6">
      
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <h4 className="font-sans font-bold text-lg text-neutral-dark flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-saffron animate-pulse" />
          Live Darshan & Queue Status
        </h4>
        <button className="text-brand-primary text-xs font-bold hover:underline flex items-center gap-1">
          Full Status Dashboard
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Live Video Placeholder Card */}
      <div className="relative w-full h-[264px] rounded-2xl overflow-hidden shadow-md group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('/deoghar_temple.jpg')` }}
        />
        <div className="absolute inset-0 bg-neutral-dark/45 backdrop-blur-[1px]" />
        
        {/* Live Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md shadow">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Live
        </div>

        {/* Play overlay button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full bg-saffron hover:bg-saffron-dark text-brand-saffron-bg-dark flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
            <Play size={24} fill="currentColor" className="ml-1" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 text-white text-left">
          <p className="text-sm font-extrabold drop-shadow">Baba Baidyanath</p>
          <p className="text-xs text-brand-primary-light/85 drop-shadow">Live from Deoghar Temple Sanctum</p>
        </div>
      </div>

      {/* Status Info Banners */}
      <div className="flex flex-col gap-4">
        {statusBanners.map(banner => {
          const Icon = banner.icon;
          return (
            <div key={banner.id} className={`flex items-center justify-between p-5 border rounded-2xl ${banner.color} shadow-sm`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/60 border border-current/15 flex items-center justify-center text-current shadow-sm">
                  <Icon size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-neutral-secondary">{banner.title}</p>
                  <h5 className="text-xl font-extrabold text-neutral-dark leading-snug">{banner.value}</h5>
                  <p className="text-[10px] text-neutral-secondary">{banner.desc}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-neutral-dark font-bold text-[10px] uppercase shadow-sm border border-neutral-bg-cool">
                <span className={`w-1.5 h-1.5 rounded-full ${banner.pill}`} />
                {banner.status}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
