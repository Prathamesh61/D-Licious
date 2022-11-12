const { Router } = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {UserModel} = require("../models/User.model")

const userController = Router();

userController.post("/signup", async(req,res) => {
    console.log(req);
    try{
        const {email, password, mobile} = req.body.body;
        if(email && password && mobile) {
            let isFind = await UserModel.findOne({ email });
            if(isFind){
                res.send({
                    msg: "User Already Registered",
                    status: 404,
                });
            }
            else {
                bcrypt.hash(password, 5, async function(err, hash) {
                    if(err) {
                        res.send({
                            msg: "somthing went wrong",
                            status: 500,
                        });
                    } else {
                        const user = new UserModel({
                            email,
                            password : hash,
                            mobile
                        });
                        await user.save()
                        res.send({
                            msg : "Signup successfull",
                            status: 200,
                        });
                    }
                });
            }
        } else{
            res.send({ msg: "All fields are required" });
        }
    } catch (err){
        res.send({ status: 500, msg: "Register Failed" });
    }
});

userController.post("/login", async(req, res) => {
    const {email, password} = req.body.data;
    console.log(req.body)
    const user = await UserModel.findOne({email});
    const hash = user.password
    if(user){
        bcrypt.compare(password, hash, function(err, result) {
           if(result) {
              const token = jwt.sign({ email }, process.env.JWT_SECRET);
              res.send({ status: 200, token });
           } else {
              res.send({ status: 500, msg: "Wrong Credentials" });
           }
        });
    } else {
        res.send({ status: 500, msg: "Wrong Credentials" });
    }
});

module.exports = { userController };