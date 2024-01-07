import React from "react";

const Location = ({address, googleMapLink}) => {
  return (
    <div className="flex flex-col mt-[30px]">
      <span className="text-[18px] mb-[12px] font-[600]">Location</span>
      <span className="text-[#828282] font-[300] text-[14px]">
        {address}
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
    </div>
  );
};

export default Location;
