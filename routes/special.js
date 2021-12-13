const express = require('express');
const route = express.Router();

route.get("/", function (req, res) {
    res.render("special");
});
module.exports = route;