const {Router} = require("express");
const { restaurentController } = require("../controllers/restaurent.controller");

const restaurentRoute = Router();


restaurentRoute.post("/signup",restaurentController.signup);
restaurentRoute.post("/login",restaurentController.login);


module.exports = {restaurentRoute};