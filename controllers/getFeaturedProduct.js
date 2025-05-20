"use server"

import Product from "@/models/Product"
import { connectToDB } from "@/lib/connectDB"

export async function getFeaturedProducts() {
  await connectToDB()
  const products = await Product.find().limit(3).lean()
  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }))
}