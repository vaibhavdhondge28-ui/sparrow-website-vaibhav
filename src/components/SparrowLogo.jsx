import React from 'react';

export default function SparrowLogo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? 'text-slate-900' : 'text-white';
  const subColor = variant === 'light' ? 'text-slate-500' : 'text-blue-200';

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* High-End Geometric Wing Icon */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer aerodynamic wing vector */}
          <path
            d="M6 24C12 10 26 6 34 8C26 18 18 24 6 24Z"
            fill="url(#sparrow-grad-1)"
          />
          {/* Inner precision wing vector */}
          <path
            d="M12 32C18 20 28 16 36 18C28 26 22 30 12 32Z"
            fill="url(#sparrow-grad-2)"
          />
          {/* Minimalist dot accent */}
          <circle cx="33" cy="8" r="2.5" fill="#38BDF8" />

          <defs>
            <linearGradient id="sparrow-grad-1" x1="6" y1="8" x2="34" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0066FF" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="sparrow-grad-2" x1="12" y1="16" x2="36" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0040A8" />
              <stop offset="1" stopColor="#0066FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`text-xl font-extrabold tracking-tight ${textColor} group-hover:text-blue-500 transition-colors leading-none`}>
          SPARROW
        </span>
        <span className={`text-[9px] font-mono font-semibold uppercase tracking-[0.2em] ${subColor} mt-1`}>
          IT &amp; DIGITAL SOLUTIONS
        </span>
      </div>
    </div>
  );
}
