var express = require('express');
var mysql = require('mysql');

const con = mysql.createConnection({
	host: "urbelis.dev",
	user: "adminrootusername",
	password: "adminrootpassword",
	database: "agile"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("connected!")

	con.query("SELECT * FROM GPD", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  	});
});