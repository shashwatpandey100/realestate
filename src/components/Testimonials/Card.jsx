import Star, { StarSkeleton } from "./Star.jsx";

export const Card = ({ stars, text, name, position, imgUrl }) => {
  const starElements = [];

  for (let i = 0; i < stars; i++) {
    starElements.push(<Star key={i} />);
  }

  console.log(imgUrl);

  return (
    <div className="mx-[10px] h-[60vh] border border-[rgba(0,0,0,0.15)] rounded-[12px] overflow-hidden text-black bg-[#fbfdfd]">
      <div className="w-[100%] relative min-h-[400px] h-[100%] md:pt-[2.86vw] md:pr-[2.38vw] md:pb-[2.38vw] md:pl-[2.38vw] p-[30px] flex flex-col">
        <div className="h-[100%] w-[100%] flex flex-col justify-between">
          <div className="">
            <p className="mb-[30px] normalFont font-[500] text-[1em] text-black">
              {text}
            </p>
            <div className="flex flex-col w-full absolute bottom-0 left-0 p-[30px]">
              <div className="w-full">
                <div
                  className="h-[55px] w-[55px] rounded-full bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                ></div>
              </div>
              <div className="flex justify-between mt-[25px]">
                <p className="text-black mb-[4px] text-[15px] font-[600] leading-[1em] normalFont">
                  {name}
                </p>
                <div className="flex">
                  <div className="flex items-center">
                    <div className="flex mx-[12px] mb-[5px] gap-[1px]">
                      {starElements}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-black mb-[4px] text-[14px] leading-[1em] normalFont">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="mx-[10px] h-[60vh] border border-[rgba(0,0,0,0.15)] rounded-[12px] overflow-hidden text-black bg-transparent">
      <div className="w-[100%] relative min-h-[400px] h-[100%] md:pt-[2.86vw] md:pr-[2.38vw] md:pb-[2.38vw] md:pl-[2.38vw] p-[30px] flex flex-col">
        <div className="h-[100%] w-[100%] flex flex-col justify-between">
          <div className="">
            <p className="mb-[4px] min-h-[20px] rounded-[3px] w-[90%] bg-gray-300 animate-pulse"></p>
            <p className="mb-[4px] min-h-[20px] rounded-[3px] w-[80%] bg-gray-300 animate-pulse"></p>
            <p className="mb-[4px] min-h-[20px] rounded-[3px] w-[94%] bg-gray-300 animate-pulse"></p>
            <p className="mb-[4px] min-h-[20px] rounded-[3px] w-[60%] bg-gray-300 animate-pulse"></p>
            <p className="mb-[4px] min-h-[20px] rounded-[3px] w-[20%] bg-gray-300 animate-pulse"></p>
            <div className="flex flex-col w-full absolute bottom-0 left-0 p-[30px]">
              <div className="w-full">
                <div className="h-[55px] w-[55px] rounded-full bg-gray-300 animate-pulse"></div>
              </div>
              <div className="flex justify-between mt-[25px]">
                <p className="mb-[4px] min-h-[20px] rounded-[3px] w-[40%] bg-gray-300 animate-pulse"></p>
                <div className="flex">
                  <div className="flex items-center">
                    <div className="flex mx-[12px] mb-[5px] gap-[1px]">
                      <StarSkeleton />
                      <StarSkeleton />
                      <StarSkeleton />
                      <StarSkeleton />
                      <StarSkeleton />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-[4px] min-h-[20px] rounded-[3px] w-[60%] bg-gray-300 animate-pulse"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
