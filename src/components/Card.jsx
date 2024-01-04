import Link from "next/link";
import React from "react";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

const Card = ({
  slug,
  property,
}) => {

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(property?.price || 0);

  return (
    <div
      className={`flex flex-col max-h-[480px] relative pb-[10px] border border-[rgba(0,0,0,0.15)] rounded-[12px]`}
    >
      <Link
        href={`/property/${slug}`}
        className="bg-cover bg-center h-[380px] w-full rounded-t-[12px]"
        style={{ backgroundImage: `url(${property?.coverimage?.url})` }}
      ></Link>
      <div className="w-full max-h-max pt-[10px] px-[10px] flex flex-col">
        <div className="flex justify-between w-full max-h-max">
          <Link href={`/property/${slug}`} className="text-[18px] font-[500]">
            {property?.title}
          </Link>
          {property?.isFeatured && (
            <span className="text-white px-[10px] bg-[#d92012] rounded-[12px] pb-[4px] pt-[6px] text-[10px] uppercase">
              Featured
            </span>
          )}
        </div>
        <span className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)]">
          {property?.address}
        </span>
        <div className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] flex items-center gap-[10px] mt-[10px]">
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
            <HiArrowsPointingOut />
            {property?.areaSize}
          </span>
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
            <IoBedOutline />
            {property?.bedrooms} Bedrooms
          </span>
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
            <PiBathtubLight />
            {property?.bathrooms} Baths
          </span>
        </div>
        <span className="py-[7px] text-[14px] mt-[10px]">{formattedPrice} {property?.type == 'For Rent' && '/ month'}</span>
      </div>
    </div>
  );
};

export default Card;

export const CardSkeleton = () => {
  return (
    <div
      className={`flex flex-col max-h-[480px] relative pb-[10px] border border-[rgba(0,0,0,0.15)] rounded-[12px]`}
    >
      <div
        className="bg-gray-300 animate-pulse h-[380px] w-full rounded-t-[12px]"
      ></div>
      <div className="w-full max-h-max pt-[10px] px-[10px] flex flex-col bg-white">
        <div className="flex justify-between w-full max-h-max">
          <div className="h-[20px] rounded-[3px] w-[90%] bg-gray-300 animate-pulse">
          </div>
        </div>
        <span className="min-h-[20px] rounded-[3px] w-[70%] bg-gray-300 animate-pulse mt-[5px]">
        </span>
        <div className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] flex items-center gap-[10px] mt-[10px]">
          <span className="px-[15px] py-[15px] rounded-[25px] bg-gray-300 animate-pulse w-[70px]">
          </span>
          <span className="h-full flex items-center pb-[7px] text-gray-300">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[15px] rounded-[25px] bg-gray-300 animate-pulse w-[70px]">
          </span>
          <span className="h-full flex items-center pb-[7px] text-gray-300">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[15px] rounded-[25px] bg-gray-300 animate-pulse w-[70px]">
          </span>
        </div>
        <span className="h-[20px] rounded-[3px] w-[50%] bg-gray-300 animate-pulse mt-[10px]"></span>
      </div>
    </div>
  )
}
