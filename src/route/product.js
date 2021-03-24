const express = require("express");
const route = express.Router();
const product = require("../controller/product");

route.post("/add", product.addProduct);

module.exports = route;