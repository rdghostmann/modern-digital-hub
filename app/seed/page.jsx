import mongoose from "mongoose"
import { connectToDB } from "@/lib/connectDB"
import BlogPost from "@/models/BlogPost"
import Order from "@/models/Orders"

export const dynamic = "force-dynamic"

export default async function SeedPage() {
  let status = "idle"
  let error = null

  try {
    await connectToDB()
    status = "loading"

    await Order.deleteMany({})

    // Seed orders for Pinky (admin) and Regular User
    const orders = [
      // Pinky (admin)
      {
        orderId: "ORD-1001",
        userId: "6832bb478d42769853c546fa",
        username: "Pinky",
        items: [
          { id: "prod-1", name: "Wireless Headphones", price: 199.99, quantity: 1 },
          { id: "prod-2", name: "Smart Watch", price: 149.99, quantity: 2 }
        ],
        total: 499.97,
        status: "delivered",
        orderDate: "2025-05-10",
        deliveryDate: "2025-05-15",
        shippingAddress: "123 Admin Lane, Cityville"
      },
      {
        orderId: "ORD-1002",
        userId: "6832bb478d42769853c546fa",
        username: "Pinky",
        items: [
          { id: "prod-3", name: "Bluetooth Speaker", price: 89.99, quantity: 1 }
        ],
        total: 89.99,
        status: "shipped",
        orderDate: "2025-05-18",
        deliveryDate: "",
        shippingAddress: "123 Admin Lane, Cityville"
      },
      // Regular User
      {
        orderId: "ORD-2001",
        userId: "6832bb488d42769853c546fd",
        username: "Regular User",
        items: [
          { id: "prod-4", name: "Mechanical Keyboard", price: 120.00, quantity: 1 },
          { id: "prod-5", name: "Wireless Mouse", price: 49.99, quantity: 1 }
        ],
        total: 169.99,
        status: "processing",
        orderDate: "2025-05-20",
        deliveryDate: "",
        shippingAddress: "456 User Road, Townsville"
      },
      {
        orderId: "ORD-2002",
        userId: "6832bb488d42769853c546fd",
        username: "Regular User",
        items: [
          { id: "prod-6", name: "USB-C Hub", price: 39.99, quantity: 2 }
        ],
        total: 79.98,
        status: "delivered",
        orderDate: "2025-05-22",
        deliveryDate: "2025-05-27",
        shippingAddress: "456 User Road, Townsville"
      }
    ]

    await Order.insertMany(orders)

    status = "done"
    mongoose.disconnect()
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
          Blog posts and orders have been seeded.
        </p>
      )}
      {status === "error" && <p style={{ color: "red" }}>Error: {error}</p>}
      {status === "idle" && <p>Ready to seed.</p>}
    </div>
  )
}