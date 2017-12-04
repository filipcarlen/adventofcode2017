const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8')
              .split('\n')
              .map(row => {
                return row
                .split(' ')
              })

let sum = 0;

input.forEach((row) => {
  var sortedRow = row.map((word) => {return ([...word].sort((a, b) => a.localeCompare(b))).join('')})
  sum = (new Set(sortedRow)).size === sortedRow.length ? sum + 1 : sum = sum + 0;
})

console.log(sum)