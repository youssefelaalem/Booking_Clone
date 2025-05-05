import express from 'express'
import { deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/userController.js';
import { verfiyToken, verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router =express.Router()

router.get("/ch",verfiyToken,(req, res, next) => {
    res.send("hello user ,you are login")
})
//UPDATING
router.put("/:id",verifyUser,updateUser);
//DELETE
router.delete("/:id",verifyUser,deleteUser);
//GET SINGLE
router.get("/:id",verifyUser,getSingleUser);
//GET ALL
router.get("/",verifyAdmin,getAllUsers);


export default router;