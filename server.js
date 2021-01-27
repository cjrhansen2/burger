//set up the server using express.js
var express = require('express');
var PORT = process.env.PORT || 3306;
var app = express();

// serve static content for the app from the "public" directory
app.use(express.static("public"));

// parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("./public"));

// set up Handlebars
var expressHandlebars = require("express-handlebars");
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controller");
app.use(routes);

// make the server start to listen
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});