import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    desc: { type: String },
    price: { type: Number, required: true },
    id: { type: String, required: true},
    productIndex: { type: Number}
    
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);

