var mysql = require('mysql');  
var connection = mysql.createPool({  
host: 'magnesium',  
user: 'a16nsallinen',  
password: 'shakki123',  
database: 'ska16nsallinen'  
});  
module.exports = connection;