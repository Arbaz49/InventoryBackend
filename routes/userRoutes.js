import express from 'express';
import  {deleteUser, getSingleUser, getUsers, Login, protect, Register, updateUser} from "../controllers/userControllers.js"

const router=express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/allusers").get(getUsers);
router.route("/user/:id").post(protect,getSingleUser);
router.route("/update/:id").patch(protect,updateUser);
router.route("/delete/:id").delete(protect,deleteUser);


export default router
