// import crypto from "crypto";
// import Razorpay from "razorpay";
// import Order from "../models/ordersModel.js"
// import catchErrorAsync from "../utils/catchErrorAsync.js";
// let instance = new Razorpay({
//   key_id: process.env.KEY_ID,
//   key_secret: process.env.KEY_SECRET,
// });

// const createOrder = catchErrorAsync(async (req, res, next) => {
//   let amount = req.body.amount;
//   // console.log(amount);
//   let options = {
//     amount: Number(amount) * 100, // amount in the smallest currency unit
//     currency: "INR",
//   };
//   let order = await instance.orders.create(options);
//   res.json({
//     message: "sucessfully created order",
//     order,
//   });
// });

// const paymentVerification = catchErrorAsync(async (req, res, next) => {
//   // console.log(req.body);
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//   let body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.KEY_SECRET)
//     .update(body.toString())
//     .digest("hex");

// let isAutheticate=razorpay_signature===expectedSignature;
// if(isAutheticate){
// let order=await Order.create({
//   razorpay_order_id, razorpay_payment_id, razorpay_signature
// })

// }else{
//   res.status(400).json({
// message:"failed"
//   })
// }
// });



// export { createOrder, paymentVerification };
