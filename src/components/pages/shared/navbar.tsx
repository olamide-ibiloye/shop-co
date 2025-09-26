import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleUserRound, Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div>
      {/* TODO: Make the alert close on click */}
      {/* SignUpAlert */}
      <div className="w-full bg-foreground text-background">
        <div className="flex justify-center items-center">
          <p className="flex-1 text-center text-sm">
            Sign up and get 20% off your first order.
            <span className="ml-2">
              <Link href="/" className="underline">
                Sign up Now
              </Link>
            </span>
          </p>

          <Button variant="ghost" size="icon">
            <X />
          </Button>
        </div>
      </div>

      {/* // NavContainer */}
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>

          <Logo />
        </div>

        <div className="hidden justify-center items-center flex-1 gap-5 md:flex">
          {/* NavItems */}
          <div className="flex justify-center items-center gap-5">
            <Link href="/">Shop</Link>
            <Link href="/">On Sale</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Brands</Link>
          </div>

          {/* Searchbar */}
          <Input
            placeholder="Search for products..."
            className="bg-accent shadow-none border-none flex-1 max-w-[350px] "
          />
        </div>

        {/* UserSection */}
        <div className="flex justify-center items-center ">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search />
          </Button>

          <Button variant="ghost" size="icon">
            <ShoppingCart />
          </Button>

          <Button variant="ghost" size="icon">
            <CircleUserRound />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
