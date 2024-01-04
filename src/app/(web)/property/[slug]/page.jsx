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
    <section className="h-[calc(100vh-90px)] w-screen flex text-black p-4 gap-4 mt-[90px]">
      <section
        className="w-[42%] h-full overflow-hidden rounded-[12px] bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: `url(${property?.coverimage?.url})` }}
      >
        <div className="absolute bottom-[15px] left-1/2 transform -translate-x-1/2 w-[85%] h-[90px] rounded-full overflow-hidden bg-white"></div>
      </section>
      <section className="w-[58%] h-full overflow-hidden"></section>
    </section>
  );
};

export default Property;
