import { Separator } from "@/components/ui/separator";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import Newsletter from "./newsletter";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-accent py-10 pt-28 mt-15 px-5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="absolute -top-15 max-w-7xl mx-auto left-0 right-0">
          <Newsletter />
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-start items-center gap-6">
            <div className="flex flex-col gap-4 md:w-[300px] justify-start w-full">
              <Logo />

              <p className="text-xs text-foreground/70">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>

              <div className="flex gap-2">
                <Image
                  src="/images/socials/twitter.png"
                  alt="twitter"
                  width={24}
                  height={24}
                />

                <Image
                  src="/images/socials/facebook.png"
                  alt="facebook"
                  width={24}
                  height={24}
                />

                <Image
                  src="/images/socials/ig.png"
                  alt="instagram"
                  width={24}
                  height={24}
                />

                <Image
                  src="/images/socials/github.png"
                  alt="github"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">
              <div className="space-y-5">
                <p className="text-sm font-bold">COMPANY</p>

                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-sm text-foreground/70">
                    About
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Features
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Works
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Careers
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-sm font-bold">HELP</p>

                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-sm text-foreground/70">
                    Customer Support
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Delivery Details
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Terms & Conditions
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-sm font-bold">FAQ</p>

                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-sm text-foreground/70">
                    Account
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Manage Deliveries
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Orders
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Payments
                  </Link>
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-sm font-bold">RESOURCES</p>

                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-sm text-foreground/70">
                    Free eBooks
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    Development Tutorial
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    How to - Blog
                  </Link>

                  <Link href="/" className="text-sm text-foreground/70">
                    YouTube Playlist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-10" />

          <div className="flex items-center justify-between">
            <p className="text-xs text-foreground/70">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex">
              <Image
                src="/images/payments/visa.png"
                alt="twitter"
                width={40}
                height={40}
              />

              <Image
                src="/images/payments/mastercard.png"
                alt="mastercard"
                width={40}
                height={40}
              />

              <Image
                src="/images/payments/paypal.png"
                alt="paypal"
                width={40}
                height={40}
              />

              <Image
                src="/images/payments/apple-pay.png"
                alt="apple-pay"
                width={40}
                height={40}
              />

              <Image
                src="/images/payments/google-pay.png"
                alt="google-pay"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
