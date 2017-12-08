// znl dec 998 if hpz > 4049
const fs = require('fs');
var hash = {};    

var input = fs.readFileSync('./input.txt', 'utf8')
              .split('\n')
              .map(row => {return row.split(' ')})
              
input.forEach(row => hash[row[0]] = 0)  


let Row = {
  REGISTER: 0,
  INSTRUCTION: 1,
  INSTRUCTION_VALUE: 2,
  COMPARING_REGISTER: 4,
  OPERATOR: 5,
  VALUE: 6
}

const checkValue = (comparingRegister, operator, value) => {
  switch(operator) {
    case '>' :
      return hash[comparingRegister] > Number(value);
    case '<' :
      return hash[comparingRegister] < Number(value);
    case '<=' :
      return hash[comparingRegister] <= Number(value);
    case '>=' :
      return hash[comparingRegister] >= Number(value);
    case '==' :
      return hash[comparingRegister] == Number(value)
    case '!=' :
      return hash[comparingRegister] != Number(value);
  }
}

const modifyRegister = (register, instruction, instructionValue) => {
  switch(instruction) {
    case 'inc' :
      hash[register] = hash[register] + Number(instructionValue);
      return hash[register];
    case 'dec' :
      hash[register] = hash[register] - Number(instructionValue);
      return hash[register];
  }
}

input.forEach((row) => {
  if(checkValue(row[Row.COMPARING_REGISTER], row[Row.OPERATOR], row[Row.VALUE])) {
  modifyRegister(row[Row.REGISTER], row[Row.INSTRUCTION], row[Row.INSTRUCTION_VALUE]);
  }
})


console.log(hash);              