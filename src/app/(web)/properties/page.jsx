"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card.jsx";
import { useSearchParams } from "next/navigation";
import { CardSkeleton } from "@/components/Card.jsx";
import { usePropertiesData } from "../layout.js"

const Properties = () => {

  const { properties, loadingProperties } = usePropertiesData();

  const [propertyCategory, setPropertyCategory] = useState(""); // villa, apartment, etc
  const [propertyType, setPropertyType] = useState(""); // for sale, for rent, etc
  const [propertyClassification, setPropertyClassification] = useState(""); // residential, commercial, etc
  const [searchQuery, setSearchQuery] = useState(""); // search query [search bar]

  const searchParams = useSearchParams();

  useEffect(() => {
    const propertyCategory = searchParams.get("propertyCategory");
    const propertyType = searchParams.get("propertyType");
    const propertyClassification = searchParams.get("propertyClassification");
    const searchQuery = searchParams.get("searchQuery");

    if (propertyCategory) setPropertyCategory(propertyCategory);
    if (propertyType) setPropertyType(propertyType);
    if (propertyClassification)
      setPropertyClassification(propertyClassification);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const filterProperties = (properties) => {
    return properties.filter((properties) => {
      // applying category filter
      if (
        propertyCategory &&
        propertyCategory.toLocaleLowerCase() !== "all" &&
        propertyCategory.toLocaleLowerCase() !==
          properties?.category?.name?.toLocaleLowerCase()
      ) {
        return false;
      }
      // applying type filter
      if (
        propertyType &&
        propertyType.toLocaleLowerCase() !== "all" &&
        propertyType.toLocaleLowerCase() !==
          properties?.type?.toLocaleLowerCase()
      ) {
        return false;
      }
      // applying classification filter
      if (
        propertyClassification &&
        propertyClassification.toLocaleLowerCase() !== "all" &&
        propertyClassification.toLocaleLowerCase() !==
          properties?.classification?.name.toLocaleLowerCase()
      ) {
        return false;
      }
      // applying search query filter
      if (
        searchQuery &&
        !properties?.title
          ?.toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      ) {
        return false;
      }
      // if no filter is applied
      return true;
    });
  };

  const [sortBy, setSortBy] = useState(""); // priceLowToHigh, priceHighToLow, titleAZ, titleZA
  const sortProperties = (properties, sortBy) => {
    if (sortBy === "priceLowToHigh") {
      return properties.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighToLow") {
      return properties.slice().sort((a, b) => b.price - a.price);
    } else if (sortBy === "titleAZ") {
      return properties.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "titleZA") {
      return properties.slice().sort((a, b) => b.title.localeCompare(a.title));
    } else {
      return properties; // default: no sorting
    }
  };

  const sortedProperties = sortProperties(properties || [], sortBy);
  const filteredProperties = filterProperties(sortedProperties || []);

  return (
    <section className="min-h-[calc(100vh-105px)] w-screen flex flex-col text-black px-4 py-4 md:mt-[90px] my-[90px]">
      <section className="h-[54px] w-full flex gap-4">
        <div className="md:w-[70%] min-w-[100%] flex p-[5px] gap-2">
          <div className="w-[35%] border border-[#dcdcdc] rounded-full py-1 pl-4 pr-[6px] bg-transparent text-[13px] text-black font-[300] flex items-center">
            <input
              className="w-full focus:outline-none bg-transparent text-black placeholder-black"
              type="text"
              name="searchQuery"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="md:w-[17%] w-[21%] border border-[#dcdcdc] rounded-full py-1 px-4 bg-transparent text-[13px] text-black font-[300] flex items-center">
            <select
              className="w-[100%] bg-transparent border-none focus:outline-none"
              required={true}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option disabled selected>
                Type
              </option>
              <option value="all">all</option>
              <option value="for sale">for sale</option>
              <option value="for rent">for rent</option>
            </select>
          </div>
          <div className="md:w-[17%] w-[21%] border border-[#dcdcdc] rounded-full py-1 px-4 bg-transparent text-[13px] text-black font-[300] flex items-center">
            <select
              className="w-[100%] bg-transparent border-none focus:outline-none"
              required={true}
              onChange={(e) => setPropertyCategory(e.target.value)}
            >
              <option disabled selected>
                Category
              </option>
              <option value="all">all</option>
              <option value="villa">Villa</option>
              <option value="bunglow">Bungalow</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="md:w-[17%] w-[21%] border border-[#dcdcdc] rounded-full py-1 px-4 bg-transparent text-[13px] text-black font-[300] flex items-center">
            <select
              className="w-[100%] bg-transparent border-none focus:outline-none"
              required={true}
              onChange={(e) => setPropertyClassification(e.target.value)}
            >
              <option disabled selected>
                Classification
              </option>
              <option value="all">all</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        </div>
        <div className="w-[30%]"></div>
      </section>
      <div className="w-full max-h-max flex justify-between mt-[30px]">
        <div className="flex flex-col">
          <span className="text-[14px] uppercase">All Properties</span>
          <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px]">
            Explore a wide range of our properties.
          </span>
        </div>
        <div className="max-w-max h-[25px] py-2 hover:bg-black text-[13px] flex items-center justify-center group border-b border-[#dcdcdc]">
        <select
          className="uppercase border-none focus:outline-none group-hover:bg-black group-hover:text-white"
          required={true}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option disabled selected>
            Sort by
          </option>
          <option value="default">default</option>
          <option value="priceLowToHigh">price - low to high</option>
          <option value="priceHighToLow">price - high to low</option>
          <option value="titleAZ">A to Z</option>
          <option value="titleZA">Z to A</option>
        </select>
        </div>
      </div>
      {loadingProperties ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-[30px]">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <>
        {
          filteredProperties.length === 0 ? (
            <div className="mt-[30px] h-[50vh] flex flex-col justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/notFound.png" alt="no results found" className="h-[250px] w-auto mt-[60px]" />
              <span className="mt-[30px] text-[12px] uppercase">We are sorry, we could not find any matching properties</span>
            </div>
          )
          :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-[30px]">
          {filteredProperties.map((property, index) => (
            <Card
              key={index}
              slug={property?.slug?.current}
              property={property}
            />
          ))}
        </div>
        }
        </>
      )}
    </section>
  );
};

export default Properties;
