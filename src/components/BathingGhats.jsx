import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Waves, MapPin, Compass, CheckCircle } from "lucide-react";

export default function BathingGhats() {
  const navigate = useNavigate();
  const [selectedGhat, setSelectedGhat] = useState(0);

  const ghats = [
    {
      id: 1,
      name: "Jahaj Ghat (Main Bathing Area)",
      milestone: "Sultanganj",
      km: 0.2,
      lat: 25.2485,
      lon: 86.739,
      flow: "Safe/Muted",
      guard: "24/7 SDRF Divers",
      status: "Active",
      ref: "Sultanganj Town Center",
    },
    {
      id: 2,
      name: "Ajgaibinath Temple Ghat",
      milestone: "Sultanganj",
      km: 0.5,
      lat: 25.249,
      lon: 86.741,
      flow: "Rocky Riverbed",
      guard: "SDRF + Police Post",
      status: "Active",
      ref: "Below Ajgaibinath Hill Shikhara",
    },
    {
      id: 3,
      name: "Sultanganj Seva Ghat",
      milestone: "Sultanganj",
      km: 0.1,
      lat: 25.248,
      lon: 86.7375,
      flow: "Silted/Shallow",
      guard: "Volunteers + Safety Nets",
      status: "Active",
      ref: "Near Seva Samiti Tent",
    },
    {
      id: 4,
      name: "Sultanganj VIP Bathing Area",
      milestone: "Sultanganj",
      km: 0.0,
      lat: 25.247,
      lon: 86.736,
      flow: "Clean/Controlled",
      guard: "Barricades & Policemen",
      status: "Active",
      ref: "Near Administrative Office",
    },
  ];

  const activeGhat = ghats[selectedGhat];

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
            Bathing Ghats (Sultanganj)
          </h3>
          <p className="text-xs text-neutral-secondary font-medium mt-0.5">
            Holy Ganga water bathing zones with security fencing and rescue
            divers.
          </p>
        </div>
      </div>

      {/* Hero card details */}
      <div className="bg-brand-primary-dark text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-lg border border-brand-primary-border/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="flex-1 text-left relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="flex items-center gap-1 bg-cyan-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <Waves size={12} />
              Selected Bathing Ghat
            </span>
          </div>

          <h4 className="font-sans font-extrabold text-xl md:text-2xl text-white mb-2">
            {activeGhat.name}
          </h4>

          <p className="text-cyan-300 font-bold text-sm md:text-base mb-4 flex items-center gap-1.5">
            <MapPin size={16} />
            Coordinates: {activeGhat.lat}, {activeGhat.lon}
            <span className="text-brand-primary-light/65 font-medium text-xs">
              ({activeGhat.milestone} - KM {activeGhat.km})
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-brand-primary-light mt-2 border-t border-brand-primary-border/15 pt-4">
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Water Flow
              </span>
              <span className="text-white font-semibold">
                {activeGhat.flow}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Safety Guarding
              </span>
              <span className="text-white font-semibold">
                {activeGhat.guard}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Location Landmark
              </span>
              <span className="text-white font-semibold">{activeGhat.ref}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map of Selected Ghat */}
      <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-primary-border/15 pb-4">
          <div>
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider flex items-center gap-2">
              <Compass size={18} className="text-cyan-500" />
              Live Ghat Location Map
            </h4>
            <p className="text-xs text-neutral-secondary mt-1">
              Geographical location coordinates of the selected bathing ghat in
              Sultanganj.
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${activeGhat.lat},${activeGhat.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-bold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-4 py-2 rounded-xl transition-all shadow-sm bg-white"
          >
            Open in Google Maps App
          </a>
        </div>

        <div className="w-full h-[320px] rounded-xl overflow-hidden border border-brand-primary-border/15 shadow-inner">
          <iframe
            title="Ghat Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${activeGhat.lat},${activeGhat.lon}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          />
        </div>
      </div>

      {/* Selection Grid */}
      <div className="flex flex-col gap-4 text-left">
        <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider">
          Bathing Ghats Directory
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ghats.map((ghat, index) => (
            <div
              key={ghat.id}
              onClick={() => setSelectedGhat(index)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                selectedGhat === index
                  ? "border-brand-primary bg-brand-primary-light/5 shadow-md"
                  : "border-brand-primary-border/25 bg-white hover:border-brand-primary-border/55 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedGhat === index ? "bg-cyan-500 text-white" : "bg-cyan-50 text-cyan-500"}`}
                >
                  <Waves size={18} />
                </div>
                <div className="text-left">
                  <h5 className="font-sans font-bold text-sm text-neutral-dark">
                    {ghat.name}
                  </h5>
                  <p className="text-[10px] text-neutral-secondary mt-0.5">
                    KM {ghat.km} | {ghat.milestone} Checkpoint
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-extrabold uppercase">
                <CheckCircle size={10} />
                {ghat.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
