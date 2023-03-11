import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
      name: {
        type: String,
        required: [true, "Please add a name"],
   
      },
      sku: {
        type: String,

        default: "SKU",

      },
      category: {
        type: String,
        required: [true, "Please add a category"],
        trim: true,
      },
      quantity: {
        type: String,
        required: [true, "Please add a quantity"],
        trim: true,
      },
      price: {
        type: Number,
        required: [true, "Please add a price"],
        trim: true,
      },
      description: {
        type: String,
        required: [true, "Please add a description"],
        trim: true,
      },
      
},{
    timestamps:true,
})


const Product=new mongoose.model("Product",productSchema);

export default Product;


  