import React, { useRef } from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

const ImageSlider = ({ images, isFeatured }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots dot-indicator",
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "max-content",
          backgroundColor: "#fff",
          position: "absolute",
          left: "0",
          right: "0",
          margin: "auto",
          bottom: "20px",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          width: "7px",
          height: "7px",
        }}
      ></span>
    ),
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
      {images && images.map((image, index) => (
          <div
            key={index}
            className="h-[calc(100vh-90px-2rem)] rounded-[15px] overflow-hidden"
          >
            <div
              className="h-full w-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${image?.url})`,
                backgroundColor: "black",
              }}
            ></div>
          </div>
        ))}
      </Slider>
      <div className="w-full flex items-center justify-between absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 pl-[32px] pr-[36px]">
        <span
          onClick={previous}
          className="bg-white w-[30px] h-[30px] flex items-center justify-center group cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white"
        >
          <BiChevronLeft className="text-[25px]" />
        </span>
        <button
          onClick={next}
          className="bg-white w-[30px] h-[30px] flex items-center justify-center cursor-pointer z-[6] text-[rgba(0,0,0,0.5)] rounded-full duration-500 hover:bg-black hover:text-white"
        >
          <BiChevronRight className="text-[25px]" />
        </button>
      </div>
      {isFeatured && (
        <span className="absolute top-[25px] right-[40px] text-white px-[10px] bg-[#d92012] rounded-[12px] pb-[4px] pt-[6px] text-[10px] uppercase">
          Featured
        </span>
      )}
    </>
  );
};

export default ImageSlider;
