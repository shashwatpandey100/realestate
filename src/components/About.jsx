import React from "react";
import { useAgencyData } from "@/app/(web)/layout";

const About = () => {

  const { constants } = useAgencyData();

  return (
    <section className="min-h-[calc(100vh-200px)] pb-[50px] w-full bg-white flex flex-col sm:flex-row px-4 sm:px-10 text-black">
      <div className="sm:w-[25%] w-full h-full flex sm:flex-col flex-row justify-between mb-[30px] sm:mb-[0px]">
        <span className="text-[14px] uppercase">About us</span>
        <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px] sm:block hidden">
          who we are?
        </span>
      </div>
      <div className="sm:w-[75%] w-full h-full">
        <p className="text-[16px]">
          {constants?.name} believes in commitment to its customers and stakeholders,
          whilst upholding the highest standard of corporate professionalism.
        </p>
        <p className="text-[16px]">
          Established in 2011,{constants?.name} Realty is the real estate trendsetter amidst real estate
          developers in India. With an extensive portfolio spanning 6.50 mn.
          square metres (i.e. 70 mn. sqft.) across Residential, Commercial and
          Retail developments, the company is currently present in Mumbai, Navi
          Mumbai, NCR, Bengaluru, Hyderabad and Chennai. {constants?.name} Realty is committed
          to creating landmarks of excellence and providing customer delight at
          every touch point through design innovation and operational
          excellence.
        </p>
        <p className="text-[16px] mt-[24px]">
          We uphold the well-being of the community and the environment as an
          important way to build trust with customers, employees and the society
          at large.
        </p>
        <p className="text-[16px] mt-[48px]">Our mission:</p>
        <p className="text-[14px] mt-[12px]">
          1: &nbsp; Positive Customer Experience at every touch point
        </p>
        <p className="text-[14px]">2: &nbsp; Strategic Planning</p>
        <p className="text-[14px]">3: &nbsp; Operational Excellence</p>
        <p className="text-[14px]">
          4: &nbsp; Design Innovation and Digitization
        </p>
        <p className="text-[14px]">5: &nbsp; Team and Group synergy leverage</p>

        <p className="text-[16px] mt-[48px]">Our values:</p>
        <p className="text-[14px] mt-[12px]">1: &nbsp; Customer Focus</p>
        <p className="text-[14px]">2: &nbsp; Innovation</p>
        <p className="text-[14px]">3: &nbsp; Delivering Promises</p>
        <p className="text-[14px]">4: &nbsp; Synergy</p>
        <p className="text-[14px]">5: &nbsp; Ethics and Transparency</p>
      </div>
    </section>
  );
};

export default About;
