import express from "express";
import { createOrder, paymentVerification } from "../payment/payment.js";

const router=express.Router();
router.route("/checkout").post(createOrder);
router.route("/verification").post(paymentVerification);

export default router