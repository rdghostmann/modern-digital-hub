"use server"

import BlogPost from "@/models/BlogPost"
import { connectToDB } from "@/lib/connectDB"

export async function getPost(id) {
  await connectToDB()
  // Try to find by MongoDB ObjectId or fallback to string id
  const post = await BlogPost.findOne({ _id: id }).lean()
  if (!post) return null
  return {
    ...post,
    _id: post._id.toString(),
    date: post.date?.toISOString().split("T")[0] || "",
  }
}