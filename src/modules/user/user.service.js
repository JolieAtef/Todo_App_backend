import { generateToken } from "../../common/middleware/auth.js"
import { userModel } from "../../database/models/user.model.js"
import { AppError } from "../../utils/AppError.js"
import bcrypt from "bcrypt"



export const signup = async(req ,res , next)=>{
    try{
        let {name , email, password , confirmPassword}= req.body
        let existedUser = await userModel.findOne({email})
        if(existedUser){
            return next(new AppError("Email already exists", 409))
        } 
        if(password != confirmPassword){
            return next(new AppError("confirm password doesn't match",400 ))
        }
        let hashPassword = await bcrypt.hash(password , 10)
        let addedUser = await userModel.create({name , email , password:hashPassword})
        if(addedUser){
            res.status(201).json({message:"User Account Created Successfully",addedUser})
        }
    }catch(err){
        next(err)
    }
}


export const login =async(req ,res, next)=>{
    try{
        let {email , password}= req.body
        let user = await userModel.findOne({email})
        if(!user){
            return next(new AppError("User Not Found", 404))
        }
        let login = await bcrypt.compare(password , user.password)
        if(login){
            let token = generateToken(user)
            res.status(200).json({message:"Login Done Successfully", token})
        }else{
            return next (new AppError("Password is wrong", 400))
        }
    }catch(err){
          next(err)
    }
}

export const getMyProfile = async(req , res ,next)=>{
    try{
        let user = await userModel.findById(req.user.id).select("-password")
        if(!user){
          return next(new AppError("User Not Found", 404))
        }
        res.status(200).json({message:"User Data" , user})
    }catch(err){
        next(err)
    }
}

export const deleteMyAccount = async(req , res , next)=>{
    try{
        let deletedUser= await userModel.findByIdAndDelete(req.user.id)
        if(deletedUser){
            res.status(200).json({message:"Account Deleted Successfully"})
        }
    }catch(err){
        next(err)
    }
}