import express from "express";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin,createHotel);
//UPDATING
router.put("/:id",verifyAdmin,updateHotel);

//DELETE
router.delete("/:id",verifyAdmin,deleteHotel);
//GET SINGLE
router.get("/:id",getSingleHotel);
//GET ALL
router.get("/",getAllHotels);
            
export default router;
