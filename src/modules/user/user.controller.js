import express from "express"
import { deleteMyAccount, getMyProfile, login, signup } from "./user.service.js"
import { authenticate } from "../../common/middleware/auth.js"
import { validation } from "../../utils/validation.js"
import { loginSchema, signupSchema } from "./user.validation.js"


let router = express.Router()

router.post("/signup",validation(signupSchema) ,signup)

router.post("/login",validation(loginSchema),login)

router.delete("/delete_account", authenticate , deleteMyAccount)

router.get("/", authenticate ,  getMyProfile)


export default router