import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/desktop)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target;
      const interactiveEl = target.closest('[data-cursor]');
      
      if (interactiveEl) {
        const text = interactiveEl.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot follower */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-sky-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Larger aura / text badge */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-medium text-xs tracking-wider transition-colors ${
          isHovered
            ? 'bg-sky-400/90 text-slate-950 px-4 py-2 shadow-lg shadow-sky-500/20 backdrop-blur-md'
            : 'w-10 h-10 border border-sky-400/40 bg-sky-500/5'
        }`}
        animate={{
          x: isHovered ? mousePosition.x - 50 : mousePosition.x - 20,
          y: isHovered ? mousePosition.y - 18 : mousePosition.y - 20,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {isHovered && <span>{cursorText}</span>}
      </motion.div>
    </>
  );
}
