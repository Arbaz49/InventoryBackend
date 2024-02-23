import Product from "../models/productsModel.js";
import UserModel from "../models/userModel.js";
import catchErrorAsync from "../utils/catchErrorAsync.js";
import apiErrorsModel from "../utils/clientErrorsController.js";


//CREATE Product protected
const createProduct=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));

    //if you are admin then only you can create new product
    if(user.isAdmin){
        const product=await Product.create(req.body);
        res.status(201).json({
            message:"success",
            data: product
        })

    }else{
        return next(new apiErrorsModel("you are not allowed to create product",401))
    }
})


//Update product
const updateProduct=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    // console.log(req.user._id)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));
  
    if (user.isAdmin){
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      const { password, ...info } = updateProduct._doc;
      res.status(200).json({
        message: "success",
        data: info,
      });
    }else{
        return next(new apiErrorsModel("you cannot update product", 401));
    }
})


const deleteProduct=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    // console.log(req.user._id)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));
  
    if (user.isAdmin){
      const deleteProduct = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "product deleted successfully",
      });
    }else{
        return next(new apiErrorsModel("you cannot delete product", 401));
    }
})


const getSingleProduct=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    // console.log(req.user._id)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));
  
    if (user.isAdmin){
      const User = await Product.findById(req.params.id);
      res.status(200).json({
        message: "success",
        data: User
      });
    }else{
        return next(new apiErrorsModel("you are not allowed", 401));
    }
})

//get all products

const getallProducts=catchErrorAsync(async(req,res,next)=>{
    const products =await Product.find();
    res.status(200).json({
        message:"success",
        total: products.length,
        data: products
    })

})
export {createProduct,updateProduct,deleteProduct,getSingleProduct,getallProducts};