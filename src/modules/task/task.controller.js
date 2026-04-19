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

router.put("/:id", authenticate , validation(updateTaskSchema),updateTask)

router.delete("/:id", authenticate , deleteTask)

router.put("/complete/:id", authenticate , completeTask)

router.put("/incomplete/:id", authenticate , inCompleteTask)

router.put("/move/:id", authenticate, validation(moveTaskSchema) , moveTask)





export default router