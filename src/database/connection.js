import mongoose from "mongoose";
import {config} from "dotenv"

config()

export const databaseConnection=()=>{
    mongoose.connect(process.env.Database_Url).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}