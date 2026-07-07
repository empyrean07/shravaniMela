import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bed, MapPin, Compass, CheckCircle } from "lucide-react";

export default function RestingShelter() {
  const navigate = useNavigate();
  const [selectedShelter, setSelectedShelter] = useState(0);

  const shelters = [
    {
      id: 1,
      name: "Sultanganj Main Yatri Niwas",
      milestone: "Sultanganj",
      km: 1.0,
      lat: 25.2435,
      lon: 86.7312,
      capacity: "1500 Pilgrims",
      facilities: "Sanitation, Fans, Mattresses",
      status: "Active",
      ref: "Sultanganj Bypass Road",
    },
    {
      id: 2,
      name: "Asarganj Transit Shivir 4",
      milestone: "Asarganj",
      km: 29.5,
      lat: 25.1215,
      lon: 86.6912,
      capacity: "800 Pilgrims",
      facilities: "Medical Aid, Bathrooms, Coolers",
      status: "Active",
      ref: "KM 29.5 Crossing",
    },
    {
      id: 3,
      name: "Katoria Hilly Route Shelter",
      milestone: "Katoria",
      km: 68.1,
      lat: 24.7512,
      lon: 86.7112,
      capacity: "1200 Pilgrims",
      facilities: "Sand Beds, First Aid, Charging",
      status: "Active",
      ref: "Near Inaravaran Camp",
    },
    {
      id: 4,
      name: "Deoghar Mega Dharamshala",
      milestone: "Deoghar",
      km: 106.0,
      lat: 24.4819,
      lon: 86.7029,
      capacity: "5000 Pilgrims",
      facilities: "AC Wards, Heavy Security, CCTV",
      status: "Active",
      ref: "Baidyanath Dham Station Road",
    },
  ];

  const activeShelter = shelters[selectedShelter];

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
            Resting Shelters & Dharamshalas
          </h3>
          <p className="text-xs text-neutral-secondary font-medium mt-0.5">
            Free resting facilities, shivirs and halls along the entire Yatra
            pathway.
          </p>
        </div>
      </div>

      {/* Hero card details */}
      <div className="bg-brand-primary-dark text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-lg border border-brand-primary-border/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="flex-1 text-left relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="flex items-center gap-1 bg-amber-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <Bed size={12} />
              Selected Shelter Location
            </span>
          </div>

          <h4 className="font-sans font-extrabold text-xl md:text-2xl text-white mb-2">
            {activeShelter.name}
          </h4>

          <p className="text-amber-300 font-bold text-sm md:text-base mb-4 flex items-center gap-1.5">
            <MapPin size={16} />
            Coordinates: {activeShelter.lat}, {activeShelter.lon}
            <span className="text-brand-primary-light/65 font-medium text-xs">
              ({activeShelter.milestone} - KM {activeShelter.km})
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-brand-primary-light mt-2 border-t border-brand-primary-border/15 pt-4">
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Shelter Capacity
              </span>
              <span className="text-white font-semibold">
                {activeShelter.capacity}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Provided Amenities
              </span>
              <span className="text-white font-semibold">
                {activeShelter.facilities}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Location Landmark
              </span>
              <span className="text-white font-semibold">
                {activeShelter.ref}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map of Selected Shelter */}
      <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-primary-border/15 pb-4">
          <div>
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider flex items-center gap-2">
              <Compass size={18} className="text-amber-500" />
              Live Shelter Location Map
            </h4>
            <p className="text-xs text-neutral-secondary mt-1">
              Geographical location coordinates of the selected resting
              shelter/Dharamshala.
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${activeShelter.lat},${activeShelter.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-bold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-4 py-2 rounded-xl transition-all shadow-sm bg-white"
          >
            Open in Google Maps App
          </a>
        </div>

        <div className="w-full h-[320px] rounded-xl overflow-hidden border border-brand-primary-border/15 shadow-inner">
          <iframe
            title="Shelter Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${activeShelter.lat},${activeShelter.lon}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          />
        </div>
      </div>

      {/* Shelter Selection Grid */}
      <div className="flex flex-col gap-4 text-left">
        <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider">
          Resting Shelters Directory
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shelters.map((shelter, index) => (
            <div
              key={shelter.id}
              onClick={() => setSelectedShelter(index)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                selectedShelter === index
                  ? "border-brand-primary bg-brand-primary-light/5 shadow-md"
                  : "border-brand-primary-border/25 bg-white hover:border-brand-primary-border/55 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedShelter === index ? "bg-amber-500 text-white" : "bg-amber-50 text-amber-500"}`}
                >
                  <Bed size={18} />
                </div>
                <div className="text-left">
                  <h5 className="font-sans font-bold text-sm text-neutral-dark">
                    {shelter.name}
                  </h5>
                  <p className="text-[10px] text-neutral-secondary mt-0.5">
                    KM {shelter.km} | {shelter.milestone} Checkpoint
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-extrabold uppercase">
                <CheckCircle size={10} />
                {shelter.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
