import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true
    }, 
    title:{
        type:String,
        required:true
    }, 
    color:{
        type:String,
        default:"#ffffff"
    }
})

export const categoryModel= mongoose.model("categories" , categorySchema)