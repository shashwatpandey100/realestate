import React from "react";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-200px)] pb-[50px] w-full bg-white flex px-4 sm:px-10 text-black">
      <div className="w-[25%] h-full flex flex-col">
        <span className="text-[14px] uppercase">(01) About us</span>
        <span className="text-[12px] text-[rgba(0,0,0,0.7)] mt-[5px]">
          who we are?
        </span>
      </div>
      <div className="w-[75%] h-full">
        <p className="text-[16px]">
          L&T Realty believes in commitment to its customers and stakeholders,
          whilst upholding the highest standard of corporate professionalism.
        </p>
        <p className="text-[16px]">
          Established in 2011, L&T Realty is the real estate arm of the $23
          billion Larsen and Toubro and a trendsetter amidst real estate
          developers in India. With an extensive portfolio spanning 6.50 mn.
          square metres (i.e. 70 mn. sqft.) across Residential, Commercial and
          Retail developments, the company is currently present in Mumbai, Navi
          Mumbai, NCR, Bengaluru, Hyderabad and Chennai. L&T Realty is committed
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
