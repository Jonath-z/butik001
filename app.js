//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();
const uri = `mongodb+srv://joz:${process.env.DB_PASS}@butik.qrb2j.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// database connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
  });


app.get("/about", function(req, res){
    res.render("about");
  });

  app.get("/contact", function(req, res){
    res.render("contact");
  });

  app.get("/admin", function(req, res){
    res.render("admin");
  });
app.get("/special", function (req, res) {
  res.render("special");
});

app.get("/all", function (req, res) {
  db.collection("details").find({}).toArray((err, data) => {
    if (err) {
      console.log("connection problem")
    }
    else {
      // console.log(data);
      res.render("allproducts", {
        products: data
      });
    }
  });
});

  app.get("/order", function(req, res){
    res.render("order");
  });




  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  
