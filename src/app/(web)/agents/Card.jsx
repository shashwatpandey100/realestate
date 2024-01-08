import React from "react";
import { MdVerified } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const Card = ({ agent }) => {
  console.log(agent);

  return (
    <div
      className={`flex flex-col max-h-[480px] relative pb-[10px] border border-[rgba(0,0,0,0.15)] rounded-[12px]`}
    >
      <div
        className="bg-cover h-[380px] w-full rounded-t-[12px]"
        style={{ backgroundImage: `url(${agent?.image?.url})` }}
      ></div>
      <div className="w-full max-h-max pt-[10px] px-[10px] flex flex-col">
        <div className="flex justify-between w-full max-h-max">
          <span className="text-[18px] font-[500]">{agent?.name}</span>
          {agent?.isFeatured && <span className="text-blue-500 text-[25px]">
            <MdVerified />
          </span>}
        </div>
        <div className="mt-[10px] w-full max-h-max rounded-[12px] border border-[rgba(0,0,0,0.1)] flex flex-col gap-[5px] p-[7px]">
          <p className="flex gap-[5px] items-center">
            <span className="text-[22px] text-black">
              <CiMail />
            </span>
            <a
              href={`mailto:${agent?.email}`}
              className="text-[#828282] font-[300] text-[14px]"
            >
              {agent?.email}
            </a>
          </p>
          <p className="flex gap-[5px] items-center">
            <span className="text-[22px] text-black">
              <IoCallOutline />
            </span>
            <a
              href={`tel:${agent?.phone}`}
              className="text-[#828282] font-[300] text-[14px]"
            >
              {agent?.phone}
            </a>
          </p>
          <div className="flex gap-[5px] mt-[15px]">
            <a
              target="_blank"
              href={`${agent?.facebookURL}`}
              className="text-black font-[300] text-[24px]"
            >
              <LiaFacebookMessenger />
            </a>
            <a
              target="_blank"
              href={`${agent?.instagramURL}`}
              className="text-black font-[300] text-[22px]"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href={`${agent?.twitterinURL}`}
              className="text-black font-[300] text-[22px]"
            >
              <RiTwitterXLine />
            </a>
            <a
              target="_blank"
              href={`${agent?.linkedinURL}`}
              className="text-black font-[300] text-[24px] "
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
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
      <div className="bg-gray-300 animate-pulse h-[380px] w-full rounded-t-[12px]"></div>
      <div className="w-full max-h-max pt-[10px] px-[10px] flex flex-col bg-white">
        <div className="flex justify-between w-full max-h-max">
          <div className="h-[20px] rounded-[3px] w-[90%] bg-gray-300 animate-pulse"></div>
        </div>
        <div className="mt-[10px] w-full max-h-max rounded-[12px] border border-[rgba(0,0,0,0.1)] flex flex-col gap-[5px] p-[7px]">
        <div className="h-[20px] rounded-[3px] w-[90%] bg-gray-300 animate-pulse"></div>
        <div className="h-[20px] rounded-[3px] w-[60%] bg-gray-300 animate-pulse"></div>
        <div className="h-[20px] rounded-[3px] w-[30%] bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
