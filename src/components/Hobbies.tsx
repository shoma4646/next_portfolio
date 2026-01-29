'use client';

import { useEffect, useRef } from 'react';

const hobbies = [
  {
    icon: '🎸',
    title: 'Guitar',
    description: 'ギターを弾くのが趣味。ロック・ポップスを中心に演奏。',
  },
  {
    icon: '🎵',
    title: 'Band Music',
    description: 'バンドミュージックが好き。ライブにも足を運ぶ。',
  },
  {
    icon: '🎹',
    title: 'Composing',
    description: '作曲に挑戦中。DTMでオリジナル曲を制作。',
  },
  {
    icon: '🎮',
    title: 'Gaming',
    description: 'ゲーム好き。RPGやアクションゲームをプレイ。',
  },
];

export default function Hobbies() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.hobby-card');
    cards?.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hobbies" className="min-h-screen py-32 px-[10%]" ref={sectionRef}>
      <h2 className="font-orbitron text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
        Hobbies
        <span className="block w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-4 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="hobby-card opacity-0 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)] transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {hobby.icon}
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-3 text-white">
              {hobby.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
