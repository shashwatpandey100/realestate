"use client";
import React, { useState, useEffect } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/createClient";
import Card from "@/components/Card.jsx";
import { useSearchParams } from "next/navigation";

const query = groq`*[_type == "property"]{
  title,
  slug,
  isFeatured,
  coverimage,
  price,
  address,
  areaSize,
  bedrooms,
  bathrooms,
  type,
  category->{
    name
  },
  classification->{
    name
  },
}`;

const Properties = ({ params }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setProperties(queryResult);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setProperties]);

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

    if (propertyCategory) console.log(propertyCategory.toLocaleLowerCase());
    if (propertyType) console.log(propertyType.toLocaleLowerCase());
    if (propertyClassification)
      console.log(propertyClassification.toLocaleLowerCase());
    if (searchQuery) console.log(searchQuery.toLocaleLowerCase());
  }, []);

  const filterProperties = (properties) => {
    return properties.filter((properties) => {
      // applying category filter
      if (
        propertyCategory &&
        propertyCategory.toLocaleLowerCase() !==
          properties?.category?.name?.toLocaleLowerCase()
      ) {
        return false;
      }
      // applying type filter
      if (
        propertyType &&
        propertyType.toLocaleLowerCase() !==
          properties?.type?.toLocaleLowerCase()
      ) {
        return false;
      }
      // applying classification filter
      if (
        propertyClassification &&
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

  const filteredProperties = filterProperties(properties || []);

  console.log(filteredProperties);
  console.log(properties);

  return (
    <section className="min-h-[70vh] w-screen flex flex-col text-black px-4 py-4 mt-[90px]">
      <section className="h-[55px] w-full flex gap-4">
        <div className="w-[70%] rounded-[3px] flex p-1 border border-[#dcdcdc] gap-1">
          <input
            className="w-[35%] border border-[#dcdcdc] rounded-[4px] focus:outline-none py-1 px-2 bg-transparent text-[15px] text-black font-[300] placeholder-black"
            type="text"
            name="searchQuery"
            placeholder="Search"
          />
          <select
            className="w-[17%] border border-[#dcdcdc] rounded-[4px] focus:outline-none py-1 px-2 bg-transparent text-[15px] text-black font-[300] placeholder-black"
            required={true}
          >
            <option disabled selected>
              Type
            </option>
            <option value="for sale">for sale</option>
            <option value="for rent">for rent</option>
          </select>
          <select
            className="w-[17%] border border-[#dcdcdc] rounded-[4px] focus:outline-none py-1 px-2 bg-transparent text-[15px] text-black font-[300] placeholder-black"
            required={true}
          >
            <option disabled selected>
              Category
            </option>
            <option value="villa">Villa</option>
            <option value="bunglow">Bungalow</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
          <select
            className="w-[17%] border border-[#dcdcdc] rounded-[4px] focus:outline-none py-1 px-2 bg-transparent text-[15px] text-black font-[300] placeholder-black"
            required={true}
          >
            <option disabled selected>
              Classification
            </option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
          <button className="w-[14%] rounded-[3px] border border-[#dcdcdc]">Search</button>
        </div>
        <div className="w-[30%]"></div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
        {filteredProperties.map((property, index) => (
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

export default Properties;
