import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import heroVideo from '../assets/video.mp4';
import LetsTalkButton from './LetsTalkButton';

export default function Hero({ onOpenContact }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0B3392] via-[#0D40B3] to-[#0A2E85] text-white overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
        {/* Haptiq Style Italic Quote */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-serif italic text-blue-100"
        >
          “Let me get back to you.”
        </motion.p>

        {/* Haptiq Style Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-4xl mx-auto text-white"
        >
          Digital solutions that move your business <span className="text-[#38BDF8]">forward.</span>
        </motion.h1>

        {/* Haptiq Style Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Sparrow IT and digital solutions is a full-stack growth partner delivering high-ROAS <span className="font-bold text-white">Meta Ads</span>, <span className="font-bold text-white">Google Ads campaigns</span>, and <span className="font-bold text-white">custom web &amp; mobile app development</span> for ambitious companies.
        </motion.p>

        {/* Centered Haptiq Style Let's talk Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center pt-2"
        >
          <LetsTalkButton
            onClick={() => onOpenContact()}
            label="Let's talk"
            size="md"
          />
        </motion.div>

        {/* Hero Video Container (Preloads First Frame On Mobile - No Black Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 shadow-2xl flex items-center justify-center group cursor-pointer" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={`${heroVideo}#t=0.001`}
              preload="auto"
              playsInline
              autoPlay={false}
              controls={isPlaying}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover rounded-2xl"
            >
              Your browser does not support video playback.
            </video>

            {/* Haptiq Centered Play Video Translucent Pill Button */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center transition-all group-hover:bg-slate-950/30">
                <div className="px-5 py-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900/90 backdrop-blur-md border border-white/30 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-2xl transition-all group-hover:scale-105">
                  <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center text-white">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Play Video</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
