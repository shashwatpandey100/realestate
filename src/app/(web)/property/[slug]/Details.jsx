import React from "react";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

const Details = ({ planimage, areaSize, bedrooms, bathrooms, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex flex-col mt-[30px]">
          <span className="h-[30px] w-[200px] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <span className="px-[15px] py-[7px] rounded-[25px] bg-gray-300 animate-pulse h-[30px] w-[70px]"></span>
            <span className="px-[15px] py-[7px] rounded-[25px] bg-gray-300 animate-pulse h-[30px] w-[70px]"></span>
            <span className="px-[15px] py-[7px] rounded-[25px] bg-gray-300 animate-pulse h-[30px] w-[70px]"></span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-[30px]">
          <span className="text-[18px] mb-[12px] font-[600]">Details</span>
          <div className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] flex items-center gap-[10px] mt-[10px]">
            <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
              <HiArrowsPointingOut />
              {areaSize} sqft
            </span>
            <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
              <IoBedOutline />
              {bedrooms} Bedrooms
            </span>
            <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
              <PiBathtubLight />
              {bathrooms} Baths
            </span>
          </div>
          {planimage && (
            <div className="mt-[30px] w-full h-[300px] py-1 rounded-[25px] border border-[rgba(0,0,0,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${planimage.url}`}
                alt="property plan image"
                className="h-full w-full object-contain object-center"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Details;
