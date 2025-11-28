import { Button } from "@/components/ui/button";
import { HEADER_FONT } from "@/lib/font";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import React from "react";
import ReviewCard from "./review-card";

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
