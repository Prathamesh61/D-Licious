const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    bldgno: { type: String },
    locality: { type: String },
    landmark: { type: String },
    city: { type: String }
});

const cartProductSchema = mongoose.Schema({
    email: { type: String },
    name: { type: String },
    imgUrl: { type: String },
    short_desc: { type: String },
    net: { type: String }, // 10gms, 0.5lts
    price: { type: String },
    discount: { type: String },
    qty: { type: String },
});
// 1 a b c 

const myOrderSchema = mongoose.Schema({
    user_id: { type: String },
    products: { type: Array },
    // [
    //     {product_id,
    //     qnt,},
    //     {
    //         product_id,
    //         qnt,
    //     }
    // ]
    // name: { type: String },
    // imgUrl: { type: String },
    // short_desc: { type: String },
    // net: { type: String }, // 10gms, 0.5lts
    // price: { type: String },
    // discount: { type: String },
    // qty: { type: String },

}, { timestamps: true });

const userSchema = new mongoose.Schema({
    user_id: { type: Number },
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    gander: { type: String },
    marital: { type: String },
    address: [addressSchema],
    cart: [cartProductSchema],
    myorders: [myOrderSchema]
});

const UserModel = mongoose.model("user", userSchema);
const AddressModel = mongoose.model("address", addressSchema);
const CartModel = mongoose.model("cartProducts", cartProductSchema);
const MyOrderMOdel = mongoose.model("myOrder", myOrderSchema);
module.exports = { UserModel, AddressModel, CartModel, MyOrderMOdel };