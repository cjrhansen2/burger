//require the connection.js file
var connection = require("connection.js");

//make the orm
var orm = {
    //define selectAll, insertOne, and updateOne sql queries
    selectAll: (table, cb) => {
        //create the queryVar string as a variable
        var queryVar = "SELECT * FROM " + table + ";";
        connection.query(queryVar, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    },
    //defining insertOne
    insertOne: (table, column, value, cb) => {
        var anotherQueryVar = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(anotherQueryVar, [table, column, value], (err, res) => {
            if (err) { throw err; }
            cb(res);
        });
    },
    //aaand define updateOne
    updateOne: (table, column, burgerID, cb) => {
        var onemoreQueryVar = "UPDATE ?? SET ?? = 1 WHERE id = ?";
        connection.query(onemoreQueryVar, [table, column, burgerID], (err, res) => {
            if (err) { throw err; }
            console.log(res);
            cb(res);
        });
    }
}
//then export orm
module.exports = orm;