import express from 'express';
import { createProduct, deleteProduct, getallProducts, getSingleProduct, updateProduct } from '../controllers/productController.js';
import { protect } from '../controllers/userControllers.js';
const router=express.Router();

router.route("/addproduct").post(protect,createProduct);
router.route("/getallproducts").get(getallProducts);
router.route("/update/:id").patch(protect,updateProduct);
router.route("/delete/:id").delete(protect,deleteProduct);
router.route("/singleproduct/:id").post(protect,getSingleProduct);

export default router;