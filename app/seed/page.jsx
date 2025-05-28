import mongoose from "mongoose"
import { connectToDB } from "@/lib/connectDB"
import User from "@/models/User"
import BlogPost from "@/models/BlogPost"
import bcrypt from "bcrypt"

export const dynamic = "force-dynamic"

export default async function SeedPage() {
  let status = "idle"
  let error = null

  try {
    await connectToDB()
    status = "loading"

    // Seed writer user if not exists
    const writerEmail = "writer@example.com"
    const writerExists = await User.findOne({ email: writerEmail })
    let writerId
    if (!writerExists) {
      const hashedPassword = await bcrypt.hash("writer123", 10)
      const writer = await User.create({
        userID: "writer123",
        username: "Writer User",
        email: writerEmail,
        password: hashedPassword,
        role: "writer",
        status: "active"
      })
      writerId = writer._id
    } else {
      writerId = writerExists._id
    }

    // Seed blog posts for writer
    const writerPosts = [
      {
        title: "First Writer Post - Published",
        excerpt: "This is the first published post by the writer.",
        content: "Content of the first published post.",
        authorId: writerId,
        authorName: "Writer User",
        category: "Movies",
        status: "published",
        image: "/placeholder.jpg"
      },
      {
        title: "Second Writer Post - Published",
        excerpt: "This is the second published post by the writer.",
        content: "Content of the second published post.",
        authorId: writerId,
        authorName: "Writer User",
        category: "Music",
        status: "published",
        image: "/placeholder.jpg"
      },
      {
        title: "Third Writer Post - Draft",
        excerpt: "This is a draft post by the writer.",
        content: "Content of the draft post.",
        authorId: writerId,
        authorName: "Writer User",
        category: "TV Shows",
        status: "draft",
        image: "/placeholder.jpg"
      }
    ]

    await BlogPost.insertMany(writerPosts)

    status = "done"
  } catch (err) {
    error = err.message || "Unknown error"
    status = "error"
  } finally {
    mongoose.disconnect()
  }

  return (
    <div>
      <h1>Seed Database</h1>
      {status === "done" && (
        <p style={{ color: "green" }}>
          Seeding complete!<br />
          Writer user and posts have been seeded.
        </p>
      )}
      {status === "error" && <p style={{ color: "red" }}>Error: {error}</p>}
      {status === "idle" && <p>Ready to seed.</p>}
    </div>
  )
}