import Link from "next/link";
import React from "react";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

const Card = ({
  mainImage,
  isFeatured,
  title,
  price,
  address,
  area,
  bedrooms,
  baths,
  slug,
}) => {
  return (
    <div
      className={`flex flex-col max-h-max md:w-[calc(100%/3)] w-full relative pb-[10px] border border-[rgba(0,0,0,0.15)] rounded-[12px]`}
    >
      <Link
        href={`/property/${slug}`}
        className="bg-cover bg-center h-[350px] w-full rounded-t-[12px]"
        style={{ backgroundImage: `url(${mainImage})` }}
      ></Link>
      <div className="w-full max-h-max pt-[10px] px-[10px] flex flex-col">
        <div className="flex justify-between w-full max-h-max">
          <Link href={`/property/${slug}`} className="text-[18px] font-[500]">
            {title}
          </Link>
          {isFeatured && (
            <span className="text-white px-[10px] bg-[#d92012] rounded-[12px] pb-[4px] pt-[6px] text-[10px] uppercase">
              Featured
            </span>
          )}
        </div>
        <span className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)]">
          {address}
        </span>
        <div className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] flex items-center gap-[10px] mt-[10px]">
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
            <HiArrowsPointingOut />
            {area}
          </span>
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
            <IoBedOutline />
            {bedrooms} Bedrooms
          </span>
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <span className="px-[15px] py-[7px] rounded-[25px] flex gap-[5px] items-center justify-center bg-gray-100 text-[12px]">
            <PiBathtubLight />
            {baths} Baths
          </span>
        </div>
        <span className="py-[7px] text-[14px] mt-[10px]">{price}</span>
      </div>
    </div>
  );
};

export default Card;
