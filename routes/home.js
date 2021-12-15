const express = require('express');
const route = express.Router();
const db = require('../modules/mongodb');

route.get("/", async (req, res) => {
  const data = await db.collection("details").find({}).toArray();
  res.render("home", {
    products: data.slice(0, 4)
  });
});

module.exports = route;