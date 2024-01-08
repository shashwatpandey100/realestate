"use client";
import React, { useState, useEffect } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/createClient";
import ImageSlider from "./ImageSlider";
import Details from "./Details";
import Location from "./Location";
import Video from "./Video";
import Summary from "./Summary";
import Contact from "./Contact";

const Property = ({ params }) => {
  const query = groq`*[_type == "property" && slug.current == "${params.slug}"]{
    ...,
    category->{name},
      classification->{name},
      agent->{
        _createdAt,
        email,
        facebookURL,
        image,
        instagramURL,
        linkedinURL,
        twitterURL,
        name,
        phone,
      },
  }`;

  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setProperty(queryResult[0]);
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

  return (
    <section className="min-h-[calc(100vh-90px)] w-screen flex flex-col md:flex-row text-black mt-[90px] relative">
      <section className="md:w-1/2 w-full md:h-[calc(100vh-90px)] h-[calc(90vh-90px)] relative py-[1rem] md:px-[1.5rem] px-[1rem] md:sticky md:top-[90px]">
        <ImageSlider
          images={property?.images}
          isFeatured={property?.isFeatured}
          loading={loading}
        />
      </section>
      <section
        className={`md:w-1/2 w-full max-h-max relative py-[1rem] md:pr-[1.5rem] px-[1rem] flex flex-col text-[#494949]`}
      >
        <div
          className={`w-full pb-[10px] border-b border-[rgba(0,0,0,0.1)] flex justify-between ${
            loading && "hidden"
          }`}
        >
          <div className="flex flex-col justify-center">
            <span className="text-[2em]">{property?.title}</span>
            <span className="text-[#828282] font-[300]">
              {property?.category?.name} {property?.type?.toLowerCase()} in{" "}
              {property?.address?.toLowerCase()}
            </span>
          </div>
          <div className="flex flex-col justify-center items-end">
            <span className="px-[15px] py-[7px] rounded-[25px] bg-[#dbefc3] flex items-center justify-center cursor-pointer text-[14px]">
              {formattedPrice} {property?.type == "For Rent" && "/ month"}
            </span>
          </div>
        </div>
        <Summary description={property?.description} loading={loading} />
        <Details
          planimage={property?.planimage}
          areaSize={property?.areaSize}
          bedrooms={property?.bedrooms}
          baths={property?.bathrooms}
          loading={loading}
        />
        <Location
          googleMapLink={property?.googleMapLink}
          address={property?.address}
          loading={loading}
        />
        <Video youtubeVideo={property?.youtubeVideo} loading={loading} />
        <Contact
          agent={property?.agent}
          loading={loading}
        />
      </section>
    </section>
  );
};

export default Property;
