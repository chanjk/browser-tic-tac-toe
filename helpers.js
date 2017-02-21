var create$Board = function(size) {
  var createTile = function(row, col) {
    var $tile = $('<div>').addClass('tile');
    var $wrapper = $('<div>').addClass('wrapper');
    var $wrapperInner = $('<div>').addClass('wrapper-inner');
    var $content = $('<div>').addClass('content').data('row', row).data('col', col);

    return $tile.append($wrapper.append($wrapperInner.append($content)));
  };

  var $board = $('<div>').addClass('board');

  for (var r = 0; r < size; r++) {
    var $row = $('<div>');

    for (var c = 0; c < size; c++) {
      $row.append(createTile(r,c));
    }

    $board.append($row);
  }

  return $board;
};

var createBoard = function(size) {
  return Array(size).fill('').map(function() {
    return Array(size).fill('');
  });
};

var displayWinner = function(textElement, winnerToken) {
  textElement.text(winnerToken + ' Wins!');
};

var displayDraw = function(textElement) {
  textElement.text('It\'s a Draw!');
};

var reset = function(board, $board, resultTextElement) {
  var resetBoard = function() {
    for (var r = 0; r < board.length; r++) {
      for (var c = 0; c < board[r].length; c++) {
        board[r][c] = '';
      }
    }
  };

  var reset$Board = function() {
    $board.find('.content').text('');
  };

  var resetResultTextElement = function() {
    resultTextElement.text('');
  };

  resetBoard();
  reset$Board();
  resetResultTextElement();
};
