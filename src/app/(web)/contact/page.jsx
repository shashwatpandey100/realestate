"use client";
import React from "react";
import constants from "@/components/constants";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Contact = () => {
  return (
    <section className="h-[calc(100vh-90px)] mt-[90px] w-[100vw] flex text-black">
      <div className="w-1/2 h-full flex flex-col border-r border-[rgba(0,0,0,0.25)] px-4 sm:px-10 py-2 sm:py-4">
        <p className="text-[27px] font-[500]">
          We&apos;d love to hear from you.
        </p>
        <span className="text-[14px] text-[rgba(0,0,0,0.7)]">
          contact us for any questions, suggestions and feedback.
        </span>
        <form
          action=""
          className="flex flex-col relative w-[100%] h-[100%] gap-[5px] mt-[30px]"
        >
          <div className="w-full max-h-max flex flex-col md:flex-row gap-[5px]">
            <input
              className="md:w-[50%] w-[100%] h-[44px] border border-[#dcdcdc] rounded-[4px] focus:outline-none p-4 bg-transparent text-[15px] text-black font-[300] placeholder-black"
              type="text"
              name="name"
              placeholder="Name"
              required={true}
            />
            <PhoneInput
              defaultCountry="in"
              name="phone"
              placeholder="Phone number"
              className="w-[100%] md:w-[50%] h-[44px]"
            />
          </div>
          <div className="w-full max-h-max flex md:gap-[5px]">
            <input
              className="w-[100%] h-[44px] border border-[#dcdcdc] rounded-[4px] focus:outline-none p-4 bg-transparent text-[15px] text-black font-[300] placeholder-black"
              type="email"
              name="email"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="w-full max-h-max flex md:gap-[5px]">
            <select
              className="w-[100%] h-[44px] border border-[#dcdcdc] rounded-[4px] focus:outline-none px-4 py-1 bg-transparent text-[15px] text-black font-[300] placeholder-black"
              required={true}
            >
              <option disabled selected>
                are you a buyer or seller?
              </option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className="w-full max-h-max flex md:gap-[5px]">
            <textarea
              className={`w-[100%] h-[300px] border border-[#dcdcdc] rounded-[4px] focus:outline-none p-4 bg-transparent text-[15px] text-black font-[300] placeholder-black`}
              name="message"
              placeholder="message"
              required={true}
            />
          </div>

          <div className="w-full h-[10%] flex items-end justify-between absolute bottom-0 roboticFont">
            <p className="text-[13px] lg:text-[16px] text-black">
              Our Email:{" "}
              <a href={`mailto:${constants.email}`}>
                <u>{constants.email}</u>
              </a>
            </p>
            <div className="flex flex-col">
              <button type="submit" className="flex group">
                <p className="underline uppercase text-[36px] lg:leading-[36px] leading-[26px] font-[700] text-[#2c2c2c]">
                  Submit
                </p>
              </button>
              <p className="max-w-[200px] text-[12px] text-black">
                By submitting, You agree to{" "}
                <Link href="/privacy" className="underline">
                  data processing policy
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 h-full bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.8151416344294!2d77.50726027560414!3d28.47024649143149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebb15d020e7d%3A0x48727ae0ddcac4c4!2sTIWARI%20PROPMART%20REAL%20ESTATE%20SOLUTIONS%20LLP.!5e1!3m2!1shi!2sin!4v1703959877778!5m2!1shi!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen={false}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
