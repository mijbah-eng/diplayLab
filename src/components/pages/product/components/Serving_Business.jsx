"use client";
import React from "react";
import { Globe, Flag, Headphones, Users } from "lucide-react";

function ServingBusiness() {
  const stats = [
    {
      id: 1,
      icon: Globe,
      value: "50,000+",
      label: "Screens Managed",
    },
    {
      id: 2,
      icon: Flag,
      value: "100+",
      label: "Countries",
    },
    {
      id: 3,
      icon: Headphones,
      value: "24/7",
      label: "Support",
    },
    {
      id: 4,
      icon: Users,
      value: "10K+",
      label: "Happy Customers",
    },
  ];

  const pins = [
    { id: 1, top: "28%", left: "22%", label: "North America" },
    { id: 2, top: "68%", left: "32%", label: "South America" },
    { id: 3, top: "25%", left: "48%", label: "Europe" },
    { id: 4, top: "45%", left: "54%", label: "Middle East & Africa" },
    { id: 5, top: "35%", left: "76%", label: "Asia Pacific" },
  ];

  return (
    <section className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Background soft grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sky-600 font-bold uppercase tracking-wider text-xs md:text-sm">
            GLOBAL REACH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Serving Businesses Worldwide
          </h2>
        </div>

        {/* World Map Wrapper */}
        <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[360px] md:h-[460px] mb-12 sm:mb-16 border border-slate-100 bg-white/40 rounded-3xl p-4 md:p-6 shadow-sm backdrop-blur-xs select-none">
          
          {/* Custom Stylized SVG World Map */}
          <svg
            className="w-full h-full text-sky-200/50 fill-current"
            viewBox="0 0 1000 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dotted grid lines background inside map */}
            <pattern id="dot-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-sky-300/30" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" className="opacity-70" />

            {/* Continental outlines (stylized vector shapes) */}
            {/* North America */}
            <path d="M120,100 L180,80 L280,90 L320,130 L280,180 L230,220 L160,250 L180,190 L130,190 L100,160 Z" className="fill-sky-100/50 stroke-sky-200/50" strokeWidth="2" strokeDasharray="3 3" />
            {/* South America */}
            <path d="M230,220 L280,240 L340,300 L300,380 L270,440 L250,450 L240,400 L210,300 L210,250 Z" className="fill-sky-100/50 stroke-sky-200/50" strokeWidth="2" strokeDasharray="3 3" />
            {/* Europe */}
            <path d="M440,110 L480,90 L520,100 L550,140 L500,180 L460,170 L440,140 Z" className="fill-sky-100/50 stroke-sky-200/50" strokeWidth="2" strokeDasharray="3 3" />
            {/* Africa */}
            <path d="M440,190 L500,180 L540,210 L560,260 L580,310 L540,390 L510,390 L460,320 L420,260 L410,220 Z" className="fill-sky-100/50 stroke-sky-200/50" strokeWidth="2" strokeDasharray="3 3" />
            {/* Asia */}
            <path d="M520,100 L680,60 L850,90 L900,170 L840,260 L780,300 L720,330 L660,330 L600,280 L540,210 L500,180 L550,140 Z" className="fill-sky-100/50 stroke-sky-200/50" strokeWidth="2" strokeDasharray="3 3" />
            {/* Australia */}
            <path d="M760,330 L800,320 L840,340 L850,380 L800,410 L750,380 Z" className="fill-sky-100/50 stroke-sky-200/50" strokeWidth="2" strokeDasharray="3 3" />
          </svg>

          {/* Location Pins Overlay */}
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="absolute group -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{ top: pin.top, left: pin.left }}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer pulsing ring */}
                <span className="absolute inline-flex h-8 w-8 rounded-full bg-sky-400/30 animate-ping"></span>
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-sky-400/50 animate-pulse"></span>
                
                {/* Pin Container */}
                <div className="relative w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md border border-sky-100 transition-transform duration-300 group-hover:scale-110">
                  {/* Pin SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-sky-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Tooltip Label */}
                <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-[11px] font-semibold py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 whitespace-nowrap shadow-lg z-30">
                  {pin.label}
                  {/* Tooltip triangle */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center shadow-md shadow-slate-200/40 hover:shadow-lg hover:border-sky-100 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mb-5 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Stat Value */}
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5">
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServingBusiness;