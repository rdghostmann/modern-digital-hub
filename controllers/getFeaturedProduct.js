"use server"

import Product from "@/models/Product"
import { connectToDB } from "@/lib/connectDB"

export async function getFeaturedProducts() {
  await connectToDB()
  
  const products = await Product.find().limit(4).lean()
   return products.map(product => {
      const { _id, ...rest } = product
      return {
        ...rest,
        id: _id.toString(),
      }
    })
}