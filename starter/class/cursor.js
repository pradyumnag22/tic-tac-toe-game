const Screen = require("./screen");
const ttt = require("./ttt")

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor = () =>{
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor = () =>{
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up = () => {
    // Move cursor up
    this.resetBackgroundColor()
    if(this.row <= 0) {
      this.row = 0
      return this.row
    }
    this.row--
    this.setBackgroundColor()
    Screen.render()
    return this.row
  }

  down =() => {
    // Move cursor down
    this.resetBackgroundColor()
    if(this.row >= 2) {
      this.row = 2
      return this.row
    }
    this.row++
    this.setBackgroundColor()
    Screen.render()
    return this.row
  }

  left = () =>{
    // Move cursor left
    this.resetBackgroundColor()
    if(this.col <= 0) {
      this.col = 0
      return this.col
    }
    this.col--
    this.setBackgroundColor()
    Screen.render()
    return this.col
  }

  right = () =>{
    // Move cursor right
    this.resetBackgroundColor()
    if(this.col >= 2) {
      this.col = 2
      return this.col
    }
    this.col++
    this.setBackgroundColor()
    Screen.render()
    return this.col
  }

}


module.exports = Cursor;
