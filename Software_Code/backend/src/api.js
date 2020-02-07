var http = require("http");
var cors = require('cors');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

const fs = require('fs');

var app = express();

app.use(cors());

// // Set up a whitelist and check against it:
// var whitelist = ['httpa://agile.urbelis.dev', 'http://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// // Then pass them to cors:
// app.use(cors(corsOptions));

//start mysql connection
var connection = mysql.createConnection({
    host: 'urbelis.dev', //mysql database host name
    user: 'adminrootusername', //mysql database user name
    password: 'adminrootpassword', //mysql database password
    database: 'agile' //mysql database name
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//end body-parser configuration

//create app server
var server = app.listen(3000, function () { });

//rest api to get all procedures
app.get('/', function (req, res) {
    res.end('Use /procedures?query=ADD_YOUR_SEARCH_TERM');
});

//rest api to get all procedures
app.get('/procedures', function (req, res) {
    var query = req.query.query;
    var zip = req.query.zip;
    connection.query('select * from ProvidersIncreasing where DRGDefinition LIKE \'%' + query + '%\'' + '', function (error, results, fields) {

        // if (error) throw error;
        var lat, lon

        let rawdata = fs.readFileSync('./src/zips.json');
        let zipCodes = JSON.parse(rawdata);

        zipCodes.coordinates.forEach(function (item, index) {
            if (item.zip === zip) {
                lat = item.lat
                lon = item.lon
            }
        });

        results.forEach(function (item, index) {
            item.distance = distance(item.Latitude, item.longitude, lat, lon);
        });

        res.end(JSON.stringify(results));
    });
});

//rest api to get all procedures
app.get('/proceduresminmax', function (req, res) {
    var query = req.query.query;
    var state = req.query.state;
    var min = req.query.min;
    var max = req.query.max;
    connection.query('select * from ProvidersIncreasing where DRGDefinition LIKE \'%' + query + '%\'' + ' AND State=\'' + state + ' AND TotalPayments BETWEEN ' + min + ' AND ' + max + ' LIMIT 0,50', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//check to get procedure ID
app.get('/proceduresbyidminmax', function (req, res) {
    var id = req.query.id;
    var state = req.query.state;
    var min = req.query.min;
    var max = req.query.max;
    connection.query('select * from ProvidersIncreasing where GPDID=' + id + ' AND State=\'' + state +  '\' AND TotalPayments BETWEEN ' + min + ' AND ' + max + ' LIMIT 0,50', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});


//check to get procedure ID
app.get('/proceduresbyid', function (req, res) {
    var id = req.query.id;
    var state = req.query.state;
    connection.query('select * from ProvidersIncreasing where GPDID=' + id + ' AND State=\'' + state + '\' LIMIT 0,50', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to get all payments
app.get('/payments', function (req, res) {
    connection.query('select * from Payments WHERE ID BETWEEN 1 AND 100', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to get locations
app.get('/locations', function (req, res) {
    var city = req.query.city;
    connection.query('select * from Cities WHERE CityName=\'' + city + '\'', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to get all providers
app.get('/providers', function (req, res) {
    connection.query('select * from Providers', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;

        return dist;
    }
}

// EXAMPLES BELOW

/*
//rest api to get all customers
app.get('/customer', function (req, res) {
   connection.query('select * from customer', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to get a single customer data
app.get('/customer/:id', function (req, res) {
   connection.query('select * from customers where Id=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to create a new customer record into mysql database
app.post('/customer', function (req, res) {
   var params  = req.body;
   console.log(params);
   connection.query('INSERT INTO customer SET ?', params, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to update record into mysql database
app.put('/customer', function (req, res) {
   connection.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to delete record from mysql database
app.delete('/customer', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
  });
});

*/