const mongoose = require("mongoose");
let objStr = { type: String, required: true };
let objStrOpt = { type: String, default: null };
let objNum = { type: Number, required: true };
let objNumOpt = { type: Number, default: 0 };
const foodItemSchema = mongoose.Schema({
    name: objStr,
    imgUrl: objStr,
    imgUrl2: objStr,
    short_desc: objStr,
    net: objStr, // 10gms, 0.5lts
    tags: objStrOpt,
    price: objNum,
    discount: { objNumOpt },
    qty: objStrOpt,
    category_id: objStr,
    sub_cate: objStr,
    desc: objStr,
    isAvailable: { type: Boolean, default: true },
});
const FoodItemModel = mongoose.model("fooditem", foodItemSchema);

module.exports = { FoodItemModel };
