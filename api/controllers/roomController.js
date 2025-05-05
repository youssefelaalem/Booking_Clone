import hotelModel from "../models/hotel.model.js";
import roomModel from "../models/room.model.js";

export const createRoom = async (req, res, next) => {
  const HotelId = req.params.hotelid;
  const newRoom = new roomModel(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await hotelModel.findByIdAndUpdate(HotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      res.status(401).json({
        message: "Room NOT created successfully!",
        data: savedRoom,
      });
      next(err);
    }
    res.status(201).json({
      message: "Room created successfully!",
      data: savedRoom,
    });
  } catch (err) {
    res.status(401).json({
      message: "Room NOT created successfully!",
      data: savedRoom,
    });
    next(err);
  }
};
//UPDATE
export const updateRoom = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedRoom = await roomModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteRoom = async (req, res, next) => {
  console.log(req.params);
  const HotelId = req.params.hotelid;
  const idRoom = req.params.id
  try {
    await roomModel.findByIdAndDelete(idRoom);
    try{
      await hotelModel.findByIdAndUpdate(HotelId,{
        $pull:{room:idRoom}
      })
    }catch(err){
      next(err)
    }
    res.status(200).json({ status: "success deleted operation" });
  } catch (err) {
    next(err);
  }
};
//GET SINGLE
export const getSingleRoom = async (req, res, next) => {
  const id = req.params.id;
  try {
    const room = await roomModel.findById(id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

// GET ALL HOTEL
export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await roomModel.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
