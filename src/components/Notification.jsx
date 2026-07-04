import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Bell, AlertTriangle, Info, CheckCircle, RefreshCw, Star } from 'lucide-react';

export default function Notification() {
  // Consume global notifications state from Outlet Context
  const [notifications, setNotifications] = useOutletContext();

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const getAlertStyle = (type) => {
    switch (type) {
      case 'alert':
        return {
          icon: AlertTriangle,
          bg: 'bg-red-50 border-red-100 hover:border-red-200',
          text: 'text-red-700',
          iconBg: 'bg-red-100 text-red-600'
        };
      case 'success':
        return {
          icon: CheckCircle,
          bg: 'bg-emerald-50 border-emerald-100 hover:border-emerald-200',
          text: 'text-emerald-700',
          iconBg: 'bg-emerald-100 text-emerald-600'
        };
      case 'info':
        return {
          icon: Info,
          bg: 'bg-blue-50 border-blue-100 hover:border-blue-200',
          text: 'text-blue-700',
          iconBg: 'bg-blue-100 text-blue-600'
        };
      case 'update':
      default:
        return {
          icon: Star,
          bg: 'bg-indigo-50 border-indigo-100 hover:border-indigo-200',
          text: 'text-indigo-700',
          iconBg: 'bg-indigo-100 text-indigo-600'
        };
    }
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="w-full flex flex-col gap-8 text-left animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-primary-border/20 pb-6">
        <div>
          <h3 className="font-sans font-extrabold text-3xl text-neutral-dark flex items-center gap-3">
            Mela Notifications
            {unreadCount > 0 && (
              <span className="text-xs font-bold bg-saffron text-brand-saffron-bg-dark px-2.5 py-0.5 rounded-full">
                {unreadCount} New
              </span>
            )}
          </h3>
          <p className="text-sm text-neutral-secondary mt-1 max-w-xl leading-relaxed">
            Real-time updates, security announcements, crowd alerts, and service announcements from the Shravani Mela Command Center.
          </p>
        </div>

        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="self-start sm:self-auto flex items-center gap-1.5 text-brand-primary hover:text-brand-primary-dark font-action font-extrabold text-xs border border-brand-primary-border/40 hover:bg-brand-primary-light/20 px-4 py-2.5 rounded-xl transition-all shadow-sm bg-white"
          >
            <RefreshCw size={14} />
            Mark all as read
          </button>
        )}
      </div>

      {/* Notifications List Container */}
      <div className="flex flex-col gap-4 max-w-4xl">
        {notifications.length > 0 ? (
          notifications.map(n => {
            const styles = getAlertStyle(n.type);
            const Icon = styles.icon;
            return (
              <div 
                key={n.id}
                className={`border rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 shadow-sm relative ${styles.bg} ${
                  n.unread ? 'ring-1 ring-brand-primary/20 bg-white' : 'bg-white'
                }`}
              >
                {/* Unread marker dot */}
                {n.unread && (
                  <span className="absolute top-5 right-5 w-2.5 h-2.5 bg-brand-primary rounded-full animate-pulse" />
                )}

                {/* Styled Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${styles.iconBg}`}>
                  <Icon size={20} />
                </div>

                {/* Message detail */}
                <div className="flex-1 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-sans font-extrabold text-sm text-neutral-dark">
                      {n.title}
                    </h4>
                    <span className="text-[9px] text-neutral-secondary font-medium">({n.time})</span>
                  </div>
                  <p className="text-xs text-neutral-secondary font-medium leading-relaxed mb-2.5">
                    {n.message}
                  </p>
                  <p className="text-[10px] text-brand-primary font-bold">
                    Posted by: <span className="opacity-80 font-semibold">{n.sender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-xs text-neutral-secondary border border-dashed border-brand-primary-border/25 rounded-2xl bg-white">
            <Bell size={32} className="mx-auto text-neutral-secondary/35 mb-2.5" />
            No new notifications at this moment.
          </div>
        )}
      </div>

    </div>
  );
}
