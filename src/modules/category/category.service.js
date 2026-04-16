import { categoryModel } from "../../database/models/category.model.js"
import { AppError } from "../../utils/AppError.js"


export const getMyCategories = async(req , res , next)=>{
    try{
        let categories = await categoryModel.find({user:req.user.id})
        if(categories.length==0){
            return next(new AppError("No Categories Found",404))
        }else{
            res.status(200).json({message:"Categories Data", categories})
        }
    }catch(err){
        next(err)
    }
}

export const addCategory = async( req , res , next)=>{
    try{
        let {title , color} = req.body 
          let addedCategory = await categoryModel.create({user:req.user.id , title , color})
          if(addCategory){
            res.status(200).json({message:"Category Added Successfully", addedCategory})
          }

    }catch(err){
       next(err)
    }
}


export const updateCategory = async(req , res)=>{
    try{
        let {id} = req.params
        let{title , color} = req.body
        let category = await categoryModel.findById(id)
        if(!category){
            return next(new AppError("Category Not Found", 404)) 
        }

        let updatedCategory = await categoryModel.findByIdAndUpdate(id , {title , color}, {new :true})
        if(updatedCategory){
            res.status(200).json({message:"Category Updated Successfully", updatedCategory})
        }

    }catch(err){
        next(err)
    }

}


export const deleteCategory = async (req ,res , next)=>{
    try{
        let {id} = req.params
        let category = await categoryModel.findById(id)
        if(!category){
            return next(new AppError("Category Not Found", 404)) 
        }
        let deletedCategory = await categoryModel.findByIdAndDelete(id)
        if(deletedCategory){
            res.status(200).json({message:"Category deleted Successfully"})
        }
       
    }catch(err){
        next(err)
    }
}

