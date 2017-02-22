// board is an array of rows, where each row is an array.
// i.e. board is a 2-d array, and board[row][col] is the cell
// with position (row, col)
var emptyCell = null;

var isEmptyCell = function(cell) {
  return cell === emptyCell;
};

var isCompletelyFilled = function(board) {
  return board.every(function(row) {
    return row.every(function(cell) {
      return !isEmptyCell(cell);
    });
  });
};

var isWon = function(board) {
  var checkRange = range(0, board.length);
  var diaCheckRange = [0, board.length - 1];

  var rowWin = checkRange.some(function(row) {
    return checkRange.every(function(col) {
      return (!isEmptyCell(board[row][0])) && (board[row][col] === board[row][0]);
    });
  });

  var colWin = checkRange.some(function(col) {
    return checkRange.every(function(row) {
      return (!isEmptyCell(board[0][col])) && (board[row][col] === board[0][col]);
    });
  });

  var diaWin = diaCheckRange.some(function(leftElemRow) {
    return checkRange.every(function(idx) {
      return (!isEmptyCell(board[leftElemRow][0])) &&
        board[Math.abs(leftElemRow - idx)][idx] === board[leftElemRow][0];
    });
  });

  return rowWin || colWin || diaWin;
};
