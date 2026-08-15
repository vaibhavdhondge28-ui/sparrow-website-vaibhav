import React from 'react';

export default function LetsTalkButton({
  onClick,
  label = "Let's talk",
  size = 'md',
  className = '',
}) {
  const sizeClasses = {
    sm: 'px-5 py-2 text-xs font-semibold rounded-xl',
    md: 'px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-xl',
    lg: 'px-8 py-3.5 text-sm sm:text-base font-bold rounded-xl',
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center text-white bg-[#1866EC] hover:bg-[#0D52D4] transition-colors shadow-md shadow-blue-900/20 active:scale-95 cursor-pointer font-sans ${sizeClasses[size]} ${className}`}
    >
      {label}
    </button>
  );
}
