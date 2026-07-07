import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Phone,
  HeartPulse,
  Compass,
  CloudSun,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

  return (
    <>
      {/* Mobile Toggle Button - Floating strip on mobile to open drawer */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-3 left-6 z-40 p-2.5 bg-brand-primary text-white rounded-xl shadow-lg border border-brand-primary-border/20 flex items-center justify-center hover:bg-brand-primary-dark transition-all active:scale-95"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop for Mobile Drawer */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-neutral-dark/40 backdrop-blur-sm"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`bg-white border-r border-brand-primary-border/40 h-full flex flex-col justify-between shrink-0 transition-all duration-300 z-45
          /* Mobile styling: Floating drawer on small screens, otherwise collapsed strip */
          ${
            isMobileOpen
              ? "fixed top-0 left-0 w-[280px] sm:w-[320px] max-w-[85vw] shadow-2xl"
              : "fixed top-0 -left-full w-[280px] sm:w-[320px] max-w-[85vw] md:left-0 md:relative"
          }
          /* Desktop styling: Toggle between 320px and 80px */
          ${!isMobileOpen && (isCollapsed ? "md:w-20 md:max-w-none" : "md:w-[320px] md:max-w-none")}
        `}
      >
        {/* Sidebar Header */}
        <div
          className={`border-b border-brand-primary-border/20 flex flex-col gap-2 text-left relative transition-all duration-300
          ${isCollapsed ? "p-4 items-center" : "p-6 sm:p-8"}
        `}
        >
          {/* Logo & Branding - Replaced general Flame with custom Figma-drawn shikhara logo */}
          <div
            className={`flex items-center gap-3 ${isCollapsed ? "flex-col" : ""}`}
          >
            <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/20 shrink-0">
              <FigmaLogo className="w-7 h-7" color="#FF9800" />
            </div>

            {!isCollapsed && (
              <div className="transition-opacity duration-300">
                <h1 className="font-sans font-extrabold text-lg text-neutral-dark leading-tight">
                  Shravani Mela
                </h1>
                <p className="font-sans text-xs text-neutral-secondary font-medium uppercase tracking-wider">
                  Devotional Journey
                </p>
              </div>
            )}
          </div>

          {/* Bol Bam Devotional Badge */}
          {!isCollapsed && (
            <div className="mt-2 self-start flex items-center justify-center px-4 py-1 rounded-full bg-saffron text-brand-saffron-bg-dark font-action font-extrabold text-xs uppercase tracking-widest shadow-sm hover:shadow-saffron/15 transition-all duration-300">
              Bol Bam
            </div>
          )}

          {/* Desktop Collapse Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-brand-primary-border/40 items-center justify-center text-neutral-secondary hover:text-brand-primary hover:border-brand-primary hover:shadow-sm transition-all duration-200"
          >
            {isCollapsed ? (
              <ChevronRight size={14} />
            ) : (
              <ChevronLeft size={14} />
            )}
          </button>
        </div>

        {/* Navigation List (Nav) */}
        <nav
          className={`flex-1 py-6 flex flex-col gap-2 ${isCollapsed ? "px-2 items-center" : "px-3 sm:px-4"}`}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsMobileOpen(false)} // Close drawer on mobile click
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl font-action font-medium text-sm transition-all duration-200 h-12
                    ${isCollapsed ? "w-12 justify-center px-0" : "w-full px-4"}
                    ${
                      isActive
                        ? "bg-brand-primary-light text-brand-primary shadow-sm font-semibold"
                        : "text-neutral-secondary hover:bg-neutral-bg hover:text-neutral-dark"
                    }`
                }
                title={isCollapsed ? item.label : undefined}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      className={
                        isActive
                          ? "text-brand-primary shrink-0"
                          : "text-neutral-secondary shrink-0"
                      }
                    />
                    {!isCollapsed && (
                      <span className="transition-opacity duration-300">
                        {item.label}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Weather Widget - Only displayed when Sidebar is expanded */}
        {!isCollapsed && (
          <div className="p-4 sm:p-6 transition-all duration-300">
            <div className="bg-neutral-bg border border-brand-primary-border/25 rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-neutral-secondary uppercase tracking-wider">
                  Weather at Deoghar
                </span>
                <CloudSun size={18} className="text-saffron shrink-0" />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-neutral-dark">
                  28°C
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-dark">
                    Light Rain
                  </p>
                  <p className="text-[10px] text-neutral-secondary">
                    Humidity: 82%
                  </p>
                </div>
              </div>

              <div className="bg-brand-primary-light/45 text-brand-primary text-xs font-semibold py-2 px-3 rounded-lg border border-brand-primary-border/15 text-center">
                🌦️ Pleasant for Yatra
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Mini-strip overlay visible only on mobile screens when drawer is closed */}
      {!isMobileOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-4 bg-brand-primary/10 border-r border-brand-primary-border/10 pointer-events-none z-30" />
      )}
    </>
  );
}
