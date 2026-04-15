import express from "express"
import { databaseConnection } from "./database/connection.js"
import { globalError } from "./common/middleware/globalError.js"
import userRouter from "./modules/user/user.controller.js"
import categoryRouter from "./modules/category/category.controller.js"


export const bootstrap=()=>{
    const app = express()
    app.use(express.json())
    databaseConnection()
    
    app.use("/users" , userRouter)
    app.use("/categories", categoryRouter)



    app.use(globalError)
    app.listen(3000, ()=>{
        console.log("server running on port 3000")
    })
}