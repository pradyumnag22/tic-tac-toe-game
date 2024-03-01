const Screen = require("./screen");
const Cursor = require("./cursor");
const Command = require("./command");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('w', 'move up', this.cursor.up);
    Screen.addCommand('s', 'move down', this.cursor.down);
    Screen.addCommand('d', 'move right', this.cursor.right);
    Screen.addCommand('a', 'move left', this.cursor.left);
    Screen.addCommand('o', 'place move',this.moveO);
    Screen.addCommand('x', 'place move',this.moveX);
    Screen.addCommand('r', 'show grid',this.show);
    Screen.render();
  }

  moveO =() =>{
    if(this.grid[this.cursor.row][this.cursor.col] === ' ' ) {
      Screen.setGrid(this.cursor.row,this.cursor.col,'O')
      this.grid[this.cursor.row][this.cursor.col] = 'O'
      Screen.render()
    } else console.log("Cann't overwrite")
    if((TTT.checkWin(this.grid) === 'T')|| (TTT.checkWin(this.grid) === 'X')||(TTT.checkWin(this.grid) === 'O')){
      let winner = TTT.checkWin(this.grid)
      TTT.endGame(winner)
    }
  }

  moveX =() =>{
    if(this.grid[this.cursor.row][this.cursor.col] === ' ') {
      Screen.setGrid(this.cursor.row,this.cursor.col,'X')
      this.grid[this.cursor.row][this.cursor.col] = 'X'
      Screen.render()
    }else console.log("Cann't overwrite")
    TTT.checkWin(this.grid)
  }

  show =() =>{
     console.log(this.grid)
  }

  static checkWin(grid) {
    let value = 'T';
    for(let i=0; i<grid.length; i++) {
      if((grid[i][0] === grid[i][1]) && (grid[i][0] === grid[i][2])) {
        if(grid[i][0] !== ' ') return grid[i][0]
      }
    }
    for(let i=0; i<grid.length; i++) {
      if((grid[0][i] === grid[1][i]) && (grid[0][i] === grid[2][i]) ) {
        if(grid[0][i] !== ' ') return grid[0][i]
      }
    }
    if((grid[0][0] === grid[1][1]) && (grid[0][0] === grid[2][2])) {
      if(grid[0][0] !== ' ') return grid[0][0]
    }
    else if((grid[0][2] === grid[1][1]) && (grid[0][2] === grid[2][0])) {
      if(grid[0][2] !== ' ') return grid[0][2]
    }
    for(let i=0; i<grid.length; i++){
      for(let j =0; j<grid[i].length; j++) {
        if(grid[i][j] === ' ') return false
      }
    }
    return value
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
