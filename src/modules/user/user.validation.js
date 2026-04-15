import joi from "joi"


export const signupSchema = joi.object({
    name:joi.string().required().min(3),
    email:joi.string().email().required(),
    password:joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/).min(8).required(),
    confirmPassword:joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/).min(8).required().valid(joi.ref("password"))
})


export const loginSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/).min(8).required()
})
