var express = require('express');
var app = express();

// Referencing the directories where static files are located
app.use(express.static('../frontend'));

// Defining the basic routes for the home route
app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.post('/', function(req, res){
	res.send('(POST - Home)');
});

app.put('/', function(req, res){
	res.send('PUT - Home');
});

app.delete('/', function(req, res){
	res.send('DELETE - Home');
});

app.listen(3000, function(){
	console.log("Server up! Listening on port 3000!");
});

// BASIC HTTP NODE.JS SERVER EXAMPLE - Only for reference
// var http = require('http');
// var server = http.createServer(function(req, res){
// 	res.writeHead(200);
// 	res.end('Hello HTTP');
// });
// server.listen(3000);