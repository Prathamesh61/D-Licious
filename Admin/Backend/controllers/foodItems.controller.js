const { FoodItemModel } = require("../models/foodItem.model");
const jwt = require("jsonwebtoken");
const foodItemsController = {
     getFoodById:async (req,res)=>{
          console.log(req.params)
          try{
               let {cat_id} = req.params
               console.log("catname",cat_id);
               let foodItem = await FoodItemModel.find({category_id:cat_id});
               res.send({data:foodItem})
          }catch(err){
               res.send({ status: 500, msg: "server error" })
          }
     },
     addFood:async(req,res)=>{
        try{
            let data = req.body.formData;
            // console.log(data)
            const newData = new FoodItemModel(data)
            newData.save();
            res.send({status:200,msg:"success"})

        }catch(err){
            res.send({status:500,msg:"something went wrong"})
        }
        
     },
    getFoodItems: async (req, res) => {
        try {
            let foodItems = await FoodItemModel.find({});
            console.log(foodItems);
            res.send({ data: foodItems });
        } catch (err) {
            res.send({ status: 500, msg: "server error" });
        }
    },
};

module.exports = { foodItemsController };
