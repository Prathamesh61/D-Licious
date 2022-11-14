const { Router } = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const { UserModel, AddressModel, CartModel, MyOrderMOdel } = require("../models/User.model")

const ProfileRouter = Router();
// ---------------------------------------------------------------------------------------


//Profile Routes
ProfileRouter.get("/getUser", async (req, res) => {
    const { email } = req.body;
    console.log(email);
    const user = await UserModel.findOne({ email });
    res.send({ user: user })
})

ProfileRouter.patch("/updateuser", async (req, res) => {
    const { email, name, mobile } = req.body;
    // console.log(email, name, mobile);
    await UserModel.findOneAndUpdate({ email }, { name, mobile });

    const user = await UserModel.find({ email });
    res.send({ msg: "Details Updated Successfully.", updated_user: user })
})
// ----------------------------------------------------------------------------------------

//Address Routes

//get Address
ProfileRouter.get("/getaddress", async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    const address = user.address;
    console.log(address);
    res.send({ msg: `Address for ${email}`, address_List: address });
})

//create Address
ProfileRouter.post("/createaddress", async (req, res) => {
    const { bldgno, locality, landmark, city, email } = req.body;
    const new_add = new AddressModel({
        email,
        bldgno,
        locality,
        landmark,
        city
    })
    await new_add.save();
    const user = await UserModel.findOne({ email });
    user.address.push(new_add);
    await user.save();
    console.log(new_add);
    res.send({ msg: `Address created for ${email} Successfully`, new_add: new_add });
})

//update Address
ProfileRouter.patch("/updateaddress/:id", async (req, res) => {
    const { id } = req.params;
    const { bldgno, locality, landmark, city, email } = req.body;
    const user = await UserModel.findOne({ email });
    const address = user.address.id(id);
    address.bldgno = bldgno;
    address.locality = locality;
    address.landmark = landmark;
    address.city = city;
    await user.save();
    console.log(address);
    res.send({ msg: `Address updated for ${email} Successfully`, Updated_address: address });
})

//delete Address
ProfileRouter.delete("/deleteaddress/:id", async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
    const user = await UserModel.findOne({ email });
    const address = user.address.id(id);
    address.remove();
    await user.save();
    console.log(user);
    res.send({ msg: `Address Deleted for ${email} Successfully`, user: user });
})
//-----------------------------------------------------------------------------------

//cart Routes

//get Cart Products
ProfileRouter.get("/getcartprod", async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    const cart = user.cart;
    console.log(cart);
    res.send({ cart: cart });
})

//create Cart Products
ProfileRouter.post("/createcartprod", async (req, res) => {
    const { email, name, imgUrl, short_desc, net, price, discount, qty } = req.body;
    const user = await UserModel.findOne({ email });
    const new_cart_prod = new CartModel({
        email,
        name,
        imgUrl,
        short_desc,
        net, price,
        discount,
        qty
    })
    user.cart.push(new_cart_prod);
    await user.save();
    console.log(user);
    res.send({ msg: `Item Added Into Cart`, new_cart_prod: user.cart });
})

//delete Cart Products
ProfileRouter.delete("/deletecartprod/:id", async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
    const user = await UserModel.findOne({ email });
    const cart = user.cart.id(id);
    console.log(cart);
    cart.remove();
    await user.save();
    console.log(user);
    res.send({ msg: `Item Removed`, user: user });
})

//--------------------------------------------------------------------------------------

//myOrder Routes

//create my order
ProfileRouter.post("/createmyorderprod", async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    const user_id = user._id;
    const cart = user.cart;
    // const myOrders = user.myorders;
    // user.myorders = [...user.myorders, ...cart]
    // myOrders.products = cart
    // console.log(myOrders)
    const updated_myorder = new MyOrderMOdel({
        email,
        user_id,
        products: cart
    })

    await updated_myorder.save();
    // myOrders.push(cart);
    await user.save();
    console.log(user);
    res.send({ msg: `Check My Orders.` });
})

// ordersModel 
// {_id , user_id,products:[]}

//get my order
ProfileRouter.get("/getmyorderprod", async (req, res) => {
    const { email } = req.body;
    const orders = await UserModel.find({ email });
    // const myorders = user.myorders;
    // console.log(orders);
    res.send({ orders: orders });
})
module.exports = { ProfileRouter };