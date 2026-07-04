import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import LiveStatus from './components/LiveStatus';
import WisdomCard from './components/WisdomCard';
import FacilitiesGrid from './components/FacilitiesGrid';
import RegisterForm from './components/RegisterForm';
import MelaHelpline from './components/MelaHelpline';
import HealthCentre from './components/HealthCentre';
import Notification from './components/Notification';

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
    <div className="flex flex-col gap-6">
      <div className="text-left mb-2">
        <h3 className="font-sans font-extrabold text-xl text-neutral-dark">
          Explore Yatra Facilities
        </h3>
        <p className="text-xs text-neutral-secondary mt-1">
          Access free services, medical help, food distribution centers, and shelters set up for devotees.
        </p>
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
          <Route path="register" element={<RegisterForm />} />
          <Route path="helpline" element={<MelaHelpline />} />
          <Route path="health" element={<HealthCentre />} />
          <Route path="facilities" element={<FacilitiesTab />} />
          <Route path="notifications" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
