import mongoose from "mongoose"
import { connectToDB } from "@/lib/connectDB"
import BlogPost from "@/models/BlogPost"
import { mockBlogPosts } from "@/lib/mockBlogPosts"

export const dynamic = "force-dynamic"

export default async function SeedPage() {
  let status = "idle"
  let error = null

  try {
    await connectToDB()
    status = "loading"

    // Optional: Clear existing blog posts
    await BlogPost.deleteMany({})

    // Seed blog posts
    await BlogPost.insertMany(mockBlogPosts)

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
          Blog posts have been seeded.
        </p>
      )}
      {status === "error" && <p style={{ color: "red" }}>Error: {error}</p>}
      {status === "idle" && <p>Ready to seed.</p>}
    </div>
  )
}