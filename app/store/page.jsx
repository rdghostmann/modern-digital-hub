import React from "react";
import { getAllProducts } from "@/controllers/getAllProduct"
import StorePage from "./StorePage";


export const metadata = {
  title: "Store | Modern Web App",
  description: "Shop our curated selection of tech products.",
}

export default async function Page() {
  const products = await getAllProducts();

  return <StorePage products={products} />
}
