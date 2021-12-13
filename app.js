//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact');
const admin = require('./routes/admin');
const special = require('./routes/special');
const products = require('./routes/products');
const all = require('./routes/all');
const order = require('./routes/order');
const command = require('./routes/commands/command');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/', home);
app.use('/about', about);
app.use('/contact', contact);
app.use('/admin', admin);
app.use('/special', special);
app.use('/product', products);
app.use('/all', all);
app.use('/order', order);
app.use('/command', command);


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
  
