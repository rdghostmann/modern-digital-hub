import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    default: null,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviewCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  features: {
    type: [String],
    default: [],
  },
  specs: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
})

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)
export default Product