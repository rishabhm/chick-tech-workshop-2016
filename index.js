var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello world!');
});

app.listen(3000, function() {
  console.log('Node app is running on port 3000');
});


