import Product from "../models/productsModel.js";
import Purchase from "../models/purchaseModel.js";
import UserModel from "../models/userModel.js";
import catchErrorAsync from "../utils/catchErrorAsync.js";
import apiErrorsModel from "../utils/clientErrorsController.js";


//CREATE new purcahse entry
const createPurchase=catchErrorAsync(async(req,res,next)=>{
    req.user=JSON.parse(req.user)
    // console.log(req.user._id)
    let user = await UserModel.findById(req.user._id);
    if (!user) return next(new apiErrorsModel("not found", 404));
    user=JSON.parse(JSON.stringify(user));

    //if you are admin then only you can create new product
    if(user.isAdmin){
        const purchase=await Purchase.create(req.body);
        res.status(201).json({
            message:"success",
            data: purchase
        })

    }else{
        return next(new apiErrorsModel("you are not allowed to create product",401))
    }
})


//get all purchase history

const getallPurchase=catchErrorAsync(async(req,res,next)=>{
    const products =await Purchase.find();
    res.status(200).json({
        message:"success",
        total: products.length,
        data: products
    })

})
export {createPurchase,getallPurchase};