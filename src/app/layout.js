"use client";
import "./globals.css";
import { useState } from "react";
import Navbar from "../components/nav/index.jsx";

// export const metadata = {
//   title: "RealEstate",
//   description: "Discover the best properties",
// };

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
      <body>
        <main>
          <Navbar
            menuOpen={menuOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
