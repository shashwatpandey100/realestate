import React from "react";
import LogoSlider from './LogoSlider.jsx';
import { useAgencyData } from "./nav/index.jsx";

const IntroModule = () => {

  const { constants } = useAgencyData();

  return (
    <section className="min-h-[calc(100vh-200px)] pb-[50px] w-full bg-white flex flex-col mb-[30px]">
      <section className="flex">
        <div className="w-[70%] bg-[#d92012] min-h-[70vh] flex relative">
          <div className="w-[calc(100%/8)] h-full border-r border-[rgba(255,255,255,0.1)]"></div>
          <div className="w-[calc(100%/8)] h-full border-r border-[rgba(255,255,255,0.1)]"></div>
          <div className="w-[calc(100%/8)] h-full border-r border-[rgba(255,255,255,0.1)]"></div>
          <div className="w-[calc(100%/8)] h-full border-r border-[rgba(255,255,255,0.1)]"></div>
          <div className="w-[calc(100%/8)] h-full border-r border-[rgba(255,255,255,0.1)]"></div>
          <div className="w-[calc(100%/8)] h-full border-r border-[rgba(255,255,255,0.1)]"></div>
          <div className="w-[calc(100%/8)] h-full border-r border-[rgba(255,255,255,0.1)]"></div>
          <div className="w-[calc(100%/8)] h-full"></div>

          <div className="h-full w-full absolute top-0 left-0 flex flex-col px-4 sm:px-6 sm:py-2">
              <div className="w-full h-[70%] flex flex-col-reverse">
                <span className="text-[7em] font-[700] leading-[1] uppercase">INVEST.</span>
                <span className="text-[7em] font-[700] leading-[1] uppercase">INNOVATE.</span>
                <span className="text-[7em] font-[700] leading-[1] uppercase">BUILD.</span>
              </div>
              <div className="w-full h-[30%] flex flex-col-reverse pb-4 justify-between">
                <p className="max-w-[350px] text-white pl-4 border-l-2 border-white ">
                  At Verino Real Estate, we redefine buying and selling properties through visionary services. Join us to get the best property deals.
                </p>
              </div>
          </div>
        </div>
        <div className="w-[30%] min-h-[70vh] flex flex-col">
          <div className="h-[50%] w-full relative">
            <video
              src={`${constants?.interviewVideoURL}`}
              className="h-full w-full absolute top-0 left-0 object-cover z-[1] bg-gray-300"
            ></video>
          </div>
          <div className="h-[50%] w-full flex flex-col text-black">
            <section className="w-full h-1/2 flex justify-evenly">
              <div className="w-[30%] h-full flex flex-col items-center justify-center uppercase text-[30px] font-[800]"><span>150+</span><span className="text-[12px] font-[600]">Properties</span></div>
              <div className="w-[30%] h-full flex flex-col items-center justify-center uppercase text-[30px] font-[800]"><span>5</span><span className="text-[12px] font-[600]">Years</span></div>
              <div className="w-[30%] h-full flex flex-col items-center justify-center uppercase text-[30px] font-[800]"><span>27</span><span className="text-[12px] font-[600]">Employees</span></div>
            </section>
            <section className="w-full h-1/2 flex justify-evenly">
              <div className="w-[30%] h-full flex flex-col items-center justify-center uppercase text-[30px] font-[800]"><span>28</span><span className="text-[12px] font-[600]">Awards</span></div>
              <div className="w-[30%] h-full flex flex-col items-center justify-center uppercase text-[30px] font-[800]"><span>13</span><span className="text-[12px] font-[600]">Cities</span></div>
              <div className="w-[30%] h-full flex flex-col items-center justify-center uppercase text-[30px] font-[800]"><span>300+</span><span className="text-[12px] font-[600]">Properties sold</span></div>
            </section>
          </div>
        </div>
      </section>
      <section className="h-[20vh] w-full border-y border-[rgba(0,0,0,0.25)]">
        <LogoSlider />
      </section>
    </section>
  );
};

export default IntroModule;
