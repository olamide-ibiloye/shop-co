import { HEADER_FONT } from "@/lib/font";
import React from "react";
import Merchandise, { type MerchandiseType } from "../shared/merchandise";

const items: MerchandiseType[] = [
  {
    productId: "1",
    imageUrl: "/images/merchandise/image 7 (15).png",
    productName: "T-shirt with Tape Details",
    noOfStars: 4,
    currentPrice: 120,
  },
  {
    productId: "2",
    imageUrl: "/images/merchandise/image 8 (16).png",
    productName: "Skinny Fit Jeans",
    noOfStars: 3,
    currentPrice: 240,
    discount: 20,
  },
  {
    productId: "3",
    imageUrl: "/images/merchandise/image 9 (7).png",
    productName: "Checkered Shirt",
    noOfStars: 4,
    currentPrice: 180,
  },
  {
    productId: "4",
    imageUrl: "/images/merchandise/image 11.png",
    productName: "Sleeve Striped T-Shirt",
    noOfStars: 4,
    currentPrice: 130,
    discount: 30,
  },
];

const OtherOptions = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 flex flex-col items-center">
      <h2 className={`${HEADER_FONT.className} text-3xl font-bold text-center`}>
        You might also like
      </h2>

      <div className="py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {items.map((item) => (
          <Merchandise
            key={item.productId}
            productId={item.productId}
            imageUrl={item.imageUrl}
            productName={item.productName}
            noOfStars={item.noOfStars}
            currentPrice={item.currentPrice}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherOptions;
