import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BatteryCharging,
  MapPin,
  Compass,
  CheckCircle,
} from "lucide-react";

export default function MobileCharging() {
  const navigate = useNavigate();
  const [selectedKiosk, setSelectedKiosk] = useState(0);

  const kiosks = [
    {
      id: 1,
      name: "Sultanganj Shelter Charging Kiosk",
      milestone: "Sultanganj",
      km: 1.0,
      lat: 25.2435,
      lon: 86.7312,
      ports: "48 USB Ports",
      power: "Solar Powered",
      status: "Active",
      ref: "Sultanganj Yatri Niwas Hall 2",
    },
    {
      id: 2,
      name: "Asarganj Transit Point Kiosk",
      milestone: "Asarganj",
      km: 29.5,
      lat: 25.1215,
      lon: 86.6912,
      ports: "24 USB Ports",
      power: "Grid + Backed Up",
      status: "Active",
      ref: "Transit Shivir 4 Office",
    },
    {
      id: 3,
      name: "Katoria Path Kiosk 3",
      milestone: "Katoria",
      km: 68.1,
      lat: 24.7512,
      lon: 86.7112,
      ports: "36 USB Ports",
      power: "Solar Locker Cabinets",
      status: "Active",
      ref: "Inaravaran Resting Shelter",
    },
    {
      id: 4,
      name: "Deoghar Entry Point Locker",
      milestone: "Deoghar",
      km: 104.5,
      lat: 24.4925,
      lon: 86.7081,
      ports: "64 USB Ports",
      power: "Super-fast Charging Hub",
      status: "Active",
      ref: "Darshaniya Mod Welcome Zone",
    },
  ];

  const activeKiosk = kiosks[selectedKiosk];

  return (
    <div className="w-full flex flex-col gap-8 text-left animate-fade-in">
      {/* Header Navigation */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/facilities")}
          className="flex items-center justify-center w-10 h-10 rounded-xl border border-brand-primary-border/40 hover:bg-neutral-bg-cool hover:text-brand-primary transition-all duration-200"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h3 className="font-sans font-black text-xl md:text-2xl text-neutral-dark tracking-tight">
            Mobile Charging Kiosks
          </h3>
          <p className="text-xs text-neutral-secondary font-medium mt-0.5">
            Secure multi-port USB solar charging lockers along the path.
          </p>
        </div>
      </div>

      {/* Hero card details */}
      <div className="bg-brand-primary-dark text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-lg border border-brand-primary-border/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="flex-1 text-left relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="flex items-center gap-1 bg-orange-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <BatteryCharging size={12} />
              Selected Charging Kiosk
            </span>
          </div>

          <h4 className="font-sans font-extrabold text-xl md:text-2xl text-white mb-2">
            {activeKiosk.name}
          </h4>

          <p className="text-orange-300 font-bold text-sm md:text-base mb-4 flex items-center gap-1.5">
            <MapPin size={16} />
            Coordinates: {activeKiosk.lat}, {activeKiosk.lon}
            <span className="text-brand-primary-light/65 font-medium text-xs">
              ({activeKiosk.milestone} - KM {activeKiosk.km})
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-brand-primary-light mt-2 border-t border-brand-primary-border/15 pt-4">
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Available Ports
              </span>
              <span className="text-white font-semibold">
                {activeKiosk.ports}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Power Source
              </span>
              <span className="text-white font-semibold">
                {activeKiosk.power}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Location Landmark
              </span>
              <span className="text-white font-semibold">
                {activeKiosk.ref}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map of Selected Kiosk */}
      <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-primary-border/15 pb-4">
          <div>
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider flex items-center gap-2">
              <Compass size={18} className="text-orange-500" />
              Live Kiosk Location Map
            </h4>
            <p className="text-xs text-neutral-secondary mt-1">
              Geographical location coordinates of the selected mobile charging
              locker kiosk.
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${activeKiosk.lat},${activeKiosk.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-bold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-4 py-2 rounded-xl transition-all shadow-sm bg-white"
          >
            Open in Google Maps App
          </a>
        </div>

        <div className="w-full h-[320px] rounded-xl overflow-hidden border border-brand-primary-border/15 shadow-inner">
          <iframe
            title="Kiosk Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${activeKiosk.lat},${activeKiosk.lon}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          />
        </div>
      </div>

      {/* Selection Grid */}
      <div className="flex flex-col gap-4 text-left">
        <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider">
          Charging Kiosks Directory
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {kiosks.map((k, index) => (
            <div
              key={k.id}
              onClick={() => setSelectedKiosk(index)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                selectedKiosk === index
                  ? "border-brand-primary bg-brand-primary-light/5 shadow-md"
                  : "border-brand-primary-border/25 bg-white hover:border-brand-primary-border/55 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedKiosk === index ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-500"}`}
                >
                  <BatteryCharging size={18} />
                </div>
                <div className="text-left">
                  <h5 className="font-sans font-bold text-sm text-neutral-dark">
                    {k.name}
                  </h5>
                  <p className="text-[10px] text-neutral-secondary mt-0.5">
                    KM {k.km} | {k.milestone} Checkpoint
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-extrabold uppercase">
                <CheckCircle size={10} />
                {k.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
