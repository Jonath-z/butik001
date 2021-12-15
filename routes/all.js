const express = require('express');
const route = express.Router();
const db = require('../modules/mongodb');

route.get("/", async (req, res) => {
  const data = await db.collection("details").find({}).toArray();
  // console.log(data);
  res.render("allproducts", {
    products: data
  });
});
module.exports = route;