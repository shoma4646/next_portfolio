"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <div className="z-10">
        <p
          className={`text-lg text-cyan-400 tracking-[0.3em] uppercase mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Hello, I&apos;m
        </p>

        <h1
          className={`font-orbitron text-[clamp(4rem,15vw,10rem)] font-black leading-none mb-4 relative transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="glitch-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            SHOMA
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-white/60 tracking-[0.5em] uppercase mb-12 transition-all duration-1000 delay-[400ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Full-Stack Developer
        </p>

        <div
          className={`flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12 transition-all duration-1000 delay-[600ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <span className="block font-orbitron text-4xl md:text-5xl font-bold text-cyan-400">
              7+
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wider">
              Years Experience
            </span>
          </div>
          <div className="text-center">
            <span className="block font-orbitron text-4xl md:text-5xl font-bold text-cyan-400">
              14+
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wider">
              Projects
            </span>
          </div>
          <div className="text-center">
            <span className="block font-orbitron text-4xl md:text-5xl font-bold text-cyan-400">
              10+
            </span>
            <span className="text-xs text-white/60 uppercase tracking-wider">
              Technologies
            </span>
          </div>
        </div>

        <a
          href="#about"
          onClick={handleExploreClick}
          className={`inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 uppercase tracking-wider hover:bg-cyan-400 hover:text-[#0a0a0f] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <span>Explore</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M19 12l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
