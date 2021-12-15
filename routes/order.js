const express = require('express');
const route = express.Router();
const db = require('../modules/mongodb');

route.get("/:model", async (req, res) => {
    // console.log(req.params);
    const data = await db.collection('details').find({ 'model': `${req.params.model}` }).toArray();
    res.render("order", {
        product: data[0]
    });
});
module.exports = route;