var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16nsallinen",
password: "shakki123"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");
});