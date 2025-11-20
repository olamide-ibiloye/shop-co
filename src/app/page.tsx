import Brands from "@/components/pages/home/brands";
import BrowseStyle from "@/components/pages/home/browse-style";
import Hero from "@/components/pages/home/hero";
import NewArrivals from "@/components/pages/home/new-arrivals";
import Reviews from "@/components/pages/home/reviews";
import TopSelling from "@/components/pages/home/top-selling";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <Reviews />
    </div>
  );
};

export default Home;
