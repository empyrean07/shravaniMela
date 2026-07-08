import React, { useState, useRef, useEffect } from "react";
import {
  Bell,
  Search,
  HeartPulse,
  Compass,
  Phone,
  ShieldAlert,
  Languages,
  Home,
  CloudSun,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// Custom SVG Logo drawn in Figma (stylized temple shikhara)
function FigmaLogo({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 31.5L0 15L3 15L3 18L6 18L10.4625 3.1875L10.4625 0L13.4625 0L13.4625 3L16.5 3L16.5 0L19.5 0L19.5 3L24 18L27 18L27 15L30 15L30 31.5L16.5 31.5L16.5 24L13.5 24L13.5 31.5L0 31.5M10.05 15L19.95 15L19.05 12L10.95 12L10.05 15M11.85 9L18.15 9L17.25 6L12.75 6L11.85 9M3 28.5L10.5 28.5L10.5 21L19.5 21L19.5 28.5L27 28.5L27 21L21.75 21L20.85 18L9.15 18L8.25 21L3 21L3 28.5"
        fill={color}
      />
    </svg>
  );
}

// Custom SVG Logo representing Lord Shiva (Trishul + Damru + Crescent Moon)
function ShivaIcon({ className = "w-5 h-5", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Trident (Trishul) */}
      <path
        d="M12 3v18M12 3L10.5 5.5h3L12 3zM6 9c0 3.5 2.5 5 6 5s6-1.5 6-5M6 9l-1.5-1.5h3L6 9zM18 9l1.5-1.5h-3L18 9z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Damru */}
      <path
        d="M10 14.5h4l-4 3h4z"
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Crescent Moon */}
      <path
        d="M14.5 7.5a2.5 2.5 0 0 1 2 2.5 2.5 2.5 0 0 0-2-2.5z"
        fill={color}
      />
    </svg>
  );
}

const menuItems = [
  { id: "home", label: "Home", path: "/", icon: Home },
  { id: "helpline", label: "Mela Helpline", path: "/helpline", icon: Phone },
  { id: "health", label: "Health Centre", path: "/health", icon: HeartPulse },
  {
    id: "facilities",
    label: "Facilities & Services",
    path: "/facilities",
    icon: Compass,
  },
];

