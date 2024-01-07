"use client";
import React, { useState, useEffect, useRef } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/createClient";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

const Property = ({ params }) => {
  const query = groq`*[_type == "property" && slug.current == "${params.slug}"]{
    ...,
    category->{name},
      classification->{name},
  }`;

  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setProperty(queryResult[0]);
        console.log(queryResult[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots dot-indicator",
    centerMode: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 7000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "max-content",
          backgroundColor: "#fff",
          position: "absolute",
          left: "0",
          right: "0",
          margin: "auto",
          bottom: "20px",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          width: "7px",
          height: "7px",
        }}
      ></span>
    ),
  };

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(property?.price || 0);

  return (
    <section className="min-h-[calc(100vh-90px)] w-screen flex flex-col text-black mt-[90px] relative">
      <section className="w-full h-[70vh] relative">
          <Slider ref={sliderRef} {...settings}>
            {property?.images?.map((image, index) => (
              <div
                key={index}
                className="h-[70vh]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${image?.url}`}
                  alt=""
                  className="h-full w-full object-cover object-center cursor-pointer"
                />
              </div>
            ))}
          </Slider>
          <div className="w-full flex items-center justify-between absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-[100px]">
            <span
              onClick={previous}
              className="bg-white w-[30px] h-[30px] flex items-center justify-center group cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white"
            >
              <BiChevronLeft className="text-[25px]" />
            </span>
            <button
              onClick={next}
              className="bg-white w-[30px] h-[30px] flex items-center justify-center cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white"
            >
              <BiChevronRight className="text-[25px]" />
            </button>
          </div>
      </section>
      <section className="w-full min-h-[200vh] flex flex-col px-4 sm:px-10 text-[#333333]">
        <div className="border-b border-[rgba(0,0,0,0.25)] flex justify-between pt-[10px] pb-[15px]">
          <div>
            <p className="text-[22px]">{property?.title}</p>
            <p className="text-[14px] text-[#bbbbbb] font-[400]">
              {property?.category?.name}
            </p>
          </div>
          <div className="h-full flex items-center gap-[10px]">
            <div className="h-[35px] px-[15px] py-[3px] rounded-[25px] bg-[#def1c4] flex items-center justify-center text-[14px]">
              {formattedPrice} {property?.type == "For Rent" && "/ month"}
            </div>
            <div className="h-[35px] aspect-square cursor-pointer pr-[1px] rounded-full border border-[rgba(0,0,0,0.25)] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
              <CiShare2 />
            </div>
          </div>
        </div>
        <p className="text-[22px] mt-[15px]">Summary</p>
        <p className="mt-[15px] w-full text-[14px]">{property?.description}</p>
        <div className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] flex items-center gap-[10px] mt-[15px]">
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center border border-[rgba(0,0,0,0.25)] text-[12px]">
            <HiArrowsPointingOut />
            {property?.areaSize}
          </span>
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center border border-[rgba(0,0,0,0.25)] text-[12px]">
            <IoBedOutline />
            {property?.bedrooms} Bedrooms
          </span>
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center border border-[rgba(0,0,0,0.25)] text-[12px]">
            <PiBathtubLight />
            {property?.bathrooms} Baths
          </span>
        </div>
        <p className="text-[22px] mt-[15px]">Location</p>
        <p className="max-w-max mt-[15px] text-[12px] px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center border border-[rgba(0,0,0,0.25)]">
          <CiLocationOn />
          {property?.address}
        </p>
        <div className="w-full h-[70vh] bg-gray-100 mt-[15px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.8151416344294!2d77.50726027560414!3d28.47024649143149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebb15d020e7d%3A0x48727ae0ddcac4c4!2sTIWARI%20PROPMART%20REAL%20ESTATE%20SOLUTIONS%20LLP.!5e1!3m2!1shi!2sin!4v1703959877778!5m2!1shi!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen={false}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section> 
    </section>
  );
};

export default Property;


      