import mongoose from "mongoose";
const SuppliersSchema=new mongoose.Schema({
    companyName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
   
  },{timestamps:true})

const Suppliers=new mongoose.model("Suppliers",SuppliersSchema)

export default Suppliers;