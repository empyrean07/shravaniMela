import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, HeartPulse, Compass, Phone, ShieldAlert, Languages } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const searchIndex = [
  // Health / Medical camps
  { name: "Ghat Main Medical Unit", desc: "First Aid & Stabilization (Sultanganj KM 0.5)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Sultanganj Referral Hospital", desc: "Government General Hospital (Sultanganj KM 1.5)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Asarganj Camp Hospital", desc: "Yatra Transit Camp (Asarganj KM 26.2)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Kumarpur Health Post", desc: "First Aid Station (Asarganj KM 29.5)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Katoria Trauma & Recovery Camp", desc: "Specialized Trauma Hub (Katoria KM 64.0)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Inaravaran Emergency Post", desc: "First Aid Station (Katoria KM 68.1)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Dharamsala Border Post", desc: "Border Checkpost Hospital (Dharamsala KM 88.5)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Dumka Checkpost Unit", desc: "First Aid Station (Dharamsala KM 92.0)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Baba Dham Entry Camp", desc: "Yatra Terminus Hospital (Deoghar KM 104.8)", category: "Medical Camp", path: "/health", icon: HeartPulse },
  { name: "Deoghar Sadar Hospital", desc: "District Referral Hospital (Deoghar KM 106.5)", category: "Medical Camp", path: "/health", icon: HeartPulse },

  // Facilities / Services
  { name: "Drinking Water (Pyaau)", desc: "Filtered water points along the route", category: "Service", path: "/water", icon: Compass },
  { name: "Resting Shelters (Dharamshala)", desc: "Free Dharamshalas and tents for overnight stay", category: "Service", path: "/shelter", icon: Compass },
  { name: "Free Food (Langar)", desc: "Hygienic food served by volunteer organizations", category: "Service", path: "/food", icon: Compass },
  { name: "Security & Police Force", desc: "CCTV surveillance and active police patrols", category: "Service", path: "/security", icon: ShieldAlert },
  { name: "Transport Support Bus", desc: "Special shuttle buses between camps and stations", category: "Service", path: "/facilities", icon: Compass },
  { name: "Lost & Found Desk", desc: "Helpline and announcement system for lost relatives", category: "Service", path: "/lostfound", icon: Search },
  { name: "Bathing Ghats Sultanganj", desc: "Clean and guarded bathing ghats at Sultanganj", category: "Service", path: "/ghats", icon: Compass },
  { name: "Crowd & Queue Control", desc: "Barricade routing, density sensors and queue updates", category: "Service", path: "/facilities", icon: ShieldAlert },
  { name: "Mobile Charging Kiosks", desc: "Secure multi-port solar charging lockers along path", category: "Service", path: "/charging", icon: Compass },
  { name: "Luggage Cloak Rooms", desc: "Barcode-tracked safety locker rooms near the temple", category: "Service", path: "/cloakroom", icon: Compass },
  { name: "Spiritual Satsang Halls", desc: "Air-conditioned halls for spiritual rest and bhajan", category: "Service", path: "/satsang", icon: Compass },

  // Helpline / Emergency contacts
  { name: "Ambulance Emergency (102)", desc: "Call for medical emergency", category: "Helpline", path: "/helpline", icon: Phone },
  { name: "Police Emergency (100)", desc: "Call for security/crowd issues", category: "Helpline", path: "/helpline", icon: Phone },
  { name: "Fire Rescue Helpline (101)", desc: "Call for fire or rescue support", category: "Helpline", path: "/helpline", icon: Phone },
  { name: "Mela Control Room", desc: "Central Command Chief Coordinator", category: "Helpline", path: "/helpline", icon: Phone },
  { name: "District Admin Deoghar", desc: "Deoghar HQ Deputy Commissioner", category: "Helpline", path: "/helpline", icon: Phone },
  { name: "Temple Board Baidyanath", desc: "Baidyanath Dham Shrine Secretary", category: "Helpline", path: "/helpline", icon: Phone },
  { name: "Public Health Sanitation", desc: "Sanitation Department Nodal Officer", category: "Helpline", path: "/helpline", icon: Phone },
  { name: "Lost & Found Helpdesk Center", desc: "Helpdesk Center Unit In-charge", category: "Helpline", path: "/helpline", icon: Phone }
];

