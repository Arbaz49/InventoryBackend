import  express from "express";
import { createSupplier, deleteSupplier, getallSuppliers, getSingleSupplier, updateSupplier } from "../controllers/spplierControllers.js";
import { protect } from "../controllers/userControllers.js";
const router =express.Router();

//add new supplier
router.route("/newsupplier").post(protect,createSupplier);

router.route("/getallsuppliers").get(getallSuppliers);
router.route("/update/:id").patch(protect,updateSupplier);
router.route("/delete/:id").delete(protect,deleteSupplier);
router.route("/supplier/:id").post(protect,getSingleSupplier);

export default router