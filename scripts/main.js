// Setup
var size = 3;
var board = createBoard(size);
var $board = create$Board(size);
var $result = $('.result');
var $resetBtn = $('.reset-btn');
var playerOne = { name: 'Player 1', token: 'X', wins: 0, $view: $('.player-one') }
var playerTwo = { name: 'Player 2', token: 'O', wins: 0, $view: $('.player-two') }
var currentPlayer = playerOne;
var isGameOver = function() {
  return isWon(board) || isCompletelyFilled(board);
};

$('.board-container').append($board);

// Events
$board.on('click', '.content', function(event) {
  if (!isGameOver() && event.target.textContent === '') {
    var row = $(event.target).data('row');
    var col = $(event.target).data('col');

    event.target.textContent = currentPlayer.token;
    board[row][col] = currentPlayer.token;

    if (isWon(board)) {
      currentPlayer.wins++;
      displayWinner($result, currentPlayer.name);
      updateDisplayedWinCount(currentPlayer.$view.find('.win-count'), currentPlayer.wins);
    } else if (isCompletelyFilled(board)) {
      displayDraw($result);
    }

    currentPlayer = (currentPlayer === playerOne) ? playerTwo : playerOne;
  }
});

$resetBtn.on('click', function() {
  reset(board, $board, $result);
  currentPlayer = playerOne;
});
