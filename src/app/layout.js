"use client";
import "./globals.css";
import { useState } from "react";
import Navbar from "../components/nav/index.jsx";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <title>RealEstate</title>
        <meta name="description" content="Discover the best properties" />
      </head>
      <body>
        <main>
          <Navbar
            menuOpen={menuOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
