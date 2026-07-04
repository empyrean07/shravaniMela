import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeartPulse, Droplets, Bed, Utensils, Shield, Bus, Search, Waves, 
  ArrowRight, Users, BatteryCharging, Briefcase, Music, PlusCircle, 
  CheckCircle2, AlertTriangle, UserCheck, ShieldAlert 
} from 'lucide-react';

export default function FacilitiesGrid({ isHome = false }) {
  const navigate = useNavigate();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [lostReports, setLostReports] = useState([
    { id: 1, type: "Person", name: "Ramesh Kumar (Age 62)", location: "Near Sultanganj Ghat", desc: "Wearing orange dhoti, carrying brass water pot.", contact: "+91-98765-11111", date: "2026-07-04" },
    { id: 2, type: "Belonging", name: "Red backpack", location: "Katoria Resting Camp 3", desc: "Contains Aadhaar card, train ticket, and clothes.", contact: "+91-98765-22222", date: "2026-07-03" }
  ]);

  const [foundItems, setFoundItems] = useState([
    { id: 1, name: "Leather Wallet (Black)", location: "Sultanganj", status: "Claimable at Helpdesk 2", type: "Belonging" },
    { id: 2, name: "OnePlus Mobile Phone", location: "Shivir 4", status: "Claimable at Helpdesk 5", type: "Belonging" },
    { id: 3, name: "Titan Wrist Watch", location: "Main Temple", status: "Claimable at Temple Office", type: "Belonging" },
    { id: 4, name: "Child (Age 8, Aarav)", location: "Helpdesk B", status: "Reunited Successfully!", type: "Person" }
  ]);

  // Devotee Form State
  const [reportType, setReportType] = useState('Belonging');
  const [reportName, setReportName] = useState('');
  const [reportLoc, setReportLoc] = useState('');
  const [reportDesc, setReportDesc] = useState('');
  const [reportContact, setReportContact] = useState('');

  // Admin Form State
  const [foundName, setFoundName] = useState('');
  const [foundLoc, setFoundLoc] = useState('');
  const [foundStatus, setFoundStatus] = useState('Claimable at Helpdesk 1');
  const [foundType, setFoundType] = useState('Belonging');

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!reportName || !reportLoc || !reportContact) return;
    const newReport = {
      id: Date.now(),
      type: reportType,
      name: reportName,
      location: reportLoc,
      desc: reportDesc,
      contact: reportContact,
      date: new Date().toISOString().split('T')[0]
    };
    setLostReports([newReport, ...lostReports]);
    // reset form
    setReportName('');
    setReportLoc('');
    setReportDesc('');
    setReportContact('');
  };

  const handleFoundSubmit = (e) => {
    e.preventDefault();
    if (!foundName || !foundLoc) return;
    const newItem = {
      id: Date.now(),
      name: foundName,
      location: foundLoc,
      status: foundStatus,
      type: foundType
    };
    setFoundItems([newItem, ...foundItems]);
    // reset form
    setFoundName('');
    setFoundLoc('');
    setFoundStatus('Claimable at Helpdesk 1');
  };

  const facilities = [
    { id: 1, title: "Medical Camps", desc: "24/7 first-aid and ambulance service at every 2km.", icon: HeartPulse, color: "text-red-500 bg-red-50" },
    { id: 2, title: "Drinking Water", desc: "Filtered water points (Pyaau) along the entire route.", icon: Droplets, color: "text-blue-500 bg-blue-50" },
    { id: 3, title: "Resting Shelters", desc: "Free Dharamshalas and tents for overnight stay.", icon: Bed, color: "text-amber-500 bg-amber-50" },
    { id: 4, title: "Free Food (Langar)", desc: "Hygienic food served by volunteer organizations.", icon: Utensils, color: "text-emerald-500 bg-emerald-50" },
    { id: 5, title: "Security & Police", desc: "CCTV surveillance and active police patrols.", icon: Shield, color: "text-indigo-500 bg-indigo-50" },
    { id: 6, title: "Transport Support", desc: "Special shuttle buses between camps and stations.", icon: Bus, color: "text-purple-500 bg-purple-50" },
    { id: 7, title: "Lost & Found Desk", desc: "Helpline and announcement system for lost relatives.", icon: Search, color: "text-teal-500 bg-teal-50" },
    { id: 8, title: "Bathing Ghats", desc: "Clean and guarded bathing ghats at Sultanganj.", icon: Waves, color: "text-cyan-500 bg-cyan-50" },
    
    // Additional crowded place facilities
    { id: 9, title: "Crowd & Queue Control", desc: "Barricade routing, density sensors and queue updates.", icon: Users, color: "text-rose-500 bg-rose-50" },
    { id: 10, title: "Mobile Charging Kiosks", desc: "Secure multi-port solar charging lockers along path.", icon: BatteryCharging, color: "text-orange-500 bg-orange-50" },
    { id: 11, title: "Luggage Cloak Rooms", desc: "Barcode-tracked safety locker rooms near the temple.", icon: Briefcase, color: "text-violet-500 bg-violet-50" },
    { id: 12, title: "Spiritual Satsang Halls", desc: "Air-conditioned halls for spiritual rest and bhajan.", icon: Music, color: "text-pink-500 bg-pink-50" }
  ];

  // Limit facilities view on Home dashboard
  const visibleFacilities = isHome ? facilities.slice(0, 4) : facilities;

  return (
    <div className="w-full flex flex-col gap-10">
      
      {/* Yatra Facilities & Services Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h4 className="font-sans font-bold text-lg text-neutral-dark">
            {isHome ? "Key Yatra Facilities" : "Yatra Facilities & Services"}
          </h4>
          
          {isHome && (
            <button 
              onClick={() => navigate('/facilities')}
              className="text-brand-primary text-xs font-extrabold hover:underline flex items-center gap-1 font-action"
            >
              View All Services
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleFacilities.map(facility => {
            const Icon = facility.icon;
            return (
              <div 
                key={facility.id} 
                className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 flex flex-col gap-3 text-left hover:shadow-md hover:border-brand-primary-border/55 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl ${facility.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h5 className="font-sans font-extrabold text-sm text-neutral-dark mb-1">
                    {facility.title}
                  </h5>
                  <p className="text-[11px] text-neutral-secondary leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lost & Found Register Section - Only shown on dedicated Facilities screen */}
      {!isHome && (
        <div className="border-t border-brand-primary-border/15 pt-10 flex flex-col gap-6 text-left animate-fade-in">
          
          {/* Lost & Found Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-sans font-extrabold text-lg text-neutral-dark flex items-center gap-2">
                <ShieldAlert size={20} className="text-saffron" />
                Lost & Found Register
              </h4>
              <p className="text-xs text-neutral-secondary mt-1">
                Helping reunite pilgrims with their loved ones and belongings during the Shravani Mela crowd.
              </p>
            </div>

            {/* Portal Switcher */}
            <button 
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-action border transition-all ${
                isAdminMode 
                  ? 'bg-neutral-dark text-white border-neutral-dark'
                  : 'bg-white text-brand-primary border-brand-primary-border/30 hover:bg-neutral-bg'
              }`}
            >
              {isAdminMode ? "Switch to Devotee View" : "Switch to Admin View"}
            </button>
          </div>

          {/* Split reporting and display boards */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Column 1: Reporting Forms (Devotee / Admin) */}
            <div className="w-full lg:w-[400px] shrink-0 bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm">
              
              {!isAdminMode ? (
                /* Devotee Lost Report Form */
                <form onSubmit={handleReportSubmit} className="flex flex-col gap-4">
                  <h5 className="font-sans font-extrabold text-sm text-neutral-dark flex items-center gap-2 border-b border-brand-primary-border/15 pb-3">
                    <PlusCircle size={16} className="text-brand-primary" />
                    Report Lost Item / Missing Person
                  </h5>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Report Category</label>
                    <select 
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    >
                      <option value="Belonging">Lost Belonging</option>
                      <option value="Person">Missing Person</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Name / Item Title</label>
                    <input 
                      type="text" 
                      required
                      placeholder={reportType === 'Person' ? "e.g. Ramesh Kumar" : "e.g. Black Leather Bag"}
                      value={reportName}
                      onChange={(e) => setReportName(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Last Seen Location</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sultanganj Ghat or Shivir 3"
                      value={reportLoc}
                      onChange={(e) => setReportLoc(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Description</label>
                    <textarea 
                      rows="3"
                      placeholder="Add details (colour, size, last clothes worn...)"
                      value={reportDesc}
                      onChange={(e) => setReportDesc(e.target.value)}
                      className="w-full p-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Contact Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +91 98765 XXXXX"
                      value={reportContact}
                      onChange={(e) => setReportContact(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-11 bg-brand-primary hover:bg-brand-primary-dark text-white font-action font-extrabold text-xs rounded-xl shadow transition-all active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <AlertTriangle size={14} />
                    Submit Lost Report
                  </button>
                </form>
              ) : (
                /* Admin Found Item Posting Form */
                <form onSubmit={handleFoundSubmit} className="flex flex-col gap-4">
                  <h5 className="font-sans font-extrabold text-sm text-neutral-dark flex items-center gap-2 border-b border-brand-primary-border/15 pb-3">
                    <UserCheck size={16} className="text-saffron-dark" />
                    Post Found Item (Admin Portal)
                  </h5>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Item Category</label>
                    <select 
                      value={foundType}
                      onChange={(e) => setFoundType(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    >
                      <option value="Belonging">Belonging</option>
                      <option value="Person">Person Found / Reunited</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Found Item Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Watch, Wallet, Keyring"
                      value={foundName}
                      onChange={(e) => setFoundName(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Location Found</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Shivir 4 or Baba Temple Gate 3"
                      value={foundLoc}
                      onChange={(e) => setFoundLoc(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Claim Status / Location</label>
                    <select 
                      value={foundStatus}
                      onChange={(e) => setFoundStatus(e.target.value)}
                      className="w-full h-10 px-3 bg-neutral-bg border border-brand-primary-border/20 rounded-lg text-xs focus:outline-none focus:border-brand-primary"
                    >
                      <option value="Claimable at Helpdesk 1">Claimable at Helpdesk 1</option>
                      <option value="Claimable at Helpdesk 2">Claimable at Helpdesk 2</option>
                      <option value="Claimable at Helpdesk 5">Claimable at Helpdesk 5</option>
                      <option value="Claimable at Temple Office">Claimable at Temple Office</option>
                      <option value="Reunited Successfully!">Reunited Successfully!</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-11 bg-saffron hover:bg-saffron-dark text-brand-saffron-bg-dark font-action font-extrabold text-xs rounded-xl shadow transition-all active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <PlusCircle size={14} />
                    Post Found Item
                  </button>
                </form>
              )}

            </div>

            {/* Column 2: Dashboard Boards (Active Lost Reports & Recently Found Board) */}
            <div className="flex-1 w-full flex flex-col gap-6">
              
              {/* Recently Found Board */}
              <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-4 text-left">
                <h5 className="font-sans font-extrabold text-sm text-neutral-dark border-b border-brand-primary-border/15 pb-2">
                  Recently Found Board (Active Claims)
                </h5>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {foundItems.map(item => (
                    <div key={item.id} className="p-4 bg-neutral-bg/60 border border-brand-primary-border/10 rounded-xl flex flex-col justify-between hover:border-brand-primary-border/30 transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-sans font-extrabold text-xs text-neutral-dark">{item.name}</span>
                          <span className={`text-[8px] font-extrabold px-2 py-0.5 rounded uppercase ${
                            item.type === 'Person' ? 'bg-emerald-50 text-emerald-700' : 'bg-brand-primary-light text-brand-primary'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <p className="text-[10px] text-neutral-secondary font-semibold">Found at: {item.location}</p>
                      </div>
                      <div className="mt-3 flex items-center gap-1.5 text-[9px] font-bold text-brand-primary">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Lost Reports List */}
              <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-4 text-left">
                <h5 className="font-sans font-extrabold text-sm text-neutral-dark border-b border-brand-primary-border/15 pb-2">
                  Active Missing / Lost Reports
                </h5>
                
                <div className="flex flex-col gap-3">
                  {lostReports.length > 0 ? (
                    lostReports.map(report => (
                      <div key={report.id} className="p-4 border border-brand-primary-border/10 rounded-xl hover:border-brand-primary-border/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-sans font-extrabold text-xs text-neutral-dark">{report.name}</span>
                            <span className={`text-[8px] font-extrabold px-1.5 py-0.25 rounded uppercase ${
                              report.type === 'Person' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                            }`}>
                              {report.type}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-secondary font-semibold">Last Location: {report.location} | Date: {report.date}</p>
                          {report.desc && <p className="text-[10px] text-neutral-secondary mt-1 font-medium">{report.desc}</p>}
                        </div>
                        <div className="shrink-0 text-left md:text-right border-t md:border-t-0 pt-2.5 md:pt-0 border-neutral-bg-cool">
                          <p className="text-[9px] uppercase text-neutral-secondary font-bold leading-none">Contact Person</p>
                          <a href={`tel:${report.contact}`} className="text-xs font-mono font-bold text-brand-primary hover:underline">{report.contact}</a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-neutral-secondary p-4 text-center">No lost reports filed yet.</p>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
