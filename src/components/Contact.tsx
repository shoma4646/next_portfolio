"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-[60vh] py-32 px-[5%] md:px-[10%] text-center"
    >
      <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
        Contact
        <span className="block w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-4 rounded" />
      </h2>

      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          新しいプロジェクトや機会についてお気軽にご連絡ください。
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/shoma4646"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[rgba(20,20,35,0.8)] border border-white/10 rounded-xl text-white transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,245,255,0.2)]"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-3 px-8 py-4 bg-[rgba(20,20,35,0.8)] border border-white/10 rounded-xl text-white transition-all duration-300 hover:border-fuchsia-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,255,0.2)]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
