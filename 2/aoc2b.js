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
let match = false;

input.forEach((row) => {  
  for(let i = 0; i<row.length; i++){
    for(let j = (i+1); j<row.length; j++){
      match = false;
      if(row[i]%row[j] === 0 || row[j]%row[i] === 0){
        console.log(row[i] + " " + row[j])
        const div = row[i] > row[j] ? (row[i]/row[j]) : (row[j]/row[i]);
        console.log(div);
        sum = sum + div;
        match = true;
        break;
      }
    }
    if(match){
      break;
    }
  }
})

console.log(sum);