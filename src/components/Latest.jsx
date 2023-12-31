import React from "react";
import Card from "./Card";
import Link from "next/link";

const Latest = () => {
  return (
    <section className="min-h-[calc(100vh-200px)] pb-[50px] w-full bg-white flex flex-col px-4 sm:px-10 text-black">
      <div className="w-full max-h-max flex justify-between">
        <div className="flex flex-col">
        <span className="text-[14px] uppercase">(03) Latest Properties</span>
        <span className="text-[14px] text-[rgba(0,0,0,0.7)] mt-[5px]">Explore a wide range of our handpicked latest additions</span>
        </div>
        <Link href='/properties/all' className="text-[14px] uppercase hover:underline cursor-pointer">(see all)</Link>
      </div>
      <div className="w-full h-full min-h-[50vh] flex justify-evenly gap-[30px] mt-[30px]">
        <Card
          isFeatured={true}
          mainImage="https://cdn.habitusliving.com/wp-content/uploads/ChavviHouseAbrahamJohnArchitects_exteriorview.jpg"
          title="Family villa"
          price="₹ 12,00,00,000"
          address="Phool Bagh, Tri Nagar"
          area="250 sq.m"
          bedrooms={5}
          baths={4}
          slug='family-villa'
        />
        <Card
          isFeatured={true}
          mainImage="https://static.dezeen.com/uploads/2016/04/collage-house-s-ps-mumbai-india-sebastian-zachariah-ira-gosalia-photographix-pinkish-shah_dezeen_sqb.jpg"
          title="Cozy Apartment"
          price="₹ 8,00,00,000"
          address="Bangla Sahib Rd, Sector 4, Gol Market"
          area="220 sq.m"
          bedrooms={7}
          baths={4}
          slug='cozy-apartment'
        />
        <Card
          isFeatured={true}
          mainImage="https://static01.nyt.com/images/2019/10/09/t-magazine/09tmag-jain-slide-HA4Z/09tmag-jain-slide-HA4Z-superJumbo.jpg"
          title="luxury villa"
          price="₹ 24,0000 /month"
          address="Block P, South Extension II"
          area="200 sq.m"
          bedrooms={4}
          baths={3}
          slug='luxury-villa'
        />
      </div>
    </section>
  );
};

export default Latest;
