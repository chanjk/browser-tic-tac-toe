var range = function(from, until, by) {
  if ((by === 0) || (from > until && by > 0) || (from < until && by < 0)) {
    return [];
  }

  if (by === undefined) {
    by = 1;
  }

  var numElems = Math.ceil((until - from) / by);

  return Array(numElems).fill('').map(function(elem, index) {
    return from + index * by;
  });
};

var create$Board = function(size) {
  var createTile = function(row, col) {
    var tileWidth = (0.433 * size + 106.89 / size - 7.6) + '%';
    var fontSize = (1349.8 / size - 68.6) + '%';

    var $tile = $('<div>').addClass('tile').width(tileWidth).css('padding-top', tileWidth);
    var $wrapper = $('<div>').addClass('wrapper');
    var $wrapperInner = $('<div>').addClass('wrapper-inner');
    var $content = $('<div>').addClass('content').data('row', row).data('col', col).css('font-size', fontSize);

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
  return Array(size).fill(emptyCell).map(function() {
    return Array(size).fill(emptyCell);
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
    board.forEach(function(row) {
      row.fill(emptyCell);
    });
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
