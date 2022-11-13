const { Router } = require("express");
const { foodItemsController } = require("../controllers/foodItems.controller");

const foodItemRoute = Router();

foodItemRoute.get("/get", foodItemsController.getFoodItems);
foodItemRoute.get("/get/:cat_id",foodItemsController.getFoodById);
foodItemRoute.post("/add",foodItemsController.addFood);
module.exports = { foodItemRoute };
