// board is an array of rows, where each row is an array.
// i.e. board is a 2-d array, and board[row][col] is the element
// with position (row, col)

var isCompletelyFilled = function(board) {
  return board.every(function(row) {
    return row.every(function(elem) {
      return elem !== '';
    });
  });
};

var isWinningMove = function(board, row, col) {
  var checkRange = range(0, size, 1);

  var rowWin = checkRange.every(function(idx) {
    return board[row][idx] === board[row][col];
  });

  var colWin = checkRange.every(function(idx) {
    return board[idx][col] === board[row][col];
  });

  var diaWin =
    checkRange.every(function(idx) {
      return board[idx][idx] === board[row][col];
    }) ||
    checkRange.every(function(idx) {
      return board[idx][size - 1 - idx] === board[row][col];
    });

  return rowWin || colWin || diaWin;
}

var range = function(from, until, by) {
  var array = [];

  for (var i = from; i < until; i += by) {
    array.push(i);
  }

  return array;
}
