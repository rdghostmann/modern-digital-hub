import mongoose from "mongoose"
import { connectToDB } from "@/lib/connectDB"
import Product from "@/models/Product"

export const dynamic = "force-dynamic"

const products = [
  {
    name: "Premium Wireless Headphones",
    price: 199.99,
    discountPrice: 149.99,
    image: "/placeholder-headphones.png",
    rating: 4.8,
    reviewCount: 124,
    category: "Electronics",
    isNew: true,
    isFeatured: true,
  },
  {
    name: "Minimalist Leather Watch",
    price: 89.99,
    discountPrice: null,
    image: "/minimalist-leather-watch.jpg",
    rating: 4.5,
    reviewCount: 86,
    category: "Accessories",
    isNew: false,
    isFeatured: true,
  },
  {
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    discountPrice: 24.99,
    image: "/organic-cotton-t-shirt.jpg",
    rating: 4.7,
    reviewCount: 215,
    category: "Clothing",
    isNew: true,
    isFeatured: true,
  },
  {
    name: "Smart Fitness Tracker",
    price: 129.99,
    discountPrice: 99.99,
    image: "/placeholder-smartwatch.png",
    rating: 4.6,
    reviewCount: 178,
    category: "Electronics",
    isNew: false,
    isFeatured: true,
  },
  {
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    discountPrice: 59.99,
    image: "/placeholder-smartwatch.png",
    rating: 4.4,
    reviewCount: 92,
    category: "Electronics",
    isNew: false,
    isFeatured: false,
  },
  {
    name: "Handcrafted Ceramic Mug",
    price: 24.99,
    discountPrice: null,
    image: "/ceramic-mug.jpg",
    rating: 4.9,
    reviewCount: 67,
    category: "Home",
    isNew: true,
    isFeatured: false,
  },
  {
    name: "Recycled Canvas Backpack",
    price: 59.99,
    discountPrice: null,
    image: "/canvas-backpack.jpg",
    rating: 4.7,
    reviewCount: 103,
    category: "Accessories",
    isNew: false,
    isFeatured: false,
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    discountPrice: 19.99,
    image: "/stainless-steel-water-bottle.jpg",
    rating: 4.8,
    reviewCount: 156,
    category: "Home",
    isNew: false,
    isFeatured: false,
  },
  {
    name: "Wireless Charging Pad",
    price: 39.99,
    discountPrice: null,
    image: "/placeholder-charger.png",
    rating: 4.5,
    reviewCount: 88,
    category: "Electronics",
    isNew: true,
    isFeatured: false,
  },
  {
    name: "Laptop Stand with Cooling Fan",
    price: 44.99,
    discountPrice: 34.99,
    image: "/placeholder-stand.png",
    rating: 4.6,
    reviewCount: 72,
    category: "Home",
    isNew: false,
    isFeatured: false,
  },
  {
    name: "Sustainable Bamboo Toothbrush",
    price: 9.99,
    discountPrice: null,
    image: "/bamboo-toothbrush.jpg",
    rating: 4.7,
    reviewCount: 203,
    category: "Health",
    isNew: false,
    isFeatured: false,
  },
  {
    name: "Organic Lip Balm Set",
    price: 14.99,
    discountPrice: 12.99,
    image: "/organic-lip-balm-set.jpg",
    rating: 4.8,
    reviewCount: 118,
    category: "Health",
    isNew: true,
    isFeatured: false,
  },
]

export default async function SeedPage() {
  let status = "idle"
  let error = null

  try {
    await connectToDB()
    status = "loading"

    // Remove all existing products before seeding
    await Product.deleteMany({})

    // Insert new products
    await Product.insertMany(products)

    status = "done"
    await mongoose.disconnect()
  } catch (err) {
    error = err.message || "Unknown error"
    status = "error"
  }

  return (
    <div>
      <h1>Seed Database</h1>
      {status === "done" && (
        <p style={{ color: "green" }}>
          Seeding complete!<br />
          Products have been seeded.
        </p>
      )}
      {status === "error" && <p style={{ color: "red" }}>Error: {error}</p>}
      {status === "idle" && <p>Ready to seed.</p>}
      {status === "loading" && <p>Seeding in progress...</p>}
    </div>
  )
}