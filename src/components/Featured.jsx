import React, { useState, useEffect } from "react";
import Card, { CardSkeleton } from "./Card";
import Link from "next/link";
import { usePropertiesData } from "../app/(web)/layout.js";
import { urlFor } from "@/lib/createClient";

const Featured = () => {
  const { properties, loadingProperties } = usePropertiesData();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const filterProperties = (properties) => {
      return properties.filter((properties) => properties?.isFeatured === true);
    };
    setFeatured(filterProperties(properties));
  }, [properties]);

  return (
    <section className="min-h-[calc(100vh-200px)] pb-[50px] w-full bg-white flex flex-col px-4 sm:px-10 text-black mt-[100px]">
      <div className="w-full max-h-max flex justify-between">
        <div className="flex flex-col">
          <span className="text-[14px] uppercase">Featured Properties</span>
          <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px]">
            Explore a wide range of our featured properties
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
        {loadingProperties ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          featured.map((property, index) => (
            <Card
              key={index}
              slug={property?.slug?.current}
              property={property}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Featured;
