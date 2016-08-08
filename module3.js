module.exports = {
  modulesOneAndTwo : modulesOneAndTwo,
  lastOutput : lastOutput
}

var module1 = require('./module1.js');
var module2 = require('./module2.js');

function modulesOneAndTwo(){
  var getRandomInt = module1.getRandomInt(100, 1000000);
  var numberToCurrency = module2.convertToCurrency(getRandomInt);
  return numberToCurrency;
}

function lastOutput(){
  return 'Account balance: \n' + modulesOneAndTwo();
}
