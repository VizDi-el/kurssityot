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
var sql = "INSERT INTO asiakkaat (nimi, osoite) VALUES ('Pulju', 'Koskikatu 3')";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("1 tietue lisätty");
});
});