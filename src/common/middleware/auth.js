import jwt from "jsonwebtoken"
import { config } from "dotenv"
import { AppError } from "../../utils/AppError.js"

config()

export const generateToken = (user)=>{
       let token =  jwt.sign({id:user._id}, process.env.Token_Signature)
       return token
}

export const authenticate=(req , res , next)=>{
    try{
        let { authorization } = req.headers
        if (!authorization) {
            return next(new AppError("Please login first", 401));
        }
        let decode = jwt.verify(authorization, process.env.Token_Signature)
        req.user = decode
        next()
    }catch(err){
        return next(new AppError("Invalid or expired token", 401))
    }
}