const express = require('express');
const route = express.Router();
const db = require('../modules/mongodb');

route.get("/", function (req, res) {
    db.collection("details").find({}).toArray((err, data) => {
        if (err) {
          console.log("connection problem")
        }
        else {
          // console.log(data);
          res.render("home", {
            products: data.slice(0,4)
          });
        }
      });
});

module.exports = route;