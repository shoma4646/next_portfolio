"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic import for Three.js scene (client-side only)
const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0f]" />
  ),
});

export default function Home() {
  return (
    <>
      <Scene />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Hobbies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
