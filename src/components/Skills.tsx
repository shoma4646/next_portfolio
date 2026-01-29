"use client";

import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/data/skills";

const levelColors = {
  expert: "bg-cyan-400/20 border-cyan-400 text-cyan-400",
  advanced: "bg-fuchsia-500/20 border-fuchsia-500 text-fuchsia-500",
  intermediate: "bg-yellow-400/10 border-yellow-400 text-yellow-400",
};

export default function Skills() {
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

    const items = sectionRef.current?.querySelectorAll(".skill-category");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-32 px-[5%] md:px-[10%]"
    >
      <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
        Skills
        <span className="block w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-4 rounded" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            data-index={index}
            className={`skill-category bg-[rgba(20,20,35,0.8)] rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)] ${
              visibleItems.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-white">
              <span className="text-2xl">{category.icon}</span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full text-sm border transition-transform hover:scale-110 cursor-default ${levelColors[skill.level]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8 mt-12 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="text-white/60">Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-fuchsia-500" />
          <span className="text-white/60">Advanced</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="text-white/60">Intermediate</span>
        </div>
      </div>
    </section>
  );
}
