var express = require('express'),
		path = require('path'),
		app = express();

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get('/getstarted', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});
app.get('/create', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});
app.get('/retrieve', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});
app.get('/update', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});
app.get('/delete', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});
app.get('/addrelations', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});
app.get('/removerelations', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});


app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;