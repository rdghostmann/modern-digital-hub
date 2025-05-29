"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";

export const metadata = {
    title: "Store | Modern Web App",
    description: "Shop our curated selection of tech products.",
};

export default function StorePage({ products }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <Link href={`/store/${product.id}`}>
                            <div className="relative h-48 w-full">
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                        </Link>
                        <CardContent className="p-4">
                            <Link href={`/store/${product.id}`}>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline mb-2">
                                    {product.name}
                                </h3>
                            </Link>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">
                                {product.description}
                            </p>
                            <p className="text-xl font-bold text-yellow-600">
                                ₦{product.price.toFixed(2)}
                            </p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <AddToCartButton product={product} />
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>

    );
}
