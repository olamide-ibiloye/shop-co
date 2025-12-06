import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import React from "react";
import Image from "next/image";

export type MerchandiseType = {
  productId: string;
  imageUrl: string;
  productName: string;
  noOfStars: number;
  currentPrice: number;
  discount?: number;
};

const Merchandise = ({
  imageUrl,
  productName,
  noOfStars,
  currentPrice,
  discount,
}: MerchandiseType) => {
  return (
    <div className="flex h-[350px] flex-col">
      <div className="flex-1 relative h-full">
        <Image
          src={imageUrl}
          alt={productName}
          fill
          className="object-cover rounded-[10px]"
        />
      </div>

      <div className="mt-4">
        <p className="font-black">{productName}</p>

        <div className="flex items-center justify-start gap-3 my-1">
          <div className="flex items-center justify-start">
            {Array.from({ length: noOfStars }, (_, i) => (
              <Star key={i} className="fill-amber-300 stroke-0 size-4" />
            ))}
          </div>
          <span className="text-xs">{`${noOfStars}/5`}</span>
        </div>

        <div className="mt-1 flex items-center justify-start gap-2">
          {discount && (
            <p className="text-lg font-black">
              ${Math.round(currentPrice * (1 - discount / 100))}
            </p>
          )}

          <p className="text-lg font-black line-through text-muted-foreground">
            ${currentPrice}
          </p>

          {discount && (
            <Badge className="bg-destructive/30 text-destructive px-1.5 py-0 text-[10px]">
              -{discount}%
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
