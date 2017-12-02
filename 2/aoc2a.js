const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8')
              .split('\n')
              .map(row => {
                return row
                .split('\t')
                .map((num) => {
                  return Number(num)})
              })

let sum = 0;

input.forEach((row) => {
  sum = sum + (Math.max(...row) - Math.min(...row))
})

console.log(sum);


