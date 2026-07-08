import React from "react";
import { BookOpen, Quote, HelpCircle, HeartHandshake } from "lucide-react";

export default function WisdomCard() {
  const guidelines = [
    { id: 1, text: "Wear clean saffron clothing throughout the Yatra." },
    { id: 2, text: "Carry only pure water from Sultanganj for Abhishekam." },
    {
      id: 3,
      text: "Maintain discipline and chant 'Har Har Mahadev' in queue.",
    },
    { id: 4, text: "Contact helpdesks for medical emergencies immediately." },
    { id: 5, text: "Avoid using plastic bags to keep the holy Yatra route clean and eco-friendly." },
    { id: 6, text: "Follow the queue complex directions and cooperate with local police." },
    { id: 7, text: "Register yourself at Sultanganj entry points for emergency tracking." },
  ];

  return (
    <div className="flex-1 lg:flex-none lg:w-[410px] flex flex-col gap-6">
      {/* Title */}
      <h4 className="font-sans font-bold text-lg text-neutral-dark text-left">
        Today's Yatra Guide
      </h4>

      {/* Main Card */}
      <div className="flex-1 bg-brand-primary-dark text-white rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-lg border border-brand-primary-border/10 relative overflow-hidden">
        {/* Decorative Quote Icon Background */}
        <Quote
          size={80}
          className="absolute -right-4 -bottom-4 text-brand-primary/15 pointer-events-none transform -rotate-12"
        />

        <div className="flex flex-col gap-6">
          {/* Wisdom Header */}
          <div className="flex items-center gap-2 text-saffron">
            <BookOpen size={18} />
            <span className="font-sans font-bold text-xs uppercase tracking-wider">
              Daily Wisdom
            </span>
          </div>

          {/* Shloka/Quote */}
          <div className="text-left flex flex-col gap-3">
            <p className="font-sans italic text-sm text-brand-primary-light/95 leading-relaxed">
              "अकालमृत्युहरणं सर्वव्याधिविनाशनम् । शिव पादोदकं पीत्वा पुनर्जन्म न
              विद्यते ॥"
            </p>
            <p className="text-[10px] text-brand-primary-light/60 font-medium">
              — Shiva Purana Chapter 4
            </p>
          </div>

          <hr className="border-brand-primary-border/20" />

          {/* Guidelines List */}
          <div className="flex flex-col gap-4 text-left">
            <h5 className="font-sans font-extrabold text-xs text-saffron uppercase tracking-wide flex items-center gap-1.5">
              <HeartHandshake size={14} />
              Yatra Guidelines
            </h5>

            <ul className="flex flex-col gap-3">
              {guidelines.map((guide) => (
                <li key={guide.id} className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-1.5 shrink-0" />
                  <span className="text-[11px] text-brand-primary-light/85 leading-normal font-medium">
                    {guide.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Help banner button */}
        <div className="bg-brand-primary/30 border border-brand-primary-border/15 p-3.5 rounded-xl text-left mt-2">
          <p className="text-xs font-bold text-saffron flex items-center gap-1.5 mb-1">
            <HelpCircle size={14} />
            Need Assistance?
          </p>
          <p className="text-[9px] text-brand-primary-light/75 leading-tight">
            Dial toll-free helpline number 1800-XX-XXXX for immediate Yatra
            support.
          </p>
        </div>
      </div>
    </div>
  );
}
