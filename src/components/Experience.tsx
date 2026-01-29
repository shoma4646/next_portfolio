"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-32 px-[5%] md:px-[10%]"
    >
      <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
        Experience
        <span className="block w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-4 rounded" />
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-fuchsia-500" />

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            data-index={index}
            className={`timeline-item relative mb-12 w-full md:w-1/2 ${
              index % 2 === 0
                ? "md:pr-12 md:text-right"
                : "md:ml-auto md:pl-12"
            } pl-8 md:pl-0 transition-all duration-700 ${
              visibleItems.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Timeline Marker */}
            <div
              className={`absolute top-0 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_theme(colors.cyan.400)] ${
                index % 2 === 0
                  ? "left-[-8px] md:left-auto md:right-[-8px]"
                  : "left-[-8px]"
              }`}
            />

            {/* Content Card */}
            <div className="bg-[rgba(20,20,35,0.8)] rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)]">
              <div
                className={`flex items-center gap-4 mb-4 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}
              >
                <span className="text-cyan-400 text-sm font-bold">
                  {exp.period}
                </span>
                {exp.isCurrent && (
                  <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#0a0a0f] px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-white/60 text-sm mb-4">{exp.company}</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              <div
                className={`flex flex-wrap gap-2 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}
              >
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
