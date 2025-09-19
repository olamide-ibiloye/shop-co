import { HEADER_FONT } from "@/lib/font";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BrowseStyle = () => {
  return (
    <div className=" max-w-7xl mx-auto py-10 px-5">
      <div className="bg-accent p-10 rounded-[20px] space-y-5">
        <h2
          className={`${HEADER_FONT.className} text-3xl mb-10 font-bold text-center`}
        >
          Browse by Dress Style
        </h2>

        <div className="grid md:grid-cols-10 gap-4">
          <PictureTile
            url="/images/image 11 (1).png"
            title="Casual"
            imgClasses="-right-[40%]"
          />

          <PictureTile
            url="/images/image 13.png"
            title="Formal"
            size="lg"
            imgClasses="w-[500px] top-0"
          />
        </div>

        <div className="grid md:grid-cols-10 gap-4">
          <PictureTile
            url="/images/image 12.png"
            title="Party"
            size="lg"
            imgClasses="w-[500px] -top-[20%]"
          />

          <PictureTile
            url="/images/image 14.png"
            title="Gym"
            imgClasses="w-[300px] -top-[20%]"
          />
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;

const PictureTile = ({
  url,
  size = "md",
  title,
  imgClasses,
}: {
  url: string;
  title: string;
  size?: "md" | "lg";
  imgClasses?: string;
}) => {
  return (
    <div
      className={`${
        size === "md" ? "md:col-span-4" : "md:col-span-6"
      } relative bg-[#FDFDFD] h-[250px] rounded-[10px] overflow-hidden`}
    >
      <Image
        src={url}
        alt={title}
        width={500}
        height={500}
        className={cn(
          "absolute -right-[10%] bottom-0 w-[400px] h-auto object-cover",
          imgClasses
        )}
      />

      <p className="font-black absolute top-5 left-8 text-2xl">{title}</p>
    </div>
  );
};
