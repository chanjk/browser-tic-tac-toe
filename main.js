var createUIBoard = function(size) {
  var createTile = function(row, col) {
    var $tile = $('<div>').addClass('tile');
    var $wrapper = $('<div>').addClass('wrapper');
    var $wrapperInner = $('<div>').addClass('wrapper-inner');
    var $content = $('<div>').addClass('content').data('row', row).data('col', col);

    return $tile.append($wrapper.append($wrapperInner.append($content)));
  }

  var $board = $('<div>').addClass('board');

  for (var r = 0; r < size; r++) {
    for (var c = 0; c < size; c++) {
      $board.append(createTile(r, c));
    }
  }

  return $board;
}

var createDataBoard = function(size) {
  return Array(size).fill('').map(function() {
    return Array(size).fill('');
  });
}

var size = 3;
var board = createDataBoard(size);
var $board = createUIBoard(size);
var playerTokens = ['X', 'O'];

$('body').append($board);

$board.on('click', '.content', function(event) {
  var content = event.target;
  var row = $(content).data('row');
  var col = $(content).data('col');
  var currentToken = playerTokens[0];

  if (content.textContent === '') {
    content.textContent = currentToken;
    board[row][col] = currentToken;

    if (isWinningMove(board, row, col)) {
      document.body.style.backgroundColor = 'green';
    } else if (isCompletelyFilled(board)) {
      document.body.style.backgroundColor = 'red';
    }

    playerTokens.reverse();
  }
});
