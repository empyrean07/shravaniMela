import React, { useState } from 'react';
import { Phone, Search, Download, AlertOctagon, ShieldAlert, LifeBuoy, ExternalLink } from 'lucide-react';

export default function MelaHelpline() {
  const [searchQuery, setSearchQuery] = useState('');

  const fastDials = [
    { name: "Ambulance", number: "102", sub: "Medical Emergency & First Aid", icon: AlertOctagon, color: "border-red-200 bg-red-50/40 text-red-700 hover:bg-red-50 hover:shadow-red-100" },
    { name: "Police", number: "100", sub: "Security & Crowd Control", icon: ShieldAlert, color: "border-indigo-200 bg-indigo-50/40 text-indigo-700 hover:bg-indigo-50 hover:shadow-indigo-100" },
    { name: "Fire Rescue", number: "101", sub: "Fire & Rescue Operations", icon: LifeBuoy, color: "border-saffron-light/30 bg-saffron-light/5 text-saffron-dark hover:bg-saffron-light/10 hover:shadow-saffron-light/10" }
  ];

  const directory = [
    { dept: "Mela Control Room", sub: "Central Command", role: "Chief Coordinator", contact: "+91 98765 43210" },
    { dept: "District Admin", sub: "Deoghar HQ", role: "Deputy Commissioner", contact: "+91 98765 43211" },
    { dept: "Temple Board", sub: "Baidyanath Dham", role: "Shrine Secretary", contact: "+91 98765 43212" },
    { dept: "Public Health", sub: "Sanitation Dept", role: "Nodal Officer", contact: "+91 98765 43213" },
    { dept: "Lost & Found", sub: "Helpdesk Center", role: "Unit In-charge", contact: "+91 98765 43214" }
  ];

  const guidelines = [
    { title: "Fast-Dial Protocol", text: "Only use emergency numbers for immediate life-threatening situations. Stay on the line until coordinates are confirmed." },
    { title: "Control Room Usage", text: "For path updates, missing baggage, or reporting crowd bottlenecks, the Central Control Room is your primary point." },
    { title: "Health & Hygiene", text: "Report water shortages or sanitation issues to the Nodal Officer to help us maintain a clean Mela environment." },
    { title: "24/7 Spiritual Care", text: "We are here to support your devotion. Stay calm and helpful to others." }
  ];

  const filteredDirectory = directory.filter(item => 
    item.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-8 text-left animate-fade-in">
      
      {/* Hero Banner Header with Image and Gradient Overlay */}
      <div className="relative w-full h-64 md:h-56 rounded-3xl overflow-hidden shadow-md flex items-end p-6 md:p-8">
        {/* Background Image */}
        <img 
          src="/deoghar_temple.jpg" 
          alt="Deoghar Temple Sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/95 via-brand-primary-dark/45 to-transparent z-10" />
        
        {/* Content Container */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between w-full gap-4 text-left">
          <div className="max-w-xl">
            <h3 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Mela Helpline
            </h3>
            <p className="text-xs md:text-sm text-brand-primary-light/90 mt-2 leading-relaxed font-semibold">
              Dedicated support for a seamless and safe spiritual journey. Help is just a call away.
            </p>
          </div>
          
          {/* Search Input inside the banner */}
          <div className="relative shrink-0 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search authorities, help centers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-72 h-10 bg-white/95 backdrop-blur border border-white/20 rounded-xl pl-9 pr-4 text-xs font-sans text-neutral-dark placeholder-neutral-secondary focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-primary/30 transition-all duration-200 shadow-md"
            />
            <Search size={14} className="absolute left-3 top-3 text-neutral-secondary" />
          </div>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Main Content Column (Left) */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          
          {/* Emergency Fast Dial Row */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider">
              Emergency Fast-Dial
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {fastDials.map((dial, idx) => {
                const Icon = dial.icon;
                return (
                  <a 
                    key={idx}
                    href={`tel:${dial.number}`}
                    className={`flex flex-col items-center justify-center p-6 border rounded-2xl text-center transition-all duration-300 shadow-sm cursor-pointer ${dial.color}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/80 border border-current/15 flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">{dial.name}</span>
                    <span className="text-3xl font-black my-1">{dial.number}</span>
                    <span className="text-[10px] opacity-80 leading-normal max-w-[150px]">{dial.sub}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Authority Directory Table Section */}
          <div className="bg-white border border-brand-primary-border/25 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-brand-primary-border/20 flex items-center justify-between">
              <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider">
                Authority Directory
              </h4>
              <button className="flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-bold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-3.5 py-2 rounded-lg transition-all shadow-sm">
                <Download size={14} />
                Download PDF
              </button>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-bg/60 border-b border-brand-primary-border/20">
                    <th className="p-4 pl-6 text-[10px] font-extrabold text-neutral-secondary uppercase tracking-wider">Department</th>
                    <th className="p-4 text-[10px] font-extrabold text-neutral-secondary uppercase tracking-wider">Designation</th>
                    <th className="p-4 text-[10px] font-extrabold text-neutral-secondary uppercase tracking-wider">Contact</th>
                    <th className="p-4 pr-6 text-[10px] font-extrabold text-neutral-secondary uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-bg-cool">
                  {filteredDirectory.length > 0 ? (
                    filteredDirectory.map((item, idx) => (
                      <tr key={idx} className="hover:bg-neutral-bg/35 transition-colors">
                        <td className="p-4 pl-6">
                          <p className="font-sans font-extrabold text-sm text-neutral-dark">{item.dept}</p>
                          <p className="text-[10px] text-neutral-secondary">{item.sub}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-xs font-semibold text-neutral-dark">{item.role}</p>
                        </td>
                        <td className="p-4 font-mono text-xs font-bold text-brand-primary">
                          {item.contact}
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <a 
                            href={`tel:${item.contact}`}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary-light text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                          >
                            <Phone size={14} />
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-xs text-neutral-secondary">
                        No contacts match your query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-brand-primary-border/20 text-center">
              <button className="text-brand-primary font-action font-extrabold text-xs hover:underline inline-flex items-center gap-1">
                View All Contacts
                <ExternalLink size={12} />
              </button>
            </div>
          </div>

        </div>

        {/* Safety Guidelines Sidebar Column (Right) */}
        <div className="w-full lg:w-[320px] flex flex-col gap-6 shrink-0">
          <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            
            {/* Sidebar Title */}
            <h4 className="font-sans font-extrabold text-base text-neutral-dark border-b border-brand-primary-border/20 pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-saffron animate-pulse" />
              Safety Guidelines
            </h4>

            {/* List of Guidelines Cards */}
            <div className="flex flex-col gap-4">
              {guidelines.map((guide, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 p-4 bg-neutral-bg border border-brand-primary-border/15 rounded-xl hover:border-brand-primary-border/30 transition-all">
                  <h5 className="font-sans font-extrabold text-xs text-neutral-dark">{guide.title}</h5>
                  <p className="text-[11px] text-neutral-secondary leading-relaxed font-medium">
                    {guide.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Support Message Widget */}
            <div className="bg-brand-primary-dark text-white p-4.5 rounded-xl text-left border border-brand-primary-border/10">
              <p className="text-xs font-bold text-saffron mb-1">
                24/7 Spiritual Care
              </p>
              <p className="text-[10px] text-brand-primary-light/85 leading-normal">
                We are here to support your devotion. Stay calm and helpful to others.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
