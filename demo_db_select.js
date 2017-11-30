var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16nsallinen",
password: "shakki123",
database: "ska16nsallinen"
});

con.connect(function(err) {
if (err) throw err;
con.query("SELECT * FROM asiakkaat", function (err, result, fields) {
if (err) throw err;
console.log(result);
});
});