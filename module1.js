module.exports = {
  getRandomInt : getRandomInt
}
function getRandomInt(min, max) {
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}
