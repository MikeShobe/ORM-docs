var express = require('express'),
		path = require('path'),
		app = express();

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get('/documentation', function (req, res){
 res.sendFile(path.join(__dirname, '/./client/index.html'));
});

app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;