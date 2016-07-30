var express = require('express');
var body_parser = require('body-parser');
var app = express();
var port = 3000;
//asd

app.get('/api/v1', function(req,res){
  res.json({hello: "world"});
})

app.listen(port, function() {
  console.log('our server is running on port: ', port);
});
