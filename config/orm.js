var connection = require("../config/connection.js");

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    selectAll: function (id, name, cb) {
        var burger = "INSERT INTO " + id;

        burger += "(";
        burger += name.toString();
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
