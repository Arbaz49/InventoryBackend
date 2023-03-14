import "./config.js"
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { GlobalErrorHandler } from "./controllers/ErrorHandler.js";
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"
// import testRouter from "./routes/advancedRoutes.js"
import supplierRouter from "./routes/supplierRoutes.js"
import purchaseRouter from "./routes/purchaseRoutes.js"
import paymentRouter from "./routes/paymentRoutes.js"
supplierRouter
const app = express();
app.use(express.json());
app.use(cors())
const uri=process.env.MONGO_URI.replace("<username>",process.env.USERNAME).replace("<password>",process.env.PASSWORD);

mongoose.connect(uri).then((res)=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err)
})

//routes
app.get("/",(req,res)=>{
    res.send({
        message: "Hello world"
    })
})
app.use("/api/v1/auth",userRouter);
app.use("/product",productRouter);
app.use("/supplier",supplierRouter);
app.use("/purchase",purchaseRouter);
app.use("/payment",paymentRouter);

//error handling
app.use(GlobalErrorHandler);


const port=process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})