//module.js
exports.이름 = function(매개변수){}
//main.js
var module = require(./module.js);
console.log('%d',module.이름());

//-----------------------------------------------
//module.js
exports.abs = function (number) {
  if(0 < number) return number;
  else return -number;
}
exporuts.circleArea = function(radius) {
  return radius * radius * Math.PI;
}
//main.js
var module = require('./module.js');
console.log('%d',module.abs(-273));
console.log('%d',module.circleArea(3));

//결과
Starting child process with 'node main.js'
273
28.274333882308138
Program node main.js exited with code 0
