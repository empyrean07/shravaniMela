import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopAppBar({ unreadCount = 0 }) {
  return (
    <header className="h-16 border-b border-brand-primary-border/20 bg-white flex items-center justify-between px-8 max-md:pl-18 shrink-0">
      
      {/* Page Title / Brand */}
      <div className="flex items-center gap-4">
        <h2 className="font-sans font-black text-lg md:text-2xl text-neutral-dark tracking-tight">
          Shravani Mela Portal
        </h2>
      </div>

      {/* Actions (Search, Notification) */}
      <div className="flex items-center gap-6">
        
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search resources, status, camps..." 
            className="w-64 h-9 bg-neutral-bg border border-brand-primary-border/30 rounded-lg pl-9 pr-4 text-xs font-sans text-neutral-dark focus:outline-none focus:border-brand-primary transition-all duration-200"
          />
          <Search size={14} className="absolute left-3 top-2.5 text-neutral-secondary" />
        </div>

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
