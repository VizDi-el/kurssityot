var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' MUH STATS FACTS STASTICSI.', function (err) {
if (err) throw err;
console.log('Päivitetty!');
});