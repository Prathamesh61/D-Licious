const { CategoryModel } = require("../models/category.model");

let categoryController = {
     getCatById:async (req,res)=>{
          try{
               let {cat_id}=req.params;
               let categories = await CategoryModel.find({_id:cat_id});
               res.send(categories);
          }catch{
               res.send("can't send data right now ");
          }
     },
     getCategory:async(req,res)=>{
          try{
               let categories = await CategoryModel.find({});
               res.send(categories);
          }catch{
               res.send("can't send data right now ");
          }
     },
     postCategory:async (req,res)=>{
          try{
               let data=req.body.body;
               let category = new CategoryModel(data);
               await category.save()
               res.send({status:200,msg:"Category Added"})
          }catch(err){
               res.send({status:500,msg:"somthing went wrong"})
          }

     }
}

module.exports = {categoryController};