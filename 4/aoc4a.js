const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8')
              .split('\n')
              .map(row => {
                return row
                .split(' ')
              })

let sum = 0;

input.forEach((row) => {
  sum = (new Set(row)).size === row.length ? sum + 1 : sum = sum + 0;
})

console.log(sum);