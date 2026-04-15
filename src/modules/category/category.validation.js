import joi from 'joi'

export const addCategorySchema = joi.object({
    title:joi.string().required().min(3),
    color:joi.string().required().min(6)
})

export const updateCategorySchema = joi.object({
    title:joi.string().optional().min(3),
    color:joi.string().optional().min(6)
})