"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Star } from "lucide-react"
// import { useCart } from "@/contexts/cart-context"

// interface Product {
//   id: number
//   name: string
//   price: number
//   discountPrice: number | null
//   image: string
//   rating: number
//   reviewCount: number
//   category: string
//   isNew?: boolean
//   isFeatured?: boolean
// }

// interface ProductCardProps {
//   product: Product
// }

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  // const { dispatch } = useCart()

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // dispatch({
    //   type: "ADD_ITEM",
    //   payload: {
    //     id: product.id,
    //     name: product.name,
    //     price: product.price,
    //     discountPrice: product.discountPrice,
    //     image: product.image,
    //     category: product.category,
    //   },
    // })
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden h-full">
        <div
          className="relative h-64 w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href={`/store/product/${product.id}`}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />

            {/* Product badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-secondary-500 hover:bg-secondary-600">New</Badge>}
              {product.discountPrice && (
                <Badge className="bg-accent-500 hover:bg-accent-600">
                  {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Quick actions */}
            <motion.div
              className="absolute bottom-3 left-0 right-0 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg p-1 flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={handleFavoriteClick}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? "fill-accent-500 text-accent-500" : ""}`} />
                </Button>
              </div>
            </motion.div>
          </Link>
        </div>

        <CardContent className="p-4">
          <Link href={`/store/product/${product.id}`} className="block">
            <h3 className="font-medium mb-1 hover:text-primary-600 transition-colors line-clamp-1">{product.name}</h3>
          </Link>

          <div className="flex items-center mb-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-current" : "fill-none"}`} />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({product.reviewCount})</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              {product.discountPrice ? (
                <p className="text-sm line-through text-gray-500 dark:text-gray-400">${product.price.toFixed(2)}</p>
              ) : null}
              <p className="text-lg font-semibold text-primary-600">
                ${product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
              </p>
            </div>
            <Button variant="ghost" size="icon">
              <Star className="h-4 w-4 text-amber-500" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
