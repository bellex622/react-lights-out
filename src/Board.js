import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let rowIdx = 0; rowIdx < nrows; rowIdx++) {
      const row = [];
      for (let colIdx = 0; colIdx < ncols; colIdx++) {
        let cellVal = Math.random();
        row.push(cellVal < chanceLightStartsOn);
      }

      initialBoard.push(row);
    }

    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return board.flat().every(cell => cell === false);
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const boardCopy = oldBoard.slice();

      // TODO: in the copy, flip this cell and the cells around it
      const cellsToChange = [
        { y, x },
        { y: y + 1, x },
        { y: y - 1, x },
        { y, x: x + 1 },
        { y, x: x - 1 }
      ];

      //flip all 5 cells within board copy
      for (const cell of cellsToChange) {
        flipCell(cell.y, cell.x, boardCopy);
      }

      // TODO: return the copy
      return boardCopy;
    });
  }

  function makeTableBoard(){

    let html;

    for (row of board){

    }
    return (
    <table>
      <tr>{board[0].map(cell => <Cell flipCellsAroundMe={flipCellsAround} isLit={cell}/>)}</tr>
    </table>
    )
  }
  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO
}

export default Board;
