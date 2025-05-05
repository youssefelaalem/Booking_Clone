import express, { Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.js";
import usersRoute from "./routes/usersRoutes.js";
import roomsRoute from "./routes/roomsRoutes.js";
import hotelsRoute from "./routes/hotelsRoutes.js";
import cookieParser from 'cookie-parser'
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("connected to mongoDB");
  } catch (err) {
    throw err;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected.");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
//MIDDELWARE
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
try{

  app.use("/api/rooms", roomsRoute);
}catch(err){
  console.log(`Rooms route error: ${err}`);
}
app.use("/api/hotels", hotelsRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "something went wrong!";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  connect();
  console.log("http://localhost:3000/");
});
