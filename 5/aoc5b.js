const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8').split('\n').map(Number);

var i = 0;
var jumps = 0;

while(i < input.length){
  jumps = jumps + 1;
  var steps = input[i];
  var next = i + steps;
  if(isNumber(next)) {
    if(input[i] >= 3){
      input[i] = input[i]-1;
    } else {
      input[i] = input[i]+1;
    }
  } 
  i = i + steps;
}

function isNumber(num){
  return !isNaN(parseFloat(num) && isFinite(num))
}

console.log(jumps);
