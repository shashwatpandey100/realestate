import React, { useState, useEffect } from "react";
import Card from "./Card";
import Link from "next/link";

import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/createClient";
const query = groq`*[_type == "property"] | order(_createdAt desc) {
  title,
  slug,
  isFeatured,
  coverimage,
  price,
  address,
  areaSize,
  bedrooms,
  bathrooms
}[0...3]`;

const Latest = () => {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setLatest(queryResult);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setLatest]);

  return (
    <section className="min-h-[calc(100vh-200px)] pb-[50px] w-full bg-white flex flex-col px-4 sm:px-10 text-black">
      <div className="w-full max-h-max flex justify-between">
        <div className="flex flex-col">
          <span className="text-[14px] uppercase">(03) Latest Properties</span>
          <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px]">
            Explore a wide range of our handpicked latest additions
          </span>
        </div>
        <Link
          href="/properties"
          className="text-[12px] h-[35px] uppercase hover:underline cursor-pointer px-4 flex items-center justify-center border border-[#dcdcdc] rounded-full bg-transparent"
        >
          see all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-[30px]">
        {latest.map((property, index) => (
          <Card
            key={index}
            slug={property?.slug?.current}
            property={property}
          />
        ))}
      </div>
    </section>
  );
};

export default Latest;
