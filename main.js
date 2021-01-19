"use strict";

const express = require("express"),
      app = express(),
      httpStatus = require("http-status-codes"),
      layouts = require("express-ejs-layouts");


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

app.get("/", (req,res) => {
    res.send("Name Application");
});




app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});