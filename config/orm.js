var connection = require("../config/connection.js");

var orm = {
    all: function (id, devoured) {
        var queryString = "SELECT * FROM " + id + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            devoured(result);
        });
    },
    selectAll: function (id, burger_name, devoured) {
        var burger = "INSERT INTO " + id;

        burger += "(";
        burger += burger_name.toString();
        burger += ") ";
        burger += "VALUES (";
        burger += ") ";
        console.log(burger)

        connection.query(burger, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);

        })
    },

    insertOne: function () {

    },

    updateOne: function () {

    }


};

module.exports = orm;
