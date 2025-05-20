import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  features: {
    type: [String],
    default: []
  },
  specs: {
    type: mongoose.Schema.Types.Mixed, // Allows for flexible key-value pairs
    default: {}
  },
  image: {
    type: String
  },
})

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)
export default Product