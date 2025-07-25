import Brands from "@/components/pages/home/brands";
import BrowseStyle from "@/components/pages/home/browse-style";
import Hero from "@/components/pages/home/hero";
import NewArrivals from "@/components/pages/home/new-arrivals";
import Reviews from "@/components/pages/home/reviews";
import TopSelling from "@/components/pages/home/top-selling";
import Footer from "@/components/pages/shared/footer";
import Navbar from "@/components/pages/shared/navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
