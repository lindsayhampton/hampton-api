var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req,res){
  res.json({ hello: 'world' });
});

app.get('/api/v1', function(req,res){
  res.json({hello: 'world'});
});

app.listen(port, function() {
  console.log('our server is running on port 3000');
});
