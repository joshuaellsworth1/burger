var connection = require("../config/connections.js");

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
  selectAll: function (table, cb) {
    var qString = "SELECT * FROM " + table + ";";
    connection.query(qString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // selectAll: function (id, burger_name, cb) {
  //     var burger = "INSERT INTO " + id;

  //     burger += "(";
  //     burger += burger_name.toString();
  //     burger += ") ";
  //     burger += "VALUES (";
  //     burger += ") ";
  //     console.log(burger)

  //     connection.query(burger, function (err, result) {
  //         if (err) {
  //             throw err;
  //         }

  //         cb(result);

  //     })
  // },

  insertOne: function (table, cols, vals, cb) {
    var qString = "INSERT INTO " + table;
    qString += " (";
    qString += cols.toString();
    qString += ") ";
    qString += "VALUES (";
    qString += printQuestionMarks(vals.length);
    qString += ") ";

    console.log(qString);
    connection.query(qString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    })

  },

  updateOne: function (table, objColVals, condition, cb) {
    console.log("condition from orm", condition);
    var qString = "UPDATE " + table;
    qString += " SET ";
    qString += objToSql(objColVals);
    qString += " WHERE ";
    qString += condition;
    console.log(qString);

    connection.query(qString, function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }


};

module.exports = orm;
