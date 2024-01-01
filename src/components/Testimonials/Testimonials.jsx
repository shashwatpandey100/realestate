"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { Card, CardSkeleton } from "./Card";
import constants from "../constants";

import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/createClient";
const query = groq`*[_type == "testimonials"]`;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setTestimonials(queryResult);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setTestimonials]);

  const totalSlides = testimonials?.length;
  const [progress, setProgress] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(3);

  const setSlides = () => {
    if (window.innerWidth <= 1210) {
      setSlidesToShow(2);
    }
    if (window.innerWidth <= 768) {
      setSlidesToShow(1);
    }
  };

  React.useEffect(() => {
    setSlides();
    setProgress(100 / (totalSlides - slidesToShow + 1));
    window.addEventListener("resize", () => {
      setSlides();
    });
  }, [totalSlides, slidesToShow]);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (current) => {
      setProgress((100 / (totalSlides - slidesToShow)) * (current + 1));
    },
  };

  return (
    <section className="max-h-max w-[100vw] bg-white">
      <div className="w-full max-h-max flex mb-[30px] text-black px-4 sm:px-10 justify-between">
        <div className="flex flex-col">
          <span className="text-[14px] uppercase">(04) Our Testimonials</span>
          <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px]">
            What our clients had to say about us?
          </span>
        </div>
        <a
          href={constants.google}
          target="_blank"
          className="text-[14px] uppercase hover:underline cursor-pointer"
        >
          (read all)
        </a>
      </div>
      <section className="pb-[50px] z-[0] bg-white w-screen px-4 overflow-hidden">
        {loading ? (
            <Slider ref={sliderRef} {...settings}>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </Slider>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                stars={testimonial?.stars}
                text={testimonial?.text}
                name={testimonial?.name}
                position={testimonial?.position}
                imgUrl={
                  testimonial?.image
                    ? `${urlFor(testimonial.image).url()}`
                    : "none"
                }
              />
            ))}
          </Slider>
        )}

        <div className="max-h-max my-[2vw] flex flex-col items-center justify-center gap-[0.9vw]">
          <div className="h-[2px] w-[310px] bg-[rgba(0,0,0,0.15)] relative">
            <div
              className={`absolute h-full bg-[rgba(0,0,0,1)] transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="w-full flex items-center justify-center gap-[0.9vw]">
            <span
              onClick={previous}
              className="bg-white border border-[rgba(0,0,0,0.5)] w-[30px] h-[30px] flex items-center justify-center group cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white"
            >
              <BiChevronLeft className="text-[25px]" />
            </span>
            <button
              onClick={next}
              className="bg-white border border-[rgba(0,0,0,0.5)] w-[30px] h-[30px] flex items-center justify-center cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white"
            >
              <BiChevronRight className="text-[25px]" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;

const data = [
  {
    stars: 5,
    text: "Fusion7 successfully completed each project phase and delivered high-quality assets on time. Their team was calm. They also facilitated constant communication via email and messaging apps, ensuring the client was well-informed about the project's progress.",
    name: "Colin Marsh",
    position: "Founder Shopbox AI",
    imgUrl:
      "https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf88db886ed541ffc86_Team%20Member%202.jpg",
  },
  {
    stars: 4,
    text: "Fusion7 delivered collaterals and materials promptly, meeting all deadlines. Their responsiveness to the client's specific requirements was exceptional, and they were readily available for in-depth discussions, responding within an hour on most occasions.",
    name: "Ana Davies",
    position: "Director, Clickl",
    imgUrl:
      "https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf88db886ed541ffcb1_Team%20Member%203.jpg",
  },
  {
    stars: 4,
    text: "Fusion7 delivered a logo book that outlined the client's mission. The team delivered on time, and the Fusion7 had a complete understanding of the client's requirements. The service provider was detail-oriented to ensure the client was satisfied with the final product.",
    name: "Anastasia Bezuglaya",
    position: "COO, The OneGate",
    imgUrl:
      "https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf96121b3c41c182dd3_Team%20Member%204.jpg",
  },
  {
    stars: 5,
    text: "Bigblue Digital was able to set a healthy and efficient rhythm for feedback loops. The team was reactive to feedback to ensure 100% results satisfaction. Their excellent project management, talented designers, and capacity to keep up with tight deadlines were impressive.",
    name: "Ana Martínez",
    position: "Marketing Lead, Bigblue",
    imgUrl:
      "https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf8dd0ef57c213341eb_Team%20Member%205.jpg",
  },
  {
    stars: 5,
    text: "Fusion7 leveraged their creativity to produce high-level assets that matched the client's brand and vision. The organized team worked efficiently and was highly receptive to feedback throughout. Their high-quality work, reasonable pricing, and quick turnaround time stood out.",
    name: "Erik De Kroon",
    position: "CEO, Yordex",
    imgUrl:
      "https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf95f4d5fd36eaf7e8f_Team%20Member%206.jpg",
  },
  {
    stars: 5,
    text: "Thanks to Fusion7's work, the new website received positive feedback, with users commenting that they have a much clearer comprehension of the products and services offered by the client. The team's impressive communication and timely responses made all the difference.",
    name: "Will Carter",
    position: "Marketing Manager, Acorn",
    imgUrl:
      "https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf88db886ed541ffc86_Team%20Member%202.jpg",
  },
];
