let mongoose = require("mongoose");

let SubCat_Schema = mongoose.Schema({
    cat_id: { type: String, require: true },
    sub_cat: { type: String, require: true },
});

let  SubCat_Model = mongoose.model("sub_category",SubCat_Schema);

module.exports = {SubCat_Model};
