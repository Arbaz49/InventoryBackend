import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  razorpay_order_id:{
    type:String,
    required:true,
  },
  razorpay_payment_id:{
    type:String,
    required:true,
  },
  razorpay_signature:{
    type:String,
    required:true,
  }
});

const Order = new mongoose.model("Order", ordersSchema);
export default Order;