const searchIndex = [
  // Health / Medical camps
  {
    name: "Ghat Main Medical Unit",
    desc: "First Aid & Stabilization (Sultanganj KM 0.5)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Sultanganj Referral Hospital",
    desc: "Government General Hospital (Sultanganj KM 1.5)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Asarganj Camp Hospital",
    desc: "Yatra Transit Camp (Asarganj KM 26.2)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Kumarpur Health Post",
    desc: "First Aid Station (Asarganj KM 29.5)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Katoria Trauma & Recovery Camp",
    desc: "Specialized Trauma Hub (Katoria KM 64.0)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Inaravaran Emergency Post",
    desc: "First Aid Station (Katoria KM 68.1)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Dharamsala Border Post",
    desc: "Border Checkpost Hospital (Dharamsala KM 88.5)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Dumka Checkpost Unit",
    desc: "First Aid Station (Dharamsala KM 92.0)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Baba Dham Entry Camp",
    desc: "Yatra Terminus Hospital (Deoghar KM 104.8)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },
  {
    name: "Deoghar Sadar Hospital",
    desc: "District Referral Hospital (Deoghar KM 106.5)",
    category: "Medical Camp",
    path: "/health",
    icon: HeartPulse,
  },

  // Facilities / Services
  {
    name: "Drinking Water (Pyaau)",
    desc: "Filtered water points along the route",
    category: "Service",
    path: "/water",
    icon: Compass,
  },
  {
    name: "Resting Shelters (Dharamshala)",
    desc: "Free Dharamshalas and tents for overnight stay",
    category: "Service",
    path: "/shelter",
    icon: Compass,
  },
  {
    name: "Free Food (Langar)",
    desc: "Hygienic food served by volunteer organizations",
    category: "Service",
    path: "/food",
    icon: Compass,
  },
  {
    name: "Security & Police Force",
    desc: "CCTV surveillance and active police patrols",
    category: "Service",
    path: "/security",
    icon: ShieldAlert,
  },
  {
    name: "Transport Support Bus",
    desc: "Special shuttle buses between camps and stations",
    category: "Service",
    path: "/facilities",
    icon: Compass,
  },
  {
    name: "Lost & Found Desk",
    desc: "Helpline and announcement system for lost relatives",
    category: "Service",
    path: "/lostfound",
    icon: Search,
  },
  {
    name: "Bathing Ghats Sultanganj",
    desc: "Clean and guarded bathing ghats at Sultanganj",
    category: "Service",
    path: "/ghats",
    icon: Compass,
  },
  {
    name: "Crowd & Queue Control",
    desc: "Barricade routing, density sensors and queue updates",
    category: "Service",
    path: "/facilities",
    icon: ShieldAlert,
  },
  {
    name: "Mobile Charging Kiosks",
    desc: "Secure multi-port solar charging lockers along path",
    category: "Service",
    path: "/charging",
    icon: Compass,
  },
  {
    name: "Luggage Cloak Rooms",
    desc: "Barcode-tracked safety locker rooms near the temple",
    category: "Service",
    path: "/cloakroom",
    icon: Compass,
  },
  {
    name: "Spiritual Satsang Halls",
    desc: "Air-conditioned halls for spiritual rest and bhajan",
    category: "Service",
    path: "/satsang",
    icon: Compass,
  },

  // Helpline / Emergency contacts
  {
    name: "Ambulance Emergency (102)",
    desc: "Call for medical emergency",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
  {
    name: "Police Emergency (100)",
    desc: "Call for security/crowd issues",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
  {
    name: "Fire Rescue Helpline (101)",
    desc: "Call for fire or rescue support",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
  {
    name: "Mela Control Room",
    desc: "Central Command Chief Coordinator",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
  {
    name: "District Admin Deoghar",
    desc: "Deoghar HQ Deputy Commissioner",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
  {
    name: "Temple Board Baidyanath",
    desc: "Baidyanath Dham Shrine Secretary",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
  {
    name: "Public Health Sanitation",
    desc: "Sanitation Department Nodal Officer",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
  {
    name: "Lost & Found Helpdesk Center",
    desc: "Helpdesk Center Unit In-charge",
    category: "Helpline",
    path: "/helpline",
    icon: Phone,
  },
];

export default function TopAppBar({ unreadCount = 0, isHomePage = false, isScrolled = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const navigate = useNavigate();

  const [language, setLanguage] = useState(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    return match ? match[1] : "en";
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
        // Leave mobile menu search open or close it
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
      const selectEl = document.querySelector(".goog-te-combo");
      if (selectEl && selectEl.value) {
        setLanguage(selectEl.value);
      }
    }, 1000);
    checkCookie();
    return () => clearTimeout(timer);
  }, [language]);

  const toggleLanguage = () => {
    const targetLang = language === "en" ? "hi" : "en";
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${targetLang}; path=/;`;
    document.cookie = `googtrans=/en/${targetLang}; path=/; domain=.${domain};`;
    document.cookie = `googtrans=/en/${targetLang}; path=/; domain=${domain};`;

    const selectEl = document.querySelector(".goog-te-combo");
    if (selectEl) {
      selectEl.value = targetLang;
      selectEl.dispatchEvent(new Event("change"));
      setLanguage(targetLang);
    } else {
      setLanguage(targetLang);
      window.location.reload();
    }
  };

  const filteredResults =
    searchQuery.trim() === ""
      ? []
      : searchIndex.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()),
        );

  const isOverlay = isHomePage && !isScrolled;

  return (
    <>
      <header className={`h-16 flex items-center justify-between px-4 md:px-8 shrink-0 z-40 transition-all duration-300 w-full ${
        isHomePage 
          ? `absolute top-0 left-0 border-none ${
              isScrolled 
                ? "bg-white text-neutral-dark border-b border-brand-primary-border/20 shadow-sm" 
                : "bg-gradient-to-b from-black/55 via-black/20 to-transparent text-white"
            }` 
          : "relative border-b border-brand-primary-border/20 bg-white text-neutral-dark"
      }`}>
        {/* Left Section: Mobile Menu Toggle + Plain Title */}
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all active:scale-95 cursor-pointer ${
              isOverlay ? "text-white hover:bg-white/10" : "text-neutral-secondary hover:bg-neutral-bg hover:text-neutral-dark"
            }`}
            title="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Simple Text Branding */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-all duration-200">
            {/* Shiva Trishul Icon */}
            <ShivaIcon className="w-5 h-5 md:w-6 md:h-6 text-saffron shrink-0" />
            <h2 className="font-philosopher italic font-bold text-xl md:text-2xl lg:text-3xl tracking-wide whitespace-nowrap">
              <span className="text-saffron">Shravani Mela </span>
              <span className={isOverlay ? "text-white" : "text-brand-primary"}>Portal</span>
            </h2>
          </Link>
        </div>

        {/* Middle Section: Navigation Links (hidden on mobile, shown on lg+) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-lg font-action font-bold text-xs transition-all duration-200 px-3.5 py-2 whitespace-nowrap
                    ${
                      isActive
                        ? isOverlay
                          ? "bg-white/20 text-white shadow-sm"
                          : "bg-brand-primary-light text-brand-primary shadow-sm"
                        : isOverlay
                          ? "text-white/80 hover:bg-white/10 hover:text-white"
                          : "text-neutral-secondary hover:bg-neutral-bg hover:text-neutral-dark"
                    }`
                }
              >
                <Icon size={14} className="shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search Bar (Desktop) */}
          <div ref={searchRef} className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search resources, status, camps..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              className={`w-44 lg:w-56 h-9 rounded-lg pl-9 pr-4 text-xs font-sans focus:outline-none transition-all duration-200 ${
                isOverlay
                  ? "bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:bg-white/15"
                  : "bg-neutral-bg border border-brand-primary-border/30 text-neutral-dark focus:border-brand-primary"
              }`}
            />
            <Search
              size={13}
              className={`absolute left-3 top-2.5 ${isOverlay ? "text-white/60" : "text-neutral-secondary"}`}
            />

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
                              <span
                                className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded shrink-0 ${
                                  result.category === "Medical Camp"
                                    ? "bg-red-50 text-red-600 border border-red-100"
                                    : result.category === "Emergency Helpline" ||
                                        result.category === "Helpline"
                                      ? "bg-saffron-light/30 text-saffron-dark border border-saffron-light/50"
                                      : "bg-brand-primary-light/30 text-brand-primary border border-brand-primary-border/20"
                                }`}
                              >
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

          {/* Weather Indicator Chip (Desktop) */}
          <div
            className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border select-none ${
              isOverlay
                ? "bg-white/10 border-white/20 text-white"
                : "bg-neutral-bg border-brand-primary-border/20 text-neutral-dark"
            }`}
            title="Deoghar Weather: 28°C · Light Rain · Pleasant"
          >
            <CloudSun size={15} className="text-saffron" />
            <span className={`text-xs font-extrabold font-sans ${isOverlay ? "text-white" : "text-neutral-dark"}`}>28°C</span>
          </div>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-200 text-xs font-bold cursor-pointer shrink-0 ${
              isOverlay
                ? "border-white/25 hover:bg-white/10 text-white"
                : "border-brand-primary-border/30 hover:border-brand-primary hover:bg-neutral-bg text-neutral-dark"
            }`}
            title={
              language === "en"
                ? "Translate to Hindi / हिंदी में अनुवाद करें"
                : "Translate to English / अंग्रेजी में अनुवाद करें"
            }
          >
            <Languages size={15} className={isOverlay ? "text-saffron" : "text-brand-primary"} />
            <span>{language === "en" ? "हिंदी" : "English"}</span>
          </button>

          {/* Notifications Icon with Link (Desktop only) */}
          <Link
            to="/notifications"
            className={`relative p-2 rounded-lg transition-all duration-200 shrink-0 hidden lg:block ${
              isOverlay ? "text-white/80 hover:text-white hover:bg-white/10" : "text-neutral-secondary hover:text-neutral-dark hover:bg-neutral-bg"
            }`}
            title="Mela Notifications"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-saffron border-2 border-white rounded-full animate-pulse" />
            )}
          </Link>
        </div>
      </header>

      {/* Mobile Navigation Dropdown Overlay */}
      {isMobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-brand-primary-border/30 shadow-xl z-50 flex flex-col p-5 gap-4 lg:hidden animate-in slide-in-from-top duration-200">
          {/* Navigation Links */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-extrabold uppercase text-neutral-secondary tracking-widest mb-1 pl-1">
              Navigation
            </span>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl font-action font-bold text-sm transition-all duration-200 px-4 py-3
                      ${
                        isActive
                          ? "bg-brand-primary-light text-brand-primary shadow-sm"
                          : "text-neutral-secondary hover:bg-neutral-bg hover:text-neutral-dark"
                      }`
                  }
                >
                  <Icon size={16} className="shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <hr className="border-brand-primary-border/10" />

          {/* Notifications Link for Mobile */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-extrabold uppercase text-neutral-secondary tracking-widest mb-1 pl-1">
              Alerts & Updates
            </span>
            <Link
              to="/notifications"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-between rounded-xl font-action font-bold text-sm transition-all duration-200 px-4 py-3.5 bg-neutral-bg hover:bg-neutral-bg-cool text-neutral-dark border border-brand-primary-border/10"
              title="Mela Notifications"
            >
              <div className="flex items-center gap-3">
                <Bell size={16} className="text-brand-primary shrink-0" />
                <span>Mela Notifications</span>
              </div>
              {unreadCount > 0 ? (
                <span className="px-2.5 py-0.5 rounded-full bg-saffron text-brand-saffron-bg-dark text-[10px] font-black animate-pulse">
                  {unreadCount} New
                </span>
              ) : (
                <span className="text-[10px] text-neutral-secondary font-semibold mr-1">
                  No unread
                </span>
              )}
            </Link>
          </div>

          <hr className="border-brand-primary-border/10" />

          {/* Search bar for mobile */}
          <div ref={mobileSearchRef} className="flex flex-col gap-1.5">
            <span className="text-[9px] font-extrabold uppercase text-neutral-secondary tracking-widest pl-1">
              Search Resources
            </span>
            <div className="relative">
              <input
                type="text"
                placeholder="Search camps, water, food..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="w-full h-11 bg-neutral-bg border border-brand-primary-border/30 rounded-xl pl-10 pr-4 text-xs font-sans text-neutral-dark focus:outline-none focus:border-brand-primary"
              />
              <Search
                size={14}
                className="absolute left-3.5 top-3.5 text-neutral-secondary"
              />
            </div>

            {/* Mobile Search Results list */}
            {searchQuery.trim() !== "" && (
              <div className="mt-2 bg-neutral-bg border border-brand-primary-border/20 rounded-xl max-h-48 overflow-y-auto divide-y divide-brand-primary-border/10 shadow-inner">
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
                          setIsMobileOpen(false);
                        }}
                        className="w-full px-4 py-3 hover:bg-brand-primary-light/20 text-left flex items-start gap-3 transition-colors duration-150 cursor-pointer"
                      >
                        <div className="mt-0.5 p-1 rounded-md bg-white text-brand-primary shrink-0 border border-brand-primary-border/10">
                          <Icon size={13} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-neutral-dark truncate">{result.name}</span>
                            <span className="text-[7px] font-extrabold uppercase px-1 rounded bg-brand-primary-light/50 text-brand-primary shrink-0">
                              {result.category}
                            </span>
                          </div>
                          <p className="text-[10px] text-neutral-secondary truncate mt-0.5">{result.desc}</p>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <p className="p-4 text-center text-xs text-neutral-secondary">No results found</p>
                )}
              </div>
            )}
          </div>

          <hr className="border-brand-primary-border/10" />

          {/* Weather Widget in Mobile Menu */}
          <div className="bg-neutral-bg border border-brand-primary-border/15 rounded-xl p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CloudSun size={20} className="text-saffron" />
              <div className="text-left">
                <p className="text-xs font-bold text-neutral-dark">Deoghar Weather</p>
                <p className="text-[10px] text-neutral-secondary font-medium">Light Rain · Pleasant</p>
              </div>
            </div>
            <span className="text-xl font-extrabold text-neutral-dark">28°C</span>
          </div>
        </div>
      )}
    </>
  );
}
