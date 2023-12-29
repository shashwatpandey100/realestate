import React from "react";

const Intro = ({ goToAbout }) => {
  return (
    <section className="h-[calc(100vh-90px)] w-[100vw] mt-[90px] relative z-[0]">
      <video
        src="https://laurus-property.com/wp-content/uploads/2023/02/WEB_VIDEO_23-02-2023_LOW_RES.mp4"
        className="h-full w-full object-cover"
        autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
      ></video>
      <div className="h-full w-full bg-[rgba(0,0,0,0.35)] absolute top-0 left-0 z-[1]"></div>
      <div className="absolute bottom-0 w-full h-[60vh] px-4 sm:px-10 flex flex-col z-[2]">
        <div className="h-[70%] w-full border-b border-white">
          <h1 className="text-[8em] font-[400] leading-[1]">
            Journey To Your <br /> Dream Property
          </h1>
        </div>
        <div className="h-[30%] w-full flex justify-between items-center">
          <p className="max-w-[300px] text-[1.2rem] font-[300]">
            Unlock real estate magic with our expert team for your dream property.
          </p>
          <span
            onClick={goToAbout}
            className="px-[15px] py-[7px] rounded-[25px] border border-white flex items-center justify-center cursor-pointer"
          >
            Scroll down
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;


