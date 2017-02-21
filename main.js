var size = 3;
var board = createBoard(size);
var $board = create$Board(size);
var $result = $('.result');
var $resetBtn = $('.reset-btn');
var playerTokens = ['X', 'O'];
var isGameOver = false;

$('.board-container').append($board);

$board.on('click', '.content', function(event) {
  if (!isGameOver && event.target.textContent === '') {
    var row = $(event.target).data('row');
    var col = $(event.target).data('col');
    var currentToken = playerTokens[0];

    event.target.textContent = currentToken;
    board[row][col] = currentToken;

    if (isWinningMove(board, row, col)) {
      isGameOver = true;
      displayWinner($result, currentToken);
    } else if (isCompletelyFilled(board)) {
      isGameOver = true;
      displayDraw($result);
    }

    playerTokens.reverse();
  }
});
// TODO: Improve this!
$resetBtn.on('click', function() {
  reset(board, $board, $result);
  isGameOver = false;
  playerTokens = ['X', 'O'];
})
