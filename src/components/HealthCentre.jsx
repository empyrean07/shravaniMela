import React, { useState, useEffect } from 'react';
import { HeartPulse, MapPin, CheckCircle, Search, Phone, Compass, Globe2, Coins, FolderHeart, ShieldAlert, Navigation } from 'lucide-react';

export default function HealthCentre() {
  const [selectedMilestone, setSelectedMilestone] = useState(0); // index of milestones
  const [filterQuery, setFilterQuery] = useState('');
  const [userCoords, setUserCoords] = useState(null);
  const [gpsError, setGpsError] = useState(null);
  const [isLocating, setIsLocating] = useState(false);

  const milestones = [
    { name: "Sultanganj", km: 0, desc: "Starting Point of Yatra" },
    { name: "Asarganj", km: 26, desc: "First Major Rest Zone" },
    { name: "Katoria", km: 64, desc: "Hilly Sand Pathway" },
    { name: "Dharamsala", km: 88, desc: "Bihar-Jharkhand Border" },
    { name: "Deoghar", km: 105, desc: "Baba Dham Temple Destination" }
  ];

  // Complete list of medical centers along the way with coordinates
  const medicalCenters = [
    { id: 1, name: "Ghat Main Medical Unit", milestone: "Sultanganj", km: 0.5, lat: 25.2476, lon: 86.7381, beds: 12, doctors: 3, phone: "+91-6415-222402", type: "First Aid & Stabilization", facilities: ["Oxygen Supply", "ECG", "Basic Trauma Support"], status: "Optimal" },
    { id: 2, name: "Sultanganj Referral Hospital", milestone: "Sultanganj", km: 1.5, lat: 25.2435, lon: 86.7312, beds: 50, doctors: 8, phone: "+91-6415-222401", type: "Government General Hospital", facilities: ["ICU", "Surgeries", "Ambulance Hub", "Lab Services"], status: "Optimal" },
    
    { id: 3, name: "Asarganj Camp Hospital", milestone: "Asarganj", km: 26.2, lat: 25.1481, lon: 86.6841, beds: 15, doctors: 4, phone: "+91-98765-43201", type: "Yatra Transit Camp", facilities: ["Rehydration Center", "Basic Wards", "First Aid"], status: "Optimal" },
    { id: 4, name: "Kumarpur Health Post", milestone: "Asarganj", km: 29.5, lat: 25.1215, lon: 86.6912, beds: 6, doctors: 1, phone: "+91-98765-43202", type: "First Aid Station", facilities: ["Physiotherapy", "Hydration Points"], status: "Busy" },

    { id: 5, name: "Katoria Trauma & Recovery Camp", milestone: "Katoria", km: 64.0, lat: 24.8194, lon: 86.7214, beds: 20, doctors: 5, phone: "+91-98765-43203", type: "Specialized Trauma Hub", facilities: ["ICU", "X-Ray", "Orthopedic Care", "Cardiac Support"], status: "Optimal" },
    { id: 6, name: "Inaravaran Emergency Post", milestone: "Katoria", km: 68.1, lat: 24.7512, lon: 86.7112, beds: 8, doctors: 2, phone: "+91-98765-43204", type: "First Aid Station", facilities: ["Rehydration Center", "Emergency Beds"], status: "Optimal" },

    { id: 7, name: "Dharamsala Border Post", milestone: "Dharamsala", km: 88.5, lat: 24.6033, lon: 86.6719, beds: 12, doctors: 3, phone: "+91-6434-222002", type: "Border Checkpost Hospital", facilities: ["Ambulance Station", "Oxygen Wards", "Basic Care"], status: "Optimal" },
    { id: 8, name: "Dumka Checkpost Unit", milestone: "Dharamsala", km: 92.0, lat: 24.5812, lon: 86.6812, beds: 5, doctors: 1, phone: "+91-98765-43205", type: "First Aid Station", facilities: ["Basic Wound Dressings", "Hydration Support"], status: "Busy" },

    { id: 9, name: "Baba Dham Entry Camp", milestone: "Deoghar", km: 104.8, lat: 24.4925, lon: 86.7081, beds: 15, doctors: 4, phone: "+91-6432-222261", type: "Yatra Terminus Hospital", facilities: ["Heat Stroke Ward", "First Aid", "Oxygen Hub"], status: "Optimal" },
    { id: 10, name: "Deoghar Sadar Hospital", milestone: "Deoghar", km: 106.5, lat: 24.4819, lon: 86.7029, beds: 150, doctors: 25, phone: "+91-6432-222260", type: "District Referral Hospital", facilities: ["Major Surgery", "Emergency ICU", "Blood Bank", "Diagnostics"], status: "Optimal" }
  ];

  const quickInfos = [
    { title: "Multilingual Support", desc: "Doctors available in Hindi, English, Maithili & Bengali.", icon: Globe2 },
    { title: "Free Treatment", desc: "All services & medicines are free for registered Yatris.", icon: Coins },
    { title: "Health Records", desc: "Access your mela checkup history via Registration ID.", icon: FolderHeart }
  ];

  // Haversine distance calculator
  const calculateHaversine = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Get user location
  const requestLocation = () => {
    setIsLocating(true);
    setGpsError(null);
    if (!navigator.geolocation) {
      setGpsError("Geolocation is not supported by your browser.");
      setIsLocating(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        setIsLocating(false);
      },
      (error) => {
        console.error("GPS Error:", error);
        setGpsError("Could not retrieve GPS location. Using manual checkpoint.");
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Auto-request location on mount
  useEffect(() => {
    requestLocation();
  }, []);

  // Compute distances for all camps
  const currentKm = milestones[selectedMilestone].km;
  
  const processedCenters = medicalCenters.map(center => {
    let distanceValue = 0;
    let isRealGps = false;

    if (userCoords) {
      distanceValue = calculateHaversine(userCoords.lat, userCoords.lon, center.lat, center.lon);
      isRealGps = true;
    } else {
      distanceValue = Math.abs(center.km - currentKm);
      isRealGps = false;
    }

    return { 
      ...center, 
      distance: parseFloat(distanceValue.toFixed(1)), 
      isRealGps 
    };
  }).sort((a, b) => a.distance - b.distance); // sort by closest first

  const advisedCamp = processedCenters[0];

  const filteredCenters = processedCenters.filter(center => 
    center.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    center.type.toLowerCase().includes(filterQuery.toLowerCase()) ||
    center.milestone.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-8 text-left animate-fade-in">
      
      {/* Header Banner with Background Image */}
      <div className="relative w-full overflow-hidden border border-brand-primary-border/25 rounded-3xl py-12 md:py-16 px-8 md:px-12 flex flex-col justify-center gap-4 shadow-sm min-h-[220px] md:min-h-[260px]">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 select-none pointer-events-none z-0"
          style={{ backgroundImage: `url('/deoghar_temple.jpg')` }}
        />

        {/* Ambient Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-light/95 via-brand-primary-light/80 to-brand-primary-light/50 z-0" />
        
        {/* Header Content */}
        <div className="relative z-10 text-left max-w-2xl">
          <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-neutral-dark">
            Health Centre
          </h3>
          <p className="text-sm md:text-base text-neutral-secondary mt-3 leading-relaxed font-semibold">
            Access free medical checkups and view personalized medical support options near your current geographical position.
          </p>
        </div>
      </div>

      {/* Recommended/Advised Camp Info Card (ABOVE map) */}
      {advisedCamp && (
        <div className="bg-brand-primary-dark text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-lg border border-brand-primary-border/10 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
          
          <div className="flex-1 text-left relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="flex items-center gap-1 bg-saffron text-brand-saffron-bg-dark text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                <HeartPulse size={12} />
                Advised Nearest Camp
              </span>
              {advisedCamp.isRealGps ? (
                <span className="bg-white/15 text-brand-primary-light border border-white/10 text-[9px] font-bold px-2 py-0.5 rounded-md">Matched via GPS</span>
              ) : (
                <span className="bg-white/15 text-brand-primary-light border border-white/10 text-[9px] font-bold px-2 py-0.5 rounded-md font-sans">Matched via {milestones[selectedMilestone].name}</span>
              )}
            </div>

            <h4 className="font-sans font-extrabold text-xl md:text-2xl text-white mb-2">
              {advisedCamp.name}
            </h4>

            {/* Distance Callout */}
            <p className="text-saffron font-bold text-sm md:text-base mb-4 flex items-center gap-1.5">
              <MapPin size={16} />
              {advisedCamp.distance} km away from your current location
              <span className="text-brand-primary-light/65 font-medium text-xs">({advisedCamp.milestone} checkpoint)</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-brand-primary-light mt-2 border-t border-brand-primary-border/15 pt-4">
              <div>
                <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">Camp Category</span>
                <span className="text-white font-semibold">{advisedCamp.type}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">Beds Available</span>
                <span className="text-white font-semibold">{advisedCamp.beds} Beds</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-brand-primary-light/50 font-bold block mb-0.5">Active Staff</span>
                <span className="text-white font-semibold">{advisedCamp.doctors} Doctors on duty</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 relative z-10 border-t md:border-t-0 pt-4 md:pt-0 border-brand-primary-border/15">
            <a 
              href={`tel:${advisedCamp.phone}`}
              className="bg-saffron hover:bg-saffron-dark text-brand-saffron-bg-dark font-action font-extrabold text-xs px-6 py-3 rounded-xl shadow-md hover:shadow-saffron/20 transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              Call Emergency Post
            </a>
          </div>
        </div>
      )}

      {gpsError && (
        <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-4 text-xs text-amber-800 flex items-center gap-2">
          <Info size={16} className="shrink-0 text-amber-600" />
          <span>{gpsError} Change station using the dropdown in the header banner.</span>
        </div>
      )}

      {/* Live Google Map View - Refactored to have Map Preview only */}
      <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        
        {/* Map Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-primary-border/15 pb-4">
          <div>
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider flex items-center gap-2">
              <Compass size={18} className="text-saffron" />
              Live Google Map View
            </h4>
            <p className="text-xs text-neutral-secondary mt-1">
              Geographical surroundings and location pin of the advised nearest medical camp.
            </p>
          </div>

          {advisedCamp && (
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${advisedCamp.lat},${advisedCamp.lon}`}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-bold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-4 py-2 rounded-xl transition-all shadow-sm bg-white"
            >
              Open in Google Maps App
            </a>
          )}
        </div>

        {/* Google Map Iframe Container */}
        {advisedCamp && (
          <div className="w-full h-[320px] rounded-xl overflow-hidden border border-brand-primary-border/15 shadow-inner">
            <iframe
              title="Google Map View"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=${advisedCamp.lat},${advisedCamp.lon}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
            />
          </div>
        )}

      </div>

      {/* Nearest Medical Centers Directory */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-sans font-extrabold text-sm text-neutral-dark uppercase tracking-wider flex items-center gap-2">
              <HeartPulse size={18} className="text-red-500 animate-pulse" />
              Complete Medical Directory along the Route
            </h4>
            <p className="text-xs text-neutral-secondary mt-0.5">
              Filtered list of medical tents and hospitals along the Yatra pathway.
            </p>
          </div>
          
          {/* Camp Search */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search camp, service or location..." 
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full md:w-64 h-9 bg-white border border-brand-primary-border/30 rounded-lg pl-8 pr-4 text-xs font-sans focus:outline-none focus:border-brand-primary transition-all shadow-sm"
            />
            <Search size={14} className="absolute left-2.5 top-2.5 text-neutral-secondary" />
          </div>
        </div>

        {/* List of camps */}
        <div className="flex flex-col gap-4">
          {filteredCenters.length > 0 ? (
            filteredCenters.map(center => (
              <div 
                key={center.id}
                className={`bg-white border rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm transition-all duration-200 ${
                  center.id === advisedCamp.id 
                    ? 'border-brand-primary bg-brand-primary-light/5'
                    : 'border-brand-primary-border/25 hover:border-brand-primary-border/55'
                }`}
              >
                <div className="text-left flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h5 className="font-sans font-extrabold text-base text-neutral-dark">
                      {center.name}
                      {center.id === advisedCamp.id && (
                        <span className="bg-saffron text-brand-saffron-bg-dark text-[9px] font-extrabold px-2 py-0.5 rounded ml-2 uppercase">Advised Nearest</span>
                      )}
                    </h5>
                    <span className="bg-neutral-bg border border-neutral-bg-cool text-[9px] font-extrabold px-2 py-0.5 rounded text-neutral-secondary uppercase">{center.type}</span>
                  </div>
                  
                  {/* Distance info */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-primary mb-3">
                    <MapPin size={14} className="text-saffron" />
                    <span>{center.distance} km away</span>
                    <span className="text-neutral-secondary font-medium">({center.milestone} checkpoint)</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {center.facilities.map((fac, idx) => (
                      <span key={idx} className="bg-neutral-bg/60 text-neutral-dark text-[9px] px-2 py-1 rounded border border-neutral-bg-cool/60 font-semibold">{fac}</span>
                    ))}
                  </div>
                </div>

                {/* Capacity & Action */}
                <div className="flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-neutral-bg-cool">
                  <div className="text-left md:text-right flex justify-between md:flex-col gap-2">
                    <div>
                      <p className="text-[10px] text-neutral-secondary font-medium uppercase leading-none">Beds Available</p>
                      <p className="text-sm font-extrabold text-neutral-dark">{center.beds} Wards</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-secondary font-medium uppercase leading-none md:mt-1">Active Doctors</p>
                      <p className="text-sm font-extrabold text-neutral-dark">{center.doctors} Staff</p>
                    </div>
                  </div>
                  
                  <a 
                    href={`tel:${center.phone}`}
                    className="flex items-center justify-center gap-1.5 bg-brand-primary-light text-brand-primary hover:bg-brand-primary hover:text-white font-action font-extrabold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm"
                  >
                    <Phone size={14} />
                    Call Emergency Post
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-neutral-secondary border border-dashed border-brand-primary-border/25 rounded-2xl bg-white">
              No medical camps found matching your filter criteria.
            </div>
          )}
        </div>
      </div>

      {/* Footer Info Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-brand-primary-border/15 pt-8">
        {quickInfos.map((info, idx) => {
          const Icon = info.icon;
          return (
            <div key={idx} className="flex gap-4 items-start bg-white border border-brand-primary-border/15 rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-light text-brand-primary flex items-center justify-center shrink-0">
                <Icon size={18} />
              </div>
              <div className="text-left">
                <h5 className="font-sans font-extrabold text-xs text-neutral-dark mb-1">
                  {info.title}
                </h5>
                <p className="text-[11px] text-neutral-secondary leading-relaxed font-medium">
                  {info.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
