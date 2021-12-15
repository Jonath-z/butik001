const express = require('express');
const route = express.Router();
const db = require('../modules/mongodb');

route.get("/:product", async (req, res) => {
  // console.log(req.params)
  const data = await db.collection("details").find({ "type": `${req.params.product}` }).toArray();
  res.render("products", {
    products: data,
    productName: req.params.product
  });
});
module.exports = route;