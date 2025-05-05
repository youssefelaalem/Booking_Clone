import hotelModel from "../models/hotel.model.js";

//CREATE
export const createHotel = async (req, res,next) => {
  const newHotel = new hotelModel(req.body);
  console.log(newHotel);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
   next(err)
  }
};

//UPDATE
export const updateHotel = async (req, res,next) => {
  const id = req.params.id;
  try {
    const updatedHotel = await hotelModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err)
  }
};

//DELETE
export const deleteHotel = async (req, res,next) => {
  const id = req.params.id;
  try {
    await hotelModel.findByIdAndDelete(id);
    res.status(200).json({ status: "success deleted operation" });
  } catch (err) {
   next(err)
  }
};
//GET SINGLE
export const getSingleHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const hotel = await hotelModel.findById(id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err)
  }
};

// GET ALL HOTEL
export const getAllHotels = async (req, res,next) => {
  try {
    const hotels = await hotelModel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err)
  }
};
