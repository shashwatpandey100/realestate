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
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 7000,
    speed: 500,
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

  const [activeTab, setActiveTab] = useState("Summary");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="min-h-[calc(100vh-90px)] w-screen flex text-black mt-[90px] relative">
      <section className="w-1/2 h-[calc(100vh-90px)] relative py-[1rem] px-[1.5rem] sticky top-[90px]">
        <Slider ref={sliderRef} {...settings}>
          {property?.images?.map((image, index) => (
            <div
              key={index}
              className="h-[calc(100vh-90px-2rem)] rounded-[15px] overflow-hidden"
            >
              <div
                className="h-full w-full bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${image?.url})`,
                  backgroundColor: "black",
                }}
              ></div>
            </div>
          ))}
        </Slider>
        <div className="w-full flex items-center justify-between absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 pl-[32px] pr-[36px]">
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
        {property?.isFeatured && (
          <span className="absolute top-[27px] right-[40px] text-white px-[10px] bg-[#d92012] rounded-[12px] pb-[4px] pt-[6px] text-[10px] uppercase">
            Featured
          </span>
        )}
      </section>
      <section className="w-1/2 h-[calc(200vh-90px)] relative py-[1rem] pr-[1.5rem] flex flex-col text-[#494949]">
        <div className="w-full pb-[30px] border-b border-[rgba(0,0,0,0.1)] flex justify-between">
          <div className="flex flex-col justify-center">
            <span className="text-[2em]">{property?.title}</span>
            <span className="text-[#828282] font-[300]">
              {property?.category?.name} {property?.type?.toLowerCase()} in{" "}
              {property?.address?.toLowerCase()}
            </span>
          </div>
          <div className="flex items-center">
            <span className="px-[15px] py-[7px] rounded-[25px] bg-[#dbefc3] flex items-center justify-center cursor-pointer text-[14px]">
              {formattedPrice}
            </span>
          </div>
        </div>
        <div className="my-[30px] flex items-center">
          <div className="w-[90%] bg-gray-100 rounded-[25px] w-[100%] h-[45px] flex items-center p-[5px] overflow-hidden">
            {["Summary", "Details", "Location", "Video", "Contact"].map(
              (tab) => (
                <div
                  key={tab}
                  className={`w-full h-[35px] flex items-center justify-center px-[15px] rounded-[25px] text-[14px] transition-all duation-300 ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "bg-[#f3f3f3] text-[rgba(0,0,0,0.7)]"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[18px] mb-[12px] font-[600]">Summary</span>
          <span className="text-[#828282] font-[300] text-[14px]">
            {property?.description}
          </span>
        </div>
        <div className="flex flex-col mt-[30px]">
          <span className="text-[18px] mb-[12px] font-[600]">Details</span>
          <div className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] flex items-center gap-[10px] mt-[10px]">
            <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
              <HiArrowsPointingOut />
              {property?.areaSize} sqft
            </span>
            <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
              <IoBedOutline />
              {property?.bedrooms} Bedrooms
            </span>
            <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
              <PiBathtubLight />
              {property?.bathrooms} Baths
            </span>
          </div>
          {property?.planimage && (
            <div className="mt-[30px] w-full h-[300px] p-4 rounded-[25px] border border-[rgba(0,0,0,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${property?.planimage?.url}`}
                alt="property plan image"
                className="h-full w-full object-contain object-center"
              />
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Property;
