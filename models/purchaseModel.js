import mongoose from "mongoose";

const purchaseSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },price:{
        type:Number,
        required:true
    },
    category:{
type:String,
    },
    quantity:{
        type:Number,
        required:true
    },
    supplier:{
        type:String,
        required:true
    }
},{timestamps:true})


const Purchase=new mongoose.model("Purchase",purchaseSchema);

export default Purchase;