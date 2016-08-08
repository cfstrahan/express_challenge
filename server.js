// var express = require('express');
// var app = express();
// var index = require('./app.js')
// var module3 = require('./module3.js');
//
//
// console.log(module3.lastOutput());
//
//
// var server = app.listen(process.env.PORT || 3000, function(){
//   var port = server.address().port;
//   console.log('Listening on port', port);
// });

var express = require('express');
var path = require('path');

var app = express();

var port = 3000;

var balanceObject = {};

// var mod1 = require('./one');
// var mod2 = require('./two');
var mod3 = require('./module3');


// app.get('/', function(request, response){
//   response.send('This is a message');
// })
app.listen(port, function(){
  console.log('Server\'s up! \n Ctrl+C to Stop');
});

app.get('/balance', function(request, response){
  balanceObject.header = mod3.accountBalance();
  balanceObject.message = mod3.newRandomNumber();

  // console.log(balanceObject);
  response.send(balanceObject);
});

app.use(express.static('public'));


// $.ajax()
