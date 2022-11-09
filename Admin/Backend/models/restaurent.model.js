const mongoose = require("mongoose");
let objStr = { type: String, required: true };
const restaurentSchema = mongoose.Schema({
    name: objStr,
    address: objStr,
    email: objStr,
    password: objStr,
});

const RestaurentModel = mongoose.model("restaurent", restaurentSchema);
          
module.exports = { RestaurentModel };
