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
        "name", "hungry"
    ], [
        req.body.name, req.body.hungry
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        hungry: req.body.hungry
    }), condition, function(result) {
        if(result.changeRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    };
});












module.exports = router;


