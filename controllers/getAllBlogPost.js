"use server"

import BlogPost from "@/models/BlogPost"
import { connectToDB } from "@/lib/connectDB"

export async function getAllBlogPosts() {
  await connectToDB()
  // Populate the category field to get the category name
  const posts = await BlogPost.find().populate("category", "name").lean()
  return posts.map(post => ({
    ...post,
    id: post._id ? post._id.toString() : post.id,
    date: post.date instanceof Date ? post.date.toISOString() : post.date,
    category: post.category?.name || "", // Use the category name if populated
  }))
}