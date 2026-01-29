"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
      id="about"
      className="min-h-screen py-32 px-[5%] md:px-[10%]"
    >
      <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
        About Me
        <span className="block w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-4 rounded" />
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl text-cyan-400 font-bold mb-6">
            未知への挑戦を楽しむエンジニア
          </p>
          <p className="text-white/70 leading-relaxed mb-4">
            私の強みは未知のものに対して、自分で学習しそれを応用していける点です。
            1ヶ月ごとに担当案件が変わるような時期でも、素早くキャッチアップを行い、
            スムーズに案件を進めてきました。
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            AWSについてもほぼ未学習の状態から迅速にキャッチアップし、
            「初学者だとは思わなかった」との評価をいただきました。
          </p>

          <div className="space-y-4">
            {[
              { label: "Location", value: "Osaka, Japan" },
              { label: "Education", value: "University Graduate" },
              { label: "Certification", value: "基本情報技術者" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 bg-[rgba(20,20,35,0.8)] rounded-lg border border-white/10"
              >
                <span className="text-cyan-400 text-xs uppercase tracking-wider min-w-[100px]">
                  {item.label}
                </span>
                <span className="text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[rgba(20,20,35,0.8)] rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="font-mono text-sm md:text-base leading-loose overflow-x-auto">
              <code>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-green-400">developer</span>{" "}
                <span className="text-white">=</span> {"{"}
                {"\n"}
                {"  "}
                <span className="text-cyan-300">name</span>
                <span className="text-white">:</span>{" "}
                <span className="text-yellow-300">&quot;Shoma&quot;</span>,{"\n"}
                {"  "}
                <span className="text-cyan-300">role</span>
                <span className="text-white">:</span>{" "}
                <span className="text-yellow-300">
                  &quot;Full-Stack Developer&quot;
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-cyan-300">experience</span>
                <span className="text-white">:</span>{" "}
                <span className="text-purple-400">7</span>,{"\n"}
                {"  "}
                <span className="text-cyan-300">loves</span>
                <span className="text-white">:</span> [{"\n"}
                {"    "}
                <span className="text-yellow-300">&quot;TypeScript&quot;</span>,
                {"\n"}
                {"    "}
                <span className="text-yellow-300">&quot;React&quot;</span>,{"\n"}
                {"    "}
                <span className="text-yellow-300">&quot;Next.js&quot;</span>,
                {"\n"}
                {"    "}
                <span className="text-yellow-300">&quot;AWS&quot;</span>
                {"\n"}
                {"  "}],{"\n"}
                {"  "}
                <span className="text-cyan-300">motto</span>
                <span className="text-white">:</span>{" "}
                <span className="text-yellow-300">
                  &quot;Learn fast, build faster&quot;
                </span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
