let express = require("express");
const { categoryController } = require("../controllers/category.controller");
let categoryRoute = express.Router();

categoryRoute.post("/add",categoryController.postCategory);
categoryRoute.get("/getcategory",categoryController.getCategory);
categoryRoute.get("/:cat_id",categoryController.getCatById);

module.exports = {categoryRoute};
