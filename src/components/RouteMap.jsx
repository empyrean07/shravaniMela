import React from 'react';
import { MapPin, ArrowDown, Flag, Landmark, Compass, Award } from 'lucide-react';

export default function RouteMap() {
  const steps = [
    {
      id: 1,
      name: "Sultanganj",
      dist: "0 km",
      desc: "Collect holy Gangajal from the river Ganges and start the barefoot journey.",
      icon: Flag,
      color: "bg-emerald-500 text-white"
    },
    {
      id: 2,
      name: "Asarganj",
      dist: "26 km",
      desc: "First major resting zone. Large government medical and food camps available.",
      icon: MapPin,
      color: "bg-brand-primary text-white"
    },
    {
      id: 3,
      name: "Katoria",
      dist: "64 km",
      desc: "Challenging hilly terrain. Sand-covered path constructed for barefoot comfort.",
      icon: MapPin,
      color: "bg-brand-primary text-white"
    },
    {
      id: 4,
      name: "Dharamsala",
      dist: "88 km",
      desc: "Border of Bihar and Jharkhand. Police checkpost and entry verification.",
      icon: Compass,
      color: "bg-brand-primary text-white"
    },
    {
      id: 5,
      name: "Deoghar (Baba Dham)",
      dist: "105 km",
      desc: "Offer Gangajal to Lord Baidyanath at the main Jyotirlinga Temple.",
      icon: Landmark,
      color: "bg-saffron text-brand-saffron-bg-dark"
    }
  ];

  return (
    <div className="w-full bg-white border border-brand-primary-border/25 rounded-2xl p-8 shadow-sm text-left">
      <div className="mb-8">
        <h3 className="font-sans font-extrabold text-xl text-neutral-dark">
          Yatra Route & Checkpoints
        </h3>
        <p className="text-xs text-neutral-secondary mt-1">
          Detailed breakdown of the 105km devotional pathway from Sultanganj to Baba Baidyanath Temple.
        </p>
      </div>

      <div className="relative pl-6 md:pl-8 border-l-2 border-brand-primary-border/30 flex flex-col gap-8 ml-4 py-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="relative group">
              {/* Step Node Marker */}
              <div className={`absolute -left-[38px] md:-left-[46px] top-0 w-8 h-8 rounded-full border-4 border-white shadow flex items-center justify-center ${step.color} transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={14} />
              </div>

              {/* Step Content */}
              <div className="bg-neutral-bg border border-brand-primary-border/20 rounded-xl p-5 hover:border-brand-primary-border/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-sans font-extrabold text-sm text-neutral-dark flex items-center gap-2">
                    {step.name}
                    {step.id === 5 && (
                      <span className="bg-saffron-light/20 text-saffron-dark text-[9px] px-2 py-0.5 rounded font-extrabold border border-saffron/30 uppercase">Destination</span>
                    )}
                  </h4>
                  <span className="text-xs font-extrabold text-brand-primary">{step.dist}</span>
                </div>
                <p className="text-[11px] text-neutral-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
