import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeartPulse, Droplets, Bed, Utensils, Shield, Bus, Search, Waves, 
  ArrowRight, Users, BatteryCharging, Briefcase, Music, PlusCircle, 
  CheckCircle2, AlertTriangle, UserCheck, ShieldAlert, Upload, Image as ImageIcon
} from 'lucide-react';

export default function FacilitiesGrid({ isHome = false }) {
  const navigate = useNavigate();
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Initial lost reports with mock image previews
  const [lostReports, setLostReports] = useState([
    { 
      id: 1, 
      type: "Person", 
      name: "Ramesh Kumar (Age 62)", 
      location: "Near Sultanganj Ghat", 
      desc: "Wearing orange dhoti, carrying brass water pot.", 
      contact: "+91-98765-11111", 
      date: "2026-07-04",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60"
    },
    { 
      id: 2, 
      type: "Belonging", 
      name: "Red backpack", 
      location: "Katoria Resting Camp 3", 
      desc: "Contains Aadhaar card, train ticket, and clothes.", 
      contact: "+91-98765-22222", 
      date: "2026-07-03",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&auto=format&fit=crop&q=60"
    }
  ]);

  // Initial found items with mock image previews
  const [foundItems, setFoundItems] = useState([
    { 
      id: 1, 
      name: "Leather Wallet (Black)", 
      location: "Sultanganj", 
      status: "Claimable at Helpdesk 2", 
      type: "Belonging",
      image: "https://images.unsplash.com/photo-1627124765135-566b535f9a45?w=300&auto=format&fit=crop&q=60"
    },
    { 
      id: 2, 
      name: "OnePlus Mobile Phone", 
      location: "Shivir 4", 
      status: "Claimable at Helpdesk 5", 
      type: "Belonging",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=60"
    },
    { 
      id: 3, 
      name: "Titan Wrist Watch", 
      location: "Main Temple", 
      status: "Claimable at Temple Office", 
      type: "Belonging",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=60"
    },
    { 
      id: 4, 
      name: "Child (Age 8, Aarav)", 
      location: "Helpdesk B", 
      status: "Reunited Successfully!", 
      type: "Person",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=300&auto=format&fit=crop&q=60"
    }
  ]);

  // Devotee Form State
  const [reportType, setReportType] = useState('Belonging');
  const [reportName, setReportName] = useState('');
  const [reportLoc, setReportLoc] = useState('');
  const [reportDesc, setReportDesc] = useState('');
  const [reportContact, setReportContact] = useState('');
  const [reportImage, setReportImage] = useState('');

  // Admin Form State
  const [foundName, setFoundName] = useState('');
  const [foundLoc, setFoundLoc] = useState('');
  const [foundStatus, setFoundStatus] = useState('Claimable at Helpdesk 1');
  const [foundType, setFoundType] = useState('Belonging');
  const [foundImage, setFoundImage] = useState('');

  // Real Local File Reader Handler
  const handleImageChange = (e, isForAdmin = false) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (isForAdmin) {
        setFoundImage(reader.result);
      } else {
        setReportImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

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
      date: new Date().toISOString().split('T')[0],
      image: reportImage || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=150&auto=format&fit=crop&q=60"
    };
    setLostReports([newReport, ...lostReports]);
    // reset form
    setReportName('');
    setReportLoc('');
    setReportDesc('');
    setReportContact('');
    setReportImage('');
  };

  const handleFoundSubmit = (e) => {
    e.preventDefault();
    if (!foundName || !foundLoc) return;
    const newItem = {
      id: Date.now(),
      name: foundName,
      location: foundLoc,
      status: foundStatus,
      type: foundType,
      image: foundImage || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&auto=format&fit=crop&q=60"
    };
    setFoundItems([newItem, ...foundItems]);
    // reset form
    setFoundName('');
    setFoundLoc('');
    setFoundStatus('Claimable at Helpdesk 1');
    setFoundImage('');
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

          {/* Split reporting and display boards - Refactored into rows layout */}
          <div className="flex flex-col gap-8 w-full">
            
            {/* ROW 1: Form and Found Board Side-by-Side */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              
              {/* Form Container */}
              <div className="flex-1 w-full bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm">
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

                    {/* Real Image Upload Section */}
                    <div>
                      <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Photograph / Reference Image</label>
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor="lost-image-input"
                          className="flex-1 h-12 border-2 border-dashed border-brand-primary-border/40 hover:border-brand-primary rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-neutral-secondary hover:text-brand-primary bg-neutral-bg/30 transition-all cursor-pointer"
                        >
                          <Upload size={16} />
                          {reportImage ? "Change Photograph" : "Choose from Device"}
                        </label>
                        <input 
                          type="file"
                          id="lost-image-input"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageChange(e, false)}
                        />
                        {reportImage && (
                          <div className="w-12 h-12 rounded-lg border border-brand-primary-border/30 overflow-hidden shrink-0">
                            <img src={reportImage} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
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
                        rows="2"
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

                    {/* Real Admin Image Upload Section */}
                    <div>
                      <label className="text-[10px] uppercase text-neutral-secondary font-bold block mb-1">Found Item Photo</label>
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor="found-image-input"
                          className="flex-1 h-12 border-2 border-dashed border-brand-primary-border/40 hover:border-brand-primary rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-neutral-secondary hover:text-brand-primary bg-neutral-bg/30 transition-all cursor-pointer"
                        >
                          <Upload size={16} />
                          {foundImage ? "Change Photograph" : "Choose from Device"}
                        </label>
                        <input 
                          type="file"
                          id="found-image-input"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageChange(e, true)}
                        />
                        {foundImage && (
                          <div className="w-12 h-12 rounded-lg border border-brand-primary-border/30 overflow-hidden shrink-0">
                            <img src={foundImage} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
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

              {/* Recently Found Board (Admin posts) */}
              <div className="flex-1 w-full bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-4 text-left">
                <h5 className="font-sans font-extrabold text-sm text-neutral-dark border-b border-brand-primary-border/15 pb-2">
                  Recently Found Board (Active Claims)
                </h5>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {foundItems.map(item => (
                    <div key={item.id} className="border border-brand-primary-border/15 rounded-2xl overflow-hidden flex flex-col hover:border-brand-primary-border/30 transition-all bg-neutral-bg/30 h-full">
                      
                      {/* Image Header */}
                      <div className="w-full h-32 bg-neutral-bg-cool relative">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-neutral-secondary">
                            <ImageIcon size={28} />
                          </div>
                        )}
                        <span className={`absolute top-3 right-3 text-[8px] font-extrabold px-2 py-0.5 rounded shadow-sm uppercase ${
                          item.type === 'Person' ? 'bg-emerald-500 text-white' : 'bg-brand-primary text-white'
                        }`}>
                          {item.type}
                        </span>
                      </div>

                      {/* Content details */}
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <span className="font-sans font-extrabold text-xs text-neutral-dark block mb-0.5">{item.name}</span>
                          <p className="text-[10px] text-neutral-secondary font-semibold">Found at: {item.location}</p>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5 text-xs font-extrabold text-brand-primary">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          {item.status}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ROW 2: Active Missing / Lost Reports Section Only (Full Width Grid) */}
            <div className="w-full bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-4 text-left">
              <h5 className="font-sans font-extrabold text-sm text-neutral-dark border-b border-brand-primary-border/15 pb-2">
                Active Missing / Lost Reports
              </h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lostReports.length > 0 ? (
                  lostReports.map(report => (
                    <div key={report.id} className="p-4 border border-brand-primary-border/10 rounded-2xl hover:border-brand-primary-border/30 transition-all flex flex-col gap-4 bg-neutral-bg/25">
                      <div className="flex items-center gap-3.5 w-full">
                        
                        {/* Image Thumbnail */}
                        <div className="w-14 h-14 rounded-xl border border-brand-primary-border/15 overflow-hidden shrink-0 bg-neutral-bg flex items-center justify-center text-neutral-secondary">
                          {report.image ? (
                            <img src={report.image} alt={report.name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon size={18} />
                          )}
                        </div>

                        <div className="text-left flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-sans font-extrabold text-xs text-neutral-dark">{report.name}</span>
                            <span className={`text-[8px] font-extrabold px-1.5 py-0.25 rounded uppercase ${
                              report.type === 'Person' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                            }`}>
                              {report.type}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-secondary font-semibold">Last Location: {report.location} | Date: {report.date}</p>
                          {report.desc && <p className="text-[10px] text-neutral-secondary mt-1.5 font-medium leading-relaxed">{report.desc}</p>}
                        </div>
                      </div>

                      <div className="border-t border-neutral-bg-cool pt-3 flex justify-between items-center w-full">
                        <div>
                          <p className="text-[9px] uppercase text-neutral-secondary font-bold leading-none">Contact Person</p>
                          <a href={`tel:${report.contact}`} className="text-xs font-mono font-bold text-brand-primary hover:underline">{report.contact}</a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-neutral-secondary p-4 col-span-2 text-center">No lost reports filed yet.</p>
                )}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
