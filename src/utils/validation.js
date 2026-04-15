import { AppError } from "./AppError.js"


export const validation=(Schema)=>{
     return async (req , res , next)=>{
        let {error} = await Schema.validate(req.body, {abortEarly: false})
       
        if (error){
            let messages = error.details.map((err)=>err.message)
            return next(new AppError(messages.join(", ") , 400))
        }

        next()
     }
}