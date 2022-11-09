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
    tag: { type: Object },
    price: objNum,
    discount: { objNumOpt },
    category: objStr,
    sub_cate: objStr,
    desc: objStr,
    isAvailable: { type: Boolean, default: true },
});
/*

cat:chicken,
sub_cat:ready to cook,

cat:chicken

{
        "id": 1,
      "imgUrl": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/2/prod_display_image/1631077710.8126--2021-09-0810:38:30--1818",
      "name": "Chicken Curry Cut (Small Pcs) - Large Pack",
      "des": "Bone-in chunky pieces of skinless meat including Two le...",
      "net_tag": "Net wt:",
      "net": 1000,
      "gross_tag": "Gross:",
      "gross": 1026,
      "unit": "gms",
      "price_tag": "MRP:",
      "cuurency": "₹",
      "price": 271,
      "strikedPrice": "350",
      "category": "chicken",
      "description": "This is for trial",
      "off": "",
      "off_tag": "%OFF"
    }


*/
const FoodItemModel = mongoose.model("fooditem", foodItemSchema);
