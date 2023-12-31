"use client";
import React, { useRef } from "react";
import About from "@/components/About";
import Intro from "@/components/Intro";
import SmoothScroll from "@/components/smoothScroll.js";
import Featured from "@/components/Featured.jsx";
import Latest from "@/components/Latest.jsx";
import Team from "@/components/Team";
import IntroModule from "@/components/IntroModule.jsx";
import Testimonials from "@/components/Testimonials/Testimonials";

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
      <SmoothScroll>
        <section>
          <Intro goToAbout={goToAbout} />
        </section>
        <section ref={about} className="mt-[100px] mb-[50px]">
          <About />
        </section>
          <Featured />
          <IntroModule />
          <Latest />
          <Team />
          <Testimonials />
      </SmoothScroll>
    </main>
  );
}