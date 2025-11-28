import { redirect } from "next/navigation";
import React from "react";

const ShopPage = () => {
  redirect("/shop/product-detail");
};

export default ShopPage;
