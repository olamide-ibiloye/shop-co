import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HEADER_FONT } from "@/lib/font";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="max-w-7xl overflow-hidden mx-auto px-5 py-15 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        {/* Hero Text */}
        <div>
          <h1 className={`${HEADER_FONT.className} font-black text-5xl`}>
            Find clothes <br /> that matches <br /> your style
          </h1>
          <p className="my-6 ">
            Browse through our range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style
          </p>

          <Button className="max-md:w-full">Shop Now</Button>

          <div className="mt-10 flex flex-wrap h-14">
            <div>
              <p className="text-3xl font-black">200+</p>
              <p className="text-sm">International Brands</p>
            </div>

            <Separator orientation="vertical" className="mx-6" />

            <div>
              <p className="text-3xl font-black">2,000+</p>
              <p className="text-sm">High-Quality Products</p>
            </div>

            <Separator orientation="vertical" className="mx-6" />

            <div>
              <p className="text-3xl font-black">30,000+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[550px] w-full">
          <Image
            src="/images/vector.png"
            alt="Hero image"
            width={50}
            height={50}
            className="absolute bottom-[30%] left-5"
          />

          <Image
            src="/images/hero.jpg"
            alt="Hero image"
            width={800}
            height={800}
          />

          <Image
            src="/images/vector.png"
            alt="Hero image"
            width={100}
            height={100}
            className="absolute top-[10%] right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
