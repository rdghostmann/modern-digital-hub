import mongoose from "mongoose"
import { connectToDB } from "@/lib/connectDB"
import User from "@/models/User"
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
    if (!writerExists) {
      const hashedPassword = await bcrypt.hash("writer123", 10)
      await User.create({
        userID: "writer123",
        username: "Writer User",
        email: writerEmail,
        password: hashedPassword,
        role: "writer",
        status: "active"
      })
    }


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
          Writer user have been seeded.
        </p>
      )}
      {status === "error" && <p style={{ color: "red" }}>Error: {error}</p>}
      {status === "idle" && <p>Ready to seed.</p>}
    </div>
  )
}