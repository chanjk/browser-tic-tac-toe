var displayWinner = function(textElement, text) {
  textElement.text(text + ' Wins!');
  textElement.show();
};

var displayDraw = function(textElement) {
  textElement.text('It\'s a Draw!');
  textElement.show();
};

var updateDisplayedWinCount = function(textElement, winCount) {
  textElement.text(winCount);
}

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
    resultTextElement.hide();
  };

  resetBoard();
  reset$Board();
  resetResultTextElement();
};
