const input = '14	0	15	12	11	11	3	5	1	6	8	4	9	1	8	4'
const numbers = input.split('\t').map((val) => Number(val));

var map = [];
var size = 0;

function spread(index, max){
  if(max === 0){
    return;
  } else {
    numbers[index] = numbers[index] + 1;
    var newIndex = (index+1) % numbers.length;
    spread(newIndex,(max-1));
  }
}

while(!map[numbers.join()]){
  size = size + 1;
  map[numbers.join()] = size;
  var max = Math.max(...numbers);
  var index = numbers.indexOf(max);
  numbers[index] = 0;
  var startIndex = (index+1)%numbers.length;
  spread(startIndex, max);
}

console.log(size-map[numbers.join()]+1);