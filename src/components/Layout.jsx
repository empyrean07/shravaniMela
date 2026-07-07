import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopAppBar from "./TopAppBar";
import { Phone } from "lucide-react";

export default function Layout() {
  const [notifications, setNotifications] = useState(() => {
    const cached = localStorage.getItem("mela_notifications");
    if (cached) return JSON.parse(cached);
    return [
      {
        id: 1,
        title: "Heavy Crowd Alert",
        message:
          "Baba Temple Gate 3 is experiencing an extremely high volume of devotees. Consider using Gate 1 or Gate 5 for faster queue entry.",
        time: "10 mins ago",
        type: "alert",
        unread: true,
        sender: "Crowd Control Division",
      },
      {
        id: 2,
        title: "Free Langar & Food Services Active",
        message:
          "Langar post #12 at Katoria is currently serving hot meals and fresh water to all registered Yatris.",
        time: "45 mins ago",
        type: "success",
        unread: true,
        sender: "Yatra Sewa Samiti",
      },
      {
        id: 3,
        title: "Weather Forecast Update",
        message:
          "Expect light rain showers in the Deoghar area by 4:00 PM. Yatris are advised to carry water-resistant gear and stay hydrated.",
        time: "2 hours ago",
        type: "info",
        unread: true,
        sender: "Meteorological Dept",
      },
      {
        id: 4,
        title: "New Health Recovery Post Active",
        message:
          "A specialized trauma recovery post with 10 emergency beds and cardiac support is now operational at KM 64 (Katoria path).",
        time: "5 hours ago",
        type: "info",
        unread: false,
        sender: "Mela Health Admin",
      },
      {
        id: 5,
        title: "Additional Yatra Special Trains",
        message:
          "Indian Railways has announced 4 extra special trains running daily between Sultanganj and Deoghar stations starting today.",
        time: "1 day ago",
        type: "update",
        unread: false,
        sender: "Railway Division",
      },
      {
        id: 6,
        title: "Digital Pass Registration Required",
        message:
          "Devotees must carry their printed digital registration slip or download the digital barcode pass on their mobile phones for quick verification.",
        time: "2 days ago",
        type: "alert",
        unread: false,
        sender: "Mela Nodal Desk",
      },
    ];
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("mela_notifications", JSON.stringify(notifications));
  }, [notifications]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-neutral-bg text-neutral-dark font-sans antialiased">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Panel Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header with dynamic unread indicator */}
        <TopAppBar unreadCount={unreadCount} />

        {/* Scrollable Workspace canvas */}
        <main className="flex-1 overflow-y-auto no-scrollbar p-8 max-w-7xl w-full mx-auto relative">
          <Outlet context={[notifications, setNotifications]} />
        </main>
      </div>

      {/* Floating Emergency SOS Action Button (Figma 64x64 FAB) */}
      <a
        href="tel:112"
        id="sos-button"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 text-white flex flex-col items-center justify-center shadow-2xl hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 group"
        title="Emergency SOS Call"
      >
        {/* Pulsing Alert Rings */}
        <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-60 group-hover:animate-none" />

        <Phone size={20} className="relative z-10 animate-pulse text-white" />
        <span className="relative z-10 font-action font-black text-[10px] tracking-wider uppercase mt-0.5 text-white">
          SOS
        </span>
      </a>
    </div>
  );
}
