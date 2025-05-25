import mongoose from "mongoose"

const OrderItemSchema = new mongoose.Schema(
    {
        id: { type: String, required: true }, // Product ID as string
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
    },
    { _id: false }
)

const OrderSchema = new mongoose.Schema(
    {
        OrderId: { type: String, required: true, unique: true }, // e.g., "ORD-002"
        items: { type: [OrderItemSchema], required: true },
        total: { type: Number, required: true },
        status: { type: String, enum: ["processing", "shipped", "delivered", "cancelled"], required: true },
        orderDate: { type: String, required: true }, // ISO date string
        deliveryDate: { type: String }, // ISO date string or null
        shippingAddress: { type: String, required: true },
    },
    { timestamps: true }
)

// Fix the model export
const Order = mongoose.models?.Order || mongoose.model("Order", OrderSchema);
export default Order;