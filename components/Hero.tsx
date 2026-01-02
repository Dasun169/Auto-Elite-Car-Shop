"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Open source automotive video from Pexels
  const videoUrl =
    "https://player.vimeo.com/external/472845848.sd.mp4?s=c938f2f5b856514562e82db7916f6acab7da9b0e&profile_id=164&oauth2_token_id=57447761";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2070"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 section-padding">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
          Premium <span className="text-accent">Car Care</span>
          <br />
          You Can Trust
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Professional auto services with modern technology and certified
          mechanics. Your vehicle deserves the best care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/book" className="btn-primary text-lg px-8 py-4">
            Book Appointment
          </Link>
          <Link href="/services" className="btn-secondary text-lg px-8 py-4">
            View Services
          </Link>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="glass-effect p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="glass-effect p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
