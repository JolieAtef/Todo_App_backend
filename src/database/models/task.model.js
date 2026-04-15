import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"categories",
        required:true
    },
    title:{
        type:String,
        required:true
    }, 
    description:{
        type:String,
    },
    isCompleted:{
       type:Boolean,
       default:false,
    },
    priority:{
        type:String,
        num:["low", "medium", "high"],
        required:true
    },
    dueDate:{
        type:{
            type:Date,
            required:true
        }
    }
})

export const taskModel = mongoose.model("tasks", taskModel )