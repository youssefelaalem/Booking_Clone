import express from "express";
// import { createRoom, deleteRoom, , getSingleRoom, updateRoom } from '../controllers/roomController.js';
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
  getAllRooms,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE

router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATING
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET SINGLE
router.get("/:id", getSingleRoom);
//GET ALL
router.get("/", getAllRooms);

export default router;
