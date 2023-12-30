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
      className={`flex flex-col max-h-max md:w-[calc(100%/3)] w-full relative cursor-pointer pb-[30px]`}
    >
      {isFeatured && (
        <span className="absolute top-[10px] left-[10px] text-white px-[10px] bg-[#d92012] rounded-[3px] py-[4px] text-[10px] uppercase">
          Featured
        </span>
      )}
      <Link
        href={`/property/${slug}`}
        className="bg-cover bg-center h-[350px] w-full rounded-[3px]"
        style={{ backgroundImage: `url(${mainImage})` }}
      ></Link>
      <div className="w-full max-h-max pt-[10px] px-[10px] flex flex-col">
        <div className="flex justify-between w-full max-h-max">
          <Link href={`/property/${slug}`} className="text-[18px] font-[500]">
            {title}
          </Link>
          <span className="px-[15px] py-[7px] rounded-[25px] flex items-center justify-center bg-gray-100 text-[14px]">
            {price}
          </span>
        </div>
        <span className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)]">
          {address}
        </span>
        <span className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] flex items-center gap-[10px] mt-[5px]">
          <HiArrowsPointingOut />
          {area}
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <IoBedOutline />
          {bedrooms} Bedrooms
          <span className="h-full flex items-center pb-[7px]">
            &nbsp;.&nbsp;
          </span>
          <PiBathtubLight />
          {baths} Baths
        </span>
      </div>
    </div>
  );
};

export default Card;
