import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HEADER_FONT } from "@/lib/font";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-foreground py-5 px-10 rounded-[10px] flex justify-between items-center gap-5">
      <div
        className={`text-background text-2xl font-black max-w-[400px] ${HEADER_FONT.className}`}
      >
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>

      <div className="flex-1 max-w-[300px] space-y-2">
        <Input
          className="bg-background text-foreground"
          placeholder="Enter your email address"
        />
        <Button variant="secondary" className="w-full font-bold">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
