"use server"

import Product from "@/models/Product"
import { connectToDB } from "@/lib/connectDB"

export async function getFeaturedProducts() {
  await connectToDB()
  const products = await Product.find().limit(3).lean()
  return products.map(product => ({
    ...product,
     id: product._id ? product._id.toString() : product.id,
    _id: undefined, // Remove _id to avoid confusion
  }))
}