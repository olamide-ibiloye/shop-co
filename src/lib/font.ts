import localFont from "next/font/local";

export const BODY_FONT = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const HEADER_FONT = localFont({
  src: [
    {
      path: "../../public/fonts/IntegralCF-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IntegralCF-Medium.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IntegralCF-Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
});
