var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16nsallinen",
password: "shakki123",
database: "ska16nsallinen"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");
var sql = "CREATE TABLE asiakkaat (nimi VARCHAR(255), osoite VARCHAR(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Taulu luotu");
});
});