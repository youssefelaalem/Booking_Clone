import jwt from "jsonwebtoken";
import { createError } from "./error.js";
export const verfiyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log('token',req.cookies);
  if (!token) {
    return next(createError(401, "You are Not Authenticated!"));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return next(createError(403, "Token Is Not Valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser=(req,res,next)=>{
    verfiyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403,"you are not authorized"))
        }
    })
}

export const verifyAdmin=(req,res,next)=>{
    verfiyToken(req,res,next,()=>{
        if( req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403,"you are not admin"))
        }
    })
}