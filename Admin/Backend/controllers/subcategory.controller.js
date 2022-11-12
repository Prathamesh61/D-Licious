const { SubCat_Model } = require("../models/subcategory.model");
let sub_categoryController = {
     getSubCatById:async (req,res)=>{
          try {
               let {id}=req.params;
               let sub_cat = await SubCat_Model.find({_id:id});
               res.send(sub_cat);
          } catch {
               res.send("can't send data right now ");
          }
     },
     getSubCatBy_CatId:async(req,res)=>{
          try{
               let {id} = req.params
               let subCat = await SubCat_Model.find({cat_id:id})
               res.send({status:200,data:subCat})
          }catch(err){
               res.send({status:500,msg:"something went wrong"})
          }
     },
     getSubCategory:async(req,res)=>{
          try{
               let subCat = await SubCat_Model.find({});
               res.send(subCat);
          }catch{
               res.send("can't send data right now ");
          }
     },
     postSubCategory:async (req,res)=>{
          try{
               let data=req.body.body;
               let subCat = new SubCat_Model(data);
               await subCat.save();
               res.send({status:200,msg:"Sub category Added"})
          }catch(err){
               res.send({status:500,msg:"somthing went wrong"})
          }
     }
}

module.exports = {sub_categoryController};