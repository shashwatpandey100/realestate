import React from "react";
import { TiLocationOutline } from "react-icons/ti";

const Location = ({ address, googleMapLink, loading }) => {
  return (
    <div className="flex flex-col mt-[30px]">
      {loading ? (
        <>
        <span className="h-[30px] w-[100px] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
        <div
          className={`mt-[10px] w-full h-[400px] rounded-[25px] ${
            loading && "bg-gray-300 animate-pulse h-[30px]"
          }`}
        ></div>
        </>
      ) : (
        <>
          <span className="text-[18px] mb-[12px] font-[600]">Location</span>
          <span className="text-[#828282] font-[300] text-[14px] flex gap-[5px]">
            <span className="text-[22px] mb-[2px]"><TiLocationOutline /></span>{address}
          </span>
          {googleMapLink && (
            <div className="mt-[10px] w-full h-[400px] rounded-[25px] overflow-hidden border border-[rgba(0,0,0,0.1)]">
              <iframe
                src={googleMapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen={false}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Location;
