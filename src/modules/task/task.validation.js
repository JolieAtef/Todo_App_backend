import joi from "joi"

export const addTaskSchema = joi.object({
    category:joi.string().required().pattern(/^[0-9a-fA-F]{24}$/) ,
    title:joi.string().required().min(3),
    description:joi.string().optional().min(5), 
    priority:joi.string().required().valid("low", "medium", "high"),
    dueDate:joi.date().required()
})


export const updateTaskSchema = joi.object({
    title:joi.string().optional().min(3),
    description:joi.string().optional().min(5), 
    priority:joi.string().optional().valid("low", "medium", "high"),
    dueDate:joi.date().optional()
})

export const moveTaskSchema = joi.object({
    category:joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
})