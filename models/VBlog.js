import mongoose from "mongoose"

const VBlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  category: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  embedUrl: { type: String, required: true },
})

const VBlog = mongoose.models.VBlog || mongoose.model("VBlog", VBlogSchema)
export default VBlog