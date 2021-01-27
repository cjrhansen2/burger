//Require mysql
var mysql = require('mysql');

//connect to jawsdb using if else
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

//create the connection itself
connection.connect(function(err) {
    if (err) {
        console.error("Connection error: " + err.stack);
        return;
    }
    //if there is no error then log a connection
    console.log("Connected! ID: " + connection.threadId);
});

//then export the connection
module.exports = connection;