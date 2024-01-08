import React from "react";
import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./anim";
import Curve from "./Curve";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareYoutube,
} from "react-icons/fa6";
import Blur from "./Blur";
import Link from "next/link";
import { useAgencyData } from "../../app/(web)/layout.js";
import { urlFor } from "@/lib/createClient.js";

const Navbar = ({ openMenu, closeMenu, menuOpen }) => {

  const { constants } = useAgencyData();

  return (
    <>
      <section className="fixed top-0 z-[99]">
        <div className="h-[40px] w-screen bg-black text-white flex justify-between items-center px-4 sm:px-10">
          <a
            href={`tel:${constants?.phone}`}
            className="font-[300] text-[15px]"
          >
            ({constants?.phone})
          </a>
          <div className="flex gap-[20px] items-center">
            <span className="text-[25px] flex gap-[5px]">
              <a target="_blank" href={constants?.instagramURL}>
                <FaSquareInstagram />
              </a>
              <a target="_blank" href={constants?.youtubeURL}>
                <FaSquareYoutube />
              </a>
              <a target="_blank" href={constants?.facebookURL}>
                <FaSquareFacebook />
              </a>
              <a target="_blank" href={constants?.twitterURL}>
                <FaSquareXTwitter />
              </a>
            </span>
            <a
              href={`mailto:${constants?.email}`}
              className="font-[300] text-[15px] text-white md:block hidden"
            >
              {constants?.email}
            </a>
          </div>
        </div>
        <div className="w-screen h-[50px] duration-1000 flex justify-between items-center px-4 sm:px-10 border-b border-[rgba(0,0,0,0.25)] bg-white">
          <button onClick={openMenu}>
            <p className="cursor-pointer text-[30px] text-black">
              <HiOutlineMenuAlt4 />
            </p>
          </button>
          <div className="flex gap-[5px] items-center">
            <Link href="/" className="w-[180px]">
              <div
                className="w-[180px] h-[35px] bg-contain bg-no-repeat bg-center relative"
                style={{
                  backgroundImage: constants?.logo?.image ? `url(${urlFor(constants.logo.image).url()})` : `url(${constants?.logo?.url})`
                }}
              >
              </div>
            </Link>
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="menu w-[100%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
            >
              <span
                onClick={closeMenu}
                className="absolute top-3 left-3 text-[25px] cursor-pointer z-[99] hover:scale-[0.8] transition duration-500"
              >
                <IoCloseOutline />
              </span>
              <Curve type="nav" />
              <div className="body">
                <div className="nav"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {menuOpen && <Blur closeMenu={closeMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
