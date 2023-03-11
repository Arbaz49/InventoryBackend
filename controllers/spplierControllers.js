import Product from "../models/productsModel.js";
import Suppliers from "../models/suppliersModel.js";
import UserModel from "../models/userModel.js";
import catchErrorAsync from "../utils/catchErrorAsync.js";
import apiErrorsModel from "../utils/clientErrorsController.js";


//CREATE new supplier
const createSupplier=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    // console.log(req.user._id)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));

    //if you are admin then only you can create new product
    if(user.isAdmin){
        const supplier=await Suppliers.create(req.body);
        res.status(201).json({
            message:"success",
            data: supplier
        })

    }else{
        return next(new apiErrorsModel("you are not allowed to add supplier",401))
    }
})


//Update Supplier
const updateSupplier=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    // console.log(req.user._id)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));
  
    if (user.isAdmin){
      const updateSupplier = await Suppliers.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      const { password, ...info } = updateSupplier._doc;
      res.status(200).json({
        message: "success",
        data: info,
      });
    }else{
        return next(new apiErrorsModel("you cannot update Supplier", 401));
    }
})


//delete the Supplier
const deleteSupplier=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    // console.log(req.user._id)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));
  
    if (user.isAdmin){
      const deleteSupplier = await Suppliers.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Supplier deleted successfully",
      });
    }else{
        return next(new apiErrorsModel("you cannot delete Supplier", 401));
    }
})


//get all Suppliers

const getallSuppliers=catchErrorAsync(async(req,res,next)=>{
    const suppliers =await Suppliers.find();
    res.status(200).json({
        message:"success",
        total: suppliers.length,
        data: suppliers
    })

})

const getSingleSupplier=catchErrorAsync(async(req,res,next)=>{
  req.user = JSON.parse(req.user);
  // console.log("admin", req.user._id);
  // console.log(req.params.id)

  let user = await UserModel.findById(req.user._id);
  if (!user) return next(new apiErrorsModel("not found", 404));
  user = JSON.parse(JSON.stringify(user));

  if (user.isAdmin) {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      const supplierFind = await Suppliers.findById(req.params.id);
      res.status(200).json({
        message: "success",
        data: supplierFind,
      });
    }
  } else {
    return next(new apiErrorsModel("you can see only your profile", 401));
  }
})
export {createSupplier,updateSupplier,deleteSupplier,getallSuppliers,getSingleSupplier};