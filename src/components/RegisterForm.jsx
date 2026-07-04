import React, { useState } from 'react';
import { User, Phone, MapPin, HeartPulse, Send, AlertTriangle, CheckCircle } from 'lucide-react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    source: 'Sultanganj',
    destination: 'Deoghar',
    bloodGroup: '',
    emergencyContact: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row gap-8 text-left">
      
      {/* Registration Form Card */}
      <div className="flex-1 bg-white border border-brand-primary-border/25 rounded-2xl p-8 shadow-sm">
        
        {/* Step Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-brand-primary-light text-brand-primary text-xs font-extrabold uppercase px-3 py-1 rounded-md">
              Step 1 of 2
            </span>
            <span className="text-xs text-neutral-secondary font-semibold">Personal & Yatra Details</span>
          </div>
          <h3 className="font-sans font-extrabold text-xl text-neutral-dark">
            Register Pilgrim Pass
          </h3>
          <p className="text-xs text-neutral-secondary mt-1">
            Fill in your details to generate your digital Yatra Card for checkpoints and emergency support.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-200 flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-lg font-extrabold text-neutral-dark">Registration Successful!</h4>
            <p className="text-xs text-neutral-secondary max-w-sm mt-2">
              Your digital Yatra ID is generated: <code className="font-mono text-brand-primary font-bold">YATRA-2026-9042</code>. An SMS has been sent to your registered phone number.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 border border-brand-primary text-brand-primary font-action font-semibold text-xs px-5 py-2.5 rounded-lg hover:bg-brand-primary-light/35 transition-all duration-200"
            >
              Register Another Pilgrim
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-secondary uppercase tracking-wide">Full Name (Devotee)</label>
              <div className="relative">
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Abhishek Kumar" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full h-11 border border-brand-primary-border/40 rounded-lg pl-10 pr-4 text-sm font-sans focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all"
                />
                <User size={16} className="absolute left-3.5 top-3.5 text-neutral-secondary" />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-neutral-secondary uppercase tracking-wide">Mobile Number</label>
              <div className="relative">
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 98765 43210" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full h-11 border border-brand-primary-border/40 rounded-lg pl-10 pr-4 text-sm font-sans focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all"
                />
                <Phone size={16} className="absolute left-3.5 top-3.5 text-neutral-secondary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Source (Starting Point) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral-secondary uppercase tracking-wide">Starting Point</label>
                <div className="relative">
                  <select 
                    value={formData.source}
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                    className="w-full h-11 border border-brand-primary-border/40 rounded-lg pl-10 pr-4 text-sm font-sans focus:outline-none focus:border-brand-primary transition-all bg-white"
                  >
                    <option>Sultanganj</option>
                    <option>Dumka</option>
                    <option>Patna</option>
                  </select>
                  <MapPin size={16} className="absolute left-3.5 top-3.5 text-neutral-secondary" />
                </div>
              </div>

              {/* Destination */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral-secondary uppercase tracking-wide">Destination</label>
                <div className="relative">
                  <select 
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full h-11 border border-brand-primary-border/40 rounded-lg pl-10 pr-4 text-sm font-sans focus:outline-none focus:border-brand-primary transition-all bg-white"
                  >
                    <option>Deoghar (Baba Dham)</option>
                    <option>Basukinath</option>
                  </select>
                  <MapPin size={16} className="absolute left-3.5 top-3.5 text-neutral-secondary" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Blood Group */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral-secondary uppercase tracking-wide">Blood Group</label>
                <div className="relative">
                  <select 
                    value={formData.bloodGroup}
                    required
                    onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}
                    className="w-full h-11 border border-brand-primary-border/40 rounded-lg pl-10 pr-4 text-sm font-sans focus:outline-none focus:border-brand-primary transition-all bg-white"
                  >
                    <option value="">Select Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                  <HeartPulse size={16} className="absolute left-3.5 top-3.5 text-neutral-secondary" />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral-secondary uppercase tracking-wide">Emergency Contact</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    required
                    placeholder="Relative's Phone" 
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                    className="w-full h-11 border border-brand-primary-border/40 rounded-lg pl-10 pr-4 text-sm font-sans focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all"
                  />
                  <Phone size={16} className="absolute left-3.5 top-3.5 text-neutral-secondary" />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="mt-4 flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-dark text-brand-saffron-bg-dark font-action font-semibold text-sm h-12 rounded-lg shadow-md hover:shadow-saffron/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Send size={16} />
              Submit Registration
            </button>

          </form>
        )}

      </div>

      {/* Side Info Cards Panel */}
      <div className="w-full md:w-[320px] flex flex-col gap-6 shrink-0">
        
        {/* Guidelines Card */}
        <div className="bg-white border border-brand-primary-border/25 rounded-2xl p-6 shadow-sm text-left">
          <h4 className="font-sans font-extrabold text-sm text-neutral-dark mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-saffron" />
            Yatra Guidelines
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-[11px] text-neutral-secondary leading-normal">
              <strong className="text-neutral-dark block mb-0.5">Saffron Dress Mandatory</strong>
              Pilgrims must wear proper saffron attire throughout the journey.
            </li>
            <li className="text-[11px] text-neutral-secondary leading-normal">
              <strong className="text-neutral-dark block mb-0.5">Ganga Jal Rules</strong>
              Collect Gangajal only from recognized, clean ghats in Sultanganj.
            </li>
            <li className="text-[11px] text-neutral-secondary leading-normal">
              <strong className="text-neutral-dark block mb-0.5">Discipline in Sanctum</strong>
              Queue waiting times can exceed 6 hours during peak days (Monday). Co-operate with security staff.
            </li>
          </ul>
        </div>

        {/* Emergency Support Card */}
        <div className="bg-red-50/50 border border-red-200/50 rounded-2xl p-6 shadow-sm text-left">
          <h4 className="font-sans font-extrabold text-sm text-red-700 mb-2 flex items-center gap-2">
            <AlertTriangle size={16} />
            Emergency Contacts
          </h4>
          <p className="text-[10px] text-red-600/80 mb-4 leading-normal">
            For medical issues, stampede warnings, or lost relatives along the yatra route:
          </p>
          
          <div className="flex flex-col gap-3">
            <div className="bg-white border border-red-100 p-3 rounded-xl flex justify-between items-center shadow-sm">
              <div>
                <p className="text-[9px] text-neutral-secondary font-medium">Medical Helpline</p>
                <p className="text-sm font-extrabold text-neutral-dark">108</p>
              </div>
              <span className="text-[10px] font-bold text-red-600 px-2 py-0.5 bg-red-50 rounded border border-red-100 uppercase">24/7</span>
            </div>
            <div className="bg-white border border-red-100 p-3 rounded-xl flex justify-between items-center shadow-sm">
              <div>
                <p className="text-[9px] text-neutral-secondary font-medium">Control Room</p>
                <p className="text-sm font-extrabold text-neutral-dark">+91-6432-222260</p>
              </div>
              <span className="text-[10px] font-bold text-red-600 px-2 py-0.5 bg-red-50 rounded border border-red-100 uppercase">Local</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
