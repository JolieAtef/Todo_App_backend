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
},{
    toJSON:{ virtuals: true }
})


categorySchema.virtual('categoryTasks', {
    ref: 'tasks',
    localField: '_id',
    foreignField: 'category'
});
  

export const categoryModel= mongoose.model("categories" , categorySchema)