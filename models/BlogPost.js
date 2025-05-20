import mongoose from "mongoose"

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, ref: "Category"
  },
  image: {
    type: String
  },
})

const BlogPost = mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema)
export default BlogPost