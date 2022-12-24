const express = require('express');
const { connection } = require('./config/db');
const { userController } = require("./routes/user.routes");
const { ProfileRouter } = require("./routes/profile.routes")

const app = express();
app.use(express.json());
require('dotenv').config();
const cors = require('cors');
const { authentication } = require('./middlewares/Authentication');
const { MyOrderMOdel, UserModel } = require('./models/User.model');

app.use(cors({origin :"*"}));


app.get("/", (req, res) => {
    res.send("hello this is homepage");
})

app.use("/user", userController);
app.use("/profile", authentication, ProfileRouter);
app.get("/admin/orders", async (req, res) => {
    const orders = await MyOrderMOdel.find();
    // const myorders = user.myorders;
    // console.log(orders);
    res.send({ orders: orders });
})
app.get("/admin/users", async (req, res) => {
    const users = await UserModel.find();
    // const myorders = user.myorders;
    // console.log(orders);
    res.send({ users: users });
})

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("Connection to DB successfully")
    }
    catch (err) {
        console.log("Error connecting to DB")
    }
    console.log("Listening on PORT", process.env.PORT)
})