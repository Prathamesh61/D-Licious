const { FoodItemModel } = require("../models/foodItem.model");

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
