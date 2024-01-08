import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { MdVerified } from "react-icons/md";

const Contact = ({ agent, loading }) => {
  const dateObject = new Date(agent?._createdAt);
  const month = dateObject.toLocaleString("default", { month: "long" });
  const year = dateObject.getFullYear();
  const formattedDate = `${month} ${year}`;

  return (
    <div className="flex flex-col mt-[30px]">
      {loading ? (
        <>
          <span className="h-[30px] w-[100px] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
          <div className="mt-[10px] w-full h-[400px] rounded-[25px] bg-gray-300 animate-pulse h-[30px]"></div>
        </>
      ) : (
        <>
          <span className="text-[18px] mb-[12px] font-[600]">Contact</span>
          {agent && (
            <div className="mt-[10px] w-full max-h-max flex flex-col overflow-hidden">
              <div className="flex gap-[15px]">
                <div
                  className="h-[55px] aspect-square bg-center bg-no-repeat bg-cover rounded-full"
                  style={{ backgroundImage: `url(${agent?.image?.url})` }}
                ></div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between">
                    <span className="text-[#494949] text-[1.1em]">
                      {agent?.name}
                    </span>

                    {agent?.isFeatured && (
                      <span className="text-blue-500 text-[25px]">
                        <MdVerified />
                      </span>
                    )}
                  </div>
                  <span className="text-[#828282] font-[300] text-[15px]">
                    Joined in {formattedDate}
                  </span>
                </div>
              </div>
              <div className="mt-[20px] w-full min-h-[70px] rounded-[12px] border border-[rgba(0,0,0,0.1)] flex flex-col gap-[5px] p-[7px]">
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
                <div className="flex gap-[5px] mt-[30px]">
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
              <span className="px-[15px] py-[7px] rounded-[25px] bg-[#fcee73] flex items-center justify-center cursor-pointer text-[13px] mt-[20px] min-w-[150px] max-w-max text-black">
                Contact Agent
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Contact;
