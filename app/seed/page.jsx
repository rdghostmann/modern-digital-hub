import mongoose from "mongoose"
import { connectToDB } from "@/lib/connectDB"
import Product from "@/models/Product"
import { products } from "@/lib/product"

export const dynamic = "force-dynamic"

export default async function SeedPage() {
  let status = "idle"
  let error = null

  try {
    await connectToDB()
    await Product.deleteMany()
    await Product.insertMany(products)
    status = "done"
    mongoose.disconnect()
  } catch (err) {
    error = err.message || "Unknown error"
    status = "error"
  }

  return (
    <div>
      <h1>Seed Database</h1>
      {status === "done" && <p style={{ color: "green" }}>Seeding complete!</p>}
      {status === "error" && <p style={{ color: "red" }}>Error: {error}</p>}
      {status === "idle" && <p>Ready to seed.</p>}
    </div>
  )
}