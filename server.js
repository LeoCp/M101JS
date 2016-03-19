var express = require('express')
,app = express()
,engines = require('consolidate');

app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views',__dirname + '/views');

app.get('/', function (req,res) {
  res.render('login',{'name':'Login'});
});

// NOT FOUD
app.use(function (req,res) {
  res.sendStatus(404);
});


var server = app.listen(3000, function (argument) {
  var port = server.address().port;
  console.log('Express server listening on port %s', port);
});
