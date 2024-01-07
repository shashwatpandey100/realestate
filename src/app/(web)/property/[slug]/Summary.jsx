import React from "react";

const Summary = ({description}) => {
  return (
    <div className="flex flex-col">
      <span className="text-[18px] mb-[12px] font-[600]">Summary</span>
      <span className="text-[#828282] font-[300] text-[14px]">
        {description}
      </span>
    </div>
  );
};

export default Summary;
