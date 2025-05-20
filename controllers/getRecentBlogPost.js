"use server"

import BlogPost from "@/models/BlogPost"
import { connectToDB } from "@/lib/connectDB"
import Category from "@/models/Category"

export async function getFeaturedBlogPosts() {
  await connectToDB()
  // Get all categories
  const categories = await Category.find().lean()
  // For each category, get one blog post
  const featuredPosts = await Promise.all(
    categories.map(async (cat) => {
      const post = await BlogPost.findOne({ category: cat._id }).sort({ date: -1 }).lean()
      if (!post) return null
      return {
        ...post,
        _id: post._id.toString(),
        category: cat.name,
      }
    })
  )
  // Filter out categories with no posts
  return featuredPosts.filter(Boolean)
}