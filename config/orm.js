var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }

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
