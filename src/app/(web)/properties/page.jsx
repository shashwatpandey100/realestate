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
    if (propertyClassification) setPropertyClassification(propertyClassification);
    if (searchQuery) setSearchQuery(searchQuery);

    if (propertyCategory) console.log(propertyCategory.toLocaleLowerCase());
    if (propertyType) console.log(propertyType.toLocaleLowerCase());
    if (propertyClassification) console.log(propertyClassification.toLocaleLowerCase());
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
        !properties?.title?.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
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
    <section className="min-h-[100vh] w-[100vw] flex text-black mt-[90px] px-4 py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
