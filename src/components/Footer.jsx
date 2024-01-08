import React from "react";
import { useAgencyData } from "../app/(web)/layout.js";
import Link from "next/link";

const Footer = () => {
  const { constants } = useAgencyData();

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
      <div className="w-full max-h-max md:h-[45%] py-[12px] md:pt-[48px] md:pb-[192px] flex flex-col lg:flex-row gap-[3rem]">
        <div className="h-full lg:w-[calc(100%/3)] w-full flex flex-col">
          <span className="uppercase font-[600] text-[22px]">
            TRANSFORMING REAL ESTATE
            INTO TIMELESS INVESTMENTS.
          </span>
          <Link href='/contact' className="mt-[24px] pb-0 font-[400] border-b border-black text-[2rem] max-w-max transition-all duration-300 hover:bg-black hover:text-white max-w-max cursor-pointer">
            Contact us
          </Link>
        </div>
        <div className="h-full lg:w-[calc(100%/3)] w-full flex flex-col roboticFont">
          <span className="mb-[24px] uppercase text-[14px] font-[600]">
            Contacts
          </span>
          <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px]">
            <a href={`mailto:${constants?.email}`}>{constants?.email}</a>
          </span>
          <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] max-w-[350px] my-[5px]">
            <a href="https://www.example.com/address" target="_blank">
              {constants?.address}
            </a>
          </span>
          <span className="uppercase text-[13px] hover:bg-black hover:text-white max-w-max leading-[22px] ">
            <a href={`tel:${constants?.phone}`}>{constants?.phone}</a>
          </span>
        </div>
        <div className="h-full lg:w-[calc(100%/3)] w-full flex justify-between roboticFont">
          <div className="h-full w-full flex flex-col">
            <span className="mb-[24px] uppercase text-[14px] font-[600]">
              Menu
            </span>
            <Link
              href="/"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              Contact us
            </Link>
            <Link
              href="/properties"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              All Properties
            </Link>
            <Link
              href="/properties?propertyType=For%20Rent"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              For Rent
            </Link>
            <Link
              href="/properties?propertyType=For%20Sale"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              For Sale
            </Link>
            <Link
              href="/agents"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              Our Agents
            </Link>
            <Link
              href="/privacy"
              className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="h-full w-full flex flex-col items-end">
            <span className="mb-[24px] uppercase text-[14px] font-[600]">
              Follow us
            </span>
            {constants?.youtubeURL && (
              <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer">
                <a href={constants?.youtubeURL} target="_blank">
                  Youtube
                </a>
              </span>
            )}
            {constants?.instagramURL && (
              <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer">
                <a href={constants?.instagramURL} target="_blank">
                  Instagram
                </a>
              </span>
            )}
            {constants?.facebookURL && (
              <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer">
                <a href={constants?.facebookURL} target="_blank">
                  Facebook
                </a>
              </span>
            )}
            {constants?.twitterURL && (
              <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer">
                <a href={constants?.twitterURL} target="_blank">
                  Twitter
                </a>
              </span>
            )}
            {constants?.linkedinURL && (
              <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max leading-[22px] cursor-pointer">
                <a href={constants?.linkedinURL} target="_blank">
                  Linkedin
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[5%] flex justify-between items-center py-[24px] roboticFont">
        <span className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max">
          COPYRIGHT 2023. ALL RIGHT RESERVED
        </span>
        <span
          className="uppercase text-[12px] hover:bg-black hover:text-white max-w-max hover:underline cursor-pointer"
          onClick={scrollToTop}
        >
          GO TO TOP
        </span>
      </div>
    </section>
  );
};

export default Footer;