export default function TopAppBar({ unreadCount = 0 }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const [language, setLanguage] = useState(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    return match ? match[1] : 'en';
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkCookie = () => {
      const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
      if (match && match[1] !== language) {
        setLanguage(match[1]);
      }
    };
    const timer = setTimeout(() => {
      const selectEl = document.querySelector('.goog-te-combo');
      if (selectEl && selectEl.value) {
        setLanguage(selectEl.value);
      }
    }, 1000);
    checkCookie();
    return () => clearTimeout(timer);
  }, [language]);

  const toggleLanguage = () => {
    const targetLang = language === 'en' ? 'hi' : 'en';
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${targetLang}; path=/;`;
    document.cookie = `googtrans=/en/${targetLang}; path=/; domain=.${domain};`;
    document.cookie = `googtrans=/en/${targetLang}; path=/; domain=${domain};`;

    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = targetLang;
      selectEl.dispatchEvent(new Event('change'));
      setLanguage(targetLang);
    } else {
      setLanguage(targetLang);
      window.location.reload();
    }
  };

  const filteredResults = searchQuery.trim() === "" 
    ? [] 
    : searchIndex.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="h-16 border-b border-brand-primary-border/20 bg-white flex items-center justify-between px-8 max-md:pl-18 shrink-0 relative">
      
      {/* Page Title / Brand */}
      <div className="flex items-center gap-4">
        <h2 className="font-sans font-black text-lg md:text-2xl text-neutral-dark tracking-tight">
          Shravani Mela Portal
        </h2>
      </div>

      {/* Actions (Search, Notification) */}
      <div className="flex items-center gap-6">
        
        {/* Search Bar */}
        <div ref={searchRef} className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search resources, status, camps..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="w-64 h-9 bg-neutral-bg border border-brand-primary-border/30 rounded-lg pl-9 pr-4 text-xs font-sans text-neutral-dark focus:outline-none focus:border-brand-primary transition-all duration-200"
          />
          <Search size={14} className="absolute left-3 top-2.5 text-neutral-secondary" />

          {/* Search Dropdown */}
          {showDropdown && searchQuery.trim() !== "" && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-brand-primary-border/30 rounded-xl shadow-xl z-50 overflow-hidden text-left max-h-80 overflow-y-auto">
              <div className="p-2.5 border-b border-brand-primary-border/10 bg-neutral-bg/50">
                <span className="text-[10px] font-extrabold uppercase text-neutral-secondary px-2">
                  Search Results ({filteredResults.length})
                </span>
              </div>
              <div className="py-1">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result, idx) => {
                    const Icon = result.icon || Search;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          navigate(result.path);
                          setSearchQuery("");
                          setShowDropdown(false);
                        }}
                        className="w-full px-4 py-2.5 hover:bg-brand-primary-light/10 text-left flex items-start gap-3 transition-colors duration-150 border-b border-neutral-bg-cool last:border-0 cursor-pointer"
                      >
                        <div className="mt-0.5 p-1 rounded-md bg-neutral-bg text-brand-primary shrink-0">
                          <Icon size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-neutral-dark truncate">
                              {result.name}
                            </span>
                            <span className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded shrink-0 ${
                              result.category === 'Medical Camp' 
                                ? 'bg-red-50 text-red-600 border border-red-100'
                                : result.category === 'Emergency Helpline' || result.category === 'Helpline'
                                ? 'bg-saffron-light/30 text-saffron-dark border border-saffron-light/50'
                                : 'bg-brand-primary-light/30 text-brand-primary border border-brand-primary-border/20'
                            }`}>
                              {result.category}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-secondary truncate mt-0.5">
                            {result.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="p-6 text-center text-xs text-neutral-secondary">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Language Toggle Button */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-brand-primary-border/30 hover:border-brand-primary hover:bg-neutral-bg transition-all duration-200 text-xs font-bold text-neutral-dark cursor-pointer shrink-0"
          title={language === 'en' ? "Translate to Hindi / हिंदी में अनुवाद करें" : "Translate to English / अंग्रेजी में अनुवाद करें"}
        >
          <Languages size={15} className="text-brand-primary" />
          <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>

        {/* Notifications Icon with Link and Dynamic Unread Dot */}
        <Link 
          to="/notifications"
          className="relative p-2 hover:bg-neutral-bg rounded-lg text-neutral-secondary hover:text-neutral-dark transition-all duration-200"
          title="Mela Notifications"
        >
          <Bell size={18} />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-saffron border-2 border-white rounded-full animate-pulse" />
          )}
        </Link>

      </div>

    </header>
  );
}
