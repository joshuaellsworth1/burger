var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }


    function selectAll(id, name, cb) {
        var burger += " (";

    }

    function insertOne() {

    }

    function updateOne() {

    }


module.exports = orm;
