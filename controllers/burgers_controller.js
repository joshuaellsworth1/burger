var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var object = {
            burger: data
        };
        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create([
        "name"
    ], [
            req.body.name
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function(req, res) {
    var 
})












module.exports = router;


