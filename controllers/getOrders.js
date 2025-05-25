"use server"

import Order from "@/models/Orders"
import { connectToDB } from "@/lib/connectDB"

export async function getOrder(orderId, userId) {
  await connectToDB()
  const order = await Order.findOne({ _id: orderId, userId }).lean()
  if (!order) return null
  return {
    ...order,
    id: order._id.toString(),
    _id: undefined
  }
}