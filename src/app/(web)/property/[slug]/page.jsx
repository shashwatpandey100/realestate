"use client";
import React, { useState, useEffect } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/createClient";

const Property = ({ params }) => {
  const query = groq`*[_type == "property" && slug.current == "${params?.slug}"]`;

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

  return (
    <section className="min-h-[calc(200vh-90px)] w-screen flex text-black mt-[90px] relative">
      <section className="w-1/2 h-[calc(100vh-90px)] bg-white p-2 flex gap-2 sticky top-[90px]">
        <div
          className={`max-h-[calc(100vh-100px)] w-[20%] rounded-[12px] overflow-scroll ${
            loading && "animate-pulse bg-gray-300"
          }`}
        >
          {property?.images?.map((image, index) => (
            <div
              key={index}
              className="h-[100px] w-full bg-gray-300 rounded-[12px] mb-[10px] bg-cover bg-no-repeat bg-center cursor-pointer"
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
          ))}
        </div>
        <div
          className={`h-full w-[80%] rounded-[12px] bg-cover bg-no-repeat bg-center ${
            loading && "animate-pulse bg-gray-300"
          }`}
          style={{ backgroundImage: `url(${property?.coverimage?.url})` }}
        ></div>
      </section>
    </section>
  );
};

export default Property;
