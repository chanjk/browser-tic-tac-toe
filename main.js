// Setup
var size = 3;
var board = createBoard(size);
var $board = create$Board(size);
var $result = $('.result');
var $resetBtn = $('.reset-btn');
var playerTokens = ['X', 'O'];
var isGameOver = function() {
  return isWon(board) || isCompletelyFilled(board);
};

$('.board-container').append($board);

// Events
$board.on('click', '.content', function(event) {
  if (!isGameOver() && event.target.textContent === '') {
    var row = $(event.target).data('row');
    var col = $(event.target).data('col');
    var currentToken = playerTokens[0];

    event.target.textContent = currentToken;
    board[row][col] = currentToken;

    if (isWon(board)) {
      displayWinner($result, currentToken);
    } else if (isCompletelyFilled(board)) {
      displayDraw($result);
    }

    playerTokens.reverse();
  }
});

$resetBtn.on('click', function() {
  reset(board, $board, $result);
  playerTokens = ['X', 'O'];
});
