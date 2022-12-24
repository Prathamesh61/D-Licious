const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { restaurentRoute } = require("./routes/restaurent.route");
const { categoryRoute } = require("./routes/category.route");
const { foodItemRoute } = require("./routes/footitem.route");
const { subCategoryRoute } = require("./routes/subcategory.route");
require("dotenv").config();
// --------------
const app = express();
app.use(cors({origin :"*"}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1 align='center'>Welcome to Delicious API</h1>");
});

app.use("/restaurent", restaurentRoute);
app.use("/category", categoryRoute);
app.use("/fooditems", foodItemRoute);
app.use("/subcat",subCategoryRoute);


// ------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    try {
        await connection;
        console.log("connected to db success");
    } catch (err) {
        console.log(err);
    }
    console.log("server is running at" + PORT);
});
