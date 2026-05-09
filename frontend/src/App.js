import React from "react";
import "@/App.css";
import { Toaster } from "sonner";
import ParticleBg from "@/components/ParticleBg";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import AIMLSection from "@/components/sections/AIMLSection";
import GitHubStats from "@/components/sections/GitHubStats";
import Journey from "@/components/sections/Journey";
import DSA from "@/components/sections/DSA";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#05050A] text-gray-100 font-body overflow-x-hidden">
      <ParticleBg />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIMLSection />
        <GitHubStats />
        <Journey />
        <DSA />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(10,10,15,0.9)",
            border: "1px solid rgba(0,240,255,0.3)",
            color: "#F3F4F6",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </div>
  );
}

export default App;
