const express = require('express');
const route = express.Router();
const db = require('../modules/mongodb');

route.get("/:product", async function (req, res) {
    // console.log(req.params)
  db.collection("details").find({ "type": `${req.params.product}` }).toArray((err, data) => {
      if (err) {
        console.log('database error for fetching products');
      }
      res.render("products", {
        products: data,
        productName: req.params.product
      });
    });
});
module.exports = route;