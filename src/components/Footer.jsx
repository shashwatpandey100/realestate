import React from "react";
import constants from "./constants.js";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    const audio = new Audio("https://one-is.com/audio/selected/list.m4a");
    audio.play();
    audio.addEventListener("canplay", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  return (
    <section className="max-h-max w-[100vw] pt-[36px] px-[24px] bg-white text-black border-t border-[rgba(0,0,0,0.25)]">
      <div className="w-full max-h-max md:h-[45%] py-[12px] md:pt-[48px] md:pb-[192px] flex gap-[3rem]">
        <div className="h-full w-[calc(100%/3)] flex flex-col">
          <span className="uppercase font-[600] text-[22px]">
            TRANSFORMING REAL ESTATE
            INTO TIMELESS INVESTMENTS.
          </span>
          <Link href='/contact' className="pt-[24px] pb-0 font-[400] border-b border-black text-[2rem] max-w-max transition-all duration-300 hover:text-[#d92012] hover:border-[#d92012] cursor-pointer">
            Contact us
          </Link>
        </div>
        <div className="h-full w-[calc(100%/3)] flex flex-col roboticFont">
          <span className="mb-[24px] uppercase text-[14px] font-[600]">
            Contacts
          </span>
          <span className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] ">
            <a href={`mailto:${constants.email}`}>{constants.email}</a>
          </span>
          <span className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] max-w-[350px] my-[5px]">
            <a href="https://www.example.com/address" target="_blank">
              {constants.address}
            </a>
          </span>
          <span className="uppercase text-[13px] hover:text-[#d92012] leading-[22px] ">
            <a href="tel:+919267992009">+91 92679 92009</a>
          </span>
        </div>
        <div className="h-full w-[calc(100%/3)] flex justify-between roboticFont">
          <div className="h-full w-full flex flex-col">
            <span className="mb-[24px] uppercase text-[14px] font-[600]">
              Menu
            </span>
            <Link
              href="/"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              Contact us
            </Link>
            <Link
              href="/properties/all"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              All Properties
            </Link>
            <Link
              href="/properties/rent"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              For Rent
            </Link>
            <Link
              href="/properties/sale"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              For Sale
            </Link>
            <Link
              href="/team"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              Our Team
            </Link>
            <Link
              href="/privacy"
              className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="h-full w-full flex flex-col">
            <span className="mb-[24px] uppercase text-[14px] font-[600]">
              Follow us
            </span>
            {constants.youtube && (
              <span className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer">
                <a href={constants.youtube} target="_blank">
                  Youtube
                </a>
              </span>
            )}
            {constants.instagram && (
              <span className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer">
                <a href={constants.instagram} target="_blank">
                  Instagram
                </a>
              </span>
            )}
            {constants.facebook && (
              <span className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer">
                <a href={constants.facebook} target="_blank">
                  Facebook
                </a>
              </span>
            )}
            {constants.twitter && (
              <span className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer">
                <a href={constants.twitter} target="_blank">
                  Twitter
                </a>
              </span>
            )}
            {constants.linkedin && (
              <span className="uppercase text-[12px] hover:text-[#d92012] leading-[22px] cursor-pointer">
                <a href={constants.linkedin} target="_blank">
                  Linkedin
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[5%] flex justify-between items-center py-[24px] roboticFont">
        <span className="uppercase text-[12px] hover:text-[#d92012]">
          COPYRIGHT 2023. ALL RIGHT RESERVED
        </span>
        <span
          className="uppercase text-[12px] hover:text-[#d92012] hover:underline cursor-pointer"
          onClick={scrollToTop}
        >
          GO TO TOP
        </span>
      </div>
    </section>
  );
};

export default Footer;
