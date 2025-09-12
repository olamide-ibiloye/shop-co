import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="bg-foreground p-5">
      <div className="max-w-7xl mx-auto gap-4 flex flex-wrap items-center justify-center md:justify-between">
        <Image
          src="/images/brands/versace.png"
          alt="Versace"
          width={100}
          height={100}
          className="h-[20px] w-auto"
        />

        <Image
          src="/images/brands/zara.png"
          alt="Zara"
          width={100}
          height={100}
          className="h-[20px] w-auto"
        />

        <Image
          src="/images/brands/gucci.png"
          alt="Gucci"
          width={100}
          height={100}
          className="h-[20px] w-auto"
        />

        <Image
          src="/images/brands/prada.png"
          alt="Prada"
          width={100}
          height={100}
          className="h-[20px] w-auto"
        />

        <Image
          src="/images/brands/calvin.png"
          alt="Calvin Klein"
          width={100}
          height={100}
          className="h-[20px] w-auto"
        />
      </div>
    </div>
  );
};

export default Brands;
