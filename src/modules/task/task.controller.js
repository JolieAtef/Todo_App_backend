import express from "express"
import { authenticate } from "../../common/middleware/auth.js"
import { addTask, completeTask, deleteTask, getCategoryTasks, getSpecificTask, getTasks, inCompleteTask, moveTask, updateTask } from "./task.service.js"
import { validation } from "../../utils/validation.js"
import { addTaskSchema, moveTaskSchema, updateTaskSchema } from "./task.validation.js"


let router = express.Router()

router.get("/category/:id",authenticate , getCategoryTasks)

router.get("/:id", authenticate ,getSpecificTask)

router.get("/", authenticate , getTasks)

router.post("/", authenticate , validation(addTaskSchema), addTask)

router.put("/", authenticate , validation(updateTaskSchema),updateTask)

router.delete("/", authenticate , deleteTask)

router.put("/complete", authenticate , completeTask)

router.put("/incomplete", authenticate , inCompleteTask)

router.put("/move", authenticate, validation(moveTaskSchema) , moveTask)





export default router