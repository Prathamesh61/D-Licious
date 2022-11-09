const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { RestaurentModel } = require("../models/restaurent.model");
require("dotenv").config();
const restaurentController = {
    login: async (req, res) => {
        let { email, password } = req.body.data;
        let findOne = await RestaurentModel.findOne({ email });
        if (findOne) {
            bcrypt.compare(password, findOne.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ email }, process.env.SECRET_KEY);
                    res.send({ status: 200, token });
                } else {
                    res.send({ status: 500, msg: "Wrong Credentials" });
                }
            });
        } else {
            res.send({ status: 500, msg: "Wrong Credentials" });
        }
    },

    signup: async (req, res) => {
        console.log(req.body.body);
        try {
            const { name, email, password, address } = req.body.body;
            if (name && email && password && address) {
                let isFind = await RestaurentModel.findOne({ email });
                if (isFind) {
                    res.send({
                        msg: "Restaurent Already Registered",
                        status: 404,
                    });
                } else {
                    bcrypt.hash(password, 4, async (err, result) => {
                        if (err) {
                            res.send({
                                msg: "somthing went wrong",
                                status: 500,
                            });
                        } else {
                            let RData = {
                                name,
                                email,
                                password: result,
                                address,
                            };
                            const newRestaurent = new RestaurentModel(RData);
                            await newRestaurent.save();
                            res.send({
                                msg: "Registered Success",
                                status: 200,
                            });
                        }
                    });
                }
            } else {
                res.send({ msg: "All fields are required" });
            }
        } catch (err) {
            res.send({ status: 500, msg: "Register Failed" });
        }
    },
};

module.exports = { restaurentController };
