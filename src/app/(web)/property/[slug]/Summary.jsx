import React from "react";

const Summary = ({ description, loading }) => {
  return (
    <>
      {loading ? (
        <>
          <div className="flex flex-col">
            <span className="h-[30px] w-[100px] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
            <span className="h-[20px] w-[70%] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
            <span className="h-[20px] w-[80%] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
            <span className="h-[20px] w-[30%] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col my-[30px]">
            <span
              className="text-[18px] mb-[12px] font-[600]"
            >
              Summary
            </span>
            <span className="text-[#828282] font-[300] text-[14px]">
              {description}
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default Summary;
