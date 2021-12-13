const express = require('express');
const route = express.Router();
const db = require('../modules/mongodb');

route.get("/:model", function (req, res) {
    // console.log(req.params);
    db.collection('details').find({ 'model': `${req.params.model}` }).toArray((err, data) => {
        if (err) {
            console.log('err when fetching for order');
        }
        res.render("order", {
            product: data[0]
        });
    });
});
module.exports = route;