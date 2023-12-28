"use client";
import React, { useRef } from "react";
import About from "@/components/About";
import Intro from "@/components/Intro";
import SmoothScroll from "@/components/smoothScroll.js";

export default function Home() {
  const about = useRef(null);
  const intro = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goToAbout = () => {
    scrollToSection(about);
  };
  const goToIntro = () => {
    scrollToSection(about);
  };

  return (
    <main>
      <SmoothScroll>
        <section ref={intro}>
          <Intro goToAbout={goToAbout} />
        </section>
        <section ref={about} className="my-[100px]">
          <About />
        </section>
      </SmoothScroll>
    </main>
  );
}
