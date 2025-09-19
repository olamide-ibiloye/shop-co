import { Button } from "@/components/ui/button";
import { HEADER_FONT } from "@/lib/font";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import React from "react";

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 flex flex-col items-center">
      <div className="flex justify-between items-center w-full">
        <h2 className={`${HEADER_FONT.className} text-3xl font-bold `}>
          Our Happy Customers
        </h2>

        <div>
          <Button variant="ghost" size="icon">
            <ArrowLeft />
          </Button>

          <Button variant="ghost" size="icon">
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="mt-10 flex justify-start items-between gap-5 w-full overflow-hidden">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;

const ReviewCard = ({}) => {
  return (
    <div className="min-w-[350px] min-h-[150px] p-4 border border-text-muted-foreground rounded-[10px] space-y-2">
      <div className="flex items-center justify-start">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="fill-amber-300 stroke-0 size-4" />
        ))}
      </div>

      <div className="flex items-center gap-2 justify-start">
        <h4 className="font-bold ">Customer Name</h4>
        <Check className="size-4 bg-green-500 p-0.5 rounded-full stroke-white" />
      </div>

      <p className="text-muted-foreground text-sm">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters.
      </p>
    </div>
  );
};
