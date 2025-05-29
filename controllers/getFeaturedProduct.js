"use server"

import Product from "@/models/Product"
import { connectToDB } from "@/lib/connectDB"

export async function getFeaturedProducts() {
  await connectToDB()
<<<<<<< HEAD
=======
  
>>>>>>> 2af3aa9b9dc90272bf168a256af7d04f4310d504
  const products = await Product.find().limit(4).lean()
   return products.map(product => {
      const { _id, ...rest } = product
      return {
        ...rest,
        id: _id.toString(),
      }
    })
}