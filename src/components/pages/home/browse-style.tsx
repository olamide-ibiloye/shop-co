import { HEADER_FONT } from "@/lib/font";
import React from "react";

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
          <PictureTile url={'url("/images/image 11 (1).png")'} title="Casual" />

          <PictureTile
            url={'url("/images/image 13.png")'}
            title="Formal"
            size="lg"
          />
        </div>

        <div className="grid md:grid-cols-10 gap-4">
          <PictureTile
            url={'url("/images/image 12.png")'}
            title="Party"
            size="lg"
          />

          <PictureTile url={'url("/images/image 14.png")'} title="Gym" />
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
}: {
  url: string;
  title: string;
  size?: "md" | "lg";
}) => {
  return (
    <div
      className={`${
        size === "md" ? "col-span-4" : "col-span-6"
      } relative bg-white`}
      style={{
        backgroundImage: url,
        backgroundSize: "400px",
        backgroundPosition: "bottom -60px left 80px",
        backgroundRepeat: "no-repeat",
        height: "220px",
        width: "auto",
        borderRadius: "15px",
      }}
    >
      <p className="font-black absolute top-5 left-8 text-2xl">{title}</p>
    </div>
  );
};
