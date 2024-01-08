import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Types = () => {
  return (
    <section className="max-h-max w-full bg-white flex flex-col text-black mt-[100px]">
      <div className="w-full max-h-max flex justify-between px-4 sm:px-10 ">
        <div className="flex flex-col">
          <span className="text-[14px] uppercase">
            Search By Property Category
          </span>
          <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px]">
            Explore a wide variety of properties
          </span>
        </div>
      </div>
      <section className="w-full lg:h-[530px] h-[900px] grid grid-cols-1 lg:grid-cols-3 mt-[30px]">
        <Link
          href="/properties?propertyCategory=Villa"
          className="h-full bg-center bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url(https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2023/12/A11635-Future-Talks-by-RTF-In-conversation-with-Sophie-Solomon-Image-1-1.jpg)`,
          }}
        >
            <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.25)]"></div>
          <div className="absolute bottom-0 w-full h-[70px] flex justify-between items-center z-[2] text-white p-4">
            <span>Villa</span>
            <span className="text-[22px]">
              <MdArrowOutward />
            </span>
          </div>
        </Link>
        <Link
          href="/properties?propertyCategory=Apartment"
          className="h-full bg-center bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url(https://archello.s3.eu-central-1.amazonaws.com/images/2023/05/29/studio-wills---architects-life-around-a-timber-box-apartments-archello.1685341326.4506.jpg)`,
          }}
        >
            <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.25)]"></div>
          <div className="absolute bottom-0 w-full h-[70px] flex justify-between items-center z-[2] text-white p-4">
            <span>Apartment</span>
            <span className="text-[22px]">
              <MdArrowOutward />
            </span>
          </div>
        </Link>
        <Link
          href="/properties?propertyCategory=Bungalow"
          className="h-full bg-center bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url(https://images.adsttc.com/media/images/5420/c8a1/c07a/8086/fc00/0038/large_jpg/Bow_001.jpg?1411434611)`,
          }}
        >
            <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.25)]"></div>
          <div className="absolute bottom-0 w-full h-[70px] flex justify-between items-center z-[2] text-white p-4">
            <span>Bungalow</span>
            <span className="text-[22px]">
              <MdArrowOutward />
            </span>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default Types;
