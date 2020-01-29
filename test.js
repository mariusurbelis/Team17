const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

//Query used
const selectALL = 'SELECT * FROM Payments'


//connection details
const connection = mysql.createConnection({
	host:'urbelis.dev',
	port: '3007',
	user: 'adminrootusername',
	password: 'adminrootpassword',
	database: 'Agile17'
});



//connection established
connection.connect( err => {
	if (err) {
		console.log('failure to connect')
		return err;
	}
});

//details of connection
console.log(connection)

//local host main page http://localhost:4000
app.get('/', (req, res) =>{
	res.send(' -* main Page *-')
});


/*page that table is stored on
so this is http://localhost:4000/table*/
app.get('/table', (req, res) => {
	//run query 
	console.log('query ran')
	connection.query(selectALL, (err, results) =>{
		//return error
		if (err) {
			return res.send(err)
		}
		else
		{
			//returns sql database data
			return res.json
			({
			data:results
			})
		}
	});
});


app.listen(4000, () => {
});



