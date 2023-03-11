import express  from "express";
import { aggregate } from "../controllers/advancedControllers.js";

const router =express.Router();

router.route("/").get(aggregate);
router.route("/userstats").get();
router.route("/productstats").get();
router.route("/search/:search").get();

export default router;