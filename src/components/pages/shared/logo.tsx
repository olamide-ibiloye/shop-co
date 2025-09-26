import { HEADER_FONT } from "@/lib/font";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className={`${HEADER_FONT.className} text-xl font-black`}>
      SHOP.CO
    </Link>
  );
};

export default Logo;
