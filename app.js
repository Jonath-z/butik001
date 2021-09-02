//jshint esversion:6
const express = require("express");
const ejs = require("ejs");

const app = express();

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
  app.get("/special", function(req, res){
    res.render("special");
  });
  app.get("/all", function(req, res){
    res.render("allproducts");
  });
  app.get("/order", function(req, res){
    res.render("order");
  });




  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  
