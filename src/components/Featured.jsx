import React from "react";
import Card from "./Card";

const Featured = () => {
  return (
    <section className="min-h-[calc(100vh-200px)] py-[50px] w-full bg-white flex flex-col px-4 sm:px-10 text-black">
      <div className="w-full max-h-max">
        <span className="text-[16px]">(02) Featured Properties</span>
      </div>
      <div className="w-full h-full min-h-[50vh] flex justify-evenly gap-[40px] mt-[50px]">
        <Card
          isFeatured={true}
          url="https://cdn.habitusliving.com/wp-content/uploads/ChavviHouseAbrahamJohnArchitects_exteriorview.jpg"
          title="Family villa"
          price="₹ 12,00,00,000"
          address="Phool Bagh, Tri Nagar"
          area="250 sq.m"
          bedrooms={5}
          baths={4}
        />
        <Card
          isFeatured={true}
          url="https://static.dezeen.com/uploads/2016/04/collage-house-s-ps-mumbai-india-sebastian-zachariah-ira-gosalia-photographix-pinkish-shah_dezeen_sqb.jpg"
          title="Cozy Apartment"
          price="₹ 8,00,00,000"
          address="Bangla Sahib Rd, Sector 4, Gol Market"
          area="220 sq.m"
          bedrooms={7}
          baths={4}
        />
        <Card
          isFeatured={true}
          url="https://static01.nyt.com/images/2019/10/09/t-magazine/09tmag-jain-slide-HA4Z/09tmag-jain-slide-HA4Z-superJumbo.jpg"
          title="luxury villa"
          price="₹ 24,0000 /month"
          address="Block P, South Extension II"
          area="200 sq.m"
          bedrooms={4}
          baths={3}
        />
      </div>
    </section>
  );
};

export default Featured;
