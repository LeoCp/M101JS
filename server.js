var express = require('express')
,app = express();

app.get('/', function (req,res) {
  res.send("Home page");
});

// NOT FOUD
app.use(function (req,res) {
  res.sendStatus(404);
});


var server = app.listen(3000, function (argument) {
  var port = server.address().port;
  console.log('Express server listening on port %s', port);
});
