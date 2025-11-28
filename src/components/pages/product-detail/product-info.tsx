import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ListFilterPlus } from "lucide-react";
import React from "react";
import ReviewCard from "../home/review-card";

const ProductInfo = () => {
  return (
    <div className="my-5">
      <Tabs defaultValue="rating-reviews">
        <TabsList className="w-full rounded-none bg-transparent border-b p-0">
          <TabsTrigger
            value="product-details"
            className="data-[state=active]:border-b-black data-[state=active]:text-black data-[state=active]:font-semibold text-muted-foreground"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            value="rating-reviews"
            className="data-[state=active]:border-b-black data-[state=active]:text-black data-[state=active]:font-semibold text-muted-foreground"
          >
            Rating & Reviews
          </TabsTrigger>

          <TabsTrigger
            value="faqs"
            className="data-[state=active]:border-b-black data-[state=active]:text-black data-[state=active]:font-semibold text-muted-foreground"
          >
            FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="product-details">Product Details</TabsContent>

        <TabsContent value="rating-reviews">
          <div>
            <div className="flex justify-between items-center my-4">
              <p className="">
                <span className="text-xl font-black">All Reviews</span> (451)
              </p>

              <div className="flex gap-2">
                <Button size="icon" variant="secondary">
                  <ListFilterPlus />
                </Button>

                <Button variant="secondary" className="hidden md:flex">
                  Latest <ArrowDown />
                </Button>

                <Button>Write a review</Button>
              </div>
            </div>

            <div>
              <div className="grid md:grid-cols-2 gap-4">
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
                <ReviewCard showDate />
              </div>

              <div className="w-full flex justify-center mt-4">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faqs">FAQs</TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductInfo;
