import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
    {
     date: { type: Date},
     subtotal: { type: Number},
     items: [
      {
        quantity: { type: Number},
        product: {
          desc: { type: String},
          tile: { type: String},
          price: { type: Number}
        }
      }
     ]
    }
  )
  
  export default mongoose.model("Order", OrdersSchema);