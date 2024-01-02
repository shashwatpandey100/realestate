"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav/index.jsx";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/smoothScroll";

import { groq } from "next-sanity";
import { client } from "@/lib/createClient";
const query = groq`*[_type == "agency"]`;

import { create } from "zustand";

export const useAgencyData = create((set) => ({
  constants: [],
  setConstants: (constants) => set({ constants }),
}));

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const { constants, setConstants } = useAgencyData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await client.fetch(query);
        setConstants(queryResult[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setConstants]);

  return (
    <html lang="en">
      <head>
        <title>Varino RealEstate</title>
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
