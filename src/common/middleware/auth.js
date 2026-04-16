import jwt from "jsonwebtoken"
import { AppError } from "../../utils/AppError.js"
import { userModel } from "../../database/models/user.model.js"


export const generateToken = (user)=>{
       let token =  jwt.sign({id:user._id}, process.env.Token_Signature)
       return token
}

export const authenticate= async (req , res , next)=>{
    try{
        let { authorization } = req.headers
        if (!authorization) {
            return next(new AppError("Please login first", 401));
        }
        let decode = jwt.verify(authorization, process.env.Token_Signature)
        let user = await userModel.findById(decode.id)
        if(!user){
            return next(new AppError("User Not Found",404))
        }
        
        req.user = decode
        next()
    }catch(err){
        return next(new AppError("Invalid or expired token", 401))
    }
}