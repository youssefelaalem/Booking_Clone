import userModel from "../models/user.model.js";
import { createError } from "../utils/error.js";



//UPDATE
export const updateUser = async (req, res,next) => {
  const id = req.params.id;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err)
  }
};

//DELETE
export const deleteUser = async (req, res,next) => {
  const id = req.params.id;
  try {
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ status: "success deleted operation" });
  } catch (err) {
   next(err)
  }
};
//GET SINGLE
export const getSingleUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id);
    if(!user) return next(createError(404,"user not found"))
    res.status(200).json(user);
  } catch (err) {
    next(err)
  }
};

// GET ALL HOTEL
export const getAllUsers = async (req, res,next) => {
  try {
    const hotels = await userModel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err)
  }
};
