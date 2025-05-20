"use server"

import BlogPost from "@/models/BlogPost"
import { connectToDB } from "@/lib/connectDB"

export async function getAllBlogPosts() {
  await connectToDB()
  const posts = await BlogPost.find().lean()
  return posts.map(post => ({
    ...post,
    _id: post._id.toString(),
  }))
}