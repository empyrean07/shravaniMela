import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import LiveStatus from './components/LiveStatus';
import WisdomCard from './components/WisdomCard';
import FacilitiesGrid from './components/FacilitiesGrid';
import MelaHelpline from './components/MelaHelpline';
import HealthCentre from './components/HealthCentre';
import Notification from './components/Notification';
import DrinkingWater from './components/DrinkingWater';
import RestingShelter from './components/RestingShelter';
import FreeFood from './components/FreeFood';
import SecurityPolice from './components/SecurityPolice';
import LostFoundDesk from './components/LostFoundDesk';
import BathingGhats from './components/BathingGhats';
import MobileCharging from './components/MobileCharging';
import LuggageCloak from './components/LuggageCloak';
import SatsangHalls from './components/SatsangHalls';

function HomeTab() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <HeroSection />

      {/* Middle Columns: Live Darshan & Wisdom */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <LiveStatus />
        <WisdomCard />
      </div>

      {/* Facilities & Services Grid */}
      <FacilitiesGrid isHome={true} />
    </div>
  );
}

function FacilitiesTab() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Banner Header copied from Helpline top box design */}
      <div className="relative w-full h-80 md:h-72 lg:h-96 rounded-3xl overflow-hidden shadow-md flex items-end p-8 md:p-12">
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
              Explore Yatra Facilities
            </h3>
            <p className="text-xs md:text-sm text-brand-primary-light/90 mt-2 leading-relaxed font-semibold">
              Access free services, medical help, food distribution centers, and shelters set up for devotees.
            </p>
          </div>
        </div>
      </div>

      <FacilitiesGrid />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeTab />} />
          <Route path="helpline" element={<MelaHelpline />} />
          <Route path="health" element={<HealthCentre />} />
          <Route path="facilities" element={<FacilitiesTab />} />
          <Route path="water" element={<DrinkingWater />} />
          <Route path="shelter" element={<RestingShelter />} />
          <Route path="food" element={<FreeFood />} />
          <Route path="security" element={<SecurityPolice />} />
          <Route path="lostfound" element={<LostFoundDesk />} />
          <Route path="ghats" element={<BathingGhats />} />
          <Route path="charging" element={<MobileCharging />} />
          <Route path="cloakroom" element={<LuggageCloak />} />
          <Route path="satsang" element={<SatsangHalls />} />
          <Route path="notifications" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
