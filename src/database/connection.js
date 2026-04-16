import mongoose from "mongoose";

export const databaseConnection=()=>{
    mongoose.connect(process.env.Database_Url).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}