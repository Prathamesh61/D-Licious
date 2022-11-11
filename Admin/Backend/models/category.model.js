const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
     cat_name:{type:String,required:true}
})

const CategoryModel = mongoose.model("category",categorySchema);
module.exports = {CategoryModel};

