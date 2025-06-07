import React, { Suspense } from "react";
import { getAllProducts } from "@/controllers/getAllProduct"
import StorePage from "./StorePage";


export const metadata = {
  title: "Store | Modern Web App",
  description: "Shop our curated selection of tech products.",
}

export default async function Page() {
  const products = await getAllProducts();

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our Store
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          No products available at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Store
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Shop our curated selection of high-quality tech products.
          </p>
        </div>
        <Suspense fallback={
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading products...</p>
          </div>
        }>
          <StorePage products={products} />
        </Suspense>
      </div>
    </section>
  )
}
