import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        // console.log({ data: { username, email, password } });
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = new userModel({
            username,
            email,
            password: hashPassword,
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully!", data: newUser });
    } catch (err) {
        return next(err);
    }
};

//LOGIN
export const login = async (req, res, next) => {
    try {
       const user =await userModel.findOne({username:req.body.username})
    //    console.log('user',user);
    //    console.log('password',req.body.password);
        if(!user)
            return next(createError(404,"User Not Found"))
        
        const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)

        // console.log("ispasswordcorect",isPasswordCorrect);

        if(!isPasswordCorrect)
            return next(createError(400,"Wrong password ot username"))
        const token =jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY)
        const {password,isAdmin, ...other}=user._doc
       res.cookie("accessToken",token,{
        httpOnly:true,
       }).status(200).json(other)
    }catch(err){
        next(err)
    }
}
