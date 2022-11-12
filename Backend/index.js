const express = require('express');
const { connection } = require('./config/db');
const { userController } = require("./routes/user.routes");
const { ProfileRouter } = require("./routes/profile.routes")

const app = express();
app.use(express.json());
require('dotenv').config();
const cors = require('cors');
const { authentication } = require('./middlewares/Authentication');
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello this is homepage");
})

app.use("/user", userController);
app.use("/profile", authentication, ProfileRouter);

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