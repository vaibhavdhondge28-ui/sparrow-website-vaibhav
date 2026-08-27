import React from 'react';
import sparrowBirdIconBlue from '../assets/sparrow-bird-icon.png';
import sparrowBirdIconWhite from '../assets/sparrow-bird-icon-dark.png';

export default function SparrowLogo({ variant = 'dark', className = '', size = 'md' }) {
  const isLight = variant === 'light';

  const textColor = isLight ? 'text-slate-900' : 'text-white';
  const subColor = isLight ? 'text-blue-600 font-semibold' : 'text-sky-300 font-bold';
  const birdSrc = isLight ? sparrowBirdIconBlue : sparrowBirdIconWhite;

  const iconSizes = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      {/* Official Transparent Flying Sparrow Bird Emblem */}
      <img
        src={birdSrc}
        alt="Sparrow IT & Digital Solutions soaring bird logo emblem"
        className={`${iconSizes[size] || iconSizes.md} w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 filter drop-shadow-xs`}
      />

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span className={`text-xl sm:text-2xl font-black tracking-tight ${textColor} transition-colors leading-none`}>
          SPARROW
        </span>
        <span className={`text-[9px] font-mono uppercase tracking-[0.24em] ${subColor} mt-1.5`}>
          IT &amp; DIGITAL SOLUTIONS
        </span>
      </div>
    </div>
  );
}
