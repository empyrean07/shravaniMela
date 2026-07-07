import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, MapPin, Compass, CheckCircle } from "lucide-react";

export default function SecurityPolice() {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(0);

  const policePosts = [
    {
      id: 1,
      name: "Sultanganj Station Security Post",
      milestone: "Sultanganj",
      km: 0.1,
      lat: 25.242,
      lon: 86.732,
      staff: "45 Officers",
      type: "Active Patrol",
      status: "Optimal",
      ref: "Sultanganj Railway Station",
    },
    {
      id: 2,
      name: "Asarganj Highway Checkpost",
      milestone: "Asarganj",
      km: 26.0,
      lat: 25.1481,
      lon: 86.6841,
      staff: "20 Officers",
      type: "Vehicle Check",
      status: "Optimal",
      ref: "Asarganj Camp Crossing",
    },
    {
      id: 3,
      name: "Katoria Sand Path Patrol Unit",
      milestone: "Katoria",
      km: 64.0,
      lat: 24.81,
      lon: 86.721,
      staff: "30 Patrols",
      type: "Foot Patrol",
      status: "Optimal",
      ref: "KM 64 Hilly pathway",
    },
    {
      id: 4,
      name: "Deoghar Temple Main Control Room",
      milestone: "Deoghar",
      km: 106.0,
      lat: 24.4819,
      lon: 86.7029,
      staff: "120 Officers",
      type: "CCTV Control Room",
      status: "Optimal",
      ref: "Near Temple Gate 1",
    },
  ];

  const activePost = policePosts[selectedPost];

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
            Security & Police Force
          </h3>
          <p className="text-xs text-neutral-secondary font-medium mt-0.5">
            24/7 security surveillance, queue control and active police
            assistance.
          </p>
        </div>
      </div>

      {/* Hero card details */}
      <div className="bg-brand-primary-dark text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-lg border border-brand-primary-border/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="flex-1 text-left relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="flex items-center gap-1 bg-indigo-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              <Shield size={12} />
              Selected Security Post
            </span>
          </div>

          <h4 className="font-sans font-extrabold text-xl md:text-2xl text-white mb-2">
            {activePost.name}
          </h4>

          <p className="text-indigo-300 font-bold text-sm md:text-base mb-4 flex items-center gap-1.5">
            <MapPin size={16} />
            Coordinates: {activePost.lat}, {activePost.lon}
            <span className="text-brand-primary-light/65 font-medium text-xs">
              ({activePost.milestone} - KM {activePost.km})
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-brand-primary-light mt-2 border-t border-brand-primary-border/15 pt-4">
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Force Strength
              </span>
              <span className="text-white font-semibold">
                {activePost.staff}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Operations Type
              </span>
              <span className="text-white font-semibold">
                {activePost.type}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">
                Location Landmark
              </span>
              <span className="text-white font-semibold">{activePost.ref}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map of Selected Post */}
      <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-primary-border/15 pb-4">
          <div>
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider flex items-center gap-2">
              <Compass size={18} className="text-indigo-500" />
              Live Security Station Map
            </h4>
            <p className="text-xs text-neutral-secondary mt-1">
              Geographical location coordinates of the selected security
              checkpoint / patrol unit.
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${activePost.lat},${activePost.lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-bold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-4 py-2 rounded-xl transition-all shadow-sm bg-white"
          >
            Open in Google Maps App
          </a>
        </div>

        <div className="w-full h-[320px] rounded-xl overflow-hidden border border-brand-primary-border/15 shadow-inner">
          <iframe
            title="Security Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${activePost.lat},${activePost.lon}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          />
        </div>
      </div>

      {/* Selection Grid */}
      <div className="flex flex-col gap-4 text-left">
        <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider">
          Security Posts Directory
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {policePosts.map((post, index) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(index)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                selectedPost === index
                  ? "border-brand-primary bg-brand-primary-light/5 shadow-md"
                  : "border-brand-primary-border/25 bg-white hover:border-brand-primary-border/55 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedPost === index ? "bg-indigo-500 text-white" : "bg-indigo-50 text-indigo-500"}`}
                >
                  <Shield size={18} />
                </div>
                <div className="text-left">
                  <h5 className="font-sans font-bold text-sm text-neutral-dark">
                    {post.name}
                  </h5>
                  <p className="text-[10px] text-neutral-secondary mt-0.5">
                    KM {post.km} | {post.milestone} Checkpoint
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-extrabold uppercase">
                <CheckCircle size={10} />
                {post.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
