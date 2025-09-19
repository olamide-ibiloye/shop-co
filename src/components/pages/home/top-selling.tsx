import { HEADER_FONT } from "@/lib/font";
import React from "react";
import Merchandise, {
  MerchandiseType,
} from "@/components/pages/shared/merchandise";
import { Button } from "@/components/ui/button";

const items: MerchandiseType[] = [
  {
    productId: "1",
    imageUrl: "/images/merchandise/image 7 (15).png",
    productName: "Vertical Striped Shirt",
    noOfStars: 5,
    currentPrice: 232,
    discount: 20,
  },
  {
    productId: "2",
    imageUrl: "/images/merchandise/image 8 (16).png",
    productName: "Courage Graphic T-shirt",
    noOfStars: 4,
    currentPrice: 145,
  },
  {
    productId: "3",
    imageUrl: "/images/merchandise/image 9 (7).png",
    productName: "Loose Fit Bermuda Shorts",
    noOfStars: 3,
    currentPrice: 80,
  },
  {
    productId: "4",
    imageUrl: "/images/merchandise/image 11.png",
    productName: "Faded Skinny Jeans",
    noOfStars: 4,
    currentPrice: 210,
  },
];

const TopSelling = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 flex flex-col items-center">
      <h2 className={`${HEADER_FONT.className} text-3xl font-bold text-center`}>
        Top Selling
      </h2>

      <div className="py-10 flex justify-center items-center gap-4 flex-wrap">
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

      <Button variant="outline">View All</Button>
    </div>
  );
};

export default TopSelling;
