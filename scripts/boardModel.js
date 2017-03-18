var boardModel = function(size) {
  var that = {}
  var emptyCell = null;

  that.board = Array(size).fill().map(function() {
    return Array(size).fill(emptyCell);
  });

  that.isEmptyCell = function(cell) {
    return cell === emptyCell;
  };

  that.isCompletelyFilled = function() {
    return that.board.every(function(row) {
      return !row.some(that.isEmptyCell);
    });
  };

  that.isWon = function() {
    var rowWin = that.board.some(function(row) {
      return row.every(function(cell) {
        return !that.isEmptyCell(cell) && (cell === row[0]);
      });
    });

    var colWin = that.board[0].some(function(cell, index) {
      return that.board.every(function(row) {
        return !that.isEmptyCell(row[index]) && (row[index] === cell);
      });
    });

    var diaWin = [0, size - 1].some(function(offset) {
      return that.board.every(function(row, index) {
        var cell = row[Math.abs(offset - index)];
        return !that.isEmptyCell(cell) && (cell == that.board[0][offset]);
      });
    });

    return rowWin || colWin || diaWin;
  };

  that.update = function(row, col, newElem) {
    that.board[row][col] = newElem;
    return that;
  };

  return that;
};
