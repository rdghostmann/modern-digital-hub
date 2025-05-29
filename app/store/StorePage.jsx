"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import moment from "moment";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AddToCartButton } from "@/components/add-to-cart-button";

export const metadata = {
    title: "Store | Modern Web App",
    description: "Shop our curated selection of tech products.",
};

export default function StorePage({ products }) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                >
                    <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-0">
                            <Link href={`/store/${product.id}`}>
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        priority
                                    />
                                </div>
                            </Link>
                            <div className="p-4">
                                <Link href={`/store/${product.id}`}>
                                    <h3 className="font-semibold text-lg mb-1 hover:underline">
                                        {product.name}
                                    </h3>
                                </Link>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 line-clamp-3">
                                    {product.description}
                                </p>
                                <p className="font-bold">₦{product.price.toFixed(2)}</p>
                            </div>
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
