import React from 'react';

export default function SparrowLogo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? 'text-slate-900' : 'text-white';
  const subColor = variant === 'light' ? 'text-slate-500' : 'text-sky-300';
  const symbolFill = variant === 'light' ? '#0066FF' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Haptiq-Style Clean Geometric Solid White Vector Mark (No Background Box) */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Primary Soaring Wing Geometric Vector */}
          <path
            d="M5 24C13 10 25 5 33 7C25 17 17 23 5 24Z"
            fill={symbolFill}
          />
          {/* Secondary Precision Wing Vector */}
          <path
            d="M11 31C18 21 27 16 35 17C29 25 21 29 11 31Z"
            fill={variant === 'light' ? '#38BDF8' : '#38BDF8'}
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span className={`text-xl sm:text-2xl font-black tracking-tight ${textColor} group-hover:text-sky-300 transition-colors leading-none`}>
          SPARROW
        </span>
        <span className={`text-[9px] font-mono font-bold uppercase tracking-[0.22em] ${subColor} mt-1`}>
          IT &amp; DIGITAL SOLUTIONS
        </span>
      </div>
    </div>
  );
}
