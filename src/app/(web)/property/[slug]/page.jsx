"use client";
import React, { useState, useEffect } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/createClient";
import ImageSlider from "./ImageSlider";
import Details from "./Details";
import Location from "./Location";
import Video from "./Video";
import Summary from "./Summary";

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
        <ImageSlider images={property?.images} isFeatured={property?.isFeatured} />
      </section>
      <section className="w-1/2 max-h-max relative py-[1rem] pr-[1.5rem] flex flex-col text-[#494949]">
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
        <Summary description={property?.description} />
        <Details planimage={property?.planimage} areaSize={property?.areaSize} bedrooms={property?.bedrooms} baths={property?.bathrooms} />
        <Location googleMapLink={property?.googleMapLink} address={property?.address} />
        <Video youtubeVideo={property?.youtubeVideo} />
      </section>
    </section>
  );
};

export default Property;
