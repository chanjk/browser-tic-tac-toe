var board = function(size) {
  var that = {}
  var emptyCell = null;

  var isEmptyCell = function(cell) {
    return cell === emptyCell;
  };

  var isRowWin = function(state) {
    return state.some(function(row) {
      return row.every(function(cell) {
        return !isEmptyCell(cell) && (cell === row[0]);
      });
    });
  };

  var isColWin = function(state) {
    return state[0].some(function(cell, index) {
      return state.every(function(row) {
        return !isEmptyCell(row[index]) && (row[index] === cell);
      });
    });
  };

  var isDiaWin = function(state) {
    return [0, state.length - 1].some(function(offset) {
      return state.every(function(row, index) {
        var cell = row[Math.abs(offset - index)];
        return !isEmptyCell(cell) && (cell === state[0][offset]);
      });
    });
  };

  that.state = Array(size).fill().map(function() {
    return Array(size).fill(emptyCell);
  });

  that.isCompletelyFilled = function() {
    return that.state.every(function(row) {
      return !row.some(isEmptyCell);
    });
  };

  that.isWon = function() {
    return [isRowWin, isColWin, isDiaWin].some(function(cond) {
      return cond(that.state);
    });
  };

  that.update = function(rowIndex, colIndex, elem) {
    var newBoard = board(that.state.length);

    that.state.forEach(function(row, rowIndex) {
      row.forEach(function(col, colIndex) {
        newBoard.state[rowIndex][colIndex] = col;
      })
    })

    newBoard.state[rowIndex][colIndex] = elem;
    
    return newBoard;
  };

  return that;
};

module.exports = board;
