"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav/index.jsx";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/smoothScroll";

import { groq } from "next-sanity";
import { client } from "@/lib/createClient";
const query = groq`*[_type == "agency"]`;
const queryProperty = groq`*[_type == "property"] | order(_createdAt desc) {
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

import { create } from "zustand";

const useAgencyData = create((set) => ({
  constants: [],
  setConstants: (constants) => set({ constants }),
  loadingAgency: true,
  setLoadingAgency: (loadingAgency) => set({ loadingAgency }),
}));

const usePropertiesData = create((set) => ({
  properties: [],
  setProperties: (newProperties) => set({ properties: newProperties }),
  loadingProperties: true,
  setLoadingProperties: (loadingProperties) => set({ loadingProperties }),
}));

export { useAgencyData, usePropertiesData };

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const { constants, setConstants, setLoadingAgency } = useAgencyData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setConstants(queryResult[0]);
        setLoadingAgency(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingAgency(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setConstants]);

  const { setProperties, setLoadingProperties } = usePropertiesData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(queryProperty);
        setProperties(queryResult);
        setLoadingProperties(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingProperties(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProperties]);

  return (
    <html lang="en">
      <head>
        <title>{constants?.name} RealEstate</title>
        <meta name="description" content="Discover the best properties" />
      </head>
      <body>
        <main>
          <SmoothScroll>
            <Navbar
              menuOpen={menuOpen}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
            {children}
            <Footer />
          </SmoothScroll>
        </main>
      </body>
    </html>
  );
}
