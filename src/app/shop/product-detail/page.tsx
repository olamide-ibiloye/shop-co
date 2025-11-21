import ProductDetailHero from "@/components/pages/product-detail/product-detail-hero";
// import ProductInfo from "@/components/pages/product-detail/product-info";
// import OtherOptions from "@/components/pages/product-detail/other-options";
import React from "react";

const ProductDetailPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-5">
      <ProductDetailHero />
      {/* <ProductInfo />
      <OtherOptions /> */}
    </div>
  );
};

export default ProductDetailPage;
