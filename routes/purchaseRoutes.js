import  express from "express";
import { createPurchase, getallPurchase } from "../controllers/purchaseControllers.js";

import { protect } from "../controllers/userControllers.js";
const router =express.Router();

//add new supplier
router.route("/newpurchase").post(protect,createPurchase);

router.route("/getallpurchase").get(getallPurchase);


export default router