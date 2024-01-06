"use client";
import React, { useRef } from "react";
import About from "@/components/About.jsx";
import Intro from "@/components/Intro.jsx";
import Featured from "@/components/Featured.jsx";
import Latest from "@/components/Latest.jsx";
import Team from "@/components/Team.jsx";
import IntroModule from "@/components/IntroModule.jsx";
import Testimonials from "@/components/Testimonials/Testimonials.jsx";
import Types from "@/components/Types.jsx";

export default function Home() {
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 150,
      behavior: "smooth",
    });
  };

  const goToAbout = () => {
    scrollToSection(about);
  };

  return (
    <main>
      <section>
        <Intro goToAbout={goToAbout} />
      </section>
      <section ref={about} className="mt-[100px] mb-[50px]">
        <About />
      </section>
      <Types />
      <Featured />
      <IntroModule />
      <Latest />
      <Team />
      <Testimonials />
    </main>
  );
}
