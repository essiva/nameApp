"use strict";

const express = require("express"),
      app = express(),
      httpStatus = require("http-status-codes"),
      layouts = require("express-ejs-layouts"),
      homeController = require("./controllers/homeController");


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use(express.static("public"));


app.locals.nameData = require("./names.json");


//routers
app.get("/", homeController.homePage);




app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});