import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Compass, CheckCircle } from 'lucide-react';

export default function LuggageCloak() {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(0);

  const rooms = [
    { id: 1, name: "Sultanganj Station Cloak Room", milestone: "Sultanganj", km: 0.1, lat: 25.2415, lon: 86.7305, capacity: "800 Lockers", system: "Barcode Tracked", status: "Active", ref: "Near Sultanganj Platform 1 Entrance" },
    { id: 2, name: "Katoria Camp 2 Locker Service", milestone: "Katoria", km: 64.0, lat: 24.8194, lon: 86.7214, capacity: "400 Lockers", system: "Manual Token", status: "Active", ref: "Trauma Center compound" },
    { id: 3, name: "Deoghar Sadar Cloak Room", milestone: "Deoghar", km: 106.0, lat: 24.4819, lon: 86.7029, capacity: "1200 Lockers", system: "Barcode Tracked", status: "Active", ref: "Sadar Hospital Rest Area" },
    { id: 4, name: "Deoghar Q-Complex Mega Locker", milestone: "Deoghar", km: 105.5, lat: 24.4850, lon: 86.7040, capacity: "3000 Lockers", system: "Digital App Integrated", status: "Active", ref: "Inside Queue Complex Gate A" }
  ];

  const activeRoom = rooms[selectedRoom];

  return (
    <div className="w-full flex flex-col gap-8 text-left animate-fade-in">
      {/* Header Navigation */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/facilities')}
          className="flex items-center justify-center w-10 h-10 rounded-xl border border-brand-primary-border/40 hover:bg-neutral-bg-cool hover:text-brand-primary transition-all duration-200"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h3 className="font-sans font-black text-xl md:text-2xl text-neutral-dark tracking-tight">
            Luggage Cloak Rooms
          </h3>
          <p className="text-xs text-neutral-secondary font-medium mt-0.5">
            Barcode-tracked safety locker rooms to deposit baggage securely during Darshan.
          </p>
        </div>
      </div>

      {/* Hero card details */}
      <div className="bg-brand-primary-dark text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-lg border border-brand-primary-border/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        
        <div className="flex-1 text-left relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="flex items-center gap-1 bg-violet-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <Briefcase size={12} />
              Selected Cloak Room
            </span>
          </div>

          <h4 className="font-sans font-extrabold text-xl md:text-2xl text-white mb-2">
            {activeRoom.name}
          </h4>

          <p className="text-violet-300 font-bold text-sm md:text-base mb-4 flex items-center gap-1.5">
            <MapPin size={16} />
            Coordinates: {activeRoom.lat}, {activeRoom.lon}
            <span className="text-brand-primary-light/65 font-medium text-xs">({activeRoom.milestone} - KM {activeRoom.km})</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-brand-primary-light mt-2 border-t border-brand-primary-border/15 pt-4">
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">Total Capacity</span>
              <span className="text-white font-semibold">{activeRoom.capacity}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">Tracking System</span>
              <span className="text-white font-semibold">{activeRoom.system}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">Location Landmark</span>
              <span className="text-white font-semibold">{activeRoom.ref}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map of Selected Room */}
      <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-primary-border/15 pb-4">
          <div>
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider flex items-center gap-2">
              <Compass size={18} className="text-violet-500" />
              Live Cloak Room Location Map
            </h4>
            <p className="text-xs text-neutral-secondary mt-1">
              Geographical location coordinates of the selected luggage cloak room.
            </p>
          </div>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${activeRoom.lat},${activeRoom.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-bold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-4 py-2 rounded-xl transition-all shadow-sm bg-white"
          >
            Open in Google Maps App
          </a>
        </div>

        <div className="w-full h-[320px] rounded-xl overflow-hidden border border-brand-primary-border/15 shadow-inner">
          <iframe
            title="Cloak Room Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${activeRoom.lat},${activeRoom.lon}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          />
        </div>
      </div>

      {/* Selection Grid */}
      <div className="flex flex-col gap-4 text-left">
        <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider">
          Cloak Rooms Directory
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rooms.map((r, index) => (
            <div 
              key={r.id}
              onClick={() => setSelectedRoom(index)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                selectedRoom === index 
                  ? 'border-brand-primary bg-brand-primary-light/5 shadow-md'
                  : 'border-brand-primary-border/25 bg-white hover:border-brand-primary-border/55 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedRoom === index ? 'bg-violet-500 text-white' : 'bg-violet-50 text-violet-500'}`}>
                  <Briefcase size={18} />
                </div>
                <div className="text-left">
                  <h5 className="font-sans font-bold text-sm text-neutral-dark">{r.name}</h5>
                  <p className="text-[10px] text-neutral-secondary mt-0.5">
                    KM {r.km} | {r.milestone} Checkpoint
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-extrabold uppercase">
                <CheckCircle size={10} />
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
