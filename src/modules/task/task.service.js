import { categoryModel } from "../../database/models/category.model.js"
import { taskModel } from "../../database/models/task.model.js"
import { AppError } from "../../utils/AppError.js"



export const getCategoryTasks = async(req ,res , next)=>{
    try{
        let {id} = req.params
        let category = await categoryModel.findOne({user:req.user.id ,_id:id}).populate("categoryTasks")
        if(!category){
           return next(new AppError("Category Not Found", 404))
        }
        res.status(200).json({message:"Tasks of Category", category})

    }catch(err){
        next(err)
    }
}
export const getSpecificTask = async(req ,res , next)=>{
    try{
        let {id} = req.params
        let task = await taskModel.findById(id)
        if(!task){
           return next(new AppError("Task Not Found", 404))
        }
        res.status(200).json({message:"Task Data", task})
        
    }catch(err){
        next(err)
    }
}


export const getTasks = async(req ,res , next)=>{
    try{
        let {isCompleted , priority} = req.query
        let query ={}
        if(isCompleted){
            query.isCompleted=isCompleted
        }
        if(priority){
            query.priority=priority
        }
        let tasks = await taskModel.find({user:req.user.id , ...query})
        if(tasks.length==0){
            return next(new AppError("No Tasks Found", 404))
         }
         res.status(200).json({message:"Tasks Data", tasks})

    }catch(err){
        next(err)
    }
}

export const addTask = async(req , res , next)=>{
    try{
    let {category , title , description , priority , dueDate} = req.body
    let existedCategory = await categoryModel.findById(category)
    if(!existedCategory){
       return next(new AppError("Category Not Found", 404)) 
     }

     let addedTask = await taskModel.create({user:req.user.id , category , title , description , priority , dueDate })
     if(addedTask){
        res.status(201).json({message:"Task Added Successfully", addedTask})
     }

    }catch(err){
        next(err)
    }
}

export const updateTask = async(req , res , next)=>{
    try{
        let{id}= req.params
        let {title , description , priority , dueDate} = req.body
 
        let task = await taskModel.findById(id)
        if(!task){
            return next(new AppError("Task Not Found", 404))
        }

        let updatedTask = await taskModel.findByIdAndUpdate(id ,{title , description , priority , dueDate}, {new :true} )
        if(updatedTask){
            res.status(200).json({message:"Task Updated Successfully" , updatedTask})
        }

    }catch(err){
        next(err)
    }
}

export const deleteTask = async(req , res , next)=>{
    try{
        let {id} = req.params
        let task = await taskModel.findByIdAndDelete(id)
        if(task){
            res.status(200).json({message:"Task Deleted Successfully"})
        }else{
            return next(new AppError("Task Not Found", 404))
        }
    }catch(err){
       next(err)
    }
}

export const completeTask = async(req , res , next)=>{
    try{
        let {id}= req.params
        let task = await taskModel.findById(id)
        if(!task){
            return next(new AppError("Task Not Found", 404))
        }
        if(task.isCompleted){
            return next(new AppError("Task Already is completed", 400))
        }else{
            let completedTask = await taskModel.findByIdAndUpdate(id , {isCompleted:true}, {new:true})
            if(completedTask){
                res.status(200).json({message:"Task completed Successfully" , completedTask})
            }
        }
        
    }catch(err){
        next(err)
    }
}

export const inCompleteTask = async(req , res , next)=>{
    try{
        let {id}= req.params
        let task = await taskModel.findById(id)
        if(!task){
            return next(new AppError("Task Not Found", 404))
        }
        if(!task.isCompleted){
            return next(new AppError("Task Already is inCompleted", 400))
        }else{
            let inCompletedTask = await taskModel.findByIdAndUpdate(id , {isCompleted:false}, {new:true})
            if(inCompletedTask){
                res.status(200).json({message:"Task inCompleted" , inCompletedTask})
            }
        }       
    }catch(err){
        next(err)
    }
}

export const moveTask = async(req , res , next)=>{
    try{
        let {id}= req.params
        let {category}= req.body
        let task = await taskModel.findById(id)
        if(!task){
            return next(new AppError("Task Not Found", 404))
        }

       let existedCategory = await categoryModel.findById(category)
       if(!existedCategory){
         return next(new AppError("Category Not Found", 404)) 
       }

       let movedTask = await taskModel.findByIdAndUpdate(id , {category}, {new:true})
       if(movedTask){
        res.status(200).json({message:"Task Moved Successfully", movedTask})
       }
        
    }catch(err){
        next(err)
    }
}