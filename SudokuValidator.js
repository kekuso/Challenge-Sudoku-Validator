/*  SudokuValidator(sudoku)
 *
 *  @param sudoku                       a multidimensional array containing the sudoku puzzle
 *
 *  @public property sudoku             the sudoku grid
 *
 *  @public method validate(num)        num is the perfect squared value of an integer
                                        for example: 9(result of 3^3) & 4 (2^2).
 */

exports.SudokuValidator = SudokuValidator;

function SudokuValidator(sudoku){
  this.sudoku = sudoku;
}

SudokuValidator.prototype.validate = function(num){
  // Do work here
  var sumRow = 0;
  var sumColumn = 0;
  var sumOfGrid = 0;
  var rowNumber = 0;
  var columnNumber = 0;
  var gridNumber = 0;
  var i = 0;
  // CHECK ROWS
  while(rowNumber < num) {
    for (i = 0; i < num; i++) {
      sumRow+= this.sudoku[0][i];
    }
    // sum of row should be (n^2 + n)/2
    if(sumRow !== ((num * num + num) / 2)) {
      console.log("Row sum = " + sumRow);
      return false;
    }
    else {
      console.log("Row sum = " + sumRow);
      sumRow = 0;
      rowNumber++;
      // check next row
    }
  }

  // CHECK COLUMNS
  while(columnNumber < num) {
    // sum individual columns
    for (i = 0; i < num; i++) {
      sumColumn+= this.sudoku[i][0];
    }
    // sum of column should be (n^2 + n)/2
    if(sumColumn !== ((num * num + num) / 2)) {
      console.log("Column sum = " + sumColumn);
      return false;
    }
    else {
      console.log("Column sum = " + sumColumn);
      sumColumn = 0;
      columnNumber++;
      // check next column
    }
  }


  // CHECK GRIDS
  while(gridNumber < num) {
    for(i = 0; i < Math.sqrt(num); i++) {
      for(j = 0; j < Math.sqrt(num); j++) {
        sumOfGrid+= this.sudoku[i][j];
      }
    }
    if(sumOfGrid !== ((num * num + num) / 2)) {
      return false;
    }
    else {
      console.log("Sum of Grid = " + sumOfGrid);
      sumOfGrid = 0;
      gridNumber++;
    }
  }
  return true;
};