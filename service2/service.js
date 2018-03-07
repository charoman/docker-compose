const express = require("express");
const mongoose = require("mongoose");
const db = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.listen(8080);
mongoose.connect("mongodb://mongo:27017/service2");
db.initDb();

app.get("/", function (req, res) {
    db.User.find({}).then(function (users) {
        res.json({users: users});
    });
});
