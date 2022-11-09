const express = require("express");
const address = require("address");
const cors = require("cors");
const { connection } = require("./configs/db");
const { restaurentRoute } = require("./routes/restaurent.route");
require("dotenv").config();
// --------------
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1 align='center'>Welcome to Delicious API</h1>");
});

app.use("/restaurent", restaurentRoute);




// ------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    try {
        await connection;
        console.log("connected to db success");
    } catch (err) {
        console.log(err);
    }
    console.log("server is running at" + PORT);
});
