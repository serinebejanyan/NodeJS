var http = require('http'),
    express = require('express'),
    cake_module = require('./models/cake'),
    mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'

});

app.get('/hello', function(req, res, next){
    connection.connect();

    connection.query('SELECT * FROM Cake', function(err, rows, fields){
        if(err) throw err;
        var values = "";
        for (i = 0; i < rows.length; i++)
        {
            var cake_array = new Array();
            var cake = new  cake_module.cake();
            values = rows[i];
            cake.set_brand(values.brand);
            cake.set_name(values.name);
            cake.set_price(values.price);
            cake.set_type(values.type);
            cake.set_id(values.ID);
            cake_array.push(cake);

        }
        res.send(cake_array);
    });
    connection.end();
});
app.get('/add', function(req, res, next) {
    connection.connect();
    var name = 'rqwsnikers';
    var brand = 'defaShant';
    var price = 300;
    var weight = 4500;

    var post  = {
        name: name,
        brand: brand,
        type:'ttt4',
        price: price,
        weight:weight
    };

//    var query_stirng = 'Insert into Cake Values("'+name+'","gdet",'+price+','+price+')';
  //  console.log(query_stirng);
    connection.query('Insert into Cake SET ?',post,function(err, result) {

        if (err) {
             res.send(err);
        } else {
            res.send(result);
         };
//    console.log("dfsgsag");
//    connection.end();
    });
    connection.end();
});

http.createServer(app).listen(3001, function(){
    console.log("Server started!");
});
