const input = 265149;
const matrixSize = 1001; // odd due to central is 501.
const center = 501;
let row = center;
let column = center;
let sideSize = 1;


let Direction = {
  UP: 0,
  LEFT: 1,
  DOWN: 2,
  RIGHT: 3,
}


const matrix = Array(matrixSize).fill().map(() => Array(matrixSize).fill());

function getSurroundingSum(row, column) {

  var E,NE,N,NW,W,SW,S,SE;

  E = matrix[column+1][row] ? matrix[column+1][row] : 0;
  NE = matrix[column+1][row-1] ? matrix[column+1][row-1] : 0;
  N = matrix[column][row-1] ? matrix[column][row-1] : 0;
  NW = matrix[column-1][row-1] ? matrix[column-1][row-1] : 0;
  W = matrix[column - 1][row] ? matrix[column - 1][row] : 0;
  SW = matrix[column-1][row+1] ? matrix[column-1][row+1] : 0;
  S = matrix[column][row+1] ? matrix[column][row+1] : 0;
  SE = matrix[column+1][row+1] ? matrix[column+1][row+1]: 0;

  return E + N + NE  + NW + W + SW + S + SE;
} 


//INITIALIZE

matrix[column][row] = 1;
column = column + 1;
sideSize = 3;
let currentDirection = Direction.UP;


while(input > getSurroundingSum(row, column)){
  console.log(getSurroundingSum(row,column));
  matrix[column][row] = getSurroundingSum(row, column);
  
  switch(currentDirection){
    case 0: 
      var distToCenter = center-row;
      var possibleEnd = row + sideSize;
      if(row+distToCenter == (possibleEnd-distToCenter-1)){
        currentDirection = Direction.LEFT;
        column = column - 1;
      } else {
        row = row - 1
      }
      break;
    case 1: 
      var distToCenter = center-column;
      var possibleEnd = column + sideSize;
      if(column+distToCenter == (possibleEnd-distToCenter-1)){
        currentDirection = Direction.DOWN;
        row = row + 1
      } else {
        column = column - 1;
      } 
      break;
    case 2: 
      var distToCenter = row-center;
      var possibleEnd = row - sideSize;
      if(row-distToCenter == (possibleEnd+distToCenter+1)){
        currentDirection = Direction.RIGHT;
        column = column + 1;
      } else {
        row = row + 1;
      }
      break;
    case 3: 
      var distToCenter = column-center;
      var possibleEnd = column - sideSize;
      if(column-distToCenter < (possibleEnd+distToCenter+1)){
        currentDirection = Direction.UP;
        sideSize = sideSize + 2;
        row = row - 1;
      } else {
        column = column + 1; 
      }
      break;
  }
}

console.log(getSurroundingSum(row, column));




