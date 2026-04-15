import express from "express"
import { authenticate } from "../../common/middleware/auth.js"
import { addCategory, deleteCategory, getMyCategories, updateCategory } from "./category.service.js"
import { validation } from "../../utils/validation.js"
import { addCategorySchema, updateCategorySchema } from "./category.validation.js"


let router = express.Router()

router.get("/", authenticate , getMyCategories)

router.post("/", authenticate , validation(addCategorySchema) , addCategory)

router.put("/:id", authenticate , validation(updateCategorySchema), updateCategory)

router.delete("/:id", authenticate , deleteCategory)


export default router