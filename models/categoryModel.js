import mongoose from "mongoose";
const CategorySchema=new mongoose.Schema({
    cetegory:{
        type:String
    }

},{timestamps:true})

const Category=new mongoose.models("Category",CategorySchema)

export default Category;