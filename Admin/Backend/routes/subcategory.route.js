const {Router} = require("express");
const { sub_categoryController } = require("../controllers/subcategory.controller");

const subCategoryRoute = Router();

subCategoryRoute.get("/get",sub_categoryController.getSubCategory);
subCategoryRoute.get("/get/:id",sub_categoryController.getSubCatById);
subCategoryRoute.post("/add",sub_categoryController.postSubCategory);



module.exports = {subCategoryRoute};



