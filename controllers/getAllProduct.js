"use server"

import Product from "@/models/Product"
import { connectToDB } from "@/lib/connectDB"

export async function getAllProducts() {
  await connectToDB()
  const products = await Product.find().lean()
  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }))
}