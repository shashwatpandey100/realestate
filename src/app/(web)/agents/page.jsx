"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import { CardSkeleton } from "./Card.jsx";
import { usePropertiesData } from "../layout.js";
import { useAgentsData } from "../layout.js";

const Agents = () => {
  const { properties, loadingProperties } = usePropertiesData();
  const { agents, loadingAgents } = useAgentsData();

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

  return (
    <section className="min-h-[calc(100vh-105px)] w-screen flex flex-col text-black px-4 py-4 mt-[90px]">
      <div className="w-full max-h-max flex justify-between mt-[30px]">
        <div className="flex flex-col">
          <span className="text-[14px] uppercase">All Agents</span>
          <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px]">
            Find top talent for your real estate needs effortlessly.
          </span>
        </div>
      </div>
      {loadingAgents ? (
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
          {agents.length === 0 ? (
            <div className="mt-[30px] h-[50vh] flex flex-col justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/notFound.png"
                alt="no results found"
                className="h-[250px] w-auto mt-[60px]"
              />
              <span className="mt-[30px] text-[12px] uppercase">
                We are sorry, we could not find any agents
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-[30px]">
              {agents.map((agent, index) => (
                <Card
                  key={index}
                  agent={agent}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Agents;
