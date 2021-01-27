//Require mysql
var mysql = require('mysql');

//connect to jawsdb using if else
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "tckq4ut6rrj1yt8w",
        password: "fo70uoy6mbw48ux2",
        database: "ixo5himha8n9q50a"
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